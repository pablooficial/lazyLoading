import { ClientRoutingModule } from './client.routes';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    NavComponent
  ]
})

export class ClientModule { }
