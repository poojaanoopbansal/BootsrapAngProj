import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  checkboxUIElements: string[];
  removeCheckBox: string[] = ["Jacket", "Belt"];
  unPackItem: string;
  item: string;
  packItem: string;
  isFocus: boolean;
  isError: boolean;

  constructor() {}

  ngOnInit() {
    this.checkboxUIElements = [
      'Pants',
      'Macbook',
      'Hat',
      'T-shirt'
    ];
  }

  itemChange(event: any){
    this.isError = event?false:true;

  }

  addItem() {
    if(this.item) {
      this.checkboxUIElements.push(this.item);
    } else {
      this.isError = true;
    }
  }
  onFocus(){
    this.isFocus=true;
  }

  removeFruit(index: number, itemNo: number) {
    if (itemNo === 1) {
      this.removeCheckBox.push(this.checkboxUIElements[index]);
      this.checkboxUIElements.splice(index, 1);
    } else {
      this.checkboxUIElements.push(this.removeCheckBox[index]);
      this.removeCheckBox.splice(index, 1);
    }
  }
}
