import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  ngOnInit(): void {
    this.initObservable();
  }

  initObservable(): void {

    const observable = new Observable((subscriber) => {
      subscriber.next(27)
      subscriber.next("Ricardo")
      subscriber.next(true)
      subscriber.next({ name: "Petrucia" })
      subscriber.complete();
    });

    const observer = {
      next: (x: any) => console.log('Observer next value:', x),
      error: (err: any) => console.log('Observer next value:', err),
      complete: () => console.log('Observer complete!')
    }

    const subscription1 = observable.subscribe(observer);
    subscription1.unsubscribe();

    //Cria um observable que emite um número inteiro sequencial a cada intervalo de tempo especificado
    const it = interval(1000);
    const subscription = it.subscribe(console.log);
    //Quando der 4 segundos ira se desinscrever do observable, parar de ouvir a emissão de números(interval)
    setTimeout(() => {
      subscription.unsubscribe();
    }, 4000);


  }

}
