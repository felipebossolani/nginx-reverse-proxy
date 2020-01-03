# Estagio 1 - Será responsavel em construir nossa aplicação
FROM node as node
WORKDIR /app
COPY package.json /app/
RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build

# Estagio 2 - Será responsavel por expor a aplicação
FROM nginx
COPY --from=node /app/dist/web /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
