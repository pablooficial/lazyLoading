
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './core/not-found/not-found.component';


const rootRouterCoinfig: Routes = [
  {path: '' , redirectTo: 'login', pathMatch: 'full'},
  {path: 'login' ,
          loadChildren:() => import ('./modules/admin/admin.module')
            .then(m => m.AdminModule)},
  {path: 'client' ,
          loadChildren:() => import ('./modules/client/client.module')
            .then(m => m.ClientModule)
  },
  {path: '**' , component: NotFoundComponent},
];

@NgModule({
  imports:[
    RouterModule.forRoot(rootRouterCoinfig)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{}
