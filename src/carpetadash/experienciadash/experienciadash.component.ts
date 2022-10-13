import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experienciadash',
  templateUrl: './experienciadash.component.html',
  styleUrls: ['./experienciadash.component.css']
})
export class ExperienciadashComponent implements OnInit {

  trabajos =[
    {trabajo: 'policia', inicio:'04-08-2020', fin:'03-08-2022', detalle:'lorem', },
    {trabajo: 'medico', inicio:'08-11-2001', fin:'01-11-2022', detalle:'un gran detalle para poner aqui'},
    {trabajo: 'programador', inicio:'02-01-2022', fin:'02-02.2022', detalle:'estube en este tranajo 1000 años y nunca me pagaron un peso pero aca estamos luchando por ver que vamos a comer al dia siguente pero bueno dejo de explayarme mas de lo devido y termino de escribir ' },
     
   ];
   
  constructor() { }

  ngOnInit(): void {
  }

}
