import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UploadService} from '../upload.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']

})
export class UploadFormComponent implements OnInit {

  constructor(private UploadService: UploadService) { }

  fileToUpload: File;
  uploaded:boolean;
  uploadName = 'Select a File';

  ngOnInit() {
  }

  fileChangeEvent(fileInput: any){
    this.fileToUpload = <File>fileInput.target.files[0];
    this.uploadName = this.fileToUpload.name;
}

  upload(){
  const formData: any = new FormData();
  const file: File = this.fileToUpload;

  if (file){
  formData.append('myfile', file, file.name);
  this.UploadService.uploadFile(formData);
  this.uploaded = true;
  }
  else{
  this.uploadName = 'No file selected.';
  }
}
}
