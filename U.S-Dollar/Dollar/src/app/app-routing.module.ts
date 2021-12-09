import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DollarComponent } from './dollar/dollar.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  { path: '**', component: EmptyRouteComponent },
  { path: 'usd', component: DollarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
