import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public obj: any = {};
  token: any;
  
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }
  OnSubmit(data: any){
    console.log(data)
    this.userService.userlogin(data)
    .subscribe(
      {
        next: (response) => {
          if(response)
          localStorage.setItem('value',JSON.stringify(response));
          this.router.navigate(['search-maps']);          
          console.log(response)},
        error: (error) =>  console.log(error),
        complete:()=>console.info('user logged in successfully')
        
      } );
      

  } 
  

}
