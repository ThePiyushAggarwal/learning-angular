import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent {
  // Explanation - Input is used to pass data from parent component to child component.
  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];
  // Explanation - Output is used to pass data from child component to parent component.
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();

  searchHousing(searchText: string) {
    if (!searchText) return;
    this.results = this.locationList.filter((location) =>
      location.city.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  selectHousingLocation(location: HousingLocation) {
    this.selectedLocationEvent.emit(location);
  }
}
