import { Component } from '@angular/core';
import { VERSION } from 'linked-package';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `app ${VERSION}`;
}
