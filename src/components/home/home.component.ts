import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { TabOneComponent } from '../tab-one/tab-one.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TopBarComponent, 
    TabOneComponent, 
    CommonModule,
    MatTabsModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tabs = [
    { label: 'Tab 1', component: TabOneComponent }
  ];
  selectedTabIndex = 0;

  addTab() {
    this.tabs.push({ label: `Tab ${this.tabs.length + 1}`, component: TabOneComponent });
    this.selectedTabIndex = this.tabs.length - 1;
  }
}
