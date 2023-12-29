import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SrvgiphyGifComponent } from '../../services/srvgiphy-gif.service';
import { Datum } from '../../interfaces/IGiphyGif';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  constructor(private fb: FormBuilder, private _srvgiphyGifComponent: SrvgiphyGifComponent){}

  lista: Datum[] = []

  formulario: FormGroup = this.fb.group({
    busqueda: ['', Validators.required]
  });

  pintarGif(param: string){
    
  }

  onSearch() {
    if (this.formulario.invalid) return;

    const value = this.formulario.controls['busqueda'].value

    this._srvgiphyGifComponent.getGif(value)
    .subscribe({
      next: (gifs) => {
        if (Array.isArray(gifs)) {
          this.lista = [...gifs, ...this.lista];
        }else{
          this.lista = [...gifs.data, ...this.lista];
        }
        this._srvgiphyGifComponent.listaCards.emit(this.lista)
      },
      error: (e) => {
        console.log(e)
      }
    })
  }
}
