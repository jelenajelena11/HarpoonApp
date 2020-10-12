import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import { MainComponent } from './main/main.component';
import {FooterComponent} from './footer/footer.component';
import { AboutComponent } from './about/about.component';

  import { from } from 'rxjs';

const routes: Routes = [
  {path: '', component:HeaderComponent},
  {path: '', component:MainComponent},
  {path: '', component:FooterComponent},
  {path: '', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
