const mongoose = require("mongoose")
const movieCollection = require("../../models/MovieSchema")
const getmoviecontroller = async (req, res) => {
    try {
        const {id,name} = req.params
        
        let movies;
        
        if (name) {
            const searchname = name.toLowerCase()
            movies = await movieCollection.find({
                name: { $regex: new RegExp(searchname, "i") }
            })
           // return res.status(200).send({ message: "OK" })
        }

        else if (id) {
            
            movies = await movieCollection.find({
            _id:id })
          //  return res.status(200).send({ message: "OK" })
        }

         
         else {
            movies = await movieCollection.find()

        }

        res.status(200).send(movies)
    

        if (!movies || movies.length === 0)
            return res.status(404).send({ message: "movie not found" })
        console.log("movie fetched successfully")
    }
    catch (error) {
        res.status(500).send({
            message: "Error in fetching movie"
        })
        console.log(`error occured : ${error}`)
    }
}

module.exports = getmoviecontroller
