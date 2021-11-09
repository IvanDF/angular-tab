import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ITabList, ITabListMenu } from 'src/app/shared/ITabList';
import { TabList } from 'src/app/shared/TabList.model';

@Component({
  selector: 'app-tab-item-component',
  templateUrl: './tab-item-component.component.html',
  styleUrls: ['./tab-item-component.component.scss'],
})
export class TabItemComponentComponent implements OnInit {
  idTab: number = 0;
  itemsList: ITabListMenu[] = [];
  tabList: ITabList[] = [];

  @Output('tabSelected') tabSelectedId: EventEmitter<number> =
    new EventEmitter();

  constructor(private TabMenuList: TabList, private titleService: Title) {}

  ngOnInit(): void {
    this.TabMenuList.tabList.map((el: any) => this.itemsList.push(el.menu));
    this.TabMenuList.tabList.map((el: any) => this.tabList.push(el));
  }

  changePageTitle(text: string) {
    this.titleService.setTitle(text);
  }

  getTabSelected(id: number, i: number) {
    this.tabSelectedId.emit(id);
    this.idTab = i;
  }
}
