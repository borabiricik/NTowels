import React from 'react'
import { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';
import styles from "../Components/Layout/styles/googlemap.module.scss"

export default class GoogleMap extends Component {
    static defaultProps = {
      center: {
        lat: 38.4536737,
        lng: 27.1766507
      },
    };
   
    render() {
      return (
        // Important! Always set the container height explicitly
        <div className={`${styles.googleMap}`}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCGx-9KOBETqQ8xDpiCxSUh7KEdSVwn0cc" }}
            defaultCenter={this.props.center}
            defaultZoom={16}
          >
           <MapMarker
            lat={38.4536737}
            lng={27.1766507}
            text="NTowels"
          />
          </GoogleMapReact>
        </div>
      );
    }
  }