import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthUser } from '../auth-user.model';

@Directive({
  selector: '[appNoAuth]'
})
export class NoAuthDirective {

  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }


  @Input() set appNoAuth(user: AuthUser) {
    if (!user.isAuthenticated && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (user.isAuthenticated && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
