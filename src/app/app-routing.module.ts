import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleHttpServiceComponent } from './simple-http-service/simple-http-service.component';
import { RacesComponent } from './races/races.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: 'simple-http-service', component: SimpleHttpServiceComponent },
  { path: 'races', component: RacesComponent },
  { path: 'detail', component: DetailComponent },
  { path: '', redirectTo: '/simple-http-service', pathMatch: 'full' },
  { path: '**', component: SimpleHttpServiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
