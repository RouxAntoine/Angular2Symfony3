import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './repository.service';
import { Repository } from './repository';
import { $ } from "./jquery";

@Component({
	selector: 'app-root',
    moduleId: module.id,
    templateUrl: 'html/app.component.html',
    styleUrls: ['css/app.component.css'],
    providers: [RepositoryService]
})
export class AppComponent implements OnInit {
	abstract;

	title: string = 'List des dépôts';
	repos: Repository[] = [];
  errorGet = '';

	constructor(private repoService: RepositoryService) {
    $(function() {
      console.log("toti");
    });
  }

  ngOnInit() {

    this.repoService.getRepo()
                      .subscribe(
                        repos => this.repos = repos,
                        error => this.errorGet = <any>error
                      );

    // this.repoService.getRepo().then(repos => this.repos = repos);
  }

}
