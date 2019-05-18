import {Component, OnInit, Output, Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment} from '../model/model.module';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
@Injectable()
export class ControllerComponent implements OnInit {

  @Output() inputClean = new EventEmitter<any>();
  defaultComments: Comment[];
  selectedComment: Comment[];
  fieldForSearch: string;
  filtredComments: Comment[];
  usedComments: Comment[];
  constructor(private http: HttpClient) {
  }


  ngOnInit() {
    let fieldForSearch = 'id';
    this.getData();
  }

  getData() {
    this.http.get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((data: Comment[]) => {
        this.defaultComments = data;
        this.usedComments = data;
      });
  }

  onInputChanged(value) {

    const comments = this.defaultComments;
    if (value) {
   this.usedComments = comments.filter((itemValue) => {
      return value == itemValue[this.fieldForSearch];
    });
  } else {
      this.usedComments = comments;
    }
console.log('this.filtredComments=', this.usedComments);
     this.inputClean.emit('Null');
  }

  onFieldSelected(field) {
    this.fieldForSearch = field;
  }

  onCommentSelect(comment) {
    this.selectedComment = comment;
  }

  onDescendingSort(field) {
    this.sort(field, 1);
  }

  onAscendingSort(field) {
    this.sort(field, 0);
  }

  sort(field: any, flag: number) {
    let i;
    let j;
    (flag) ? [i, j] = [1, -1] : [i, j] = [-1, 1];
    this.defaultComments.sort(function (a, b) {
      if (a[field] < b[field]) {
        return i;
      }
      if (a[field] > b[field]) {
        return j;
      }
      return 0;
    });

  }
}
