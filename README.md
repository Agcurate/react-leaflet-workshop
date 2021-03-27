# Creating Interactive Map Application with ReactJS and LeafletJS libraries

## Introduction
This repository created in an online workshop with purpose of giving an introductory information about using ReactJS and Vanilla LeafletJS libraries together to create Interactive Map application with multiple markers that modern browsers can't handle easily. Also, includes the basic layout of [Agcurate](https://agcurate.com/) Platform application. Aim is to create a basic example of the map application running on [OpenSky Network's Website](https://opensky-network.org/). Workshop's stream can be found on [Youtube](https://www.youtube.com/watch?v=009SfCm-Q4I)


## Environment And Packages used in this project
[Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) is used to create the necessary environment in this project.
[Leaflet](https://leafletjs.com/) for the interactive maps
[Leaflet Markers Canvas](https://github.com/francoisromain/leaflet-markers-canvas#readme) for creating leaflet markers in a single canvas object.
[Rbush](https://github.com/mourner/rbush) is required to use the Leaflet Markers Canvas package

## API 
Necessary data comes from the [OpenSky Networks Rest API](https://opensky-network.org/apidoc/rest.html) with a limited version.

## Open Front-End Position at Agcurate
We are offering an interview for the front-end position to the candidates who successfully finish the assignment below. Our usual hiring process consists of four distinct steps: 1. Phone Screen, 2. Technical Interview, 3. Whiteboard exercise, 4. Character Fitness. Though, candidates who complete the assignment below will only be faced with Character Fitness portion of the hiring process and as part of the Technical Interview they will be asked questions based on their solution to the assignment. 

You are required to fork this repository, push your solution to a new branch and after completing the assignment send the link to the forked repo along with your CV and a short motivation letter with 1-2 sentences to hr[at]agcurate[dot]com. 

## Assignment
* Integrate a basic search into application which filters the ICAO code of the objects, and show the matched ones in a auto-complete style. When any of the matches is selected, map should fly to the necessary marker and open the popup of the marker.
* Create a Legend component, when any of the markers clicked, make this component visible and contents of the flight details will be shown in it.
* It is not possible to get the arrival position of the flights for anonymous users but the true_track parameter gives us the angle which is the flights is heading. Using this parameter, add a polyline between the current position of the flight and any other position that lies in the true_track when any of the flights is selected. Size of the polyline is not important. For Polyline, checkout the LeafletJS library.

