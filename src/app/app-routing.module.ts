import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { AssignTaskComponent } from './tasks/assign-task/assign-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GuestGuard } from './core/guards/guest.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserDetailsComponent } from './users/user-list/user-details/user-details.component';
import { EditUserComponent } from './auth/edit-user/edit-user.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'assigntask', component: AssignTaskComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'users/register', component: RegisterComponent, canActivate: [AuthGuard, AdminGuard]},
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
