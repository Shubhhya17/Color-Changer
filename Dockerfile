# Use a lightweight web server image
FROM nginx:alpine

# Copy the application files to the NGINX server
COPY src/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80