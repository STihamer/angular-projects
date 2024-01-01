import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  book: any;
  bookId: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BooksService
  ) {}

  ngOnInit(): void {
    /* console.log(this.activatedRoute.snapshot);
    this.bookId = this.activatedRoute.snapshot.paramMap.get('id');
    this.book = this.bookService.books.find((book) => book.id == this.bookId);
    console.log(this.book); */
  }
}
