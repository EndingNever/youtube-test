import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YoutubeApiService } from '../youtube-api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    videos: any;
    @ViewChild('videoName') videoName!: ElementRef;
  constructor(private youtube:YoutubeApiService) { }

  ngOnInit() {
  //  this.youtube.getVideo("programming").subscribe((data)=>{
  //  console.log(data);
  //  this.videos = data.items;
   //})
  }
  getData(){
    var videoName = this.videoName.nativeElement.value;
    this.youtube.getVideo(videoName).subscribe((data)=>{
      console.log(data);
      this.videos = data.items;
      })
  }
  find(){

  }

}
