import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { SearchMapsComponent } from './components/search-maps/search-maps.component';
import { MapsComponent } from './components/topnav/maps/maps.component';
import { RightnavbarComponent } from './components/rightnavbar/rightnavbar.component';
import { ChipsInputExampleComponent } from './components/chips-input-example/chips-input-example.component';
import { ModalComponent } from './components/modal/modal.component';


const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'search-maps',component:SearchMapsComponent},
  {path :'map',component:MapsComponent},
  {path:'rightnavbar',component:RightnavbarComponent},
  {path:'search',component:ChipsInputExampleComponent},
  {path:'modal',component:ModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
