import { Petshop } from './../petshop.model';
/**
 * the User model that matches the User model in the api
 */
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
