export class Repository {
	private id: number;
	private name: string;
  private url: string;

	constructor(_id: number) {
    this.id = _id
  }

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

  public static fromJson(json: Object) {
    let repo = new Repository(json["id"]);
    repo.setName(json["name"]);
    repo.setUrl(json["url"]);
    return repo;
  }

}
