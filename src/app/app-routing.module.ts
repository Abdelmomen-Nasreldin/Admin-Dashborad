import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './components/user/auth-layout/auth-layout.component';
import { UserAccountComponent } from './components/user/user-account/user-account.component';

const routes: Routes = [
  // {path: 'Home', component : FooterComponent},
  // {path: '', redirectTo : '/admin', pathMatch :"full"},
  {
    path: 'admin',
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
    // component : UserAccountComponent
  },
  // {
  //   path: 'auth',
  //   // loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  //   component : AuthLayoutComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
