import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {
  constructor(private _MoviesService:MoviesService){}

  actors:any[]=[]
  pageNum:number=1
  mediaType:string='person'


  ngOnInit(): void {
    this.getAllActors(this.pageNum)

  }

  getAllActors(pageNum:number){
    this._MoviesService.getAllActors(pageNum).subscribe({
      next:res=>{
        this.actors=res.results.slice(0,18)
        console.log(this.actors);
      }
    })
  }

  increasePageNum(){
    this.pageNum++
    this.getAllActors(this.pageNum)
  }

  decreasePageNum(){
    if(this.pageNum > 0){
      this.pageNum--
      this.getAllActors(this.pageNum)
    }
  }

}
