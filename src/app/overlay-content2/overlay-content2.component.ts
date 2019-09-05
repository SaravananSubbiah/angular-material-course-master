import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'overlay-content2',
  templateUrl: './overlay-content2.component.html',
  styleUrls: ['./overlay-content2.component.scss']
})
export class OverlayContent2Component implements OnInit {
  @Input() RFIClosed: boolean;
  constructor() { }

  ngOnInit() {
  }

}
