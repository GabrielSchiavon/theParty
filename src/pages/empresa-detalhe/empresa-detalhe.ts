import { Empresa } from './../../modelos/Empresa';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-empresa-detalhe',
  templateUrl: 'empresa-detalhe.html',
})
export class EmpresaDetalhePage {
  empresa: Empresa;
  mapa: GoogleMap;
  mapaHTML: HTMLElement;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
    this.empresa = this.navParams.get('empresa');
    this.loadMap();
  }

   loadMap() {
    this.mapaHTML = document.getElementById('mapa');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.mapa = this.googleMaps.create(this.mapaHTML, mapOptions);

    // Wait the MAP_READY before using any methods.
    this.mapa.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('mapa is ready!');

        // Now you can use all methods safely.
        this.mapa.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: 43.0741904,
              lng: -89.3809802
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
  }
}
