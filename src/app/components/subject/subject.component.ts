import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  ngOnInit(): void {
    this.initSubject();
  }

  initSubject(): void {
    // SUBJECT
    const subject = new Subject();
    subject.subscribe(data => {
      console.log('Subscriber A:', data);
    });
    subject.subscribe(data => {
      console.log('Subscriber B:', data);
    });
    subject.subscribe(data => {
      console.log('Subscriber C:', data);
    });
    subject.next('Hello World!');

    // BEHAVIOR SUBJECT
    const behaviorSubject = new BehaviorSubject('Primeira Mensagem');
    behaviorSubject.subscribe(data => {
      console.log('Subscriber A:', data);
    });
    behaviorSubject.next('Segunda Mensagem');
    behaviorSubject.subscribe(data => {
      console.log('Subscriber B:', data);
    });
    behaviorSubject.next('Terceira Mensagem');
    behaviorSubject.subscribe(data => {
      console.log('Subscriber C:', data);
    });
  }
}
