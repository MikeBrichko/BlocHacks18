import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../../shared/post.model';

@Component({
  selector: 'app-feed-post',
  templateUrl: './feed-post.component.html',
  styleUrls: ['./feed-post.component.css']
})
export class FeedPostComponent implements OnInit {
  @Input() post: PostModel[];

  constructor() { }

  ngOnInit() {
  }

}
