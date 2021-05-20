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

    async searchByTitle(query){
        let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=79a61f5dc13e3e9e4834fadbf4f326c7&query=${query}`);
        return res.data;
    }

    async findToGenre(name){

        let array1 = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=79a61f5dc13e3e9e4834fadbf4f326c7&language=en-US");
        let newArray = array1.data.genres;

        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].name == name) {
                let id = newArray[i].id;
                let res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=79a61f5dc13e3e9e4834fadbf4f326c7&with_genres=${id}`);
                return res.data;
            }
        }
    }
}

let moviesController = new Pelicula();
module.exports = moviesController;