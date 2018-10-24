import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project;
  projectId;
  
    constructor(private projectsService:ProjectsService,private route:ActivatedRoute,private router:Router) {
  
      this.route.params.subscribe((params) => {
            this.projectId=params['id'];
            console.log(params['id']);
        })

      this.projectsService.getProject(this.projectId).subscribe(project=>{
  
          this.project=project;
          console.log(this.project);
  
      });
  
    }
  
    ngOnInit() {
    }
  
    deleteProject(){
        this.projectsService.delete(this.projectId).subscribe(project=>{
            console.log(this.project);
             this.router.navigate['projects'];
        });
  
    }
  
  }
  
