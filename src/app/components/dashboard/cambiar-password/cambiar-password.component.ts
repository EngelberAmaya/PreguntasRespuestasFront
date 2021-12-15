import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {

  cambiarPassword: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.cambiarPassword = this.fb.group({
      passwordAnterior: ['', Validators.required],
      nuevaPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  guardarPassword(){

  }

  camposNoIguales (): boolean {
    return ((this.cambiarPassword.value.nuevaPassword !== this.cambiarPassword.value.confirmPassword)) ? true : false;
  }
}
