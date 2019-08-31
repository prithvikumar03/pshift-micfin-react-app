# build environment
FROM node:12.2.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@latest -g
COPY . /app
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
# Remove the conf file on the docker host, Other wise it will always render cached files
RUN rm /etc/nginx/conf.d/default.conf 
# Copy the updated conf file - particularly useful for react-router stuff.
COPY nginx/nginx.conf /etc/nginx/conf.d
COPY --from=build /app/build /usr/share/nginx/html 
EXPOSE 80
0m