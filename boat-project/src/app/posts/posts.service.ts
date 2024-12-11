import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getBoatData(inputName: HTMLInputElement, inputCompany: HTMLInputElement, inputLength: HTMLInputElement, inputRange: HTMLInputElement, inputRecharge: HTMLInputElement, inputImage: HTMLInputElement){
    console.log(inputName.value);
    console.log(inputCompany.value);
    console.log(inputLength.value);
    console.log(inputRange.value);
    console.log(inputRecharge.value);
    console.log(inputImage.value);
  }
}
