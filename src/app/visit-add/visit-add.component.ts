import { Component, OnInit } from '@angular/core';
import { Physician } from '../classes/physician';
import { Visit } from '../classes/visit';
import { PhysicianService } from '../physician-list/physician.service';
import { VisitService } from '../visit-list/visit.service';
import { Router } from '@angular/router';
import { DateUtil } from '../util/date-util';

@Component({
  selector: 'app-visit-add',
  templateUrl: './visit-add.component.html',
  styleUrls: ['./visit-add.component.css']
})
export class VisitAddComponent implements OnInit {

  visit: Visit = new Visit(); 

  physicianList : Array<Physician> = new Array();
  
  constructor(private visitSvc : VisitService, 
    private physicianSvc : PhysicianService, 
    private router : Router,
    private dateUtil : DateUtil) { }

  ngOnInit(): void {

    this.findPhysicianList();
  }

  findPhysicianList() {
    this.physicianSvc.findPhysicianList().subscribe((resp:any)=> {

      switch (resp.status){
        case "OK":
          this.physicianList = resp.content;
          break;

          default:
            alert(resp.content);
      }
    })
  }

  submit(){

    const visitDate = this.dateUtil.formatSave(new Date(this.visit.visitDate));
    this.visit.visitDate = visitDate;

    this.visitSvc.save(this.visit).subscribe((resp:any)=> {
      
      switch(resp.status){

        case "OK":
          this.visit = resp.content; 
          alert('Successfully save data');
          this.router.navigate(['/visit-list']);
          break; 

          default: 
          alert(resp.content);
      }
    });
  }

}
