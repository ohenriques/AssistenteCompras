import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AssistenteComponent } from './assistente.component';

const rotasAssistente: Routes = [
    { 
        path: '', 
        component: AssistenteComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(rotasAssistente)
    ],
    exports: [
        RouterModule
    ]
})
export class AssistententeRoutingModule {}