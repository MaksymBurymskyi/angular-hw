import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  template: `<div class="post-body">
  <div class="post-title">{{ title }}</div>
  <div class="post-text">{{ text }}</div>
</div>`,
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  title = 'high-perfomance computing';
  text = 'High-perfomance computing (HPC) is the ability to process data and perform complex calculations at high speeds. HPC is one of the most essential tools fueling the advancement of computational science.';
}
