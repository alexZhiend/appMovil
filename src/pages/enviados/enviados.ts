import { Storage } from '@ionic/storage';
import { NuevocorreoPage } from './../nuevocorreo/nuevocorreo';
import { CorreoPage } from './../correo/correo';
import { Correos } from './../../providers/correos/correos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-enviados',
  templateUrl: 'enviados.html',
})
export class EnviadosPage {

  listaCorreos;
  correoPage=CorreoPage;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public correos: Correos,
              public modalCtrl: ModalController,
              public storage: Storage) {
                //this.listaCorreos=correos.enviados;
  }

ionViewWillEnter(){
  this.storage.get('correosEnviados')
  .then((correosEnviados)=>{
    if(correosEnviados == null){
      this.listaCorreos=[];
      this.correos.enviados =[];
    }
    else{
      this.listaCorreos=correosEnviados;
      this.correos.enviados=this.listaCorreos;
    }

    })
  .catch(error => {console.log(error);})
}

verCorreo(correo){
this.navCtrl.push(this.correoPage, correo);
}

nuevoCorreo(){
  let modal = this.modalCtrl.create(NuevocorreoPage, {tipo:'nuevo correo', correo: ''});
modal.present();
}

}
