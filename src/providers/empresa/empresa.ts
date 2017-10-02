import { Injectable, ErrorHandler } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EmpresaProvider {
  supercolecao='empresa';
  colecao='default';

  empresas: FirebaseListObservable<any>;
  alterando=false;

  errorHandler = error => console.log('Empresa Service Error', error);

  constructor(protected db: AngularFireDatabase) {

  }

  conecta(){
    this.empresas = this.db.list('/'+this.supercolecao+'/' + this.colecao);
    //console.log("empresas depois de conectar",this.empresas);
  }

  getAll() {
    return this.empresas;
  }

  add(objeto) {
    delete objeto.novo;
    this.empresas.push(objeto);
  }

  update(objeto) {
    console.log(objeto)
    let o=JSON.parse(JSON.stringify(objeto));
    delete o.$key;
    this.empresas.update(objeto.$key,o);
  }

  delete(id) {
    this.empresas.remove(id);
  }

  desconecta(){
    this.empresas.$ref.off();
  }

}
