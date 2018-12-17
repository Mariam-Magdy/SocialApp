import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Post } from '../../Models/post.interface';
import{AngularFireDatabase, FirebaseListObservable}from'angularfire2/database';
import { Camera } from '../../../node_modules/@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html',
})
export class AddPostPage {
  imagePath='';
mypost={}as Post;
PostsRef:FirebaseListObservable<Post[]>
 constructor(public navCtrl: NavController, public navParams: NavParams
 ,
      private database :AngularFireDatabase,
    private camera:Camera,
  private toastCtrl :ToastController) {
       this.PostsRef=this.database.list('Posts');
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPostPage');
  }
 addPost(){
this.PostsRef.push(this.mypost);
this.mypost={}as Post;
this.navCtrl.pop();
  }

  takePhoto(){
   
this.camera.getPicture({
destinationType:this.camera.DestinationType.FILE_URI,
sourceType:this.camera.PictureSourceType.CAMERA,
encodingType:this.camera.EncodingType.JPEG,
correctOrientation:true,
targetHeight:300,
targetWidth:300,
cameraDirection:this.camera.Direction.FRONT,
quality:50,
mediaType:this.camera.MediaType.PICTURE,

})
    .then(ImageData=>{
      this.imagePath=ImageData;
    })
    .catch((error)=> {
      this.toastCtrl.create ({
     message:'Error in Capturing Image :' +error,
     duration:5000
      }).present();
    })

  }
  openGallery(){}
  save(){}
  Cancel(){

    this.navCtrl.pop();
  }
}
