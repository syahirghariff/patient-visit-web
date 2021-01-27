import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gender } from '../classes/gender';
import { Patient } from '../classes/patient';
import { PatientService } from '../patient-list/patient.service';
import { PhysicianService } from '../physician-list/physician.service';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {

  patient: Patient = new Patient();

  genders; 

  constructor(private gender : Gender, private patientSvc: PatientService, private route: ActivatedRoute ) { 
    this.genders = this.gender.list;
  }

  ngOnInit(): void {
    this.findById();

    
  }

  findById(){
    const routeParams = this.route.snapshot.paramMap;
    const id = routeParams.get('patientId');

    this.patientSvc.findById(id).subscribe((resp:any)=> {

      switch(resp.status){
        case "OK":
          this.patient = resp.content; 
          break;

          default: 
          alert(resp.content);
      }
    });

  }

  submit (){
    this.patientSvc.update(this.patient).subscribe((resp:any) => {
      switch(resp.status){
        case "OK":
          this.patient = resp.content; 
          alert('Successfully update data'); 
          break;


          default: 
          alert(resp.content);
      }
    })
  }

}
