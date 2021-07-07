import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YoutubeApiService } from '../youtube-api.service';

@Component({
  selector: 'app-related-videos',
  templateUrl: './related-videos.component.html',
  styleUrls: ['./related-videos.component.css']
})
export class RelatedVideosComponent implements OnInit {

  videos: any;
  @ViewChild('videoName')
  videoName!: ElementRef;

  constructor(private youtube: YoutubeApiService) { }

  ngOnInit(): void {
    this.youtube.getVideo("test").subscribe((data) => {
      console.log(data)
      this.videos = data
      console.log(this.videos)
    })
  }

  getData() {
    let videoName = this.videoName.nativeElement.value

    this.youtube.getVideo(videoName).subscribe((data) => {
      console.log(data)
      this.videos = data.items
    })
  }



}
