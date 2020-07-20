import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPageRoutingModule } from './info-routing.module';

import { InfoPage } from './info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPageRoutingModule
  ],
  declarations: [InfoPage]
})
export class InfoPageModule {
  pet_list = [
    {
      name: "Cho1",
      species: "Loai1",
      kind: "Giong1",
      attribute: "Den"
    },
    {
      name: "Cho2",
      species: "Loai2",
      kind: "Giong2",
      attribute: "Do"
    },
    {
      name: "Cho3",
      species: "Loai3",
      kind: "Giong3",
      attribute: "xanh"
    }
  ]
}
