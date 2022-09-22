import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  opened = false

  constructor() {
  }

  ngOnInit(): void {
  }

  abrir(){
    this.opened =! this.opened;
  }

}
