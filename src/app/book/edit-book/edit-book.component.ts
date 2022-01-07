import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/Book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  book: Book ;

  id: number;

  constructor(private _bookService: BookService,
              private _router: Router,
              private _activeRouter: ActivatedRoute) {
  }
  ngOnInit(): void {
    this._activeRouter.paramMap.subscribe(bookId => {
      const id  = +bookId.get('id');
      console.log('id=== ', id);
      this._bookService.getBook(id).subscribe(book => {
        this.book = book;
        console.log('category voi id', this.book);
      });
    });
  }

  updateBook() {
    this._bookService.updateBook(this.book.id, this.book).subscribe(() => {
    });
  }
}
