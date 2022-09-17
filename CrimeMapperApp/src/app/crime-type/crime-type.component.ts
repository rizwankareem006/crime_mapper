import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { crimes } from 'src/assets/crime-keywords';

@Component({
  selector: 'app-crime-type',
  templateUrl: './crime-type.component.html',
  styleUrls: ['./crime-type.component.css']
})
export class CrimeTypeComponent implements OnInit {

  crimes = crimes;
  selectedCrimes: string[] = [];

  @Output() selectedCrimesChanged = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
  }

  addRemoveList(value: string){
    let transformed_value = value.replace(/_/g, ' ');
    if (this.selectedCrimes.includes(transformed_value))
      this.selectedCrimes = this.selectedCrimes.filter(x => x !== transformed_value);
    else
      this.selectedCrimes.push(transformed_value);
    this.selectedCrimesChanged.emit(this.selectedCrimes);
  }
}
