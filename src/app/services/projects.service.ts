import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Injectable()
export class ProjectsService {

// ApiUrl="http://localhost:4200/assets/data/data.json";
apiUrl="http://localhost:3000/projects/";

datatopost;

httpOptions = {
 headers: new HttpHeaders({
   'Content-Type':  'application/json'
 })};

  constructor(private http:HttpClient,private router:Router) {

  }

getProjects() {
    return this.http.get(this.apiUrl);
}

getProject(id){
    return this.http.get(this.apiUrl+id);
}

createProject(name,description, currency, startingDate, endingDate, status){
    const payload =
        {
          "name":name,
          "description":description,
          "currency": currency,
          "startingDate":startingDate,
          "endingDate":endingDate,
          "status":status
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

updatedProject(name,description, currency, startingDate, endingDate, status,id){

    const payload =
        {
          "name":name,
          'description':description,
          "currency": currency,
          "startingDate":startingDate,
          "endingDate":endingDate,
          "status":status
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
