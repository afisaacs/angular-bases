import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
})
export class HeroListComponent implements OnInit {
  heros: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América'];
  heroDeleted: string = '';

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('on init');
  }

  deleteHero(): void {
    console.log('Deleting hero...');
    this.heroDeleted = this.heros.shift() || '';
    console.log(this.heroDeleted);
  }
}
