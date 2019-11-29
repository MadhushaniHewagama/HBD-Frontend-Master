import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},

  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'sign-in', loadChildren: './pages/sign-in/sign-in.module#SignInPageModule' },
  { path: 'sign-up', loadChildren: './pages/sign-up/sign-up.module#SignUpPageModule' },  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'add-event', loadChildren: './pages/add-event/add-event.module#AddEventPageModule' },
  { path: 'calender', loadChildren: './pages/calender/calender.module#CalenderPageModule' },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
