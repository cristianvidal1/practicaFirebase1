import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuarios } from 'src/app/models/usuarios.interface';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public Usuarios!: Observable<Usuarios[]>
  private usuariosCollection?: AngularFirestoreCollection<Usuarios>

  constructor(private firestore: AngularFirestore) {
    this.usuariosCollection = firestore.collection<Usuarios>('Usuarios');
    this.obtenerUsuarios();
   }

  //Funcion obtener el nombre de las personas
  obtenerUsuarios(){
      this.Usuarios = this.usuariosCollection!.snapshotChanges().pipe(
        map(action => action.map(a => a.payload.doc.data() as Usuarios))
      )
  }

  //Personas Por su Id
  public getUsuariosById(prodId: string){
    return this.firestore.collection('Usuarios').doc(prodId);
  }


  //Actualizar Informacion de las personas
  public actualizarUsuarios(prodId: string, data: any){
    return this.firestore.collection('Usuarios').doc(prodId).set(data);
  }

  //borrar usuarios
  public borrarUsuario(prodId: string): Promise<void>{
    return new Promise(async(resolve, reject) => {
      try {
        const result = await this.usuariosCollection?.doc(prodId).delete();
        resolve(result)
      } catch (error){
        reject(error)
      }
    })
  }

  //Agregar Personas  
  public agregarUsuarios(pers: Usuarios): Promise<void>{
    return new Promise(async(resolve, reject) => {
      try {
        const id = this.firestore.createId();
        pers.id = id;
        const result = await this.usuariosCollection?.doc(id).set(pers);
        resolve(result)
      } catch (err) {
        reject(err)
      }
    })
  }
}
