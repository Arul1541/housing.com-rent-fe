import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
  }
  OnSubmit(data: any){
    console.log(data)
    this.userService.newuser(data)
    .subscribe(
      {
        next: (response) =>{if(response){
          console.log(response)
          this.router.navigate(['search-maps']);
        }} ,
        error: (error) =>  console.log(error),  
        // complete:()=>console.info('New user registered successfully')
        
      } );
      

  }
}
