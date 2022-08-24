const cds = require("@sap/cds");
const axios = require('axios');

module.exports = cds.service.impl((srv) => {
  module.exports = cds.server;

srv.on("updateDB", async (req) => {
    
    const { PlanetSet, PeopleSet } = srv.entities;

    axios.get(`https://swapi.dev/api/planets/`)
    .then(async (res) => {
        // console.log(res)
        const aPlanets = res.data.results.map(planet => {
            return {
                name: planet.name,
                long: 1,
                lat: 2
            }
        });

        console.log(aPlanets)

        await srv.create(PlanetSet).entries(aPlanets);

        req.reply("Done")

    })

    // fetch(`https://swapi.dev/api/planets/`)
    // .then( function(response){
    //   console.log(response)
    // })
    // .then(function(json){
    //     console.log(response)
    // });
})
  
});
