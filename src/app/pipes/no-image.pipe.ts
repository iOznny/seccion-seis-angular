import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})

export class NoImagePipe implements PipeTransform {
  transform(image: any[]): string {
    if(!image) {
      return 'assets/img/spotify.png';
    } 

    if(image.length > 0) {
      return image[0].url;
    } else {
      return 'assets/img/spotify.png'; 
    }
  }
}
