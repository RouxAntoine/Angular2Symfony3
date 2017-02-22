export class Repository {
	private id: number;
	private name: string;
  private url: string;

	constructor() {}


  /**
  * Getter && Setter
  */

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public setName(_name: string) {
    this.name = _name;
  }

  public getUrl() {
    return this.url;
  }

  public setUrl(_url:string) {
    this.url = _url;
  }

}
