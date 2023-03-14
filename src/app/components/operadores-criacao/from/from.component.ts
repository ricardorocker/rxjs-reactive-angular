import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent {
  ngOnInit(): void {
    this.operatorFrom();
  }

  operatorFrom(): void {
    const arr = from([1, 2, 3, 4, 5]);
    arr.subscribe(res => console.log(res));

    const promise = from(new Promise(resolve => resolve('Olá mundo!')));
    promise.subscribe(res => console.log(res));

    const string = from('Olá mundo!');
    string.subscribe(res => console.log(res));
  }

}
