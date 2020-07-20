import { Component, OnInit } from '@angular/core';
import * as data from '../../../mocks/mock_data.json'

@Component({
  selector: 'app-search-sort',
  templateUrl: './search-sort.component.html',
  styleUrls: ['./search-sort.component.css']
})
export class SearchSortComponent implements OnInit {
  activePage:number = 0; 
  feedFilterData= [];
  feedData: [];


  constructor() {  }

  ngOnInit() {
    this.feedData = data.default;
  }

}
