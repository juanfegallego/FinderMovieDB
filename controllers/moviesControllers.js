const axios = require("axios");

class Pelicula{

    async findTopRated(){
        let res = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=79a61f5dc13e3e9e4834fadbf4f326c7&language=en-US&page=1");
        return res.data;
    }

    async searchById(id){
        let res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=79a61f5dc13e3e9e4834fadbf4f326c7&language=en-US`);
        return res.data;
    }

    async searchByTitle(query){1
        let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=79a61f5dc13e3e9e4834fadbf4f326c7&query=${query}`);
        return res.data;
    }

    async findToGenre(name){1
        let res = await axios.get(`https://api.themoviedb.org/3/genre/movie/${name}?api_key=79a61f5dc13e3e9e4834fadbf4f326c7&language=en-US`);
        return res.data;
    }
}


    //Traductor de Generos
    const genre = [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]



    for(let i = 0; i < genre.length; ++i ) {
            console.log(`${genre[i].name}`)
            // console.log( `${carrito[i].nombre} - Precio: ${carrito[i].precio }` );//Para acceder al precio
    }

let moviesController = new Pelicula();
module.exports = moviesController;