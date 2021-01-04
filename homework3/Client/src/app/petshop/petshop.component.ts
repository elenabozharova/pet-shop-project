import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Petshop } from './../shared/petshop.model';
import { PetshopsService } from './../shared/petshops.service';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import Vector from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import KML from 'ol/format/kml';


@Component({
  selector: 'app-petshop',
  templateUrl: './petshop.component.html',
  styleUrls: ['./petshop.component.css']
})
export class PetshopComponent implements OnInit {

  data: any;
  commentsForPetshop: any[];
  petshopId: number;
  keyword = 'id';
  map: Map;
  daysOfWeek = ['MondayWorkingHours', 'TuesdayWorkingHours', 'WednesdayWorkingHours', 'ThursdayWorkingHours', 'FridayWorkingHours', 'SaturdayWorkingHours' , 'SundayWorkingHours' ];
  comment = ''; // new comment
  buttonDisabled = false;
  errorMsg = 'You have already left a review';
  constructor(private petshopsService: PetshopsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
     params => {
          // tslint:disable-next-line: no-string-literal
          this.petshopId = +params.id;
      }
    );
    if ( sessionStorage.getItem('username') == null){
      this.buttonDisabled = true;
      this.errorMsg = 'Please Log in to comment';
    }

    this.data = this.route.snapshot.data;
    this.initializeMap();
    this.commentsForPetshop = this.data.comments.filter(x => x.Id_petshop === this.petshopId );
    this.commentsForPetshop.forEach(x => {
      if (x.Id_user === +sessionStorage.getItem('currentUserId')){
        this.buttonDisabled = true;
        this.errorMsg = 'You have already left a review';
      }
    });
  }

  initializeMap(): void {
    this.map = new Map({
      target: 'petshop_map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([this.data.petshop.Longitude, this.data.petshop.Latitude]),
        zoom: 15
      })
    });


    const feature =
    new Feature(new Point(olProj.fromLonLat([this.data.petshop.Longitude, this.data.petshop.Latitude])));
    const kml = new KML().writeFeatures([feature]);
    const kmlFeature = new KML().readFeature(kml);
    feature.setStyle(kmlFeature.getStyle());
    const layer = new VectorLayer({
      source: new Vector({
        features: [feature]
      })
    });

    this.map.addLayer(layer);
  }

    websiteClicked(): void {
      window.location.href = 'www.' + this.data.petshop.Website;
    }

    addComment(): void {
    this.petshopsService.addComment(+sessionStorage.getItem('currentUserId'), this.data.petshop.Id, this.comment);
    window.location.reload();
    this.buttonDisabled = true;
  }

}
