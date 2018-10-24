import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    // création de l'objet formCreate dans lequel nous allons mettre les valeurs de l'input - voir html
    formCreate={
    name:"",
    username:"",
    website:"",
    mail:"",
    phone:""
    }

    constructor(private usersService:UsersService,private route:Router) {

    }

    ngOnInit() {
    }

    // fonction appelée au clique du bouton ajouter - voir html fonction (click)
    createUser(){
    // on consomme notre service qui a comme arguments les valuers du formulaire
    this.usersService
    .createUser(this.formCreate.name,this.formCreate.username,this.formCreate.website, this.formCreate.mail, this.formCreate.phone);
    }

}
