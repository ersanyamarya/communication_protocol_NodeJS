#include <stdio.h>
#include <string.h>
#include <curl/curl.h>

int main(void)
{
    URL *curl;
    CURLcode res;
    static const char *postthis = "api_key=32UDVP8Z0HUW11YK&field1=200";
    struct curl_slist *chunk = NULL;
    curl = curl_easy_init();
    if (curl)
    {
        chunk = curl_slist_append(chunk, "Content-Type:application/x-www-form-urlencoded");
        curl_easy_setopt(curl, CURLOPT_URL, "https://api.thingspeak.com/update.json");
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, chunk);
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, postthis);
        curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, (long)strlen(postthis));
        res = curl_easy_perform(curl);
        if (res != CURLE_OK)
            fprintf(stderr, "curl_easy_perform() failed: %s\n",
                    curl_easy_strerror(res));
        curl_easy_cleanup(curl);
        curl_slist_free_all(chunk);
    }
    return 0;
}