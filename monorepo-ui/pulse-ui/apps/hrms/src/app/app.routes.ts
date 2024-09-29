import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => 
      import('../../../../libs/pulse-code-use-cases/account/feature-account-login/src/lib/pages/login-apge/login-page.component')
    .then(c => c.LoginPageComponent)
  },
];
