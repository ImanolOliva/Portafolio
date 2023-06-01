import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/models/usuarios';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {


  formulario: FormGroup;

  constructor(private mensajeService:MensajesService) { }

  ngOnInit() {
    this.createForm()
  }   
  
  createForm(){
      this.formulario = new FormGroup({
      nombre: new FormControl('',[ Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mensaje: new FormControl('',[ Validators.required]),
      telefono: new FormControl('',[ Validators.required]),    
      })
  }

  enviarDatos() {
    if(this.formulario.valid){
      let usuario = new Usuarios()
    
      usuario.nombre = this.formulario.get('nombre').value!;
      usuario.mensajes = this.formulario.get('mensaje').value!;
      usuario.email = this.formulario.get('email').value!;
      usuario.tel = this.formulario.get('telefono').value!;
  
      this.mensajeService.postMessage(usuario).subscribe({
        next: (data: Usuarios)=>{
          console.log("soy la data" + data);
          this.formulario.reset()
        },
        error: (err) =>{
          console.log(err);
        },
        complete() {
          console.log("dale. Todo ok");
        },
      })
    }
  }
   
}

