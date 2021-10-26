import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-figure-selection-container',
  templateUrl: './figure-selection-container.component.html',
  styleUrls: [ './figure-selection-container.component.css' ]
})
export class FigureSelectionContainerComponent implements OnInit {

  data = [ {
    name: "ggg"
  },
    {
      name: "fff"
    },
  ]

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    console.log("FigureSelectionContainerComponent")
  }

}
