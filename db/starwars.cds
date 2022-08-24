entity Planet {    
    key name: String;
        long: Decimal;
        lat: Decimal;
        people: Association to many Person on people.planet = $self;
}

entity Person {
    key ID: UUID;
    name: String;
    age: Integer;
    haircolor: String;
    evil: Boolean;
    planet: Association to Planet;
}