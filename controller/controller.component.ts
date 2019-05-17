import {Component, OnInit, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment} from '../model/model.module';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
@Injectable()
export class ControllerComponent implements OnInit {

  defaultComments: Comment[];
  selectedComment: Comment[];

  constructor(private http: HttpClient) {
  }


  ngOnInit() {

    console.log(this.getData());
  }

  getData() {
    this.http.get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((data: Comment[]) => this.defaultComments = data);
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
      console.log(a[field], '  ', b[field]);
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
