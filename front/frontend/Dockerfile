FROM node:18.16.1 as build
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY ./ ./
RUN npm run build
# FROM nginx
EXPOSE 3000
CMD ["yarn", "start"]
# COPY ./default.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html
