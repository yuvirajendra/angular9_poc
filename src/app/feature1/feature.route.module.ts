import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Custom1Component } from './custom1/custom1.component';
import { Custom2Component } from './custom2/custom2.component';
import { FlexComponent } from './flex/flex.component';

const featureRoutes: Routes = [
  { path: 'custom1', component: Custom1Component},
  { path: 'custom1/custom2', component: Custom2Component},
  { path: 'flex', component: FlexComponent}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(featureRoutes) ],
  exports: [ RouterModule ]
})

export class FeatureRouteModule {}