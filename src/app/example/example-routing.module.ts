import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JeffFormComponent } from './components/jeff-form/jeff-form.component';

const routes: Routes = [
  {
    path: '',
    component: JeffFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
