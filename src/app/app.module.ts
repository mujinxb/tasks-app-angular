import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TaskItemComponent } from './tasks/task-list/task-item/task-item.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './dashboard/admin/admin.component';

import { AppRoutingModule } from './/app-routing.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ApiService } from './core/services/api.service';
import { UserService } from './core/services/user.service';
import { JwtService } from './core/services/jwt.service';
import { AuthService } from './core/services/auth.service';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { AdminDirective } from './core/directives/admin.directive';
import { UserDirective } from './core/directives/user.directive';
import { AuthDirective } from './core/directives/auth.directive';
import { NoAuthDirective } from './core/directives/no-auth.directive';
import { UserApiService } from './core/services/user-api.service';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-list/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserItemComponent } from './users/user-list/user-item/user-item.component';
import { EditUserComponent } from './auth/edit-user/edit-user.component';
import { UserContainerComponent } from './users/user-list/user-container/user-container.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { UserTaskComponent } from './tasks/user-task/user-task.component';
import { TaskDescriptionComponent } from './tasks/task-description/task-description.component';
import { TaskUsersComponent } from './tasks/task-users/task-users.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackListComponent } from './feedback/feedback-list/feedback-list.component';
import { FeedbackItemComponent } from './feedback/feedback-item/feedback-item.component';
import { FeedbackBoxComponent } from './feedback/feedback-box/feedback-box.component';
import { AssignTaskComponent } from './tasks/assign-task/assign-task.component';
import { TasksContainerComponent } from './tasks/tasks-container/tasks-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskItemComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AdminComponent,
    PageNotFoundComponent,
    AdminDirective,
    UserDirective,
    AuthDirective,
    NoAuthDirective,
    UserListComponent,
    UserItemComponent,
    UsersComponent,
    UserDetailsComponent,
    EditUserComponent,
    UserContainerComponent,
    NewTaskComponent,
    EditTaskComponent,
    UserTaskComponent,
    TaskDescriptionComponent,
    TaskUsersComponent,
    FeedbackComponent,
    FeedbackListComponent,
    FeedbackItemComponent,
    FeedbackBoxComponent,
    AssignTaskComponent,
    TasksContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgSelectModule
  ],
  providers: [
    ApiService,
    AuthService,
    UserService,
    JwtService,
    AuthGuard,
    AdminGuard,
    GuestGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    UserApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
