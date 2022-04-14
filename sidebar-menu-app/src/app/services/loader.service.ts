import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private loadingController: LoadingController) { }

  showOrHideLoader(){
    this.loadingController.create({
      message: 'Loader auto hide after 2s',
      backdropDismiss: true,
      cssClass:'custom-loader-class'
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => {
        console.log('loading dismiss after 2s', dis)
      })
    })
  }

  showLoader(){
    this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    }).then((res) => res.present())
  }

  hideLoader(){
    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed', res);      
    }).catch((error: Error) => console.log('error', error));
  }
}
