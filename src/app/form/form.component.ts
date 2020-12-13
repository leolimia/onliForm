import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private builder: FormBuilder) {
    //puedo elegir control: un solo control, un array de controles o Group: un grupo de controles
    this.signupForm = this.builder.group({
      user: [''],
      //validators<- se importa  de angular 
      password: ['', Validators.required],
      //como tengo que requerrir varias cosas no puedo poner...Validators.required, Validators.email porque se lo tengo que exigir al primerr parametro
      email: ['', Validators.compose([Validators.required, Validators.email])],

    })
  }

  ngOnInit(): void {
  }
  enviar(values: any) {
    console.log(values);
  }

}
