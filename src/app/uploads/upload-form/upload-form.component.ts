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
  uploadMessage = 'Select a File';

  ngOnInit() {
  }

  fileChangeEvent(fileInput: any){
    this.fileToUpload = <File>fileInput.target.files[0];
    this.uploadMessage = this.fileToUpload.name;
  }

  upload(){
  const formData: any = new FormData();
  const file: File = this.fileToUpload;

  if (file){
  formData.append('myfile', file, file.name);
  this.UploadService.uploadFile(formData);
  this.uploadMessage = file.name + ' was uploaded.';
  }
  else{
  this.uploadMessage = 'No file selected.';
  }

  }


}
