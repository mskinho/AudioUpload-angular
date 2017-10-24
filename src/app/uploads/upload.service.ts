import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UploadService {


  constructor(private http: Http) {}

  uploadFile(formData: any): Promise<any> {
    return this.http.post('/api/process_upload', formData)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  like(data: any): Promise<any> {
    return this.http.post('/api/like', data)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  dislike(data: any): Promise<any> {
    return this.http.post('/api/dislike', data)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getRecentUploads(): Promise<any> {
    return this.http.get('/api/recent')
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }


  getTopUploads(): Promise<any> {
    return this.http.get('/api/top')
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }



  handleError() {

  }



}
