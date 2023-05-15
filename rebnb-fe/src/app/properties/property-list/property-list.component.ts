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
import {ServiceFeeService} from '../../service/service-fee.service';
import {PageJson} from '../../model/page-json';
import {Subscription} from 'rxjs';
import {Route, Router} from '@angular/router';


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
  searchedCategoryId = 0;
  searchedDestination = '';
  private searchDestinationSubscription: Subscription;
  mess = '';

  bookingForm: FormGroup;
  serviceFees: ServiceFee[];
  checkIn: Date = null;
  checkOut: Date = null;
  stayNights = 0;
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
  bookedDates: Date[];


  constructor(private categoryService: CategoryService,
              private propertyService: PropertyService,
              private shareService: ShareService,
              private propertyImageService: PropertyImageService,
              private serviceFeeService: ServiceFeeService,
              private bookingService: BookingService,
              private router: Router,
              private http: HttpClient,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.searchDestinationSubscription = this.shareService.searchDestination$.subscribe(searchValue => {
      this.searchedDestination = searchValue;
      this.page = 0;
      this.searchedCategoryId = 0;
      this.getPropertyPage();
    });

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
    }, error => {
      this.router.navigateByUrl('/error').then(() => true);
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
    let pageJson: PageJson;
    switch (this.searchedCategoryId) {
      case 0:
        if (this.searchedDestination === '') {
          pageJson = await this.propertyService.getPropertyPages(this.page).toPromise();
          break;
        }

        if (this.searchedDestination !== '') {
          pageJson = await this.propertyService.getPropertyPagesByLocation(this.page, this.searchedDestination).toPromise();
          break;
        }
        break;
      default:
        if (this.searchedDestination === '') {
          pageJson = await this.propertyService.getPropertyPagesByCategoryId(this.page, this.searchedCategoryId).toPromise();
          break;
        }

        if (this.searchedDestination !== '') {
          pageJson = await this.propertyService.getPropertyPagesByCategoryId(this.page, this.searchedCategoryId).toPromise();
          break;
        }
        break;
    }

    if (pageJson != null) {
      this.properties = pageJson.content;
      this.totalPages = pageJson.totalPages;
      this.getPageList();
    }

    if (pageJson == null && this.searchedCategoryId !== 0) {
      this.mess = 'There is no property matched searching keys.';
      this.properties = null;
    } else {
      this.mess = '';
    }

    if (pageJson == null && this.searchedCategoryId === 0) {
      this.mess = 'There is no property.';
      this.properties = null;
      await this.router.navigateByUrl('/**');
    } else {
      this.mess = '';
    }
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
        this.bookingService.getAllBookedDateByPropertyId(this.property.id).subscribe(items => {
          this.bookedDates = items;
          this.bookingForm = this.shareService.createBookingForm(this.property, this.booking,
            this.bookedDates, this.userId, this.serviceFee);
        });
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
    this.bookingService.getAllBookedDateByPropertyId(p.id).subscribe(items => {
      this.bookedDates = items;
      this.bookingForm = this.shareService.createBookingForm(this.property, this.booking,
        this.bookedDates, this.userId, this.serviceFee);
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

  getCategoryID(id: number) {
    this.searchedCategoryId = id;
    this.page = 0;
    this.getPropertyPage();
  }

  setCategoryId() {
    this.searchedCategoryId = 0;
    this.searchedDestination = '';
    this.shareService.setSearchDestination(this.searchedDestination);
    this.page = 0;
    this.mess = '';
    this.getPropertyPage();
  }
}
