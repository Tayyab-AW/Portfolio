
# FROM node:18-alpine as builder
# WORKDIR /home/node/app
# COPY . .
# RUN npm i
# RUN npm run build

# FROM nginx:1.24-alpine as server
# COPY --from=builder /home/node/app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 

FROM node:18-alpine AS BUILD_IMAGE

WORKDIR /app

ARG TARGETPLATFORM
ENV TARGETPLATFORM=${TARGETPLATFORM:-linux/amd64}

RUN \
  case "${TARGETPLATFORM}" in \
    'linux/arm64' | 'linux/arm/v7') \
      apk add --no-cache python3 make g++ && \
      ln -s /usr/bin/python3 /usr/bin/python \
      ;; \
  esac

COPY package.json package-lock.json ./
RUN  npm ci --network-timeout 1000000

COPY . ./

ARG COMMIT_TAG
ENV COMMIT_TAG=${COMMIT_TAG}

RUN npm run build

# remove development dependencies
RUN npm install --production --ignore-scripts --prefer-offline

FROM nginx:1.24-alpine as server
COPY --from=BUILD_IMAGE /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
USER nginx
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]