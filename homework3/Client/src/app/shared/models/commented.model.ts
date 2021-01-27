/**
 * the model that represents the Commented model in the api.
 */
export class Commented{
  idUser: number;
  idPetshop: number;
  Comment: string;
  constructor(idUser: number, idPetshop: number, comment: string){
    this.idUser = idUser;
    this.idPetshop = idPetshop;
    this.Comment = comment;
  }
}
