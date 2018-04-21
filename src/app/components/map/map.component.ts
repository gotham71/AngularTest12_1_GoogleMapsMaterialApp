import { Component, OnInit } from '@angular/core';
import { Marker } from '../../classes/marker.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditmapComponent } from './editmap/editmap.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markers: Marker[] = [];

  lat: number = 37.424300;
  lng: number = -5.893100;
  zoom: number = 15;

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) { 
    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  ngOnInit() {
  }
  

  addMarker( event ) {
    const coords: { lat: number, lng: number } = event.coords;
    
    const marker = new Marker(coords.lat, coords.lng);

    this.markers.push(marker);
    this.saveStorage();  
    this.snackBar.open('Added Marker', 'Close', { duration: 500 });
  }

  editMarker( marker: Marker ) {
    const dialogRef = this.dialog.open(EditmapComponent, {
      width: '250px',
      data: { title: marker.title, description: marker.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      if (!result) {
        return;
      }

      marker.title = result.title;
      marker.description = result.description;
      this.saveStorage();
      this.snackBar.open('Updated Marker', 'Close', { duration: 1500 });
    });
  }

  deleteMarker( i: number ) {
    this.markers.splice(i, 1);
    this.saveStorage();
    this.snackBar.open('Deleted Marker', 'Close', { duration: 1000 });
  }

  saveStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }
}
