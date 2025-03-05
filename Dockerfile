FROM nginx
COPY app-assets /usr/share/nginx/html/app-assets
COPY assets /usr/share/nginx/html/assets
COPY css /usr/share/nginx/html/css
COPY images /usr/share/nginx/html/images
COPY js /usr/share/nginx/html/js
COPY *.html /usr/share/nginx/html
COPY nginx.conf /etc/nginx
COPY default.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]