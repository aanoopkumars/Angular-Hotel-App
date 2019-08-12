import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Output()onsidenavSelect = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closeSidenav() {
   this.onsidenavSelect.emit();
  }

}
