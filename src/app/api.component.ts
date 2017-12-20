import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'api',
    templateUrl: 'api.component.html',
    styleUrls: ['api.component.css']
})

export class ApiComponent {
    private apiUrl = 'https://api.github.com/users/mosh-hamedani/followers';

    data: any;

    constructor(private http: Http) {
        this.getData();
    }

    getData() {
        this.http.get(this.apiUrl).map((res: Response) => res.json())
            .subscribe((data) => {
                this.data = data;
                console.log(this.data);
            });
    }
}
