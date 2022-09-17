import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-crime-mapper',
  templateUrl: './crime-mapper.component.html',
  styleUrls: ['./crime-mapper.component.css']
})
export class CrimeMapperComponent implements OnInit, OnChanges {

  @Input() locations?: string[];

  changedLocations?: string[];
  selectedCrimes?: string[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  locationsUpdated(updated_locations: string[]) {
    this.changedLocations = updated_locations;
  }

  crimeSelected(updated_crimes: string[]) {
    this.selectedCrimes = updated_crimes;
  }
}
