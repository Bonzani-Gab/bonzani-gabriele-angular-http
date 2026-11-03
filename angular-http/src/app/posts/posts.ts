import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-posts',
  styleUrl: './posts.css',
  templateUrl: './posts.html',
})
export class Posts {}

export interface Post {
userId: number;
id: number;
title: string;
body: string;
}