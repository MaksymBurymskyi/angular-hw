import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {

  @Output() onPost = new EventEmitter();
  
  titleInputValue = '';
  textInputValue = '';
  imgInputValue = '';
  onTitle(event: any){
    this.titleInputValue = event.target.value;
  }
  onText(event: any) {
    this.textInputValue = event.target.value
  }
  onImgUrl(event: any){
    this.imgInputValue = event.target.value;
  }


addNewPost(titleValue: string, textValue: string,  imgValue: string) {
    const value = {
      title: titleValue,
      text: textValue,
      img: imgValue,
    }
    this.onPost.emit(value)
    this.titleInputValue = '';
    this.textInputValue = '';
    this.imgInputValue = '';
}}



