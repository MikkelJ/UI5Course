using { LunchEntry, Office } from '../db/mongo';

service lunchservice {
    entity LunchEntrySet as projection on LunchEntry;
    entity OfficeSet as projection on Office;
}

