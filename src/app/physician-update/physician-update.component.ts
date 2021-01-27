import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Physician } from '../classes/physician';
import { PhysicianService } from '../physician-list/physician.service';

@Component({
  selector: 'app-physician-update',
  templateUrl: './physician-update.component.html',
  styleUrls: ['./physician-update.component.css']
})
export class PhysicianUpdateComponent implements OnInit {

  physician : Physician = new Physician();

  constructor( private route: ActivatedRoute, private physicianSvc: PhysicianService) { }

  ngOnInit(): void {
    this.findById();
  }

  findById(){
    const routeParams = this.route.snapshot.paramMap;
    const id = routeParams.get('physicianId');
    this.physicianSvc.findById(id).subscribe((resp:any) => {

      switch (resp.status){
        case "OK":
          this.physician = resp.content;
          break; 

          default:
            alert('Problem');
      }
    })
  }

  submit(){

    this.physicianSvc.update(this.physician).subscribe((resp:any)=>{

      switch(resp.status){

        case "OK":
          this.physician = resp.content;
          alert('Successfully update data');
          break;

          default:
            alert(resp.content);

      }
    })

  };

}
