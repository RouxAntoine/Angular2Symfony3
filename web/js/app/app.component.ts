import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './repository.service';
import { Repository } from './repository';

@Component({
	selector: 'app-root',
    // templateUrl: './app.component.html',
    // styles: [require('./app.component.css')],
    template: `<h1>SALUT</h1>`,
    styles: [`
		body {
			font-family: Arial, Helvetica, sans-serif;
		}
	`],
    providers: [RepositoryService]
})
export class AppComponent implements OnInit {
	abstract;

	title = 'List des dépôts';
	repos: Repository[] = [];

	ngOnInit() {
		this.repoService.getRepo().then(repos => this.repos = repos);
	}

	constructor(private repoService: RepositoryService) { }
}
