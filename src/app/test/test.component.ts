import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: '[app-test]',
  template: `<h2> 
  Welcome {{name}} 
  <h2>{{date | date: 'short'}}</h2>
  <h2>{{date | date: 'shortDate'}}</h2>
  <h2>{{date | date: 'shortTime'}}</h2>
  <h2 [class]="succesClass">{{name.toUpperCase()}}<h2>
  <h2>{{greetUser()}}<h2>
  <h2> [class.text-danger]="hasError">Code evolution<h2>
  <h2 [ngClass]="messageClasses">Code revolution<h2>
  <h2 [style.color]="hasError?'purple':'white'">Style Binding<h2>
  <h2 [style.color]="highlightColor">Style Binding New<h2>
  <h2 *ngIf="true">Mon jois Saint Denis</h2>
  <h2>{{"Hello" + name}}</h2>
  <h2>{{name | slice:3:5}}</h2>
  <h2>{{person | json}}<h2>
  <h2>{{5.678 | number:'1.2-3'}}</h2>
  <h2>{{5.678 | number:'3.4-3'}}</h2>
  <h2>{{5.678 | number:'3.1-2'}}</h2>
  <h2>{{0.25 | currency}}</h2>
  <h2>{{0.25 | currency: 'EUR'}}</h2>

  
  <div *ngIf="displayName; then thenBlock"></div>
  <ng-template #thenBlock>
    <h2>Orthodoxie</h2>
  </ng-template>
  <ng-template #elseBlock>
    <h2>Rien</h2>
  </ng-template>

  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">Rouge</div>
    <div *ngSwitchCase="'green'">Vert</div>
    <div *ngSwitchCase='"white'">Blanc</div>
    <div *ngSwitchDefault>Pase de coleur</>
  </div>
  <div *ngFor="let color of colors; index as i">
   <h2>{{i}}{{color}}</h2>
  </div>
  <button (click)="onClick($event)">Greet</button>
  {{greeting}}
  <input [id]="theID" type="text" value="Nikolay">
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button>
  <input[(ngModel)] type="text">
  {{name}}
  <button (click)="fireEvent()">Send Event</button>
  
  
  
  `,
  styles: [`
      .text-success{
        color: green
      }
      .text-danger{
        color: red;
      }
      .text-special{
        font-style: italic;
      }`]
})
export class TestComponent implements OnInit {
  
  @Input('parentData') public name: string | undefined;
  @Output() public childEvent = new EventEmitter();
  public colors = ["red","blue","green","white"];
  public color = "red";
  public isDisabled=true;
  public succesClass = "text-succes";
  public theID = "testID";
  public siteUrl = window.location.href;
  public hasError = true;
  public isSpecial=true;
  public highlightColor = "violet";
  public greeting = "";
  public date = new Date();
  displayName = false;
  public person = {
    "fistName": "Nicolais",
    "lastName": "Kolesnik*/"
  }
  public messageClasses ={
    "text-succes": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public titlestyles ={
    color: "vermillion",
    fontStyle: "Italic"
  }
  constructor() { }

  ngOnInit(){

  }
  fireEvent(){
    this.childEvent.emit('Hey');
  }
  greeUser(){
    return "Hello" + this.name;
  }
  onClick(){
    console.log('Welcome To New');
    this.greeting ='Welcome message';
  }
  logMessage(value: any){
    console.log(value);

  }

}
