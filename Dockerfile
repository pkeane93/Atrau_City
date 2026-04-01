FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy entire project
COPY views /usr/share/nginx/html/views
COPY javascript /usr/share/nginx/html/javascript

EXPOSE 80
