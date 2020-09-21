import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssistenteComponent } from './assistente.component';

import { AssistententeRoutingModule } from './assistente-routing.module'
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
     AssistenteComponent,
    ],
    imports: [
      CommonModule,
      FormsModule,
      AssistententeRoutingModule,
      
    ]
  })
  export class AssistenteModule { }