import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent {
  constructor(private _MoviesService:MoviesService){}

  tv:any[]=[]
  pageNum:number=1
  mediaType:string='tv'


  ngOnInit(): void {
    this.getAlltv(this.pageNum)

  }

  getAlltv(pageNum:number){
    this._MoviesService.getAllTv(pageNum).subscribe({
      next:res=>{
        this.tv=res.results.slice(0,18)
        console.log(this.tv);
      }
    })
  }

  increasePageNum(){
    this.pageNum++
    this.getAlltv(this.pageNum)
  }

  decreasePageNum(){
    if(this.pageNum > 0){
      this.pageNum--
      this.getAlltv(this.pageNum)
    }
  }

}
