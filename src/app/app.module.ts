import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { EntryComponentComponent } from './entry-component/entry-component.component';
import { EntryClickService } from './globalServices/entry-click.service';
import { RoutingBoxComponent } from './routing-box/routing-box.component';
import { TechRootComponent } from './roots/tech-root/tech-root.component';
import { PortfolioComponent } from './roots/portfolio/portfolio.component';
import { CvComponent } from './roots/cv/cv.component';
import { KontaktComponent } from './roots/kontakt/kontakt.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    EntryComponentComponent,
    RoutingBoxComponent,
    TechRootComponent,
    PortfolioComponent,
    CvComponent,
    KontaktComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [EntryClickService],
  bootstrap: [AppComponent]
})
export class AppModule { }
