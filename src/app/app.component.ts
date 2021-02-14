import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
tabName =['DESCRIPTION','INSIGHT','APPLICANTS','NOTIFICATIONS'];
selectedTab=0;
  constructor() {}

  ngOnInit() {
    
  }

  itemClicked(i:number) {
    this.selectedTab = i;
  }
}
