import { Component, OnInit } from '@angular/core';
import { Visit } from '../classes/visit';
import { VisitService } from './visit.service';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit {

  constructor(private visitSvc : VisitService) { }

  visitList: Array<Visit> = new Array();

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    
    this.visitSvc.findAll().subscribe((resp:any)=> {
      
      switch (resp.status) {
        case "OK":
          this.visitList = resp.content;
          break;

          default:
            alert(resp.content);
      }
    })
  }

  delete (id) {
    this.visitSvc.delete(id).subscribe((resp:any) => {
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
