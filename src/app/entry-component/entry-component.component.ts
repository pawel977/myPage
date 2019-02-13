import { Component, OnInit } from '@angular/core';
import { EntryClickService } from '../globalServices/entry-click.service';
@Component({
  selector: 'app-entry-component',
  templateUrl: './entry-component.component.html',
  styleUrls: ['./entry-component.component.scss']
})
export class EntryComponentComponent implements OnInit {

  constructor(private entryS: EntryClickService ) { }

  ngOnInit() {
  }

  enter(){
    this.entryS.setValueOfClick();
  }

}
