
using { Person, Planet } from '../db/starwars';

service starwars {
    entity PeopleSet as projection on Person;
    entity PlanetSet as projection on Planet;

    function updateDB() returns String;
}