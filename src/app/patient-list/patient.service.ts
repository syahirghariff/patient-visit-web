import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Physician } from '../classes/physician';

@Injectable({
    providedIn: 'root'
})
export class PatientService { 

    constructor(private http: HttpClient) {
    }

    findAll() {
        return this.http.get('/nets/patient-visit/patient/find-all');
    }

    findById(id:string) {
        return this.http.post('/nets/patient-visit/patient/find-by-id', id);
    }

    save(physician:Physician) {
        return this.http.post('/nets/patient-visit/patient/save', physician);
    }

    update(physician: Physician) {
        return this.http.post('/nets/patient-visit/patient/update', physician);
    }

    delete(id:string) {
        return this.http.post('/nets/patient-visit/patient/delete', id);
    }
}