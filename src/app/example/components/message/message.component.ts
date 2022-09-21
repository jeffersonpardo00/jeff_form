import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Persona, generosPersona, pasatiemposPersona } from 'src/app/models/persona.model';
import { JeffFormComponent } from '../jeff-form/jeff-form.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  public personaView: any;
  constructor(
    public dialogRef: MatDialogRef<JeffFormComponent>,
    @Inject(MAT_DIALOG_DATA) public persona: Persona,
  ) {
  }

  ngOnInit(): void {
    this.personaView = {
      ...this.persona,
      genero: generosPersona[this.persona.genero],
      pasatiempo: pasatiemposPersona[this.persona.pasatiempo],
    };

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
