import { Component, OnInit, Input, Injectable, Output, EventEmitter} from '@angular/core';
import { Comment } from '../model/model.module';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() comments: Comment[];
  constructor() { }

  ngOnInit() {
  }

}
