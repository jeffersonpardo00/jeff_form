import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Persona, personaNUll } from 'src/app/models/persona.model';
import { JeffFormComponent } from '../jeff-form/jeff-form.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<JeffFormComponent>,
    @Inject(MAT_DIALOG_DATA) public persona: Persona,
  ) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
