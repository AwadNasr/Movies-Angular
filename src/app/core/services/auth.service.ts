import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser=new BehaviorSubject(null)

  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if(localStorage.getItem('userToken') !==null){
      this.decode()
    }
   }
  register(data:any):Observable<any>{
    return this._HttpClient.post(environment.baseAuthUrl + 'signup',data)
  }
  login(data:any):Observable<any>{
    return this._HttpClient.post(environment.baseAuthUrl + 'signin',data)
  }
  logout():void{
    localStorage.removeItem('userToken')
    localStorage.removeItem('userName')
    this.currentUser.next(null)
    this._Router.navigate(['/login'])
  }
  decode(): void{
    let encoded=JSON.stringify(localStorage.getItem('userToken'))
    let decode:any=jwtDecode(encoded)
    this.currentUser.next(decode)
  }
}
