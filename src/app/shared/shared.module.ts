import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoaderComponent } from './loader/loader.component';
import { MaterialModule } from '../material/material.module';
import {ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppHeaderComponent,
    NotFoundComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    AppHeaderComponent,
    NotFoundComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
