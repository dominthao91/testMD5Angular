import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/Book';
import {Router} from '@angular/router';
import {BookService} from '../../service/book.service';
@Component({
  selector: 'app-creat-book',
  templateUrl: './creat-book.component.html',
  styleUrls: ['./creat-book.component.scss']
})
export class CreatBookComponent implements OnInit {
  book: Book = {};

  constructor(private _bookService: BookService,
              private _router: Router) { }

  ngOnInit() {
  }

  createBook() {
    this._bookService.addBook(this.book).subscribe(
      (book: Book) => {
        this._router.navigate(['']);
        console.log(book);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
