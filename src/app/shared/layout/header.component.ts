import { Component } from '@angular/core';
import {Router,RouterModule} from "@angular/router";

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styles: [`
  .head {
      position:fixed;
  }
`]
})
export class HeaderComponent {
  constructor() {}

}