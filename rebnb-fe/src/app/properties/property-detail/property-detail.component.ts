import {Component, OnInit} from '@angular/core';
import {PropertyService} from '../../service/property.service';
import {PropertyImageService} from '../../service/property-image.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Property} from '../../model/property';


@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  property: Property;
  propertyId: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;

  constructor(private propertyService: PropertyService,
              private propertyImageService: PropertyImageService,
              private http: HttpClient,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
        this.propertyId = param.get('id');
        this.findPropertyById();
        this.getImageByPropertyId();
      }, error => {
      },
      () => {
      });
  }

  findPropertyById() {
    this.propertyService.findPropertyById(this.propertyId).subscribe(item => {
        this.property = item;
      }, error => {
      },
      () => {
      });
  }

  getImageByPropertyId() {
    this.propertyImageService.getImageByPropertyId(this.propertyId).subscribe(item => {
        this.image1 = item[0].image;
        this.image2 = item[1].image;
        this.image3 = item[2].image;
        this.image4 = item[3].image;
        this.image5 = item[4].image;
      }, error => {
      },
      () => {
      });
  }
}
