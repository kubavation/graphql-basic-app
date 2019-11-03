import { LaunchDetailsComponent } from './launches/component/launch-details/launch-details.component';
import { LaunchListComponent } from './launches/component/launch-list/launch-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'launches', component: LaunchListComponent},
  {path: 'launches/:id', component: LaunchDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
