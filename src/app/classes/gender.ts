import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Gender{
  
    list = [{
        "code": "MALE", 
        "desc" : "MALE",
    }, 
    {
        "code": "FEMALE", 
        "desc" : "FEMALE",
    }, 
];
}