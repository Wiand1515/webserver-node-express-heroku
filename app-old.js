const http = require("http");

http.createServer((req, res) => {

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write('Hola Mundo webserver');
    res.end();


  })

  .listen(8080); //Nos dice que puerto usa

console.log("escuchando el puerto", 8080);
