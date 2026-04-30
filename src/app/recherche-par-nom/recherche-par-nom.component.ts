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

  constructor(private produitService: ProduitService) {}
  ngOnInit(): void {
    // this.produitService.listeProduits().subscribe((prods) => {
    //   console.log(prods);
    //   this.produits = prods;
    // });
    this.produits = [];
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
}
