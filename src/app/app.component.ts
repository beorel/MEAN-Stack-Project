import { Component} from '@angular/core';

import { Post } from './posts/post.model'
// interface Post {
//   title: String;
//   content: String;
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts: Post [] = []

  onPostAdded(post: Post){
    console.log('Received post:', post);  // Debugging line
    this.storedPosts.push(post);
    console.log('Stored posts:', this.storedPosts);  // Debugging line

    console.log('Stored posts before sending to child:', this.storedPosts);

  }


}
