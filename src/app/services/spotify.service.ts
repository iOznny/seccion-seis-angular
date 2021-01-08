import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {
  constructor(private http: HttpClient) { 
    console.log('Spotify Service Ready.');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCHkzAXJ0mi1AUKQMw2WrZ1TZjZaFRMYhdL-dKJwZe-R9mfGiDkEVktUmbr5fuRtBEWHZYeSjKNPI30tnE'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=30').pipe(map(data => data['albums'].items));
    /*return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    .pipe(map(data => data['albums'].items)); */
  }

  getArtist(artist: string) {
    return this.getQuery(`search?q=${ artist }&type=artist&limit=30`).pipe(map(data => data['artists'].items));
  }

}
