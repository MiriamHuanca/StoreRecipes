import {Component, OnInit} from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStororageService: DataStorageService) {}

  ngOnInit() {
  }

  onSaveData() {
    this.dataStororageService.storeRecipe();
  }

  onFetchData() {
    this.dataStororageService.fetchRecipes();
  }
}
