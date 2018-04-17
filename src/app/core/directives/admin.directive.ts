import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthUser } from '../auth-user.model';


@Directive({
  selector: '[appAdmin]'
})
export class AdminDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: UserService) { }


  @Input() set appAdmin(user: AuthUser) {
    if (user.isAuthenticated && user.isAdmin) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
