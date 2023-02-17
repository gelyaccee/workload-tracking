import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var window:any;

@Component({
  selector: 'app-manpower',
  templateUrl: './manpower.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./manpower.component.scss']
})
export class ManpowerComponent implements OnInit {

  title = 'ang13-bootstrap5-modal-demo';
  forModal:any;



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
