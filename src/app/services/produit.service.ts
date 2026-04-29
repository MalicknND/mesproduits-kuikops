import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  // apiURL: string = 'http://localhost:8081/produits/api';
  produits: Produit[]; //un tableau de Produit
  // categories: Categorie[];

  constructor(private http: HttpClient) {
    // this.categories = [
    //   { idCat: 1, nomCat: 'PC' },
    //   { idCat: 2, nomCat: 'Imprimante' },
    // ];

    this.produits = [
      // {
      //   idProduit: 1,
      //   nomProduit: 'PC Asus',
      //   prixProduit: 3000.6,
      //   dateCreation: new Date('01/14/2011'),
      //   categorie: { idCat: 1, nomCat: 'PC' },
      // },
      // {
      //   idProduit: 2,
      //   nomProduit: 'Imprimante Epson',
      //   prixProduit: 450,
      //   dateCreation: new Date('12/17/2010'),
      //   categorie: { idCat: 2, nomCat: 'Imprimante' },
      // },
      // {
      //   idProduit: 3,
      //   nomProduit: 'Tablette Samsung',
      //   prixProduit: 900.123,
      //   dateCreation: new Date('02/20/2020'),
      //   categorie: { idCat: 1, nomCat: 'PC' },
      // },
    ];
  }

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

  listeCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${environment.apiURL}/cat`);
  }

  // consulterCategorie(id: number): Categorie {
  //   return this.categories.find((cat) => cat.idCat == id)!;
  // }
}
