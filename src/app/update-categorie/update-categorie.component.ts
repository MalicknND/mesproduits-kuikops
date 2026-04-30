import { Component, Input, OnInit } from '@angular/core';
import type { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-categorie',
  standalone: true,
  imports: [],
  templateUrl: './update-categorie.component.html',
  styles: ``,
})
export class UpdateCategorieComponent implements OnInit {
  @Input() // veut dire que la valeur de categorie est transmise par le composant parent
  categorie!: Categorie;

  @Input()
  data!: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
