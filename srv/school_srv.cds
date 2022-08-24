using { ClassRoom, Student } from '../db/models';

service SchoolService {
    entity ClassRoomSet as projection on ClassRoom;
    entity StudentSet as projection on Student;
}