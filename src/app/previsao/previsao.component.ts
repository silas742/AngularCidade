import { Component, Input } from '@angular/core';
import { Previsao } from '../model/previsao';

@Component({
  selector: 'app-previsao',
  templateUrl: './previsao.component.html',
  styleUrls: ['./previsao.component.css']
})
export class PrevisaoComponent  {

  constructor() { }
@Input() previsao:Previsao;

}
