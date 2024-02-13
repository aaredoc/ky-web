import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AportantesComponent } from './pages/aportantes/aportantes.component';
import { BeneficiadosComponent } from './pages/beneficiados/beneficiados.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { AnunciosComponent } from './pages/anuncios/anuncios.component';
import { VoluntariosComponent } from './pages/voluntarios/voluntarios.component';

const routes: Routes = [
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'beneficiados',
    component: BeneficiadosComponent
  },
  {
    path: 'aportantes',
    component: AportantesComponent
  }
  ,
  {
    path: 'voluntarios',
    component: VoluntariosComponent
  },
  {
    path: 'personal',
    component: PersonalComponent
  },
  {
    path: 'anuncios',
    component: AnunciosComponent
  },
  {
    path: '**',
    redirectTo: 'perfil'
  }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class BusinessRoutingModule {}
