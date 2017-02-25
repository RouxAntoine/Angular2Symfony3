import { Component, OnInit } from '@angular/core';
import { $ } from "./jquery";

@Component({
    selector: 'app-root',
    moduleId: module.id,
    templateUrl: 'html/app.component.html',
    styleUrls: ['css/app.component.css'],
})
export class AppComponent implements OnInit {
	abstract;

	title: string = 'Titre exemple';

  constructor() {
       $(function() {
            console.log("toti");
       });
  }

  ngOnInit() {
  }

}
