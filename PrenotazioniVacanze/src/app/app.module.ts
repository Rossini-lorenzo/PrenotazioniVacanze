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

@NgModule({
  declarations: [
    AppComponent,
    CaLoginComponent,
    CaRegistrationComponent,
    CaHomeComponent,
    CaPacchettiComponent,
    CaAlloggiComponent,
    CaViaggiComponent,
    CaNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
