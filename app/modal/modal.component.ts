import { Component, OnInit, Input } from '@angular/core';
import {Comment} from '../model/model.module';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() comment: Comment;
  constructor() { }

  ngOnInit() {
  }

}
