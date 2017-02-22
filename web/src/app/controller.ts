import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'Repos', component: CrisisListComponent },
  { path: 'Repos/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
