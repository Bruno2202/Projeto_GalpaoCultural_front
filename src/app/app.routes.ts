import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Devolucoes } from './components/devolucoes/devolucoes';
import { Emprestimos } from './components/emprestimos/emprestimos';

export const routes: Routes = [
  { path: '', component: Home}, // primeira tela
  { path: 'emprestimos/registrar', component: Emprestimos },
  { path: 'emprestimos/verEmprestimos', component: Devolucoes }
  
];
