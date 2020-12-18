import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import { PetshopClientComponent } from './petshop-client/petshop-client.component';
import { PetshopsService } from './shared/petshops.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home-component/home-component.component';
import { PetshopComponent } from './petshop/petshop.component';
import { StarComponent } from './shared/star/star.component';
import {AngularmaterialModule} from './material/angularmaterial/angularmaterial.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

import { AgmCoreModule } from '@agm/core';
import { AuthenticationComponent } from './shared/authentication/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    PetshopClientComponent,
    HomeComponent,
    PetshopComponent,
    StarComponent,
    AuthenticationComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    AngularmaterialModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [PetshopsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
