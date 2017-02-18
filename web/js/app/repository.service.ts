import { Injectable } from '@angular/core';

import { Repository } from './repository';
import { DATAREPO } from './data';


@Injectable()
export class RepositoryService {
	getRepo(): Promise<Repository[]> {
		// get repository
		DATAREPO.forEach(function(el, i) {
			console.log(el);
			/*console.log(i);*/
		});
		return Promise.resolve(DATAREPO);
	}
}
