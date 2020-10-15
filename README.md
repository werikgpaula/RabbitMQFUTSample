Prova de conceito para análise e teste da utilização do middleware controlador de mensagens em tempo real RabbitMQ.

Para utilização, é necessário ter NodeJS e RabbitMQ instalados na máquina.

Basta clonar o projeto e executar o comando NPM install para a instalação das dependencias.

- Para executar a parte "Publisher" é necessário executar o script send.js. Ele pode ser executado através do comando node send.js 
- Para executar a parte "Subscribe" é necessário executar o script receive.js ou receive2.js. Ele pode ser executado através do comando node receive.js OU node receive2.js

- Receive.js irá escutar todas as publicações feitas no canal "jogos", enquanto receive2.js irá escutar todas as publicações feitas em "jogos" e "atleticomg" 
