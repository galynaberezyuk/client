import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  http!: HttpClient;

  constructor() {
    
   }
     getComments() {
    return this.http.get<Comment[]>('/api/comments');
  }
  
  submitComment(comment: Comment) {
    return this.http.post('/api/comments', comment);
  }
  

}
