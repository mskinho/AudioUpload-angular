import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule }    from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { UserUploadsComponent } from './uploads/user-uploads/user-uploads.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { UploadService } from './uploads/upload.service';

import {MatButtonModule, MatCheckboxModule, MatTabsModule,
MatListModule, MatIconModule, MatProgressSpinnerModule,
MatCardModule, MatInputModule, MatSelectModule, MatToolbarModule} from '@angular/material';



const appRoutes: Routes = [
  { path: 'upload', component: UploadFormComponent },
  { path: 'files', component: UserUploadsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UserUploadsComponent,
    UploadFormComponent
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
