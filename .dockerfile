FROM node:20-alpine AS tland-admin-builder
WORKDIR /tland-admin

COPY tland-admin/package*.json ./
RUN npm install

COPY tland-admin ./
RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY nginx/server.conf /etc/nginx/conf.d/default.conf

COPY --from=tland-admin-builder /tland-admin/dist /usr/share/nginx/html/tland-admin

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]