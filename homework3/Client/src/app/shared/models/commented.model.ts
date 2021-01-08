import { Petshop } from './../petshop.model';
import { User } from './user.model';

export class Commented{
  // tslint:disable-next-line: variable-name
  Id_user: number;
  // tslint:disable-next-line: variable-name
  Id_petshop: number;
  Comment: string;
  // Petshop: any;
  // User: any;
  // tslint:disable-next-line: variable-name
  constructor(Id_user: number, Id_petshop: number, comment: string){
    this.Id_user = Id_user;
    this.Id_petshop = Id_petshop;
    this.Comment = comment;
  }
}
