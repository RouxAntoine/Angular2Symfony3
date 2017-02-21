import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './repository.service';
import { Repository } from './repository';

@Component({
	selector: 'app-root',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [RepositoryService]
})
export class AppComponent implements OnInit {
	abstract;

	title = 'List des dépôts';
	repos: Repository[] = [];

	constructor(private repoService: RepositoryService) { }

  ngOnInit() {
    // this.repoService.getRepo()
    //   .subscribe(repos => this.repos = repos);

    this.repoService.getRepo().then(repos => this.repos = repos);
  }

}
