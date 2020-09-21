import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const rotasApp: Routes = [
    {
        path: 'assistente',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/assistente/assistente.module').then(m => m.AssistenteModule)
    },
    {
        path: '',
        pathMatch: 'full', 
        redirectTo: 'assistente'
    },
    {
        path: '**',
        pathMatch: 'full', 
        redirectTo: 'assistente'
    }
];

@NgModule({
 imports: [
    RouterModule.forRoot(rotasApp)
 ],
 exports: [
    RouterModule
 ],
 providers: [AuthGuard]
})
export class AppRoutingModule {}