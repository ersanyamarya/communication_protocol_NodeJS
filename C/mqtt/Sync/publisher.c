#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <signal.h>
#include "/usr/local/include/MQTTClient.h"

#define ADDRESS "tcp://localhost:1883"
#define CLIENTID "Client"
#define TOPIC "Example"
#define PAYLOAD "Hello World!"
#define QOS 1
#define TIMEOUT 10000L
char a = 'a', eater;
MQTTClient client;
void handler_for_init(int signo)
{
    MQTTClient_disconnect(client, 10000);
    MQTTClient_destroy(&client);
    printf("\nTerminated\n");
    exit(0);
}
int main(int argc, char *argv[])
{

    MQTTClient_connectOptions conn_opts = MQTTClient_connectOptions_initializer;
    MQTTClient_message pubmsg = MQTTClient_message_initializer;
    MQTTClient_deliveryToken token;
    int rc;

    MQTTClient_create(&client, ADDRESS, CLIENTID,
                      MQTTCLIENT_PERSISTENCE_NONE, NULL);
    conn_opts.keepAliveInterval = 20;
    conn_opts.cleansession = 1;

    if ((rc = MQTTClient_connect(client, &conn_opts)) != MQTTCLIENT_SUCCESS)
    {
        printf("Failed to connect, return code %d\n", rc);
        exit(EXIT_FAILURE);
    }

    pubmsg.payload = PAYLOAD;
    pubmsg.payloadlen = strlen(PAYLOAD);
    pubmsg.qos = QOS;
    pubmsg.retained = 0;
    signal(SIGINT, handler_for_init);
    while (1)
    {

        MQTTClient_publishMessage(client, TOPIC, &pubmsg, &token);
        printf("Waiting for up to %d seconds for publication of %s\non topic %s for client with ClientID: %s\n", (int)(TIMEOUT / 1000), PAYLOAD, TOPIC, CLIENTID);

        rc = MQTTClient_waitForCompletion(client, token, TIMEOUT);
        printf("Message with delivery token %d delivered\n", token);
        scanf("%c", &eater);
        scanf("%c", &eater);
    }

    return rc;
}