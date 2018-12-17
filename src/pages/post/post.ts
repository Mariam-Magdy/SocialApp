import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ActionSheetController} from 'ionic-angular';
import { AddPostPage } from '../add-post/add-post';
//import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Post } from '../../Models/post.interface';
import{AngularFireModule}from'angularfire2';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/take';


import{AngularFireDatabase, FirebaseListObservable}from'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
 PostsRef:FirebaseListObservable<Post[]>
 PostList:Post[];
 
 

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private ActionSheetCtrl:ActionSheetController,
    private database :AngularFireDatabase,
    public counter = 0,
    public likeState = false) {
 
    this.PostsRef=this.database.list('Posts');
    this.PostsRef.subscribe(( Itmes)=>{
    this.PostList=Itmes;
    });

  }
  
  onClick(){
    if (this.likeState == false){
      this.counter ++ ;
    } else {
      this.counter -- ;
    }
    this.likeState = !this.likeState;
  }
  
 goToAdd(){
  this.navCtrl.push(AddPostPage)
}

onItemClick(post:Post){
this.ActionSheetCtrl.create(
  {
    title:post.postText,
    buttons:[
      {
        text:'Edit',
        handler:()=>{
          this.navCtrl.push('EditPostPage',post);
        }
      },
      {
        text:'Delete',
        handler:()=>{
          this.PostsRef.remove(post.$key);
        }
      },
      {
        text:'Cancel',
        handler:()=>{
          console.log('Cancel clicked');
        }
      }
    ]
  }
).present();

}


}
