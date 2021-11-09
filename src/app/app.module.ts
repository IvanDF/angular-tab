import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabComponentComponent } from './tab-component/tab-component.component';
import { TabItemComponentComponent } from './tab-component/tab-item-component/tab-item-component.component';
import { NewTabComponentComponent } from './tab-component/new-tab-component/new-tab-component.component';
import { TabInfoComponent } from './tab-component/tab-info-component/tab-info-component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponentComponent,
    TabItemComponentComponent,
    NewTabComponentComponent,
    TabInfoComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
