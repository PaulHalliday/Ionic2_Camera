import { Component } from '@angular/core';
import { Camera } from 'ionic-native'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  takePicture() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 2000,
      targetHeight: 2000,
      quality: 100,
      allowEdit: true,
      correctOrientation: false,
      saveToPhotoAlbum: true,
      mediaType: 0
    }).then((imageData) => {
      let cameraImageSelector = document.getElementById('camera-image');
      let image = "data:image/jpeg;base64," + imageData;
      cameraImageSelector.setAttribute('src', image);
    }, (err) => {
      console.log(err);
    });
  }

  takePictureFromGallery() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 2000,
      targetHeight: 2000,
      quality: 100,
      allowEdit: true,
      correctOrientation: false,
      saveToPhotoAlbum: true,
      mediaType: 0,
      sourceType: 0
    }).then((imageData) => {
      let cameraImageSelector = document.getElementById('camera-image');
      let image = "data:image/jpeg;base64," + imageData;
      cameraImageSelector.setAttribute('src', image);
    }, (err) => {
      console.log(err);
    });
  }

}
