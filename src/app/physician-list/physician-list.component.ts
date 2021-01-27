import { Component, OnInit } from '@angular/core';
import { Physician } from '../classes/physician';
import { PhysicianService } from './physician.service';

@Component({
  selector: 'app-physician-list',
  templateUrl: './physician-list.component.html',
  styleUrls: ['./physician-list.component.css']
})
export class PhysicianListComponent implements OnInit {

  physicianList : Array<Physician> = new Array();

  constructor(private physicianSvc : PhysicianService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.physicianSvc.findAll().subscribe((resp:any) => {
      switch(resp.status) {
        
        case "OK":
          this.physicianList = resp.content;
          break;

          default: 
            alert('problem');
            
      }
    });
  }

  delete(id){
    this.physicianSvc.delete(id).subscribe((resp:any)=> {

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
