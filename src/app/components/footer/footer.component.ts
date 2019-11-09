import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  nombre:string;
  anio:number;

  constructor() {
    this.nombre = "Miguel Rabanal Serrano";
    this.anio = new Date().getFullYear();
  }
}
