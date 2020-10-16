import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

import { from } from 'rxjs';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AdvisorsComponent } from './advisors/advisors.component';
import { InvestorsComponent } from './investors/investors.component';

const routes: Routes = [
  {path: '', component:MainComponent},
  {path: '', component:AboutComponent},
  {path: '', component:PortfolioComponent},
  {path: '', component:AdvisorsComponent},
  {path: '', component:InvestorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
