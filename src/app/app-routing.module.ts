import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'precios', component	:PreciosComponent},
  {path: 'login', component:LoginComponent},
  {path: 'protegida', component:ProtegidaComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

