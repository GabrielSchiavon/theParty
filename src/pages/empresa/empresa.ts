import { CadastroEmpresaPage } from './../cadastro-empresa/cadastro-empresa';
import { EmpresaProvider } from './../../providers/empresa/empresa';
import { Empresa } from './../../modelos/Empresa';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-empresa',
  templateUrl: 'empresa.html',
})
export class EmpresaPage {
  empresas;

  constructor(public navCtrl: NavController, public navParams: NavParams, public empresaProvider: EmpresaProvider) {
    empresaProvider.conecta();
  }

  ngOnInit() {
    this.atualiza();
    console.log(this.empresas);
  }

  atualiza() {
    this.empresas = this.empresaProvider.getAll();
  }

  addEmpresa() {
    this.navCtrl.push(CadastroEmpresaPage);
  }

  exibirInformacao(empresa) {
    
  }
}
