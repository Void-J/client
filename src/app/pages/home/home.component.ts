import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../services/projects.service';
import {UsersService} from '../../services/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users;
  projects;

  constructor(private usersService: UsersService, private projectsService: ProjectsService) {

    this.usersService.getUsers().subscribe(users => {
        this.users = users;
        console.log(users);
    });
    this.projectsService.getProjects().subscribe(projects => {
      this.projects = projects;
      console.log(projects);
  });
  }
  ngOnInit() {
  }

}
