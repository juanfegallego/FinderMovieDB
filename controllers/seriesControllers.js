const axios = require("axios");

class Series{

    async findTopRated(){
        let res = await axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=79a61f5dc13e3e9e4834fadbf4f326c7&language=en-US&page=1");
        return res.data;
    }

    async searchById(id){
        let res = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=79a61f5dc13e3e9e4834fadbf4f326c7&language=en-US`);
        return res.data;
    }

    async searchByTitle(query){
        let res = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=79a61f5dc13e3e9e4834fadbf4f326c7&query=${query}`);
        return res.data;
    }

    async searchScreened(tvId){
        let res = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}/screened_theatrically?api_key=79a61f5dc13e3e9e4834fadbf4f326c7`);
        return res.data;
    }

    async onTheAir(){
        let res = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=79a61f5dc13e3e9e4834fadbf4f326c7&language=en-US&page=1`);
        return res.data;
    }
}


let seriesController = new Series();
module.exports = seriesController;