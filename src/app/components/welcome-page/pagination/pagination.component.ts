import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() books;
  @Output() url = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handleClick(url: string) {
      this.url.emit(url);
  }
}
