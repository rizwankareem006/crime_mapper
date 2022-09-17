import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MapsService } from '../maps.service';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  @Output() locationEmitter = new EventEmitter<string[]>();

  constructor(private mapsService: MapsService) {
  }

  ngOnInit(): void {
    const elem: HTMLElement = document.getElementById("map") as HTMLElement;
    this.mapsService.loadMap(elem);
    this.mapsService.locationSubject.subscribe({
      next: (locations) => {
        this.locationEmitter.emit(locations);
        //window.alert(locations);
      }
    })
  }

}
