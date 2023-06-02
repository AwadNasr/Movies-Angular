import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ActorsComponent } from './components/actors/actors.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { AuthGuard } from './core/guards/auth.guard';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routes: Routes = [
  {path:'',
  component:BlankLayoutComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',canActivate:[AuthGuard],component:HomeComponent,title:"Home"},
    {path:'actors',canActivate:[AuthGuard],component:ActorsComponent,title:"Actors"},
    {path:'movies',canActivate:[AuthGuard],component:MoviesComponent,title:"Movies"},
    {path:'tvshows',canActivate:[AuthGuard],component:TvShowsComponent,title:"TvShows"},
    {path:'moviedetails/:id/:mediaType',canActivate:[AuthGuard],component:MovieDetailsComponent,title:"MovieDetails"},

  ]},
  {path:'',component:AuthLayoutComponent,children:[
    {path:'',redirectTo:'login',pathMatch:"full"},
    {path:'login',component:LoginComponent,title:'Login'},
    {path:'register',component:RegisterComponent,title:'Register'},
  ]},
  {path:"**",canActivate:[AuthGuard],component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
