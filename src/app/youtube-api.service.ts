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


    const API_KEY = "AIzaSyBzh90BLuDeqiuopWhmUuxfHDMKlL-MZtY"
    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=$" + videoName +"&type=video&videoCaption=closedCaption&key=" + API_KEY + "&maxResults=6"

    return this.http.get<any>(url)
//   .pipe(
//  map((response: any) => response.items)
//    )
    }
}


