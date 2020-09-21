import { Routes, RouterModule } from '@angular/router';
import { AssistenteComponent } from './modules/assistente/assistente.component';


const rotas: Routes = [
  { path: 'assistente', component: AssistenteComponent},
  { path: '', pathMatch: 'full', redirectTo: 'assistente'},
  { path: '**',  pathMatch: 'full', redirectTo: 'assistente'}
]; 

export const ModuloRoteamento = RouterModule.forRoot(rotas);