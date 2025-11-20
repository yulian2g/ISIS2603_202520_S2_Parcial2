import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
   private apiUrl = 'https://raw.githubusercontent.com/Uniandes-isis2603/ISIS2603_202520_S2_Parcial2_json/refs/heads/main/movies/movie.json';
   constructor(private htpp: HttpClient) {}
   getMovies() {
      return this.htpp.get<MovieListComponent[]>(this.apiUrl);
   }
   getMoviesDetail() {  
    return this.htpp.get<MovieDetailComponent[]>('https://raw.githubusercontent.com/Uniandes-isis2603/ISIS2603_202520_S2_Parcial2_json/refs/heads/main/movies/1/movie.json');
   } 
}