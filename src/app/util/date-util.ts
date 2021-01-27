import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DateUtil{
    

    formatSave(date: Date) {

        var day = date.getDate();
        var month = date.getMonth() + 1; 
        var year = date.getFullYear();

        return day + "/" + month + "/" + year;
    }

    formatRead(reqDate: String){
        var split = reqDate.split("/");

        var date = new Date(parseInt(split[2]), parseInt(split[1])-1, parseInt(split[0])); 

        var day = date.getDate();
        var month = date.getMonth() + 1; 
        var year = date.getFullYear();

        console.log('syahir month', month > 9);

        var two_digit_month = month > 9 ? month.toString() : '0' + month.toString();

        return  year + "-" + two_digit_month + "-" + day;
    }




}