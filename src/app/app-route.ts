import { Routes, RouterModule} from '@angular/router';
import { MovieSummaryComponent } from './movie-summary/movie-summary.component';
import { MovieComponent } from './movie/movie.component';
import { DisplayComponent } from './display/display.component';
import { SampleComponent } from './sample/sample.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: 'feature1',
    loadChildren: () => import('./feature1/feature.module').then(
      m => m.FeatureModule
    )
    },
	{path: 'summary', component: MovieSummaryComponent},
	{path: 'movie', component: MovieComponent},
	{path: 'display', component: DisplayComponent},
	{path: 'sample/display', component: DisplayComponent},
	{path: 'sample', component: SampleComponent}, 
	{path: '**', component: HomeComponent}, // Wild card routing component
	{path: '', component: HomeComponent} // default routing component
];

// Registring the Route
export const CustomRoute = RouterModule.forRoot(routes);


