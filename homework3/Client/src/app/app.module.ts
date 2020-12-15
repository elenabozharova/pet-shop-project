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

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    PetshopClientComponent,
    HomeComponent,
    PetshopComponent,
    StarComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    AngularmaterialModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDn5hG4-hJrPzQ9VkXXd9hVaw2kr-UdaoQ'
    })
  ],
  providers: [PetshopsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
