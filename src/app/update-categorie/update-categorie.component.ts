import { Component, Input, OnInit } from '@angular/core';
import type { Categorie } from '../model/categorie.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-categorie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-categorie.component.html',
  styles: ``,
})
export class UpdateCategorieComponent implements OnInit {
  @Input() // veut dire que la valeur de categorie est transmise par le composant parent
  categorie!: Categorie;

  constructor() {}

  ngOnInit(): void {
    console.log('update categorie componnt', this.categorie);
  }

  saveCategorie() {
    // console.log(this.categorie);
  }
}
