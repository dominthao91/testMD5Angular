import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/Book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent implements OnInit {

  book: Book = {};

  id: number;

  constructor(private _bookService: BookService,
              private _router: Router,
              private _activeRouter: ActivatedRoute) {
    this.id = this._activeRouter.snapshot.params[' id'];
    this._bookService.getBook(this.id).subscribe(data => {
      this.book = data;
    });
  }

  ngOnInit() {
  }


}
