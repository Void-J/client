import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  project;
  projectId;
  formUpdate={
      name:"",
      description:"",
      currency:"",
      startingDate:"",
      endingDate:"",
      status:""
  }

constructor(private projectsService:ProjectsService,private route:ActivatedRoute) {
    this.route.params.subscribe((params) => {
        this.projectId=params['id'];
    })

    this.projectsService.getProject(this.projectId).subscribe(project=>{

        this.project=project;
        console.log(this.project);

    });
}

ngOnInit() {
}
updateProject(id){
    this.projectsService
    .updatedProject(this.formUpdate.name,this.formUpdate.description, this.formUpdate.currency,this.formUpdate.startingDate, this.formUpdate.endingDate,this.formUpdate.status,this.projectId)      
}

}