import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  Habilidad:any;
  constructor(private datosPortfolio:PortfolioService) { }

 
  ngOnInit(): void {
    
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.Habilidad = data.habilidades;
    })

};
}
