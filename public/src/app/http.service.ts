import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: Http) { }

  getAboutMe() {
    return this._http.get('/about');
  }

  getContact() {
    return this._http.get(`/contact`);
  }

  getMisc() {
    return this._http.get('/misc');
  }

  getPortfolio() {
    return this._http.get('/portfolio');
  }

  myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
}

