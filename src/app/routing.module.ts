import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MoreComponent } from './more/more.component';
import { KnockoutComponent } from './knockout/knockout.component';
import { IllusionComponent } from './illusion/illusion.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'knockout', component: KnockoutComponent },
  { path: 'illusion', component: IllusionComponent },
  { path: 'more', component: MoreComponent },
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
