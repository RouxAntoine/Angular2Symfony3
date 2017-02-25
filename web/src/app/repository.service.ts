import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Repository } from './repository';
import { DATAREPO } from './data';


@Injectable()
export class RepositoryService {
	private repoUrl:string = "127.0.0.1/repos/";

  constructor(private http:Http) {}

  /**
  * Get repository
  * pull an array of repository
  */
  public getRepo(): Observable<Repository[]> {
    return this.http.get(this.repoUrl)
                    .map(this.dealData)
                    .catch(this.error);

		// DATAREPO.forEach(function(el, i) {
		// 	console.log(el);
		// 	/*console.log(i);*/
		// });
		// return Promise.resolve(DATAREPO);
	}

  private dealData(data: Response) {
    return data.json() || {};
  }

  private error(errorQuery: Response | any) {
    let resErr: string;

    if( errorQuery instanceof Response) {
      const body:any = errorQuery.json() || '';
      const err:string = body.error || JSON.stringify(body);

      resErr = `${errorQuery.status} -
                  ${errorQuery.statusText || ''} ${err}`;
    }
    else {
      resErr = errorQuery.message || errorQuery.toString();
    }

    console.log(resErr);
    return Observable.throw(resErr);
  }
}
