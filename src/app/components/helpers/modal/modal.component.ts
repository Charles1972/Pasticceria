import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {toggleModal} from "../../../classes/shared-functions";

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() modalId: string = '';
  @Input() title: string = '';
  @Input() isBlocked: boolean = true;

  @Output() onClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  exitOnClick() {
    if (!this.isBlocked) {
      this.closeModal(false);
    }
  }

  closeModal(ok: boolean) {
    toggleModal(this.modalId, false);
    this.onClose.emit();
  }
}
