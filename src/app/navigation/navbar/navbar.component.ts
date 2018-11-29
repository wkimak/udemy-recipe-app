import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() changeView = new EventEmitter<string>();
  
  onChangeView(view: string) {
    this.changeView.emit(view);
  }
}
