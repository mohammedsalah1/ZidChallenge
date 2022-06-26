import { Component, OnInit } from '@angular/core';
import {navItems} from './nav-items';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  menuItems = navItems;
  constructor() { }

  ngOnInit() {
  }

}
