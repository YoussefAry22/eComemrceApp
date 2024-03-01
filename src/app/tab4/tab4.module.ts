import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { Tab4Page } from './tab4.page'; 

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: Tab4Page
      }
    ])
  ],
  declarations: [], 
  providers: []
})
export class Tab4PageModule {}
