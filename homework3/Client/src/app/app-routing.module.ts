import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { PetshopClientComponent } from './petshop-client/petshop-client.component';
import { PetshopComponent } from './petshop/petshop.component';
import { AuthenticationComponent } from './shared/authentication/authentication/authentication.component';

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
    component: AuthenticationComponent
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
