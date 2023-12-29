import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Datum, IGiphyGIF } from '../interfaces/IGiphyGif';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SrvgiphyGifComponent {

  baseUrl = environment.baseURL
  apiKey = environment.apiKey
  listaCards = new EventEmitter<Datum[]>()

  constructor(private http: HttpClient){}

  getGif(param: string): Observable<IGiphyGIF | any>{
    var url = `${this.baseUrl}${this.apiKey}&q=${param}`
    console.log(url)
    return this.http.get<IGiphyGIF>(url)
    .pipe(
      catchError (() => of([]))
    )
  }
}
