FROM node:latest as builder
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/ngnx/conf.d/default.conf
COPY --from=builder /src/build /usr/share/nginx/html