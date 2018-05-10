import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageServices } from '../shared/data-storage.services';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private dataStorage: DataStorageServices,
    public auth: AuthService
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
