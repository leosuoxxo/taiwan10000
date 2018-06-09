import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() title: string;
  @Input() intro: string;
  @Input() subintro: string;
  @Input() imgurl: string;
  constructor() {}

  ngOnInit() {}
}
