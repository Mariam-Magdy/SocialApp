import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '../../Models/post.interface';
import{AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable}from'angularfire2/database';
/**
 * Generated class for the EditPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-post',
  templateUrl: 'edit-post.html',
})
export class EditPostPage {
  mypost={}as Post;
PostsRef:FirebaseObjectObservable<Post>
 constructor(public navCtrl: NavController, public navParams: NavParams
 ,
      private database :AngularFireDatabase) {
        this.mypost=this.navParams.data
       this.PostsRef=this.database.object('Posts/'+this.mypost.$key);
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPostPage');
  }
    EditPost(){
    this.PostsRef.update(this.mypost);
    this.mypost={}as Post;
    this.navCtrl.pop();
      }
    

}
