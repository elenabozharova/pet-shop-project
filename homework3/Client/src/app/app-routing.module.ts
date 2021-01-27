import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { PetshopListComponent } from './petshop-list/petshop-list.component';
import { PetshopComponent } from './petshop/petshop.component';
import { LoginComponent } from './shared/authentication/authentication/login.component';
import { ModelResolver } from './shared/models/pethop-details-model.resover';
import { RegisterComponent } from './shared/register/register.component';
import { PetshopCommentsResolver} from './shared/models/petshop-comments-model.resolver';
import { UsersResolver } from './shared/models/users-resolver-model';
import { PetshopListResolver } from './shared/models/pethsop-list-model.resolver';

const routes: Routes = [
  {
    path : 'petshops',
    component : PetshopListComponent,
    resolve: { petshops: PetshopListResolver
              }},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'petshop/details/:id',
    component: PetshopComponent,
    resolve: {petshop: ModelResolver,
              comments: PetshopCommentsResolver,
              users : UsersResolver
            }
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
