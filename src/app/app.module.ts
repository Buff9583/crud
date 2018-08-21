import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {CrudUserService} from './services/crud-user.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SomeFuncComponent } from './some-func/some-func.component';

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCQUF2Td1cOR8KMn74vGdL4qSZ6AWwodzU',
  authDomain: 'crud-df162.firebaseapp.com',
  databaseURL: 'https://crud-df162.firebaseio.com',
  projectId: 'crud-df162',
  storageBucket: 'crud-df162.appspot.com',
  messagingSenderId: '382157505120'
};

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddComponent,
    EditComponent,
    SomeFuncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [CrudUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
