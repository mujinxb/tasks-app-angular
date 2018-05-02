import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthUser } from '../auth-user.model';

@Directive({
  selector: '[appAuth]'
})
export class AuthDirective {

  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }


  @Input() set appAuth(user: AuthUser) {
    if (user.isAuthenticated && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
