import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UploadService {


  constructor(private http: HttpClient) {}


  uploadFile(formData: any): Promise<any> {
    return this.http.post('/api/process_upload', formData)
                    .toPromise()
                    .catch(this.handleError);
  }

  like(data: any): Promise<any> {
    return this.http.post('/api/like', data)
                    .toPromise()
                    .catch(this.handleError);
  }

  dislike(data: any): Promise<any> {
    return this.http.post('/api/dislike', data)
                    .toPromise()
                    .catch(this.handleError);
  }

  getRecentUploads(): Promise<any> {
    return this.http.get('/api/recent')
                    .toPromise()
                    .catch(this.handleError);
  }


  getTopUploads(): Promise<any> {
    return this.http.get('/api/top')
                    .toPromise()
                    .catch(this.handleError);
  }

  handleError() {

  }



}
