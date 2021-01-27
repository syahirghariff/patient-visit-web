import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Physician } from '../classes/physician';
import { PhysicianService } from '../physician-list/physician.service';

@Component({
  selector: 'app-physician-add',
  templateUrl: './physician-add.component.html',
  styleUrls: ['./physician-add.component.css']
})
export class PhysicianAddComponent implements OnInit {

  physician : Physician = new Physician();

  constructor(private physicianSvc : PhysicianService, private router : Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.physicianSvc.save(this.physician).subscribe((resp:any)=>{

      switch(resp.status){

        case "OK":
          this.physician = resp.content;
          alert('Successfully save data');
          this.router.navigate(['/physician-list']);
          break;

          default:
            alert(resp.content);

      }
    })

  }

}
