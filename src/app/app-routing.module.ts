import { HowWorksComponent } from './components/how-works/how-works.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrialComponent } from './components/trial/trial.component';
import { AuthComponent } from './core/auth/auth.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'how-works', component: HowWorksComponent},
  { path: 'trial', component: TrialComponent},
  { path: 'authentication', component: AuthComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
