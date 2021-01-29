/**
 * the model that represents the Commented model in the api.
 */
export class Commented{
  // tslint:disable-next-line: variable-name // here I had to avoid the rule because the names must correspond tothe backend
  Id_user: number;
  // tslint:disable-next-line: variable-name
  Id_petshop: number;
  Comment: string;
  constructor(idUser: number, idPetshop: number, comment: string){
    this.Id_user = idUser;
    this.Id_petshop = idPetshop;
    this.Comment = comment;
  }
}
