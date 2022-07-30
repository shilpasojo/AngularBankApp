import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {

  // item is used to hold values from parentComponent
  // InputDecorator -> To pass a variable from Parent to child Component(Parent-Child Communication)
  @Input() item:String|undefined

  constructor() { }

  ngOnInit(): void {
  }

}
