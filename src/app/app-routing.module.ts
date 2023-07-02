import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Index/index/index.component';

const routes: Routes = [
  { path: 'Index', component: IndexComponent, pathMatch: "full"}, 
  { path: "**", redirectTo: 'Index', pathMatch: "full"  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
