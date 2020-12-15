import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Petshop } from './../shared/petshop.model';
import { PetshopsService } from './../shared/petshops.service';
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import BingMaps from 'ol/source/BingMaps';
import Vector from 'ol/source/Vector';
import Feature from 'ol/Feature';
import GeometryLayout from 'ol/geom/GeometryLayout';
import Point from 'ol/geom/Point';
import Source from 'ol/source/Source';
import * as source from 'ol/source';
import {defaults as defaultControls, OverviewMap} from 'ol/control.js';
import Layer from 'ol/layer/Layer';
import Overlay from 'ol/Overlay';
import KML from 'ol/format/kml';


@Component({
  selector: 'app-petshop',
  templateUrl: './petshop.component.html',
  styleUrls: ['./petshop.component.css']
})
export class PetshopComponent implements OnInit {

  petshop: Petshop;
  petshopId: number;
  keyword = 'id';
  map: Map;
  isDataFetched = false;
  daysOfWeek = ['MondayWorkingHours', 'TuesdayWorkingHours', 'WednesdayWorkingHours', 'ThursdayWorkingHours', 'FridayWorkingHours', 'SaturdayWorkingHours' , 'SundayWorkingHours' ];
  constructor(private petshopsService: PetshopsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
     params => {
          // tslint:disable-next-line: no-string-literal
          this.petshopId = +params.id;
      }
    );
    this.petshopsService.getPetshop(this.petshopId).then(
      data => {
        this.petshop = data;
        this.initializeMap();
        this.isDataFetched = true;
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
        center: olProj.fromLonLat([this.petshop.Longitude, this.petshop.Latitude]),
        zoom: 15
      })
    });


    const feature =
     new Feature(new Point(olProj.fromLonLat([this.petshop.Longitude, this.petshop.Latitude])));

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
    window.location.href = 'www.' + this.petshop.Website;
  }

}
