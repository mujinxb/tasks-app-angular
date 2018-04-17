import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthUser } from '../auth-user.model';


@Directive({
  selector: '[appUser]'
})
export class UserDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }


  @Input() set appUser(user: AuthUser) {
    if (user.isAuthenticated && !user.isAdmin) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
