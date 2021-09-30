import { Injectable } from '@angular/core';
import {User} from '../tables/user'

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  currentUser!:User;

  constructor() { }
}
