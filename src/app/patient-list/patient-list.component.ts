import { Component, OnInit } from '@angular/core';
import { Patient } from '../classes/patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patientList : Array<Patient> = new Array ();

  constructor(private patientSvc : PatientService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.patientSvc.findAll().subscribe((resp:any) => {
      
      switch(resp.status) {
        case "OK":
        this.patientList = resp.content;
        break;

        default: 
        alert('Problem');
      }
    });
  }

  delete(id){

    this.patientSvc.delete(id).subscribe((resp:any) => {
      switch(resp.status) {
        case "OK":
          alert(resp.content);
          this.findAll();
          break;

          default:
            alert(resp.content);
      }
    })
  }

}
