import { Component, OnInit, Input } from '@angular/core';
import { EntryClickService } from './globalServices/entry-click.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Pawel Sawicki';

  constructor(private entryS: EntryClickService) {
    
  }

  ngOnInit(): void {
  }

  isHello(){
    return this.entryS.getValueOfClick();
  }

}
