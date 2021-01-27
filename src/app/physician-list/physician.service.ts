import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Physician } from '../classes/physician';

@Injectable({
    providedIn: 'root'
})
export class PhysicianService { 

    constructor(private http: HttpClient) {
    }

    findAll() {
        return this.http.get('/nets/patient-visit/physician/find-all');
    }

    findPhysicianList() {
        return this.http.get('/nets/patient-visit/physician/find-physician-list');
    }

    findById(id:string) {
        return this.http.post('/nets/patient-visit/physician/find-by-id', id);
    }

    save(physician:Physician) {
        return this.http.post('/nets/patient-visit/physician/save', physician);
    }

    update(physician: Physician) {
        return this.http.post('/nets/patient-visit/physician/update', physician);
    }

    delete(id:string) {
        return this.http.post('/nets/patient-visit/physician/delete', id);
    }
}