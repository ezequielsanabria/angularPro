import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  Educacion:any;
  
  constructor( private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {

    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.Educacion = data.estudios;
    })
  }

  }
