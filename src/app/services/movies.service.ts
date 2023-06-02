import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getTrendingMovies(mediaType:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=ee54b8ffa1de3188584b88633b696cad`)
  }
  getMovieDetails(id:string,mediaType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=ee54b8ffa1de3188584b88633b696cad&language=en-US`)
  }
  getSimilarMovies(id:string,mediaType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=ee54b8ffa1de3188584b88633b696cad&language=en-US&page=1`)
  }
  getAllMovies(page:number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=ee54b8ffa1de3188584b88633b696cad&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
  }
  getAllTv(page:number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/tv?api_key=ee54b8ffa1de3188584b88633b696cad&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
  }
  getAllActors(page:number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=ee54b8ffa1de3188584b88633b696cad&language=en-US&page=${page}`)
  }
}
