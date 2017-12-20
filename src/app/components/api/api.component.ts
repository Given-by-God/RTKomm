import {Component, OnInit} from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
    selector: 'app-api',
    templateUrl: './api.component.html',
    styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {


    constructor(private dataService: DataService) {
    }


    posts: Post[];


    ngOnInit() {
        this.dataService.getPosts().subscribe((posts) =>
            this.posts = posts
        );
    }

}


interface Post {
    id: number;
    avatar_url: number;
    html_url: string;
    login: string;

}
