import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private _MoviesService:MoviesService) {
  }

  movies:any[]=[]
  trendingTv:any[]=[]
  trendingActors:any[]=[]
  ngOnInit(): void {
    this._MoviesService.getTrendingMovies('movie').subscribe({
      next:res=>{
        this.movies=res.results
        console.log(this.movies);
      }
    })
    this._MoviesService.getTrendingMovies('tv').subscribe({
      next:res=>{
        this.trendingTv=res.results
        console.log(this.trendingTv);
      }
    })
    this._MoviesService.getTrendingMovies('person').subscribe({
      next:res=>{
        this.trendingActors=res.results
        console.log(this.trendingActors);
      }
    })


  }

}
