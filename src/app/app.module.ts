import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/modules/material.module';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './core/auth/auth.component';
import { HeaderComponent } from './core/header/header.component';
import { VotesComponent } from './components/votes/votes.component';
import { TrialComponent } from './components/trial/trial.component';
import { HowWorksComponent } from './components/how-works/how-works.component';
import { FooterComponent } from './core/footer/footer.component';
import { VoteDialogComponent } from './shared/components/vote-dialog/vote-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    HeaderComponent,
    VotesComponent,
    TrialComponent,
    HowWorksComponent,
    FooterComponent,
    VoteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents:[
    VoteDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
