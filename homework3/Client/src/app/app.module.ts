import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import { PetshopsService } from './shared/petshops.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home-component/home-component.component';
import { PetshopComponent } from './petshop/petshop.component';
import { StarComponent } from './shared/star/star.component';
import {AngularmaterialModule} from './material/angularmaterial/angularmaterial.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './shared/authentication/authentication/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { FormsModule } from '@angular/forms';
import { CustombuttonComponent } from './shared/custombutton/custombutton.component';
import { PetshopListComponent } from './petshop-list/petshop-list.component';
import {ModelResolver} from './shared/models/pethop-details-model.resover';
import {PetshopCommentsResolver} from './shared/models/petshop-comments-model.resolver';
import {UsersResolver} from './shared/models/users-resolver-model';
import { PetshopListResolver} from './shared/models/pethsop-list-model.resolver';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PetshopListComponent,
    HomeComponent,
    PetshopComponent,
    StarComponent,
    LoginComponent,
    RegisterComponent,
    CustombuttonComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    AngularmaterialModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule
  ],
  providers: [PetshopsService, ModelResolver, PetshopCommentsResolver, UsersResolver, PetshopListResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
