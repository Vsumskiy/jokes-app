import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth-page/auth.module').then(
        module => module.AuthModule
      )
  },

  {
    path: 'forgot',
    loadChildren: () =>
      import(
        './pages/auth/reset-password/forgot-password-page/forgot-password.module'
      ).then(module => module.ForgotPasswordModule)
  },
  {
    path: 'reset',
    loadChildren: () =>
      import(
        './pages/auth/reset-password/reset-password-page/reset-password.module'
      ).then(module => module.ResetPasswordModule)
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./pages/favorites/favorites.module').then(
        module => module.FavoritesModule
      )
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./pages/joke-customization/edit-joke/edit-joke.module').then(
        module => module.EditJokeModule
      )
  },
  {
    path: 'create-joke',
    loadChildren: () =>
      import('./pages/joke-customization/create-joke/create-joke.module').then(
        module => module.CreateJokeModule
      )
  },
  {
    path: 'edit-categories',
    loadChildren: () =>
      import(
        './pages/category-customization/category-customization.module'
      ).then(module => module.CategoryCustomizationModule)
  },
  {
    path: 'joke/:id',
    loadChildren: () =>
      import('./pages/joke/joke.module').then(module => module.JokeModule)
  },

  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
