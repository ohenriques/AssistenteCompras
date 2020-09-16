import { Component, OnInit } from '@angular/core';
import { BotaoApiService } from '../../services/botao-api.service';


@Component({
  selector: 'app-assistente',
  templateUrl: './assistente.component.html',
  styleUrls: ['./assistente.component.css']
})
export class AssistenteComponent{

  mensagem = 'TS Event';

  constructor(private botaoApi: BotaoApiService) { }

 tsEvent(){
   alert(this.mensagem);
 }

 chamaAPI(){
   this.botaoApi.chamaApi().subscribe(
     mensagem => this.mensagem = mensagem.retorno,
     error => console.log(error)
   );
 }

}
