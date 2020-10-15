#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var exchange = 'Jogos';
        var titulo = '$ Próximos jogos: $';
        var jogo1 = '_  Cruzeiro X Atletico (01/01/2021)  _';
        var jogo2 = '_  Palmeiras x Flamengo (02/01/2021)  _';
        var msg = titulo+jogo1+jogo2;
 		
 		channel.assertExchange(exchange, 'fanout', {
            durable: false
        });
        channel.publish(exchange, '', Buffer.from(msg));
        console.log(" [x] Sent %s", msg);

    });

        connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var exchange = 'atleticomg';
        var titulo = '$ Noticias sobre Atletico MG: $';
        var noticia1 = '_  Atletico irá enfrentar seu rival mineiro no próximo fim de semana.  _';
        var noticia2 = '_  Atletico passa por grandes dificuldades financeiras.  _';
        var msg = titulo+noticia1+noticia2;
 		
 		channel.assertExchange(exchange, 'fanout', {
            durable: false
        });
        channel.publish(exchange, '', Buffer.from(msg));
        console.log(" [x] Sent %s", msg);

    });
    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});