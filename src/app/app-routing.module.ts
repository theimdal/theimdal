import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import {InstallationDetailComponent} from './installations/installation-detail.component';
// import {InstallationDeviationsComponent} from './installations/installation-deviations.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent
      }
      // ,
      // {
      //   path: 'detail/:id',
      //   component: InstallationDetailComponent
      // },
      // {
      //   path: 'installation/deviations/:id',
      //   component: InstallationDeviationsComponent
      // }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
