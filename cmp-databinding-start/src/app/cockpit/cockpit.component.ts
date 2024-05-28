import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {

  @Output() serverCreated = new EventEmitter<{servername:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{blueprintName:string,blueprintContent:string}>();
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput',{static:true}) serverContentInput:ElementRef;
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      servername:nameInput.value, //using local reference
      serverContent:this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {

    this.blueprintCreated.emit({
      blueprintName:nameInput.value, //using local reference
      blueprintContent:this.serverContentInput.nativeElement.value
    });
    // this.blueprintCreated.emit({
    //   blueprintName:nameInput.value,
    //   blueprintContent:this.newServerContent
    // });
  }
}
