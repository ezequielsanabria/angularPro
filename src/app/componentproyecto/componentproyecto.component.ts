import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-componentproyecto',
  templateUrl: './componentproyecto.component.html',
  styleUrls: ['./componentproyecto.component.css']
})
export class ComponentproyectoComponent implements OnInit {
  Proyectos:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {

    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.Proyectos = data.proyectos;
    })
  }

}
