import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule }    from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { UserUploadsComponent } from './uploads/user-uploads/user-uploads.component';
import { UploadService } from './uploads/upload.service';

import {MatButtonModule, MatCheckboxModule,MatTabsModule,
MatListModule,MatIconModule,MatProgressSpinnerModule,
MatCardModule,MatInputModule,MatSelectModule,MatToolbarModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserUploadsComponent,
    UploadFormComponent
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
