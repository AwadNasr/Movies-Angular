import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  constructor(private _fb:FormBuilder,
    private _AuthService:AuthService,
    private _Router:Router,
    private toastr: ToastrService){}
  registerForm!:FormGroup;
  ngOnInit(): void {
    this.handleRegister()

  }

  handleRegister(){

    this.registerForm=this._fb.group({
      name:['',[Validators.required,Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      rePassword:['',[Validators.required]],
      phone:['',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
    })
  }
  sendForm(registerForm:FormGroup){

    if(registerForm.valid){
      this._AuthService.register(registerForm.value).subscribe({
        next:res=>{
          if(res.message=='success'){
            this.toastr.success(' You are registered successfully ', '', {
              timeOut: 2000,
            });

            this._Router.navigate(['/login'])
          }
        },
        error:err=>{
          this.toastr.warning(err.error?.errors?.msg || err.error?.message , '', {
            timeOut: 2000,
          });
        }
      })

    }

  }

}
