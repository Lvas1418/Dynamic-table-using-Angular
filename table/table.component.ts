import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Comment} from '../model/model.module';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],

})
export class TableComponent implements OnInit {
  @Input() comments: Comment[];
  @Output() commentSelectEvent = new EventEmitter<Comment>();
  @Output() fieldDescendingSortEvent = new EventEmitter<Comment>();
  @Output() fieldAscendingSortEvent = new EventEmitter<Comment>();

  constructor() {

  }

  ngOnInit() {
  }

  selectComment(comment: Comment) {

    this.commentSelectEvent.emit(comment);

  }

  descendingSorting(field: any) {

    this.fieldDescendingSortEvent.emit(field);
  }

  ascendingSorting(field: any) {

    this.fieldAscendingSortEvent.emit(field);

  }
}
