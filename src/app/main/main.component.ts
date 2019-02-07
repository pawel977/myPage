import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
 private isClickedButton = true;
  constructor() { }

  ngOnInit() {
  }
  

  clicked(){
    this.isClickedButton = true;
  }

  isClicked(){
    return this.isClickedButton;
  }
}
