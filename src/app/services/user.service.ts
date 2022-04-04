import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
const baseUrl='http://localhost:5000'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  newuser(data: any):Observable<any> {
    return this.http.post(baseUrl+'/api/register',data,{responseType: 'text'});
  }
  userlogin(data: any):Observable<any> {
    return this.http.post(baseUrl+'/api/login',data)
  }

  
  getdata(data: any):Observable<any> {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'token': data.user
    });
        const httpOptions = {
          headers: headers_object
        };
        console.log(data.user)
    return this.http.get(baseUrl+'/api/get-housing-data',httpOptions)
  }

}
