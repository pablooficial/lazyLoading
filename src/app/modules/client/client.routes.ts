import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const clientRouterCoinfig: Routes = [

  {path: 'header' , component:HeaderComponent},
  {path: 'nav' , component:NavComponent},
  {path: 'home' , component:HomeComponent},
];

@NgModule({
  imports:[
    RouterModule.forChild(clientRouterCoinfig)
  ],
  exports:[
    RouterModule
  ]
})

export class ClientRoutingModule{}
