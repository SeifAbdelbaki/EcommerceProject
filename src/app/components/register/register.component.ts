import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isLoading:boolean = false

  errorMsg: string =""

  constructor(private _AuthService:authService, private _router:Router){}

  registerForm: FormGroup= new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),

    email: new FormControl("",[Validators.required, Validators.email]),

    password: new FormControl ("",[Validators.required, Validators.pattern(/^\w{6,}$/)]),

    rePassword: new FormControl("",[Validators.required, Validators.pattern(/^\w{6,}$/)]),

    phone: new FormControl("",[Validators.required, Validators.pattern(/^01[125][0-9]{8}$/)])
    },{validators : this.repassConfirm})
  
  handleRegisterForm(){
    this.isLoading = true
    console.log(this.registerForm);
    
    if(this.registerForm.valid)
    this._AuthService.signUp(this.registerForm.value).subscribe({ 
  next:(res)=>{
  console.log(res);
  if(res.message == "success"){
  this.isLoading = false
  this._router.navigate(['/login'])
  }
},

error:(err)=>{
  console.log(err);
  this.isLoading = false
  this.errorMsg = err.error.message
}
  })
  }

  repassConfirm(g:any){
    if (g.get('password').value === g.get('rePassword').value){
      return null
    }

    else{
      g.get('rePassword').setErrors({'mismatch': "not-matched"})
      return {'mismatch': "not-matched"}
    }
  }
}
