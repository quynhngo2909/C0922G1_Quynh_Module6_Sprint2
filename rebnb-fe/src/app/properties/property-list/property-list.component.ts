import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {PropertyService} from '../../service/property.service';
import {Property} from '../../model/property';
import Swal from 'sweetalert2';
import {ShareService} from '../../service/share.service';
import {Booking} from '../../model/booking';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceFee} from '../../model/service-fee';
import {PropertyImageService} from '../../service/property-image.service';
import {BookingService} from '../../service/booking.service';
import {HttpClient} from '@angular/common/http';
import {validateCheckIn, validateDateRange} from '../../validation/booking.validator';
import {ServiceFeeService} from '../../service/service-fee.service';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  isLoggedIn = false;
  role: string;
  userId: number;

  booking: Booking;
  property: Property;
  propertyId: number;
  page = 0;
  totalPages: number;
  showedPages: number;
  pageList: number[];

  bookingForm: FormGroup;
  serviceFees: ServiceFee[];
  checkIn: Date = null;
  checkOut: Date = null;
  stayNights = 0;
  maxGuest: number;
  totalPrice: number;
  serviceFee: ServiceFee;
  errors = {
    checkInDate: '',
    checkOutDate: '',
    deposit: '',
    totalPrice: '',
    propertyId: '',
    tenantId: '',
    serviceFee: '',
    guest: ''
  };

  categories: Category[];
  categoryViewQty: number;
  currentCategorySize: number;
  totalCategories: number;
  showedCategoryQty = 10;
  surplusQty: number;

  properties: Property[];


  constructor(private categoryService: CategoryService,
              private propertyService: PropertyService,
              private shareService: ShareService,
              private propertyImageService: PropertyImageService,
              private serviceFeeService: ServiceFeeService,
              private bookingService: BookingService,
              private http: HttpClient,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.shareService.getClickEvent().subscribe(() => {
      this.userId = this.shareService.getUserId();
      this.role = this.shareService.getUserRole();
      this.isLoggedIn = this.shareService.getLogInStatus();
    });

    this.userId = this.shareService.getUserId();
    this.role = this.shareService.getUserRole();
    this.isLoggedIn = this.shareService.getLogInStatus();

    this.categoryViewQty = 0;
    this.currentCategorySize = this.showedCategoryQty;
    this.findCategories();
    this.findServiceFees();
    this.getPropertyPage();
  }

  findCategories() {
    this.categoryService.getAllCategories().subscribe(items => {
      this.totalCategories = items.length;
      this.categories = [];
      if (this.showedCategoryQty > this.totalCategories) {
        this.currentCategorySize = this.totalCategories;
      }
      while (this.categoryViewQty < this.currentCategorySize) {
        this.categories.push(items[this.categoryViewQty]);
        this.categoryViewQty = this.categoryViewQty + 1;
      }
    });
  }

  async findServiceFees() {
    this.serviceFees = await this.serviceFeeService.getAllServiceFee().toPromise();
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

  async findALlProperties() {
    this.properties = await this.propertyService.getAllProperties().toPromise();
  }

  async getPropertyPage() {
    const pageJson = await this.propertyService.getPropertyPages(this.page).toPromise();
    this.properties = pageJson.content;
    this.totalPages = pageJson.totalPages;
    this.getPageList();
  }

  onSubmit() {
    this.errors.serviceFee = '';
    this.errors.checkOutDate = '';
    this.errors.checkInDate = '';
    this.errors.guest = '';
    this.errors.deposit = '';
    this.errors.propertyId = '';
    this.errors.tenantId = '';
    this.errors.totalPrice = '';

    if (this.userId == null) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Please log in before booking',
        showConfirmButton: true,
      });
    }

    if (this.bookingForm.valid) {
      this.bookingService?.createBooking(this.bookingForm.value).subscribe(item => {
        Swal.fire({
          icon: 'success',
          iconColor: 'darkorange',
          title: 'Added new booking successfully',
          confirmButtonText: 'Confirm',
          confirmButtonColor: 'darkorange'
        });
        this.shareService.setUnpaidBooking(this.userId);
      }, error => {
        for (const e of error.error) {
          if (e) {
            switch (e.field) {
              case 'checkInDate':
                this.errors.checkInDate = e.defaultMessage;
                break;
              case 'checkOutDate':
                this.errors.checkOutDate = e.defaultMessage;
                break;
              case 'deposit':
                this.errors.deposit = e.defaultMessage;
                break;
              case 'totalPrice':
                this.errors.totalPrice = e.defaultMessage;
                break;
              case 'propertyId':
                this.errors.propertyId = e.defaultMessage;
                break;
              case 'tenantId':
                this.errors.tenantId = e.defaultMessage;
                break;
              case 'serviceFee':
                this.errors.serviceFee = e.defaultMessage;
                break;
              case 'guest':
                this.errors.guest = e.defaultMessage;
                break;
            }
          }
        }
      });
    }
  }

  checkCheckInDate(valueAsDate: Date) {
    this.checkIn = valueAsDate;
    if (this.checkOut != null) {
      this.stayNights = (this.checkOut.getTime() - this.checkIn.getTime()) / (1000 * 60 * 60 * 24);
      this.serviceFee = this.shareService.getServiceFee(this.serviceFees, this.stayNights);
      this.totalPrice = this.property.pricePerNight * this.stayNights * (1 + this.serviceFee.tenantFee);
    }
  }


  checkCheckOutDate(valueAsDate: Date) {
    this.checkOut = valueAsDate;
    if (this.checkIn != null) {
      this.stayNights = (this.checkOut.getTime() - this.checkIn.getTime()) / (1000 * 60 * 60 * 24);
      this.serviceFee = this.shareService.getServiceFee(this.serviceFees, this.stayNights);
      this.totalPrice = Math.round(this.property.pricePerNight * this.stayNights * (1 + this.serviceFee.tenantFee) * 100) / 100;
    }
  }

  getProperty(p: Property) {
    this.property = p;
    this.bookingForm = this.fb?.group({
      checkInDate: [this.booking?.checkInDate, Validators.compose([Validators.required, validateCheckIn])],
      checkOutDate: [this.booking?.checkOutDate, Validators.compose([Validators.required])],
      guest: [1, Validators.compose([Validators.required, Validators.max(p.maxGuest)])],
      deposit: [0],
      totalPrice: [0, Validators.compose([Validators.required])],
      propertyId: [p.id, Validators.compose([Validators.required])],
      tenantId: [this.userId, Validators.compose([Validators.required])],
      serviceFee: [this.serviceFee, Validators.compose([Validators.required])],
    }, {
      validators: [validateDateRange()]
    });
  }

  previousPage() {
    this.page = this.shareService.previousPage(this.page);
    this.getPropertyPage();
  }

  nextPage() {
    this.page = this.shareService.nextPage(this.page, this.totalPages);
    this.getPropertyPage();
  }

  getPageList() {
    this.showedPages = 4;
    this.pageList = this.shareService.getPageList(this.page, this.showedPages, this.totalPages);
  }

  goToPage(pageNumber: number) {
    this.page = this.shareService.goToPage(pageNumber);
    this.getPropertyPage();
  }
}
