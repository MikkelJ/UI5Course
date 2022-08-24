//Importing aspects from cds common libary
using { cuid } from '@sap/cds/common';

entity ClassRoom : cuid {
    title: String;
    numberOfSeats: Integer;
    students: Association to many Student on students.navToClassRoom = $self;

}

entity Student : cuid {
    name : String;
    navToClassRoom: Association to ClassRoom;
}