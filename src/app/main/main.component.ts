import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
 private isClickedButton = false;
  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  clicked(){
    this.isClickedButton = true;
  }

  isClicked(){
    return this.isClickedButton;
  }
}
