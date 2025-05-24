# --- 1) Build stage: install & compile your React+Vite app ---
FROM node:18-alpine AS builder
WORKDIR /app

# copy package metadata & install dependencies
COPY package*.json vite.config.* ./
RUN npm ci

# copy source and produce the optimized build
COPY . .
RUN npm run build
# build output is now in /app/dist

# --- 2) Production stage: serve with NGINX ---
FROM nginx:stable-alpine
# remove default static content
RUN rm -rf /usr/share/nginx/html/*

# copy over your built files
COPY --from=builder /app/dist /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
