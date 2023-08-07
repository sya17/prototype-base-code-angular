import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  // {
  //   path: 'auth',
  //   children: [
  //     {
  //       path: '',
  //     },
  //     {
  //       path: 'login',
  //     },
  //     {
  //       path: 'register',
  //     },
  //     {
  //       path: 'logout',
  //     },
  //     {
  //       path: 'request-password',
  //     },
  //     {
  //       path: 'reset-password',
  //     },
  //   ],
  // },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};
@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
