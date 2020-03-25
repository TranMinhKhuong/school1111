import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ClassesComponent } from './classes/classes.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SchoolAddComponent } from './school-add/school-add.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { SchoolEditComponent } from './school-edit/school-edit.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { SchoolAddComponent } from './school-add/school-add.component';
import { SchoolEditComponent } from './school-edit/school-edit.component';
import { SlideComponent } from './slide/slide.component';
import { ClassComponent } from './class/class.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SchoolManagerComponent } from './school-manager/school-manager.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, SchoolListComponent, SchoolAddComponent, SchoolEditComponent, SlideComponent, ClassComponent, SchoolDetailComponent, NotFoundComponent,SchoolManagerComponent,HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
