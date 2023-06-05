import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 10}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 10},() =>{});

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, breakpointObserver: BreakpointObserver,) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  tiles: Tile[] = [
    {text: 'Unleash the Power of AI', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Gamification for Engagement', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Seamless Integration with Collaborative Tools', cols: 1.5, rows: 1, color: 'lightpink'},
    {text: 'Personalized Employee Experience', cols: 1.5, rows: 1, color: '#DDBDF1'},
    {text: 'Revolutionary Mobile App', cols: 1.5, rows: 1, color: 'AI'},
    // {text: '' , cols: 4, rows: 2, color: 'yellow'}
  ];

}