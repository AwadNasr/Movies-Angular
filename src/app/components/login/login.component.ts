import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _fb:FormBuilder,
    private _AuthService:AuthService,
    private _Router:Router,
    private toastr: ToastrService){}

  loginForm!:FormGroup;
  ngOnInit(): void {
    this.handleLogin()

  }

  handleLogin(){

    this.loginForm=this._fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
    })
  }
  sendForm(loginForm:FormGroup){
    console.log(loginForm.value);
    if(loginForm.valid){
      this._AuthService.login(loginForm.value).subscribe({
        next:res=>{
          if(res.message=='success'){
            localStorage.setItem('userToken',res.token)
            localStorage.setItem('userName',res.user.name)
            this._AuthService.decode()
            this.toastr.success(' You are logged in successfully ', 'Welcome'+ ' '+  res.user.name , {
              timeOut: 3000,
            });
            this._Router.navigate(['/home'])
            console.log(res);

          }
        },
        error:err=>{
          this.toastr.warning(err.error.message, 'Ooops' , {
            timeOut: 3000,
          });

        }
      })

    }

  }


}
