import { Component } from '@angular/core'
import { BooksService } from '../books/service/books.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authorId: string = '';
  author: any = null;
  errorMessage: string = '';

  constructor(private booksService: BooksService) {}

  getAuthor() {
    this.booksService.getAuthorById(this.authorId).subscribe({
      next: (data) => {
        this.author = data;
        this.errorMessage = '';
      },
      error: () => {
        this.errorMessage = 'Author not found';
        this.author = null;
      }
    });
  }
}
