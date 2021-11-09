import { Component, OnInit } from '@angular/core';
import { TabList } from '../shared/TabList.model';

@Component({
  selector: 'app-tab-component',
  templateUrl: './tab-component.component.html',
  styleUrls: ['./tab-component.component.scss'],
  providers: [TabList],
})
export class TabComponentComponent implements OnInit {
  tabSelected: number = 1;

  constructor() {}

  ngOnInit(): void {}

  tabSelectedHandler(id: number) {
    this.tabSelected = id;
  }
}
