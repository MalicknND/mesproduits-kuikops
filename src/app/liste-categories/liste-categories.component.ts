import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-liste-categories',
  standalone: true,
  imports: [],
  templateUrl: './liste-categories.component.html',
  styles: ``,
})
export class ListeCategoriesComponent implements OnInit {
  categories!: Categorie[];
  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe((cats) => {
      console.log(cats);
      this.categories = cats._embedded.categories;
    });
  }
}
