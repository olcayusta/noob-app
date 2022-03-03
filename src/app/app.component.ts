import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'noob-app';

  toolbarTitle = 'Filmmodu';

  searchOpened = false;

  openSearch() {
    this.toolbarTitle = 'Search';
  }
}
