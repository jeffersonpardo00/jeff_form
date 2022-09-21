import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona, personaNUll } from 'src/app/models/persona.model';
import { ExampleService } from 'src/app/services/example.service';

@Component({
  selector: 'app-jeff-form',
  templateUrl: './jeff-form.component.html',
  styleUrls: ['./jeff-form.component.scss']
})
export class JeffFormComponent implements OnInit {

  public form: FormGroup;
  public persona: Persona;

  constructor(
    private formBuilder: FormBuilder,
    private exampleService: ExampleService,
  ) {

    this.form = this.formBuilder.group({
      // id: [''],
      nombre:['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      documento: ['', [Validators.required, Validators.minLength(10)]],
      correo: ['', [Validators.required, Validators.email]],
      /*genero: [0, [Validators.required, Validators.min(1), Validators.max(2)]],
      edad: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      pasatiempo: [0, [Validators.required, Validators.min(1), Validators.max(3)]]*/
    });

    this.persona =  personaNUll;

  }

  ngOnInit(): void {
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
    console.log(this.exampleService.getStoragePersona());
  }

}
