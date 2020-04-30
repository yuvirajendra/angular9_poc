import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Commenting this because CommonModule is added in FeatureModule
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
import { HomeComponent } from './home/home.component';
import { CustomRoute } from './app-route';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    DisplayComponent,
    MovieComponent,
    MovieSummaryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    CustomRoute
  ],
  providers: [{provide: categoryToken, useValue: movieCategory},
              MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
