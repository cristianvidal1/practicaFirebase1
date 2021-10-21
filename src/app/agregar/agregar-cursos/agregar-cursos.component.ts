import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-agregar-cursos',
  templateUrl: './agregar-cursos.component.html',
  styleUrls: ['./agregar-cursos.component.css']
})
export class AgregarCursosComponent implements OnInit {
  //Propiedad Cursos formulario
  public newCursoForm = new FormGroup({

  });

//Para formulario
  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
  }

}
