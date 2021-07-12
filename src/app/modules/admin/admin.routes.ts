import { LoginComponent } from './login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const adminRouterCoinfig: Routes = [

  {path: '' , component:LoginComponent},


];

@NgModule({
  imports:[
    RouterModule.forChild(adminRouterCoinfig)
  ],
  exports:[
    RouterModule
  ]
})

export class AdminRoutingModule{}
