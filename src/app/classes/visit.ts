import { Physician } from "./physician";

export class Visit {

    id: string; 
    visitDate: string; 
    physicianId: String;
    physician: Physician;  
    reason : String;
    createdDate: Date; 
    createdBy: String; 
    modifiedDate: Date;
    modifiedBy: string; 
}