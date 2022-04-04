import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { SearchMapsComponent } from './components/search-maps/search-maps.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidenavComponent } from './components/topnav/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { MapsComponent } from './components/topnav/maps/maps.component'
import { RightnavbarComponent } from './components/rightnavbar/rightnavbar.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { ChipsInputExampleComponent } from './components/chips-input-example/chips-input-example.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    SearchMapsComponent,
    TopnavComponent,
    SidenavComponent,
    MapsComponent,
    RightnavbarComponent,
    ChipsInputExampleComponent,
    ModalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GooglePlaceModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
