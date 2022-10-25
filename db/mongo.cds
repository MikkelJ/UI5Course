using {
    managed,
    cuid
} from '@sap/cds/common';

entity Office : managed {
    key ID        : String;
        color     : String;
        location  : String(100);
        region    : String;
}
entity LunchEntry {
    key ID       : UUID;
        date     : Date;
        office   : Association to one Office;
        employee : String;
}
