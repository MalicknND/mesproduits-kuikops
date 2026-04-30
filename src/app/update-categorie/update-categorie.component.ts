import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categorie } from '../model/categorie.model';
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

  @Output() // veut dire que la valeur de categorieUpdated est émise par le composant enfant vers le composant parent
  categorieUpdated = new EventEmitter<Categorie>();

  constructor() {}

  ngOnInit(): void {
    console.log('update categorie componnt', this.categorie);
  }

  saveCategorie() {
    this.categorieUpdated.emit(this.categorie); // émet la valeur de categorie vers le composant parent
  }
}
