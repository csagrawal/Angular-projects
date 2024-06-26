import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'testServer',content:'A Test!'}];

  onServerAdded(serverData:{servername:string,serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.servername,
      content:serverData.serverContent
    });
  }
  
  onBlueprintAdded(blueprintData:{blueprintName:string,blueprintContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.blueprintName,
      content:blueprintData.blueprintContent
  });

  }

  
}
