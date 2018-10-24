import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../services/projects.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create',
    templateUrl: './create-project.component.html',
    styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

    formCreate={
    name:"",
    description:"",
    startingDate:"",
    endingDate:"",
    currency: "",
    status:""
    }

    constructor(private projectsService:ProjectsService,private route:Router) {

    }

    ngOnInit() {
    }

    createProject(){

    this.projectsService
    .createProject(this.formCreate.name,this.formCreate.description, this.formCreate.currency, this.formCreate.startingDate, this.formCreate.endingDate, this.formCreate.status);
    }

}
