import { CadastroEmpresaPage } from './../pages/cadastro-empresa/cadastro-empresa';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { EmpresaPage } from './../pages/empresa/empresa';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmpresaProvider } from '../providers/empresa/empresa';

// ----> IMPORTS do FIREBASE <----
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyAmqrQtRNcO9dD0tX3SOb7-ewxc5PMBsMY",
  authDomain: "theparty-de978.firebaseapp.com",
  databaseURL: "https://theparty-de978.firebaseio.com",
  projectId: "theparty-de978",
  storageBucket: "theparty-de978.appspot.com",
  messagingSenderId: "655782744399"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EmpresaPage,
    CadastroEmpresaPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EmpresaPage,
    CadastroEmpresaPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmpresaProvider
  ]
})
export class AppModule {}
