import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ITabListInfo } from 'src/app/shared/ITabList';
import { TabList } from 'src/app/shared/TabList.model';

@Component({
  selector: 'app-tab-info-component',
  templateUrl: './tab-info-component.html',
  styleUrls: ['./tab-info-component.scss'],
})
export class TabInfoComponent implements OnInit, OnChanges {
  @Input() idTabSelected: number = 1;

  activeTabText: ITabListInfo = {
    text: '',
    title: '',
  };

  constructor(private TabMenuList: TabList) {}

  tabInfo: any;

  ngOnChanges(changes: SimpleChanges) {
    this.tabInfo = this.TabMenuList.tabList.map(
      (el) =>
        changes.idTabSelected.currentValue === this.idTabSelected && el.info
    );
    this.activeTabText = this.tabInfo[changes.idTabSelected.currentValue - 1];
  }

  ngOnInit(): void {
    this.tabInfo = this.TabMenuList.tabList.map(
      (el) => el.id === this.idTabSelected && el.info
    );
    this.activeTabText = this.tabInfo[this.idTabSelected - 1];
  }
}
