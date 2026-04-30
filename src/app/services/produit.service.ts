import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import type { CategorieWrapper } from '../model/categorieWrapped.model';
import { environment } from '../../environments/environment.development';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits!: Produit[]; //un tableau de Produit
  // categories: Categorie[];

  constructor(private http: HttpClient) {}

  listeProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(environment.apiURL);
  }

  ajouterProduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(environment.apiURL, prod, httpOptions);
  }

  supprimerProduit(id: number) {
    const url = `${environment.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterProduit(id: number): Observable<Produit> {
    const url = `${environment.apiURL}/${id}`;
    return this.http.get<Produit>(url);
  }

  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit! > n2.idProduit!) {
        return 1;
      }
      if (n1.idProduit! < n2.idProduit!) {
        return -1;
      }
      return 0;
    });
  }

  updateProduit(prod: Produit): Observable<Produit> {
    return this.http.put<Produit>(environment.apiURL, prod, httpOptions);
  }

  // listeCategories(): Observable<Categorie[]> {
  //   return this.http.get<Categorie[]>(`${environment.apiURL}/cat`);
  // }

  // la nouvelle version de la méthode listeCategories() qui utilise CategorieWrapper pour récupérer la liste des catégories à partir de l'API REST (Spring Data RESR)
  listeCategories(): Observable<CategorieWrapper> {
    return this.http.get<CategorieWrapper>(environment.apiURLCat);
  }

  // consulterCategorie(id: number): Categorie {
  //   return this.categories.find((cat) => cat.idCat == id)!;
  // }
}
