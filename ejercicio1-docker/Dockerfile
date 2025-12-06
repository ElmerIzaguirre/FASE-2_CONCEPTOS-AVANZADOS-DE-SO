# Imagen base ligera
FROM alpine:latest

# Instalar bash, curl y procps para monitoreo
RUN apk add --no-cache bash curl procps

# Copiar el script al contenedor
COPY hello.sh /hello.sh
RUN chmod +x /hello.sh

# Comando por defecto
CMD ["/hello.sh"]
