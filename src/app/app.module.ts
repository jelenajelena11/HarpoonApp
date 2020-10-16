import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AdvisorsComponent } from './advisors/advisors.component';
import { InvestorsComponent } from './investors/investors.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    PortfolioComponent,
    AdvisorsComponent,
    InvestorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
