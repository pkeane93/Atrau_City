FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy your static site
COPY views/ /usr/share/nginx/html

EXPOSE 80
