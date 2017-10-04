import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpresaDetalhePage } from './empresa-detalhe';
import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    EmpresaDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(EmpresaDetalhePage),
  ],
  providers: [
    GoogleMaps
  ]
})
export class EmpresaDetalhePageModule {}
