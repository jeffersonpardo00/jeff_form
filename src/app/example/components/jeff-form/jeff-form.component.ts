import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Persona, personaNUll, generosPersona, pasatiemposPersona } from 'src/app/models/persona.model';
import { ExampleService } from 'src/app/services/example.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-jeff-form',
  templateUrl: './jeff-form.component.html',
  styleUrls: ['./jeff-form.component.scss']
})
export class JeffFormComponent implements OnInit {

  public form: FormGroup;
  public persona: Persona;
  public personaGuardada$: Observable<Persona>;
  public generos: string[];
  public pasatiempos: string[];
  public firstTime: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private exampleService: ExampleService,
    public dialog: MatDialog,
  ) {

    this.form = this.formBuilder.group({
      // id: [''],
      nombre:['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      documento: ['', [Validators.required, Validators.minLength(10)]],
      correo: ['', [Validators.required, Validators.email]],
      genero: [0, [Validators.required]],
      edad: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      pasatiempo: [0, [Validators.required]],
    });

    this.persona =  personaNUll;
    this.personaGuardada$ = exampleService.personaGuardada$;
    this.firstTime = true;
    this.personaGuardada$.subscribe(
      persona => {

        this.persona = persona;

        if(!this.firstTime){
          this.openDialog();
        }
        this.form.reset();
        this.firstTime = false;
      }
    );
    this.generos = generosPersona;
    this.pasatiempos = pasatiemposPersona;
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MessageComponent, {
      width: '250px',
      data: this.persona,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  get nombreField (): any {
    return this.form.get('nombre');
  }

  public Field( fName:string ): any {
    return this.form.get(fName);
  }

  saveData(event: Event): any {
    event.preventDefault();
    this.persona = this.form.value;
    this.exampleService.guardarPersona(this.persona);
  }

}
