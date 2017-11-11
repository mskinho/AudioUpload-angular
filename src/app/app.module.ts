import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { UserUploadsComponent } from './uploads/user-uploads/user-uploads.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { UploadService } from './uploads/upload.service';

import {MatButtonModule, MatCheckboxModule, MatTabsModule, MatListModule, MatIconModule,
MatProgressSpinnerModule, MatCardModule, MatInputModule, MatSelectModule, MatToolbarModule,
MatButtonToggleModule, MatDialogModule} from '@angular/material';

import { AudioPlayerComponent } from './audio-player/audio-player.component';



const appRoutes: Routes = [
  { path: 'upload', component: UploadFormComponent },
  { path: 'files', component: UserUploadsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UserUploadsComponent,
    UploadFormComponent,
    AudioPlayerComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
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
    MatButtonToggleModule,
    MatDialogModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
