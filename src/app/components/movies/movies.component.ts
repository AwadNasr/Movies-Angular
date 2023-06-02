import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  constructor(private _MoviesService:MoviesService){}

  movies:any[]=[]
  pageNum:number=1
  mediaType:string='movie'


  ngOnInit(): void {
    this.getAllmovies(this.pageNum)

  }


  getAllmovies(pageNum:number){
    this._MoviesService.getAllMovies(pageNum).subscribe({
      next:res=>{
        this.movies=res.results.slice(0,18)
        console.log(this.movies);
      }
    })
  }

  increasePageNum(){
    this.pageNum++
    this.getAllmovies(this.pageNum)
  }

  decreasePageNum(){
    if(this.pageNum > 0){
      this.pageNum--
      this.getAllmovies(this.pageNum)
    }
  }


}
