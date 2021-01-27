import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PhysicianListComponent } from './physician-list/physician-list.component';
import { PhysicianAddComponent } from './physician-add/physician-add.component';
import { HttpClientModule } from '@angular/common/http';
import { PhysicianUpdateComponent } from './physician-update/physician-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { VisitListComponent } from './visit-list/visit-list.component';
import { VisitAddComponent } from './visit-add/visit-add.component';
import { VisitUpdateComponent } from './visit-update/visit-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhysicianListComponent,
    PhysicianAddComponent,
    PhysicianUpdateComponent,
    PatientListComponent,
    PatientAddComponent,
    PatientUpdateComponent,
    VisitListComponent,
    VisitAddComponent,
    VisitUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'physician-list', component: PhysicianListComponent},
      { path: 'physician-add', component: PhysicianAddComponent},
      { path: 'physician-update/:physicianId', component: PhysicianUpdateComponent},
      { path: 'patient-list', component: PatientListComponent}, 
      { path: 'patient-add', component: PatientAddComponent},
      { path: 'patient-update/:patientId', component: PatientUpdateComponent},
      { path: 'visit-list', component: VisitListComponent},
      { path: 'visit-add', component: VisitAddComponent},
      { path: 'visit-update/:visitId', component: VisitUpdateComponent},
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
