import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1ItemListComponent } from './features/ex1-item-list/ex1-item-list.component';
import { Ex2ReactiveFormComponent } from './features/ex2-reactive-form/ex2-reactive-form.component';
import { Ex3RoutingComponent } from './features/ex3-routing/ex3-routing.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './core/auth.guard';
import { LoginComponent } from './features/ex3-routing/components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'exc1', component: Ex1ItemListComponent },
  { path: 'exc2', component: Ex2ReactiveFormComponent },
  { path: 'exc3', component: Ex3RoutingComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
