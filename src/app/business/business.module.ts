import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './pages/personal/personal.component';
import { AportantesComponent } from './pages/aportantes/aportantes.component';
import { BeneficiadosComponent } from './pages/beneficiados/beneficiados.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AnunciosComponent } from './pages/anuncios/anuncios.component';
import { VoluntariosComponent } from './pages/voluntarios/voluntarios.component';
import { SharedModule } from '../shared/shared.module';
import { BusinessRoutingModule } from './business-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DataTableComponent } from './components/data-table/data-table.component';

@NgModule({
  declarations: [
    PersonalComponent,
    AportantesComponent,
    BeneficiadosComponent,
    PerfilComponent,
    AnunciosComponent,
    VoluntariosComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BusinessRoutingModule,
    HttpClientModule
  ],
  exports: [

  ],
  providers: [],
})
export class BusinessModule {}
