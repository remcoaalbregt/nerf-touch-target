FROM node:8-slim as build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json .
RUN yarn --silent
RUN yarn add react-scripts -g --silent
COPY . .
RUN yarn run build

FROM nginx:1.13.9-alpine as release
WORKDIR /usr/share/nginx/html
COPY --from=build /usr/src/app/build .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]