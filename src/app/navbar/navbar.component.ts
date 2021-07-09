import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YoutubeApiService } from '../youtube-api.service';
import { Video } from '../youtube.interface';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    videos: any;
    start!:boolean;

    @ViewChild('videoName') videoName!: ElementRef;
  constructor(private youTube:YoutubeApiService) { }

  ngOnInit() {
    // this.youTube.getVideo("coding").subscribe((data)=>{
    //   console.log(data);
    //    this.videos = data.items;
    //   })
    this.start = true; // Displays the video on startup
  }
  async getData(){
    this.start = false; // Removes our video after search
    let videoName = this.videoName.nativeElement.value;
    // this.videos = await this.youTube.getVideo(videoName).toPromise( )

this.videos = [
//   {snippet: {
//     title: 'test-video',
//     thumbnails:  {
//       medium: {
//         url: 'https://i.ytimg.com/vi/r553y2MKgcw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCgmw4abqltUltHa6ur2TS6_u9OfQ'
//       },  high: {
//         url: 'https://i.ytimg.com/vi/r553y2MKgcw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCgmw4abqltUltHa6ur2TS6_u9OfQ'
//       }
//     }
//   },
// id: {
//   videoId: 'r553y2MKgcw'
// }}
]


     this.youTube.getVideo(videoName).subscribe((data)=>{
       console.log(data);
       this.videos = data.items;
       })
  }
}
