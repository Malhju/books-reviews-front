import { Component, OnInit } from '@angular/core';
import { BookService } from './../../../services/book.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  books;
  
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks()
    .subscribe(books => {
        this.books = books;
    });
  }

  getPageSection(url) {
      this.bookService.getPageSection(url)
        .subscribe(books => {
            this.books = books;
        });
  }
}
