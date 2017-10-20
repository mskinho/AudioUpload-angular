import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UploadService} from '../upload.service';
@Component({
  selector: 'app-user-uploads',
  templateUrl: './user-uploads.component.html',
  styleUrls: ['./user-uploads.component.css'],
  providers: [UploadService]
})
export class UserUploadsComponent implements OnInit {

 uploads: any = [];
 filterOptions = ['Recent', 'Top Rated'];
 selectedFilter = this.filterOptions[0];

 constructor(private UploadService: UploadService) { }

  ngOnInit(){
    this.fetchRecentUploads();

  }

  openAudioPlayer(){

    
  }

  fetchUploads(selectedFilter: string){
      switch (selectedFilter){
        case this.filterOptions[0]: {
          this.fetchRecentUploads();
          break;
        }
        case this.filterOptions[1]: {
          this.fetchTopUploads();
          break;
        }

      }
  }

  fetchRecentUploads(){
    this.UploadService.getRecentUploads().then(uploads => this.uploads = uploads);
  }

  fetchTopUploads(){
    this.UploadService.getTopUploads().then(uploads => this.uploads = uploads);
  }

  getUploadUrl(filename: string){
    return location.origin + '/' + filename;
  }

  like(fileId: string){
    const data = {fileId: fileId};
    this.UploadService.like(data);
  }

  dislike(fileId: string){
    const data = {fileId: fileId};
    this.UploadService.dislike(data);
  }




}
