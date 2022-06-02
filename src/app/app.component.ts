import {Component} from '@angular/core';
import {structureDemo} from "./structure-demo";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public demo = structureDemo;
}
