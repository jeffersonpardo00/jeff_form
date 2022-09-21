import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { JeffFormComponent } from './components/jeff-form/jeff-form.component';


@NgModule({
  declarations: [
    JeffFormComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }
