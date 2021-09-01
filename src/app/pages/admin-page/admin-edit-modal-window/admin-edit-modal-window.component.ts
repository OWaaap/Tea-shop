import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-edit-modal-window',
  templateUrl: './admin-edit-modal-window.component.html',
  styleUrls: ['./admin-edit-modal-window.component.less'],
})
export class AdminEditModalWindowComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      img: string;
      title: string;
      kindName: string;
      price: number;
      description: string;
      origin: string;
      weight: string;
    }
  ) {}

  ngOnInit(): void {}
}
