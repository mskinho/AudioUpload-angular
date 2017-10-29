import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UploadService {


  constructor(private http: HttpClient) {}


  uploadFile(formData: any): Promise<any> {
    return this.http.post('/api/process_upload', formData).toPromise();
  }

  like(data: any): Promise<any> {
    return this.http.post('/api/like', data).toPromise();
  }

  dislike(data: any): Promise<any> {
    return this.http.post('/api/dislike', data).toPromise();
  }

  getRecentUploads(): Promise<any> {
    return this.http.get('/api/recent').toPromise();
  }


  getTopUploads(): Promise<any> {
    return this.http.get('/api/top').toPromise();
  }




}
