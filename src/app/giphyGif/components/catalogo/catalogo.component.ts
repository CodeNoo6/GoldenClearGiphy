import { Component, OnInit } from '@angular/core';
import { Datum } from '../../interfaces/IGiphyGif';
import { SrvgiphyGifComponent } from '../../services/srvgiphy-gif.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit{

  constructor(private _srvgiphyGifComponent: SrvgiphyGifComponent) {}

  lista: Datum[] = []

  ngOnInit(): void {
    this.pintarGif()
  }
  pintarGif() {
    this._srvgiphyGifComponent.listaCards.subscribe(
      lista => {
        this.lista = lista
      });
  }
}
