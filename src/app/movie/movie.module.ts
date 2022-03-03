import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatRippleModule} from "@angular/material/core";


@NgModule({
  declarations: [MovieComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
  ],
})
export class MovieModule {}
