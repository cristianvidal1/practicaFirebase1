import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso.interface';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-sexto-primera',
  templateUrl: './sexto-primera.component.html',
  styleUrls: ['./sexto-primera.component.css']
})
export class SextoPrimeraComponent implements OnInit {
  
  public cursos!: Curso[]; //Declarando una colección de cursos
  constructor(private cursosService: CursoService) { }//Inyectamos el servicio

  ngOnInit(): void {
    this.cursosService.Cursos.subscribe(respuesta=>{
      this.cursos = respuesta;//Obtenemos los cursos desde Firest
    });
  }

}
