import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../services/projects.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create',
    templateUrl: './create-project.component.html',
    styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

    // création de l'objet formCreate dans lequel nous allons mettre les valeurs de l'input - voir html
    formCreate={
    name:"",
    description:"",
    status:""
    }

    constructor(private projectsService:ProjectsService,private route:Router) {

    }

    ngOnInit() {
    }

    createProject(){

    this.projectsService
    .createProject(this.formCreate.name,this.formCreate.description,this.formCreate.status);
    }

}
