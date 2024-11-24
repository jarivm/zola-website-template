# Static Website Starting Kit

I use this as a starting kit for websites I build.

## Testing the CMS

Make the changes below to `static/admin/config.yml`.

```yml
backend:
    name: proxy
    proxy_url: http://localhost:8081/api/v1
    branch: main
```

## TODO

-   Finalize basic design.
