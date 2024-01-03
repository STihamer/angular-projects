import { CanDeactivateFn } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';

export const unsavedChangesGuard: CanDeactivateFn<LoginComponent> = (
  component: LoginComponent,
  currentRoute,
  currentState,
  nextState
) => {
  if (
    nextState.url === '/forgot-password' &&
    (component.loginForm.value.email !== '' ||
      component.loginForm.value.password !== '')
  ) {
    if (
      confirm('You have some unsaved changes, are you sure younwant to leave?')
    ) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};
