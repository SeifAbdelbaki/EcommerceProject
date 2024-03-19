import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  isLoading:boolean = false

  errorMsg: string =""

  constructor(private _AuthService:authService, private _router:Router){}

  LoginForm: FormGroup= new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),

    password: new FormControl ("",[Validators.required, Validators.pattern(/^\w{6,}$/)]),
  })
  
  handleLoginForm(){
    this.isLoading = true
    if(this.LoginForm.valid)
    this._AuthService.signIn(this.LoginForm.value).subscribe({ 
  next:(res)=>{
  console.log(res);
  if(res.message == "success"){
  this.isLoading = false
  localStorage.setItem('_token', res.token)
  this._AuthService.getToken()
  this._router.navigate(['/home'])
  }
},

error:(err)=>{
  console.log(err);
  this.isLoading = false
  this.errorMsg = err.error.message
}
  })
  }

  forgetPasswordForm : FormGroup = new FormGroup({
    email : new FormControl("", [Validators.required, Validators.email])
  })

  showForgetForm: boolean = true
  showVerificationForm: boolean = false
  showResetPasswordForm: boolean = false

  errorMsgForgetForm : string = ""
  handleForgetPasswordForm(){ 
    if(this.forgetPasswordForm.valid){
      this._AuthService.forgetpassword(this.forgetPasswordForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          this.showForgetForm = false
          this.showVerificationForm = true
        },
        error:(err)=>{
          console.log(err);
          this.errorMsgForgetForm = err.error.message
        }
      })
    }

  }

  
  verificationCodeForm : FormGroup = new FormGroup({
    email : new FormControl("", [Validators.required])
  })

  errorMsgVerificationForm : string = ""
  handleVerificationCodeForm(){ 
    if(this.verificationCodeForm.valid){
      this._AuthService.verifyCode(this.verificationCodeForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          this.showVerificationForm = false
          this.showResetPasswordForm = true
        },
        error:(err)=>{
          console.log(err);
          this.errorMsgVerificationForm = err.error.message
        }
  
      })
    }
  }

    
  resetPasswordForm : FormGroup = new FormGroup({
    email : new FormControl("", [Validators.required, Validators.email]),
    newPassword : new FormControl("", [Validators.required, Validators.pattern(/^\w{6,}$/)])
  })


  handleresetPasswordForm(){ 
    if(this.forgetPasswordForm.valid){
      this._AuthService.forgetpassword(this.forgetPasswordForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          localStorage.setItem('_token', res.token)
          this._router.navigate(['/login'])
        },
        error:(err)=>{
          console.log(err);
          this.errorMsgForgetForm = err.error.message;
        }
      })
    }
  }


}
