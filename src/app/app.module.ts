import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentselectorComponent } from './componentselector/componentselector.component';
import { AttributeselectorComponent } from './attributeselector/attributeselector.component';
import { ClassselectorComponent } from './classselector/classselector.component';
import { ContainerComponent } from './container/container.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { ExamplepropertyandeventbindingComponent } from './examplepropertyandeventbinding/examplepropertyandeventbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentselectorComponent,
    AttributeselectorComponent,
    ClassselectorComponent,
    ContainerComponent,
    InterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    ExamplepropertyandeventbindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
