import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../api.service';
import { EmailDirective } from '../../directives/email.directive';
import { DOMAINS } from '../../constants';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, EmailDirective],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  domains = DOMAINS;

  constructor(private apiService: ApiService){}

  login(form: NgForm){
    
    if(!form.invalid){
      return;
    }
  }
}
