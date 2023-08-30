import { Component, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: object) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('Browser');
    } else {
      console.log('Server');
    }
  }

}
