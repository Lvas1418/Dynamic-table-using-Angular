import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {Comment} from '../model/model.module';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
@Injectable()

export class ToolBarComponent implements OnInit {

  @Output() findNearestEvent = new EventEmitter<Comment>();
  @Output() setFieldEvent = new EventEmitter<Comment>();

  constructor() {
  }

  ngOnInit() {
  }

  findNearest(currentValue) {
    this.findNearestEvent.emit(currentValue);
  }

  setField(field) {
    this.setFieldEvent.emit(field);
  }


}
