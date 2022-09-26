import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorComponent } from './error/error.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';







const routes: Routes = [
  {path:'inicio', component:    InicioComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path: 'sobre-mi', component: SobreMiComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
