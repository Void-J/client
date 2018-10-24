import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './pages/users/users.component';
import {HomeComponent} from './pages/home/home.component';
import {UserComponent} from './pages/user/user.component';
import {ProjectComponent} from './pages/project/project.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { UpdateProjectComponent } from './pages/update-project/update-project.component';

const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'users',
        component: UsersComponent,
    },
    {
        path: 'user/:id',
        component: UserComponent,
    },
    {
        path: 'projects',
        component: ProjectsComponent,
    },
    {
        path: 'project/:id',
        component: ProjectComponent,
    },
    {
        path: 'create',
        component: CreateComponent,
    },
    {
        path: 'update/:id',
        component: UpdateComponent,
    },
    {
        path: 'create-project',
        component: CreateProjectComponent,
    },
    {
        path: 'update-project/:id',
        component: UpdateProjectComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
