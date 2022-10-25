const cds = require("@sap/cds");
const axios = require('axios');
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const client = new MongoClient(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

module.exports = cds.service.impl((srv) => {
module.exports = cds.server;

srv.on("READ", "LunchEntrySet", async (req, next) => {
    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db("itlunch");
        const collection = db.collection('lunchentries');
        const sEmployee = req.query.SELECT.where[2].val;

        const oLunchEntries = await collection.find({employee: sEmployee});
       
        req.reply(oLunchEntries.toArray())
    } catch (error) {
        console.log(error)
    }
});

srv.on("CREATE", "LunchEntrySet", async (req, next) => {

    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db("itlunch");
        const collection = db.collection('lunchentries');

       const oNewItem = await collection.insertOne(req.data);


       req.reply({...req.data});
    } catch (error) {
        console.log(error)
    }
});

srv.on("DELETE", "LunchEntrySet", async (req, next) => {
    try {
        await client.connect();
        const db = client.db("itlunch");
        const collection = db.collection('lunchentries');

       const oRes = await collection.deleteOne({ID: req.data?.ID})

       if(oRes?.deletedCount > 0) {
           req.reply("Item succesfully deleted")
        }
        else {
            req.reject(200, "No item deleted")
        }


    } catch (error) {
        req.reject(error);
    }
})

// srv.on("updateDB", async (req) => {
    
//     const { PlanetSet, PeopleSet } = srv.entities;

//     axios.get(`https://swapi.dev/api/planets/`)
//     .then(async (res) => {
//         // console.log(res)
//         const aPlanets = res.data.results.map(planet => {
//             return {
//                 name: planet.name,
//                 long: 1,
//                 lat: 2
//             }
//         });

//         console.log(aPlanets)

//         await srv.create(PlanetSet).entries(aPlanets);

//         req.reply("Done")

//     })

// })


  
});
