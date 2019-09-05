import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'overview-subtitle',
  templateUrl: './overview-subtitle.component.html',
  styleUrls: ['./overview-subtitle.component.scss']
})
export class OverviewSubtitleComponent implements OnInit {
  @Input() status: string;
  @Input() lastUpdate: string;
  constructor() { }

  ngOnInit() {
  }

}
