#VERSAO DO NODE(CASO < 16 ESPECIFICAR):
FROM node:latest
#DIRETORIO QUE SERÁ CRIADO:
WORKDIR /tmp/react
# . . == COPIAR DESDE A ORIGEM:
COPY . .
#DEVE RODAR OS COMANDOS:
#Comando para deletar o node_modules.
RUN rm -rf node_modules
#Comando para instalar os arquivos
RUN npm install
RUN npm run build
RUN mkdir -p /var/www/html
RUN mv build/* /var/www/html

VOLUME /var/www/html

WORKDIR /

RUN rm -rf /tmp/react



