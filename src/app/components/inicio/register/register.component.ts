import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.register = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  registrarUsuario(): void {

  }

  camposNoIguales (): boolean {
    return ((this.register.value.password !== this.register.value.confirmPassword)) ? true : false;
  }

}
