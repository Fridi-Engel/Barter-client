import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginUserComponent} from './components/login-user/login-user.component'
import {AddServiceComponent} from './components/add-service/add-service.component'

const routes: Routes = [
  // {path: '', redirectTo:'/login', pathMatch: 'full' },
  {path:'add-service', component:AddServiceComponent},
  {path:'login', component:LoginUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
