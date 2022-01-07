import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../model/Book';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
  book: Book ;

  id: number;

  constructor(private _bookService: BookService,
              private _router: Router,
              private _activeRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this._activeRouter.paramMap.subscribe(bookId => {
      const id  = +bookId.get('id');
      console.log('id=== ', id);
      this._bookService.getBook(id).subscribe(book => {
        this.book = book;
        console.log('category voi id', this.book);
      });
    });
  }

  deleteBook() {
    this._bookService.deleteBook(this.book.id).subscribe(() => {
    });
  }

}
