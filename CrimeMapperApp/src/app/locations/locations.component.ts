import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit, OnChanges {

  @Input() locations?: string[];
  @Output() locationsChange = new EventEmitter<string[]>();

  rearranged_locations: string[][] = [];
  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    //window.alert(this.locations);
    if (this.locations) {
      this.rearranged_locations = [];
      for (let i = 0 ; i < Math.ceil(this.locations.length/3) ; ++i) {
        let inner_arr = [];
        for (let j = 0 ; j < 3 ; ++j) {
          if (i*3 + j < this.locations.length)
            inner_arr.push(this.locations[i*3 + j]);
          else
            break;
        }
        this.rearranged_locations.push(inner_arr);
      }
    }
    this.locations = [];
  }

  onChange(name: string, event: Event) {
    let isChecked: boolean = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.locations?.push(name);
    }
    else {
      this.locations = this.locations?.filter((item) => item != name);
    }

    this.locationsChange.emit(this.locations);
  }
}
