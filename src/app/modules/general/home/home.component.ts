import { Component } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public name: string         = environment.application.name;
  public version: string      = environment.application.version;
  public tailwind: string     = environment.application.tailwind;
  public fontawesome: string  = environment.application.fontawesome;
  public iconify: string      = environment.application.iconify;
  public primeng: string      = environment.application.primeng;
  public ngrx: string         = environment.application.ngrx;

  constructor() {}

}
