import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrillHoleContainerComponent } from './drill-hole-container/drill-hole-container.component';
import { DrillHoleDetailComponent } from './drill-hole-detail/drill-hole-detail.component';

const routes: Routes = [
  {
    path: "surveys",
    component: DrillHoleContainerComponent,
    children: [
    {
      path: ":id",
      component: DrillHoleDetailComponent
    }]
  },
  { path: "**", redirectTo: "surveys" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
