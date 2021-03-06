import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { RazvedkaComponent } from './razvedka/razvedka.component';
import { SoComponent } from './so/so.component';
import { AmComponent } from './am/am.component';
import { FireComponent } from './fire/fire.component';
import { RouterModule } from '@angular/router';
import { BlockComponent } from '../components/block/block.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RazvedkaPostoyannoVipolniaemaeComponent } from './razvedka-postoyanno-vipolniaemae/razvedka-postoyanno-vipolniaemae.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RazvedkaPereodicheskiVipolniaemae } from './razvedka-pereodicheski-vipolniaemae/razvedka-pereodicheski-vipolniaemae';

const components = [
  WelcomeComponent, 
  RazvedkaComponent, 
  SoComponent, 
  AmComponent, 
  FireComponent, 
  BlockComponent, 
  RazvedkaPereodicheskiVipolniaemae,
  RazvedkaPostoyannoVipolniaemaeComponent]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [...components]
})
export class PagesModule { }
