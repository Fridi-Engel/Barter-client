import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ExistingServices } from '.././tables/existing-services'


@Injectable({
  providedIn: 'root'
})
export class ExistingServicesHttpService {

  constructor(private http: HttpClient) { }

  addService(service: ExistingServices) {
    return this.http.post("http://localhost:62127/api/ExsitingServices/AddService", service);
  }
}
