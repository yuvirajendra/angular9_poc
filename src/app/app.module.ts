import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { MovieComponent } from './movie/movie.component';
import { categoryToken, movieCategory } from './movie/CategoryConst';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    DisplayComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [{provide: categoryToken, useValue: movieCategory}],
  bootstrap: [AppComponent]
})
export class AppModule { }
