import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Visit } from '../classes/visit';
import { Physician } from '../classes/physician';
import { VisitService } from '../visit-list/visit.service';
import { PhysicianService } from '../physician-list/physician.service';
import { DateUtil } from '../util/date-util';

@Component({
  selector: 'app-visit-update',
  templateUrl: './visit-update.component.html',
  styleUrls: ['./visit-update.component.css']
})
export class VisitUpdateComponent implements OnInit {

  visit: Visit = new Visit();

  physicianList : Array<Physician> = new Array();

  constructor(private route: ActivatedRoute,
    private visitSvc: VisitService, 
    private physicianSvc: PhysicianService,
    private dateUtil: DateUtil) { }

  ngOnInit(): void {
    this.findPhysicianList();
    this.findById();
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

  findById(){
    const routeParams = this.route.snapshot.paramMap;
    const id = routeParams.get('visitId');

    this.visitSvc.findById(id).subscribe((resp:any)=> {

      switch(resp.status){
        case "OK":
          this.visit = resp.content;
          
          const visitDate = this.dateUtil.formatRead(this.visit.visitDate);
          this.visit.visitDate = visitDate;
          break;

          default: 
          alert(resp.content);
      }
    });
  }

  submit(){

    const visitDate = this.dateUtil.formatSave(new Date(this.visit.visitDate));
    this.visit.visitDate = visitDate;

    this.visitSvc.update(this.visit).subscribe((resp:any)=> {
      
      switch(resp.status){

        case "OK":
          this.visit = resp.content;
          
          const visitDate = this.dateUtil.formatRead(this.visit.visitDate);
          this.visit.visitDate = visitDate;
          alert('Successfully update data');
          break; 

          default: 
          alert(resp.content);
      }
    });
  }

}
