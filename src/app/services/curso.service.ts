import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';



import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from '../models/curso.interface';

@Injectable({
    providedIn: 'root'
})

export class CursoService{
    public Cursos!: Observable<Curso[]>
    public cursosCollection?: AngularFirestoreCollection<Curso>

    constructor(private firestore: AngularFirestore){
        this.cursosCollection = firestore.collection<Curso>('Cursos');
        this.obtenerCursos();
    }

    //Obtener cada curso
    obtenerCursos(){
        this.Cursos = this.cursosCollection!.snapshotChanges().pipe(
            map(action => action.map(a => a.payload.doc.data() as Curso))
        )
    }

    //Cursos por su Id
    public getCursosById(Id: string){
        return this.firestore.collection('Cursos').doc(Id);
    }

    //Actualizar Cursos 
    public actualizarCursos(Id: string, data: any){
        return this.firestore.collection('Cursos').doc(Id).set(data)
    }

    //Borrar Cursos
    public eliminarCursos(Id: string): Promise<void>{
        return new Promise(async(resolve, reject) => {
            try {
                const borrado = await this.cursosCollection?.doc(Id).delete();
                resolve (borrado);
            } catch (error){
                reject (error)
            }
        })
    }

    //Agregar Cursos nuevos
    public agregarCursos(curs: Curso): Promise <void>{
        return new Promise(async(resolve, reject)=>{
            try {
                const id = this.firestore.createId();
                curs.Id = id;
                const resultado = await this.cursosCollection?.doc(id).set(curs);
                resolve(resultado)
            } catch(error){
                reject (error)
            }       
        })
    }
}