import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Physician } from '../classes/physician';
import { Visit } from '../classes/visit';

@Injectable({
    providedIn: 'root'
})
export class VisitService { 

    constructor(private http: HttpClient) {
    }

    findAll() {
        return this.http.get('/nets/patient-visit/visit/find-all');
    }

    findById(id:string) {
        return this.http.post('/nets/patient-visit/visit/find-by-id', id);
    }

    save(visit:Visit) {
        return this.http.post('/nets/patient-visit/visit/save', visit);
    }

    update(visit: Visit) {
        return this.http.post('/nets/patient-visit/visit/update', visit);
    }

    delete(id:string) {
        return this.http.post('/nets/patient-visit/visit/delete', id);
    }
}