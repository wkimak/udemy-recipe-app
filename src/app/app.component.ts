import { Component } from '@angular/core';

interface Tile {
  cols: number;
  rows: number;
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tiles: Tile[] = [
    {cols: 1, rows: 1, color: 'lightpink'},
    {cols: 1, rows: 1, color: 'lightblue'}
  ];

}
