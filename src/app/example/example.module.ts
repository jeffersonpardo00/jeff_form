import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { JeffFormComponent } from './components/jeff-form/jeff-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    JeffFormComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ExampleModule { }
