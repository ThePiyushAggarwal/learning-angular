import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-angular-app';

  housingLocationList: HousingLocation[] = [
    {
      name: 'Acme Fresh',
      city: 'ago',
      state: 'IL',
      photo: '../assets/logo.svg',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: 'Acme Fresh',
      city: 'Chicago',
      state: 'IL',
      photo: '../assets/logo.svg',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: 'Acme Fresh',
      city: 'Chicago',
      state: 'IL',
      photo: '../assets/logo.svg',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: 'Acme Fresh',
      city: 'Chicago',
      state: 'IL',
      photo: '../assets/logo.svg',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
  ];

  selectedLocation: HousingLocation | undefined;

  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }
}
