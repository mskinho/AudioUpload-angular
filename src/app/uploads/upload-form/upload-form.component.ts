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
  uploaded: boolean;
  uploadInfo = 'Select an Audio File';

  ngOnInit() {

  }

  fileChangeEvent(fileInput: any) {
    this.fileToUpload = <File>fileInput.target.files[0];
    this.uploadInfo = this.fileToUpload.name;
    this.uploaded = false;
  }

  upload() {
  const formData: any = new FormData();
  const file: File = this.fileToUpload;

  //file selected
  if (file) {

  // upload valid audio file
  if (file.name.match(/\.(mp3|wav|ogg)$/)) {
  formData.append('myfile', file, file.name);
  this.UploadService.uploadFile(formData);
  this.uploaded = true;
  }

  else{
    this.uploadInfo = 'Select a supported audio file type.';
  }

  }

  else {
    this.uploadInfo = 'No file selected.';
  }

}
}
