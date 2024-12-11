import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-create',
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor(private postsService: PostsService){}

  getBoatData(inputName: HTMLInputElement, inputCompany: HTMLInputElement, inputLength: HTMLInputElement, inputRange: HTMLInputElement, inputRecharge: HTMLInputElement, inputImage: HTMLInputElement){
    this.postsService.getBoatData(inputName, inputCompany, inputLength, inputRange, inputRecharge, inputImage);
  }

}
