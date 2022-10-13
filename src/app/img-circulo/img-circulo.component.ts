import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-img-circulo',
  templateUrl: './img-circulo.component.html',
  styleUrls: ['./img-circulo.component.css']
})
export class ImgCirculoComponent implements OnInit {
  miPortfolio:any;
  constructor( private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio = data;
    })
  }

}
