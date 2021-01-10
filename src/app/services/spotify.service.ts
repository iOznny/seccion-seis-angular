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
      'Authorization': 'Bearer BQBOgoqd2h40fEuRsyi6pqkhob765JcDuJuipcddIbyIhReOwG9fBJYqpDDun_s-oz5FO650mERhRhliQJo'
    });

    return this.http.get(url, { headers });
  }

  // Obtener nuevos lanzamientos.
  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=30').pipe(map(data => data['albums'].items));
    /*return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    .pipe(map(data => data['albums'].items)); */
  }

  // Obtener los artistas relacionados a la busqueda.
  getArtists(artist: string) {
    return this.getQuery(`search?q=${ artist }&type=artist&limit=30`).pipe(map(data => data['artists'].items));
  }

  // Obtener artista seleccionado.
  getArtist(artist_id: string) {
    return this.getQuery(`artists/${ artist_id }`);
  }

  // Obtener top tracks del artista.
  getTopTracks(artist_id: string) {
    return this.getQuery(`artists/${ artist_id }/top-tracks?market=es`).pipe(map(data => data['tracks']));
  }

}
