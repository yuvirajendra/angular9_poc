import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Custom1Component } from './custom1/custom1.component';
import { FormsModule } from '@angular/forms';
import { FeatureRouteModule } from './feature.route.module';
import { Custom2Component } from './custom2/custom2.component';
import { FlexComponent } from './flex/flex.component';

@NgModule({
  declarations: [Custom1Component, Custom2Component, FlexComponent],
  imports: [
	CommonModule,
	FormsModule,
  FeatureRouteModule
  ],
  exports: [ FormsModule, FeatureRouteModule ]
})
export class FeatureModule { }