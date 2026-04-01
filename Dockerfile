# FROM nginx:alpine

# # Remove default nginx files
# RUN rm -rf /usr/share/nginx/html/*

# # Copy entire project
# COPY views /usr/share/nginx/html/views
# COPY javascript /usr/share/nginx/html/javascript

# EXPOSE 80


FROM nginx:alpine

# Remove default Nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy your folders
COPY views/*.html /usr/share/nginx/html/
COPY views/shared /usr/share/nginx/html/shared
COPY javascript /usr/share/nginx/html/javascript

# Fix permissions
RUN chmod -R 755 /usr/share/nginx/html

# Nginx config
RUN echo 'server { \
    listen 80; \
    root /usr/share/nginx/html; \
    index views/index.html; \
    location /javascript/ { alias /usr/share/nginx/html/javascript/; } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
