import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    user;
    userId;
    formUpdate={
        name:"",
        username:"",
        website:"",
        mail:"",
        phone:""
    }

  constructor(private usersService:UsersService,private route:ActivatedRoute) {
      this.route.params.subscribe((params) => {
          this.userId=params['id'];
      })

      this.usersService.getUser(this.userId).subscribe(user=>{

          this.user=user;
          console.log(this.user);

      });
  }

  ngOnInit() {
  }
  updateUser(id){
      this.usersService
      .updatedUser(this.formUpdate.name,this.formUpdate.username,this.formUpdate.website,this.userId, this.formUpdate.mail, this.formUpdate.phone)      
  }

}
