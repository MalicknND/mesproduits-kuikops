import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recherche-par-nom.component.html',
  styles: ``,
})
export class RechercheParNomComponent implements OnInit {
  produits!: Produit[]; //un tableau de Produit
  nomProduit!: string;
  allProduits!: Produit[];
  searchTerm!: string;

  constructor(private produitService: ProduitService) {}
  ngOnInit(): void {
    // ne pas charger les produits au début, mais seulement après la saisie du nom du produit à rechercher (pour la recherche par nom)
    // this.produits = [];

    // charger tous les produits pour pouvoir faire la recherche par nom dans le tableau des produits chargés
    this.produitService.listeProduits().subscribe((prods) => {
      console.log(prods);
      this.allProduits = prods;
    });
  }

  rechercherProds() {
    if (this.nomProduit) {
      this.produitService
        .rechercherParNom(this.nomProduit)
        .subscribe((prods) => {
          this.produits = prods;
        });
    } else {
      this.produitService.listeProduits().subscribe((prods) => {
        console.log(prods);
        this.produits = prods;
      });
    }
  }

  onKeyUp(filterText: string) {
    this.produits = this.allProduits.filter((prod) =>
      prod.nomProduit.toLowerCase().includes(filterText.toLowerCase()),
    );
  }
}
