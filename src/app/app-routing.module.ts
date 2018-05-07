import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';

import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GuestGuard } from './core/guards/guest.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './auth/register/register.component';
import { EditUserComponent } from './auth/edit-user/edit-user.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { FeedbackBoxComponent } from './feedback/feedback-box/feedback-box.component';

import { TasksComponent } from './tasks/tasks.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},

  { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'tasks/new', component: NewTaskComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'tasks/:id', component: TaskDetailComponent, canActivate: [AuthGuard]},
  { path: 'tasks/:id/edit', component: EditTaskComponent, canActivate: [AuthGuard, AdminGuard]},

  { path: 'users', component: UsersComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'users/new', component: RegisterComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'users/:id', component: UserDetailsComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'users/:id/edit', component: EditUserComponent, canActivate: [AuthGuard, AdminGuard]},

  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
