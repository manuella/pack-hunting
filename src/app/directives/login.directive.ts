import { Directive, ElementRef, OnDestroy, Input, TemplateRef
, ViewContainerRef } from '@angular/core';
import { SessionQuery } from '../session/session.query';
import { Subscription } from 'rxjs';

@Directive({ selector: '[showIfLoggedIn]' })
export class ShowIfLoggedInDirective implements OnDestroy {
  subscription: Subscription;
  @Input() showIfLoggedIn: boolean;

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authQuery: SessionQuery
  ) {
  }

  ngOnInit() {
    this.subscription = this.authQuery.isLoggedIn$.subscribe(isLoggedIn => {
      this.viewContainer.clear();
      if (isLoggedIn) {
        if (this.showIfLoggedIn) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      } else {
        if (this.showIfLoggedIn) {
          this.viewContainer.clear();
        } else {
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
