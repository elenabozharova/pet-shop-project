import { Petshop } from './../petshop.model';

export class User{
  Id: number;
  Username: string;
  Pass: string;
  Commenteds: any;
  Petshops: Petshop[];

  constructor(username: string, password: string){
    this.Username = username;
    this.Pass = password;
  }
}
