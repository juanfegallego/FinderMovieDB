<h1 align ="center">📽Reto  API TMDB 📽</h1>
<br>

Proyecto realizado para [Geeks Hubs](https://geekshubsacademy.com/). El cual consiste en el desarrollo de un backend con la API de [The Movie Database](https://developers.themoviedb.org/3/getting-started/introduction).<br>

Este proyecto ha sido trabajado en grupo, formado por: [Alejandro](https://github.com/2020-JAUG) y [Juan Felipe](https://github.com/juanfegallego) apoyandonse en el uso de metodologías ágiles. 

<b>Tiempo de inicio/fin: 19 - 21 de mayo de 2021.</b>

La forma en la que nos hemos organizado ha sido el trabajo durante dos ramas de desarrollo, una master y la aplicación Trello.
<br>
![captura](/img/capturaTrello1.png)
![captura](/img/capturaTrello2.png)



<br>
#ÍNDICE 

-[¿Qué es?🧐](#¿Qué-es?)
-[Requisitos⚙️](#Requisitos)
-[Agradecimientos👌🏻](#Agradecimientos)

<br>

#¿Qué es?🧐

Es un backend el cual se conecta por una API de terceros que por medio de endpoints nos recopila la información requerida mediante el uso de promesas. <br>
Ejemplo de una busqueda mediante <b>ID</b><br>

```JavaScript
router.get("/:id", async(req, res) => {
    try {
        let id = req.params.id;
        res.json(await moviesControllers.searchById(id));
    } catch (err) {
        return res.status(500).json ({
            mensaje: err.message
        });
    }
});
```
<br>

#Requisitos⚙️

- Tener instalado un editor de código para poder modificar cualquier archivo del proyecto.
- [Descargar](https://nodejs.org/es/) e Instalar Node.
```
    $ npm install node
```
- Instalar Axios.
```
    $ npm install axios
```
- Instalar Express.
```
    $ npm install express.
```
## ¿Cómo realizar una búsqueda?🔎
Para poder realizar una busqueda se tiene que levantar el servidor local, en nuestro caso el <http://localhost:3000>.

- Abre la terminal y ejecuta el comando
```
    $ npm start
```
<br>

###Enlaces de Búsqueda

<h3 align ="center">Películas</h3>

● Películas top rated. (http://localhost:3000/movies/)
● Película según su id. (http://localhost:3000/movies/"id de lapelicula")
● Película por título. (http://localhost:3000/movies/search/"Título de la pelicula")
● Películas con determinado género (indicando nombre, no id).
 (http://localhost:3000/movies/genre/"ej: Action")<br>
 <h3 align ="center">Series</h3>

● Obtener series top rated. (http://localhost:3000/series/)
● Obtener series por id. (http://localhost:3000/series/"id de laserie")
● Obtener series por título. (http://localhost:3000/series/search/"Título de la serie")
● Obtener series que vayan a tener un capítulo emitido en lospróximos  7 dias. (http://localhost:3000/series/search/on_the_air)
● Obtener series que vayan a tener un pase en teatros o cines. (http://localhost:3000/series/search/)

#Tecnologías💻

Para el desarrollo de este proyecto hemos trabajado con las siguientes tecnologías.<br>

 <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a><a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a><a href="https://postman.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/>
 [![Logotipo Express](https://i.cloudup.com/zfY6lL7eFa-300x300.png)](http://expressjs.com/)
<br>


