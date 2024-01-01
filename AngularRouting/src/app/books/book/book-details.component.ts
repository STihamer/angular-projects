import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  book: any;
  bookId: any;
  RouteParamsObs: any;
  editMode: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BooksService
  ) {}

  ngOnInit(): void {
    /*  this.bookId = this.activatedRoute.snapshot.paramMap.get('id');
    this.book = this.bookService.books.find((book) => book.id == this.bookId);
    console.log(this.book); */

    this.RouteParamsObs = this.activatedRoute.paramMap.subscribe((test) => {
      this.bookId = test.get('id');
      this.book = this.bookService.books.find((book) => book.id == this.bookId);
    });
    this.activatedRoute.queryParams.subscribe(
      (params) => (this.editMode = Boolean(params['edit']))
    );
  }

  ngOnDestroy(): void {
    this.RouteParamsObs.unsubscribe();
  }
}
