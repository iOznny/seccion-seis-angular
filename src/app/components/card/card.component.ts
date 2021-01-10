import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { 
  }

  seeArtist(item: any) {
    let artist_id;

    if(item.type === 'artist') {
      artist_id = item.id;
    } else {
      artist_id = item.artists[0].id;
    }

    // Redireccionar a Artist.
    this.router.navigate(['/artist', artist_id]);
  }

}
