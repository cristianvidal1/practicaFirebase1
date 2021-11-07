import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  imagenes: Array<any>= [];
	
	responsiveOptions: Array<any>=[];
  productService: any;
  constructor (){
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
  ngOnInit(): void {
     //Declarando las imagenes para el slider
    this.imagenes = [
      {
        imagen:"https://www.wallpaperup.com/uploads/wallpapers/2019/09/26/1342466/67e8eb8a4d5e6aedaf0505cd661d7993.jpg",
        titulo:"Asado Argentino",
      },
      {
        imagen:"https://www.wallpaperup.com/uploads/wallpapers/2019/09/26/1342466/67e8eb8a4d5e6aedaf0505cd661d7993.jpg",
        titulo:"Asado Argentino",
      },
      {
        imagen:"https://www.wallpaperup.com/uploads/wallpapers/2019/09/26/1342466/67e8eb8a4d5e6aedaf0505cd661d7993.jpg",
        titulo:"Asado Argentino",
      }
    ]
  }

}




