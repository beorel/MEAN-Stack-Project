import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // Array to store posts and Subscription to manage observable subscriptions.
  posts: Post[] = [];
  private postsSub: Subscription = new Subscription;

  // Constructor: Injecting the PostsService.
  constructor(public postsService: PostsService) { }

  // OnInit lifecycle hook to initialize posts and subscribe to post updates.
  ngOnInit() {
    this.posts = this.postsService.getPosts(); // Getting posts

    // Subscribing to post updates.
    this.postsSub = this.postsService.getPostUpdatedListener().subscribe((posts: Post[]) => {
      console.log('Updated posts received:', posts);  // Debugging line
      this.posts = posts; // Updating posts on new data
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
