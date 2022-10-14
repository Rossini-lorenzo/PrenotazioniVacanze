import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaLoginComponent } from './ca-login/ca-login.component';
import { CaRegistrationComponent } from './ca-registration/ca-registration.component';
import { CaHomeComponent } from './ca-home/ca-home.component';
import { CaPacchettiComponent } from './ca-pacchetti/ca-pacchetti.component';
import { CaAlloggiComponent } from './ca-alloggi/ca-alloggi.component';
import { CaViaggiComponent } from './ca-viaggi/ca-viaggi.component';
import { CaNavbarComponent } from './ca-navbar/ca-navbar.component';
import { CaProfiloComponent } from './ca-profilo/ca-profilo.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CaLoginComponent,
    CaRegistrationComponent,
    CaHomeComponent,
    CaPacchettiComponent,
    CaAlloggiComponent,
    CaViaggiComponent,
    CaNavbarComponent,
    CaProfiloComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
