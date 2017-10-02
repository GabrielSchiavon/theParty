import { EmpresaProvider } from './../../providers/empresa/empresa';
import { Empresa } from './../../modelos/Empresa';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro-empresa',
  templateUrl: 'cadastro-empresa.html',
})
export class CadastroEmpresaPage {
  empresa: Empresa;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public empresaProvider: EmpresaProvider) {
    empresaProvider.conecta();
    this.empresa = new Empresa();
  }

  salvar() {
    this.empresaProvider.add(this.empresa);
    this.navCtrl.pop();
  }

}
