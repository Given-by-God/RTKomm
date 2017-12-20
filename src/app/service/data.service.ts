import { Injectable } from '@angular/core';
import  {Http} from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('Data is connected')
  }

  getPosts(){
    return this.http.get('https://api.github.com/users/mosh-hamedani/followers')
        .map(res =>res.json());
  }

}
