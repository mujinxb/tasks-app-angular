import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthUser } from '../auth-user.model';


@Directive({
  selector: '[appUser]'
})
export class UserDirective {

  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }


  @Input() set appUser(user: AuthUser) {
    if (user.isAuthenticated && !user.isAdmin && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
