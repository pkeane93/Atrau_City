# FROM nginx:alpine

# # Remove default nginx files
# RUN rm -rf /usr/share/nginx/html/*

# # Copy entire project
# COPY views /usr/share/nginx/html/views
# COPY javascript /usr/share/nginx/html/javascript

# EXPOSE 80


FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy views and javascript folders
COPY views /usr/share/nginx/html/views
COPY javascript /usr/share/nginx/html/javascript

# Fix permissions so nginx can read everything
RUN chmod -R 755 /usr/share/nginx/html

# Override nginx config to serve views/index.html at root
RUN echo 'server { \
    listen 80; \
    root /usr/share/nginx/html/views; \
    index index.html; \
    location / { try_files $uri $uri/ =404; } \
    location /javascript/ { alias /usr/share/nginx/html/javascript/; } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
