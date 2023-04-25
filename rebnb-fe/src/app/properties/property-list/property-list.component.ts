import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {PropertyService} from '../../service/property.service';
import {Property} from '../../model/property';
import {TokenStorageService} from '../../security-authentication/service/token-storage.service';
import Swal from 'sweetalert2';
import {ShareService} from '../../security-authentication/service/share.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  categories: Category[];
  categoryViewQty: number;
  currentCategorySize: number;
  totalCategories: number;
  showedCategoryQty = 10;
  surplusQty: number;

  properties: Property[];

  isLoggedIn = false;
  role: string;

  constructor(private categoryService: CategoryService,
              private propertyService: PropertyService,
              private shareService: ShareService,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.shareService.getClickEvent().subscribe(() => {
      this.getUserRole();
    });
    this.getUserRole();
    this.categoryViewQty = 0;
    this.currentCategorySize = this.showedCategoryQty;
    this.findCategories();
    this.findALlProperties();
  }

  findCategories() {
    this.categoryService.getAllCategories().subscribe(items => {
        this.totalCategories = items.length;
        this.categories = new Array();
        if (this.showedCategoryQty > this.totalCategories) {
          this.currentCategorySize = this.totalCategories;
        }
        while (this.categoryViewQty < this.currentCategorySize) {
          this.categories.push(items[this.categoryViewQty]);
          this.categoryViewQty = this.categoryViewQty + 1;
        }
      }, error => {
      }, () => {
      }
    );
  }

  loadNextCategories() {
    this.currentCategorySize += this.showedCategoryQty;
    if (this.totalCategories >= this.currentCategorySize) {
      this.findCategories();
    }
    if (this.totalCategories < this.currentCategorySize) {
      this.currentCategorySize = this.totalCategories;
      this.findCategories();
    }
  }

  loadPreviousCategories() {
    this.surplusQty = this.currentCategorySize % this.showedCategoryQty;
    if (this.surplusQty !== 0) {
      this.currentCategorySize = this.currentCategorySize - this.surplusQty;
      this.categoryViewQty = this.categoryViewQty - this.showedCategoryQty - this.surplusQty;
    }

    if (this.surplusQty === 0) {
      this.currentCategorySize = this.currentCategorySize - this.showedCategoryQty;
      this.categoryViewQty = this.categoryViewQty - this.showedCategoryQty - this.showedCategoryQty;
    }

    this.findCategories();
  }

  findALlProperties() {
    this.propertyService.getAllProperties().subscribe(items => {
      this.properties = items;
    }, error => {
    }, () => {
    });
  }

  getUserRole() {
    if (this.tokenStorageService.getToken()) {
      this.role = this.tokenStorageService.getUser().roles[0];
      this.isLoggedIn = this.role != null;
    }
  }

  addWishlist(id: number) {
    if (this.role == null) {
      Swal.fire({
        text: 'Please log in to save this fabulous location in your wishlist!',
        icon: 'warning',
        showConfirmButton: false,
        timer: 3500
      });
    }
    if (this.role === 'User') {
      Swal.fire({
        text: '',
        icon: 'warning',
        showConfirmButton: false,
        timer: 3500
      });
    }

    if (this.role === 'Admin') {
      Swal.fire({
        text: 'Admin',
        icon: 'warning',
        showConfirmButton: false,
        timer: 3500
      });
    }
  }
}
