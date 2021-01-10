import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  new_releases: any[] = [];
  loading: boolean;
  error: boolean;
  message_error: string;
  status_error: number;

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      this.new_releases = data;
      this.loading = false;
    }, ( e_service ) => {

      this.loading = false;
      this.error = true;
      console.log(e_service);
      this.message_error = e_service.error.error.message;
      this.status_error = e_service.status;
    });  
  }

  ngOnInit(): void {
  }
}
