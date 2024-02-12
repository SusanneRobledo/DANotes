import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteComponent } from './note-list/note/note.component';
import { FormsModule } from '@angular/forms';
import { AddNoteDialogComponent } from './add-note-dialog/add-note-dialog.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoteListComponent,
    NoteComponent,
    AddNoteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"danotes-341f2","appId":"1:182279813370:web:a6a261c2db0eb613af7143","storageBucket":"danotes-341f2.appspot.com","apiKey":"AIzaSyAdYLc5BwyYC4vv8MOcAWRd4qYwjJPlJ6s","authDomain":"danotes-341f2.firebaseapp.com","messagingSenderId":"182279813370"})),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
