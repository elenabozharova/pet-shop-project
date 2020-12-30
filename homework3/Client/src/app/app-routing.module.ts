import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { PetshopClientComponent } from './petshop-client/petshop-client.component';
import { PetshopComponent } from './petshop/petshop.component';
import { LoginComponent } from './shared/authentication/authentication/login.component';
import { RegisterComponent } from './shared/register/register.component';

const routes: Routes = [
  {
    path : 'petshops',
    component : PetshopClientComponent},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'petshop/details/:id',
    component: PetshopComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
],

exports: [RouterModule]
})
export class AppRoutingModule { }
