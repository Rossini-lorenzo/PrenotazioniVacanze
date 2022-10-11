import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaHomeComponent } from './ca-home/ca-home.component';
import { CaLoginComponent } from './ca-login/ca-login.component';
import { CaRegistrationComponent } from './ca-registration/ca-registration.component';
import { CaPacchettiComponent } from './ca-pacchetti/ca-pacchetti.component';
import { CaViaggiComponent } from './ca-viaggi/ca-viaggi.component';
import { CaAlloggiComponent } from './ca-alloggi/ca-alloggi.component';

const routes: Routes = [
  { path: '', component: CaAlloggiComponent },
  { path: 'registration', component:CaRegistrationComponent  },
  { path: 'login', component: CaLoginComponent },
  { path: 'pacchetti', component:CaPacchettiComponent  },
  { path: 'viaggi', component:CaViaggiComponent  },
  { path: 'alloggi', component:CaAlloggiComponent  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
