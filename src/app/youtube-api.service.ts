import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  constructor(private http: HttpClient) { }


  getVideo(videoName: string): Observable<any>{
    

    const API_KEY = "AIzaSyCutQUXM4wKtjIUw-9XJTQF-Qx3NpgU2SA"
    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=$" + videoName +"&type=video&videoCaption=closedCaption&key=" + API_KEY + "&maxresults=50" 
    return this.http.get<any>(url)
    .pipe(
      map((response: any) => response.items)
    )
  }
}

