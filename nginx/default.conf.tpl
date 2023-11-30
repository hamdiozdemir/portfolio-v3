upstream backend {
    server backend:8000;
}

server {
    listen 80;

    location /api/ {
        proxy_pass http://backend;
    }

    location /static {
        alias /vol/static;
    }

    location / {
        root /var/www/frontend;
        try_files $uri $uri/ /index.html;
    }



}