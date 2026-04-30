import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { ProduitService } from '../services/produit.service';
import { UpdateCategorieComponent } from '../update-categorie/update-categorie.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-categories',
  standalone: true,
  imports: [UpdateCategorieComponent, CommonModule],
  templateUrl: './liste-categories.component.html',
  styles: ``,
})
export class ListeCategoriesComponent implements OnInit {
  categories!: Categorie[];
  updatedCat: Categorie = { idCat: 0, nomCat: '' };

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe((cats) => {
      console.log(cats);
      this.categories = cats._embedded.categories;
    });
  }
}
