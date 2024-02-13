import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'kusiyyasqa',
    loadChildren: () => import('./business/business.module').then(m => m.BusinessModule)
  },
  {
    path: '**',
    redirectTo: 'kusiyyasqa'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
