import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  constructor(private _MoviesService:MoviesService ,private _ActivatedRoute:ActivatedRoute){}
movie:any
similarMovies:any[]=[]
type:string=''
  ngOnInit(): void {
    let {id,mediaType}=this._ActivatedRoute.snapshot.params
    this.type=mediaType
    this.getMovie( id ,mediaType )
  }

  getMovie(id:string,mediaType:string){
    this._MoviesService.getMovieDetails(id,mediaType).subscribe({
      next:res =>{
        this.movie=res
        console.log(this.movie)
        this.getSimilarMovies(id,this.type);
      }
    })

  }
  getSimilarMovies(mediaType:string,id:string){
    this._MoviesService.getSimilarMovies(mediaType,id).subscribe({
      next:res=>{
        this.similarMovies=res.results.filter((item:any) =>item.poster_path !=null).slice(0,12)
        console.log(this.similarMovies);
      }
    })

  }

}
