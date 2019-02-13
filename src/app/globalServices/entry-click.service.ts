import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntryClickService {
  valueOfclickEntry: boolean = false;
  constructor() { }

  setValueOfClick() {
    this.valueOfclickEntry = false;
  }
  getValueOfClick(){
    return this.valueOfclickEntry;
  }
}
