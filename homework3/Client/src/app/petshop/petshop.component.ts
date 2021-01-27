import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetshopsService } from './../shared/services/petshop/petshops.service';
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
/*
The database is built in a way that every user can leave only one review per Petshop.
If the user is not logged in, the custom button shows 'You must be logged in' message.
After clicking the 'Add New Comment' button the comment is added and displayed
*/

@Component({
  selector: 'app-petshop',
  templateUrl: './petshop.component.html',
  styleUrls: ['./petshop.component.css']
})
export class PetshopComponent implements OnInit {
  data: any; // the data fetched from resolver
  commentsForPetshop: any[]; // list of comments for the current petshop
  petshopId: number; // the id of the petshop from the route
  map: Map;
  daysOfWeek = ['MondayWorkingHours', 'TuesdayWorkingHours', 'WednesdayWorkingHours', 'ThursdayWorkingHours', 'FridayWorkingHours', 'SaturdayWorkingHours' , 'SundayWorkingHours' ];
  comment = ''; // new comment textarea value
  buttonDisabled = false; // boolean to control the 'Add new Comment' Button
  errorMsg = 'You have already left a review';
  constructor(private petshopsService: PetshopsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // #1 on component startup it first gets the id from the route
    this.route.params.subscribe(
     params => {
          this.petshopId = +params.id;
      }
    );
    // check if the user is authenticated
    if (sessionStorage.getItem('username') == null){
      this.buttonDisabled = true;
      this.errorMsg = 'Please Log in to comment';
    }
    /* fetch the data from the route, which is list of comments
    and the current petshop */
    this.data = this.route.snapshot.data;
    // #2 after fetching route data the map is initialized
    this.initializeMap();
    /**
     * from the list of all comments for all petshops, filter only the ones from the current petshop
     */
    this.commentsForPetshop = this.data.comments.filter(x => x.Id_petshop === this.petshopId );
    /**
     * for every comment in the list of comments for the current petshop
     * check if the current user has left a comment
     * if he has already left a review, show a message that ony one review can be left per petshop
     */
    this.commentsForPetshop.forEach(x => {
      if (x.Id_user === +sessionStorage.getItem('currentUserId')){
        this.buttonDisabled = true;
        this.errorMsg = 'You have already left a review';
      }
    });
  }
  // initializng OSM open souce map
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
    /**
     * adding pin on the location of the petshop
     */
    const feature = new Feature(new Point(olProj.fromLonLat([this.data.petshop.Longitude, this.data.petshop.Latitude])));
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
    /**
     * if the user is logged in, and has not already left a comment
     * add the comment in the Commented table in the database and disable the button since now he has already left a comment
     */
    addComment(): void {
    this.petshopsService.addComment(+sessionStorage.getItem('currentUserId'), this.data.petshop.Id, this.comment);
    window.location.reload();
    this.buttonDisabled = true;
  }

}
