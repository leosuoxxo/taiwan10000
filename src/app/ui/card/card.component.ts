import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() imgurl: string;
  @Input() intro: string;
  @Input() place: string;
  @Input() name: string;
  constructor() {}

  ngOnInit() {}
}
