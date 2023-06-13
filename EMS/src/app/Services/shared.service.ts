import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  checkboxValueChange: Subject<boolean> = new Subject<boolean>();
  private valueSubject = new BehaviorSubject<string>('');
  public element$ = this.valueSubject.asObservable();
  
  emitCheckboxValue(value: boolean): void {
    this.checkboxValueChange.next(value);  
  }

  UpdateValueChange(element: string) {
    this.valueSubject.next(element);
  }

  constructor() { }
}
