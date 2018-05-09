import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageServices } from '../shared/data-storage.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private dataStorage: DataStorageServices
  ) {}

  onSave() {
    this.dataStorage.storeRecipes()
    .subscribe(
      (response: Response) => {
        console.log(response);
      });
  }

  onFetch() {
    this.dataStorage.getRecipes();
  }
}
