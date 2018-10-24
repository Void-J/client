import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class UsersService {

apiUrl="http://localhost:3000/users/";

datatopost;

httpOptions = {
 headers: new HttpHeaders({
   'Content-Type':  'application/json'
 })};

  constructor(private http:HttpClient,private router:Router) {

  }

getUsers() {
    return this.http.get(this.apiUrl);
}

getUser(id){
    return this.http.get(this.apiUrl+id);
}

createUser(username,name,website, mail, phone){
    const payload =
        {
          "name":username,
          "username":name,
          "website":website,
          "mail":mail,
          "phone":phone
        }

    this.datatopost=JSON.stringify(payload);

    return this.http.post(this.apiUrl,this.datatopost,this.httpOptions).subscribe(
        res =>{
            console.log(res);
        },
        err => {
            console.log(err.message);
        }
    );
}

updatedUser(username,name,website,id, mail, phone){

    const payload =
        {
          "name":username,
          'username':name,
          "website":website,
          "mail":mail,
          "phone":phone
        }

        this.datatopost=JSON.stringify(payload);

        return this.http.put(this.apiUrl+id,this.datatopost,this.httpOptions).subscribe(
            res =>{
                console.log(res);
            },
            err => {
                console.log(err.message);
            }
        );

}

delete(id){
    return this.http.delete(this.apiUrl+id);
}

}
