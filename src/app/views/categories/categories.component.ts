import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[]=[];
  selectedCategory: Category| null = null;
  hoverCategory: Category| null = null;


  constructor(private dataHandler: DataHandlerService) {     
    }

  ngOnInit(): void {
    this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories); 

    // this.categories = this.dataHandler.getCategories(); 
    // console.log(this.categories);
  }
  showTasksByCategory(category: Category) {
    this.selectedCategory = category;
    this.dataHandler.fillTasksByCategory(category);
  }

}
