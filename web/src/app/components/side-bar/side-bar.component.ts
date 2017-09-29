import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  home() {
    console.log('sdalkjdaslkj');
    this.router.navigate(['']);
  }

}
