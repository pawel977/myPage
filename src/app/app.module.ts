import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { EntryComponentComponent } from './entry-component/entry-component.component';
import { EntryClickService } from './globalServices/entry-click.service';
import { RoutingBoxComponent } from './routing-box/routing-box.component';
import { TechRootComponent } from './roots/tech-root/tech-root.component';
import { PortfolioComponent } from './roots/portfolio/portfolio.component';
import { CvComponent } from './roots/cv/cv.component';
import { KontaktComponent } from './roots/kontakt/kontakt.component';
import { HomeComponent } from './roots/home/home.component';

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
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {path: 'techs', component: TechRootComponent},
      {path: 'portfolio', component: PortfolioComponent},
      {path: 'cv', component: CvComponent},
      {path: 'contackt', component: KontaktComponent}
    ]),
    BrowserAnimationsModule

  ],
  providers: [EntryClickService],
  bootstrap: [AppComponent]
})
export class AppModule { }
