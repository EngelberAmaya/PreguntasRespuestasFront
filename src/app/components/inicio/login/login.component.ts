import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router) { 
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  log(): void{

    const usuario: Usuario = {
      nombreUsuario: this.login.value.usuario,
      password: this.login.value.password
    }

    this.loading = true;

    setTimeout(() => {
      if (usuario.nombreUsuario === 'engelber' && usuario.password === '1234') {
        this.login.reset();
        this.router.navigate(['dashboard']);      
      } else {
        this.toastr.error('Usuario o contraseñas incorrectas', 'Error');
        this.login.reset();
      }
      this.loading = false;
    }, 2000);

  }

}
