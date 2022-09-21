import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Persona, personaNUll } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private persona: Persona;
  private personaStorage: BehaviorSubject<Persona>;
  private personaStorage$: Observable<Persona>;

  constructor() {
    this.persona = personaNUll;
    this.personaStorage = new BehaviorSubject<Persona>(personaNUll);
    this.personaStorage$ = new Observable<Persona>;
  }



}
