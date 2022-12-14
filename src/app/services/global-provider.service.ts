import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalProviderService {
  refreshTimeout:any;
  server_url = "https://sg.simpple.app";
  image_link = "https://s3.ap-southeast-1.amazonaws.com/simpple-imgs/";
  server_location = "Singapore";
  storage = new Storage();
  
  constructor(public http: HttpClient) {
    this.storage.create();
    console.log('Hello GlobalProvider Provider');
   }
}
