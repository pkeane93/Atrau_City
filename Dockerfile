FROM nginx:alpine

# Remove default Nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy your folders
COPY views /usr/share/nginx/html/views
COPY views/shared /usr/share/nginx/html/shared
COPY javascript /usr/share/nginx/html/javascript
COPY assets /usr/share/nginx/html/assets
COPY images /usr/share/nginx/html/images
COPY styles.css /usr/share/nginx/html/styles.css

# Fix permissions
RUN chmod -R 755 /usr/share/nginx/html

# Nginx config
RUN echo 'server { \
    listen 80; \
    root /usr/share/nginx/html; \
    index views/index.html; \

    location /views/ { \
        alias /usr/share/nginx/html/views/; \
    } \

    location /javascript/ { \
        alias /usr/share/nginx/html/javascript/; \
    } \
\
    location /styles.css { \
        alias /usr/share/nginx/html/styles.css; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
