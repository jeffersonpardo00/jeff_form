import { Injectable } from '@angular/core';
import { Persona, personaNUll } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})

export class ExampleService {

  public localVariableName: string;

  constructor() {
    this.localVariableName = 'jeff_form_persona';
  }

  public guardarPersona (persona : Persona){
    try{
      // const localStorageItem = localStorage.getItem(this.localVariableName);
      localStorage.setItem(this.localVariableName, JSON.stringify(persona));
    }catch(error){
      console.log(error);
    }
  }

  public getStoragePersona() :any {
    const localStorageItem = localStorage.getItem(this.localVariableName);
    if(localStorageItem)
    return JSON.parse(localStorageItem);
    else return {};
  }

}
