import { Component, EventEmitter, Output } from '@angular/core';

import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
// Component to manage post creation.
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  // Event emitter for new posts.
  @Output() postCreated = new EventEmitter<Post>();

  //initializes the component and injects the PostsService.
  constructor(private postsService: PostsService) { }

  // Handle form submission.
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return; // Validate form.
    }
    // Add new post and reset the form.
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
