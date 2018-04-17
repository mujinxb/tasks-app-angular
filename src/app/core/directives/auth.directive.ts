import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthUser } from '../auth-user.model';

@Directive({
  selector: '[appAuth]'
})
export class AuthDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }


  @Input() set appAuth(user: AuthUser) {
    if (user.isAuthenticated) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
