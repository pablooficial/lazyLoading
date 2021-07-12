import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  formEstudos = this.fb.group({
    email: [''],
    senha: [''],
    lembrar: [''],
  })


  qualquerNome: any;
  condition = false;




  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log('MEU FORMULARIO:', this.formEstudos.value)
    this.qualquerNome = this.formEstudos.value.email;
    if(this.qualquerNome.length > 1){
      this.condition = true;
      this.router.navigate(['client//nav']);
    }
  }



}
