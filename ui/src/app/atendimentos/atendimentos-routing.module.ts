import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtendimentosFormComponent } from './atendimentos-form/atendimentos-form.component'
import { AtendimentosListaComponent } from './atendimentos-lista/atendimentos-lista.component';

const routes: Routes = [
  { path: 'atendimentos-form' , component: AtendimentosFormComponent },
  { path: 'atendimentos-form/:id' , component: AtendimentosFormComponent },
  { path: 'atendimentos-lista', component: AtendimentosListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentosRoutingModule { }
