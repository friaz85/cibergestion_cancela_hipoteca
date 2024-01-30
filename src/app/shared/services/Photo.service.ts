import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Image {
  previewImageSrc?;
  thumbnailImageSrc?;
  alt?;
  title?;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {


  constructor(private http: HttpClient) { }

  getImages() {
  return this.http.get<any>('assets/data/photos.json')
    .toPromise()
    .then(res => <Image[]>res.data)
    .then(data => { return data; });
  }

}
