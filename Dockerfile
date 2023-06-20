FROM nginxinc/nginx-unprivileged:1.24 as runtime

copy nginx/default.conf /etc/nginx/conf.d/default.conf
COPY output/ /usr/share/nginx/html
