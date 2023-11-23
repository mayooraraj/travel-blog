import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TravelTipsComponent } from './travel-tips/travel-tips.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'travel',component:TravelTipsComponent},
{path:'resources',component:ResourcesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
