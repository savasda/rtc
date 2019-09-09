import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './containers/welcome/welcome.component';
import { FireComponent } from './containers/fire/fire.component';
import { SoComponent } from './containers/so/so.component';
import { AmComponent } from './containers/am/am.component';
import { RazvedkaComponent } from './containers/razvedka/razvedka.component';
import { RazvedkaPostoyannoVipolniaemaeComponent } from './containers/razvedka-postoyanno-vipolniaemae/razvedka-postoyanno-vipolniaemae.component';
import { RazvedkaPereodicheskiVipolniaemae } from './containers/razvedka-pereodicheski-vipolniaemae/razvedka-pereodicheski-vipolniaemae';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'fire', component: FireComponent},
  { path: 'so', component: SoComponent},
  { path: 'am', component: AmComponent},
  { path: 'rz', component: RazvedkaComponent},
  /**Разведка постоянно выполняемые задачи */
  { path: 'postoyanno', component: RazvedkaPostoyannoVipolniaemaeComponent},
  /**Переодически выполняемые задачи */
  { path: 'temp', component: RazvedkaPereodicheskiVipolniaemae},

  { path: '**', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
