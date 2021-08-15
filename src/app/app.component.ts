import { Component } from '@angular/core';

import {SlidoService} from './slido.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'slido';
  constructor(public SlidoService:SlidoService){}
}
