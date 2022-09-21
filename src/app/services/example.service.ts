import { Injectable } from '@angular/core';
import { Persona, personaNUll } from '../models/persona.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExampleService {

  public localVariableName: string;
  private personaGuardada: BehaviorSubject<Persona>;
  public personaGuardada$: Observable<Persona>;

  constructor() {
    this.localVariableName = 'jeff_form_persona';
    this.personaGuardada = new BehaviorSubject<Persona>(personaNUll);
    this.personaGuardada$ = this.personaGuardada.asObservable();
  }

  public guardarPersona (persona : Persona){
    try{
      // const localStorageItem = localStorage.getItem(this.localVariableName);
      localStorage.setItem(this.localVariableName, JSON.stringify(persona));
      this.personaGuardada.next(this.getStoragePersona());
    }catch(error){
      console.log(error);
    }
  }

  private getStoragePersona() :any {
    const localStorageItem = localStorage.getItem(this.localVariableName);
    if(localStorageItem)
    return JSON.parse(localStorageItem);
    else return {};
  }

}
