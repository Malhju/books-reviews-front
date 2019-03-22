import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'book-reviews';
  books;

  constructor(private bookService: BookService) {}

  ngOnInit() {
      this.bookService.getBooks()
        .subscribe(books => {
            this.books = books;
        });
  }
}
