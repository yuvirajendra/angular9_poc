import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DisplayComponent } from './display/display.component';
import { MovieComponent } from './movie/movie.component';
import { categoryToken, movieCategory } from './movie/CategoryConst';
import { MovieService } from './movie.service';
import { MovieSummaryComponent } from './movie-summary/movie-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    DisplayComponent,
    MovieComponent,
    MovieSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [{provide: categoryToken, useValue: movieCategory},
              MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
