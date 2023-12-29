import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule
    ],
    exports: [HomePageComponent],
    declarations: [
      BuscarComponent,
      CatalogoComponent,
      HomePageComponent
  ],
    providers: [],
})
export class GiphyGif { }
