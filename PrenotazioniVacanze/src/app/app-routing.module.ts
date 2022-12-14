import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaHomeComponent } from './ca-home/ca-home.component';
import { CaLoginComponent } from './ca-login/ca-login.component';
import { CaRegistrationComponent } from './ca-registration/ca-registration.component';
import { CaPacchettiComponent } from './ca-pacchetti/ca-pacchetti.component';
import { CaViaggiComponent } from './ca-viaggi/ca-viaggi.component';
import { CaAlloggiComponent } from './ca-alloggi/ca-alloggi.component';
import { CaProfiloComponent } from './ca-profilo/ca-profilo.component';
import { CaPrenotazioniComponent } from './ca-prenotazioni/ca-prenotazioni.component';
import { CaAdminComponent } from './ca-admin/ca-admin.component';

const routes: Routes = [
  { path: '', component: CaAlloggiComponent },
  { path: 'registration', component:CaRegistrationComponent  },
  { path: 'login', component: CaLoginComponent },
  { path: 'pacchetti', component:CaPacchettiComponent  },
  { path: 'viaggi', component:CaViaggiComponent  },
  { path: 'alloggi', component:CaAlloggiComponent  },
  { path: 'area_personale', component:CaProfiloComponent  },
  { path: 'prenotazioni', component:CaPrenotazioniComponent  },
  {path:'admin',component:CaAdminComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
