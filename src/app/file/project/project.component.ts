import { Component, OnInit } from '@angular/core';

declare var window:any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  title = 'ang13-bootstrap5-modal-demo';
  forModal:any;

  constructor() { }

  ngOnInit(): void {
    this.forModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }

  openModal(){
    this.forModal.show();
  }

  doSomething(){
    this.forModal.hide();
  }

}
