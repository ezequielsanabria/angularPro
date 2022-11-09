import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';
@Component({
  selector: 'app-experiencia-component',
  templateUrl: './experiencia-component.component.html',
  styleUrls: ['./experiencia-component.component.css']
})
export class ExperienciaComponentComponent implements OnInit {
  Experiencia:any;

  constructor(  private datosPortfolio:PortfolioService ) { }

  ngOnInit(): void {
    
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.Experiencia = data.experiencia;
    })

}

}