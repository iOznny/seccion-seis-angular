import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})

export class ArtistComponent {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;

    this.route.params.subscribe( params => {      
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string) {
    this.loading = true;

    this.spotify.getArtist(id).subscribe( artist => {
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe( toptracks => {
      console.log(toptracks);
      this.topTracks = toptracks;
    });
  }


}
