import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gender } from '../classes/gender';
import { Patient } from '../classes/patient';
import { PatientService } from '../patient-list/patient.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {

  patient : Patient = new Patient();

  genders; 

  constructor(private gender : Gender, private patientSvc : PatientService, private router: Router) { 
    this.genders = this.gender.list;
  }

  ngOnInit(): void {
  }

  submit(){

    this.patientSvc.save(this.patient).subscribe((resp:any)=> {

      switch (resp.status){
        case "OK":
          this.patient = resp.content;
          alert('Successfully save data');
          this.router.navigate(['/patient-list']);
          break;

          default: 
          alert(resp.content);
      }
    });
  }

}
