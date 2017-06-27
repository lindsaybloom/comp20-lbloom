var south = {lat: 42.352271, lng: -71.05524200000001};
var andrew = {lat: 42.330154, lng: -71.057655};
var porter = {lat: 42.3884, lng: -71.11914899999999};
var harvard = {lat: 42.373362, lng: -71.118956};
var jfkumass = {lat: 42.320685, lng: -71.052391};
var savin = {lat: 42.31129, lng: -71.053331};
var park = {lat: 42.35639457, lng:-71.0624242};
var broadway = {lat: 42.342622, lng: -71.056967};
var northquincy = {lat: 42.275275, lng: -71.029583};
var shawmut = {lat: 42.29312583, lng: -71.06573796000001};
var davis = {lat: 42.39674, lng: -71.121815};
var alewife = {lat: 42.395428, lng: -71.142483};
var kendall = {lat: 42.36249079, lng: -71.08617653};
var charles = {lat: 42.361166, lng: -71.070628};
var dtncrossing = {lat: 42.355518, lng: -71.060225};
var quincycenter = {lat: 42.251809, lng: -71.005409};
var quincyadams = {lat: 42.233391, lng: -71.00715};
var ashmont = {lat: 42.284652, lng: -71.06448899999999};
var wollaston = {lat: 42.2665139, lng: -71.0203369};
var fieldscorner = {lat: 42.300093, lng: -71.061667};
var central = {lat: 42.365486, lng: -71.103802};
var braintree = {lat: 42.2078543, lng: -71.0011385};

var SouthStation = new google.maps.LatLng(south.lat, south.lng);
var AndrewStation = new google.maps.LatLng(andrew.lat, andrew.lng);
var PorterStation = new google.maps.LatLng(porter.lat, porter.lng);
var HarvardStation = new google.maps.LatLng(harvard.lat, harvard.lng);
var JFKUmassStation = new google.maps.LatLng(jfkumass.lat, jfkumass.lng);
var SavinHillStation = new google.maps.LatLng(savin.lat, savin.lng);
var ParkStreetStation = new google.maps.LatLng(park.lat, park.lng);
var BroadwayStation = new google.maps.LatLng(broadway.lat, broadway.lng);
var NorthQuincyStation = new google.maps.LatLng(northquincy.lat, northquincy.lng);
var ShawmutStation = new google.maps.LatLng(shawmut.lat, shawmut.lng);
var DavisStation = new google.maps.LatLng(davis.lat, davis.lng);
var AlewifeStation = new google.maps.LatLng(alewife.lat, alewife.lng);
var KendallMITStation = new google.maps.LatLng(kendall.lat, kendall.lng);
var CharlesMGHStation = new google.maps.LatLng(charles.lat, charles.lng);
var DowntownCrossingStation = new google.maps.LatLng(dtncrossing.lat, dtncrossing.lng);
var QuincyCenterStation = new google.maps.LatLng(quincycenter.lat, quincycenter.lng);
var QuincyAdamsStation = new google.maps.LatLng(quincyadams.lat, quincyadams.lng);
var AshmontStation = new google.maps.LatLng(ashmont.lat, ashmont.lng);
var WollastonStation = new google.maps.LatLng(wollaston.lat, wollaston.lng);
var FieldsCornerStation = new google.maps.LatLng(fieldscorner.lat, fieldscorner.lng);
var CentralStation = new google.maps.LatLng(central.lat, central.lng);
var BraintreeStation = new google.maps.LatLng(braintree.lat, braintree.lng);



var myOptions = {
    zoom: 13,
    center: myMarker,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map;
var myMarker;
var southMarker;
var andrewMarker;
var porterMarker;
var harvardMarker;
var jfkumassMarker;
var savinMarker;
var parkMarker;
var broadwayMarker;
var northquincyMarker;
var shawmutMarker;
var davisMarker;
var alewifeMarker;
var kendallMarker;
var charlesMarker;
var dtncrossingMarker;
var quincycenterMarker;
var quincyadamsMarker;
var ashmontMarker;
var wollastonMarker;
var fieldscornerMarker;
var centralMarker;
var braintreeMarker;
var infowindow = new google.maps.InfoWindow();

var ids = {
    alewife: 70061,
    davis: 70063,
    porter: 70065,
    harvard: 70067,
    central: 70069,
    kendall: 70071,
    charles: 70073,
    park: 70075,
    dtncrossing: 70077,
    south: 70079,
    broadway: 70081,
    andrew: 70083,
    jfkumass: 70085,
    northquincy: 70097,
    wollaston: 70099,
    quincycenter: 70101,
    quincyadams: 70103,
    braintree: 70105,
    savin: 70087,
    fieldscorner: 70089,
    shawmut: 70091,
    ashmont: 70093
};


function getMyLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
        myLat = position.coords.latitude;
        myLng = position.coords.longitude;
        renderMap();
    });
}

function init()
{
    map = new google.maps.Map(document.getElementById("map"), myOptions);
    getMyLocation();

    var mainPath = [
        {lat: alewife.lat, lng: alewife.lng},
        {lat: davis.lat, lng: davis.lng},
        {lat: porter.lat, lng: porter.lng},
        {lat: harvard.lat, lng: harvard.lng},
        {lat: central.lat, lng: central.lng},
        {lat: kendall.lat, lng: kendall.lng},
        {lat: charles.lat, lng: charles.lng},
        {lat: park.lat, lng: park.lng},
        {lat: dtncrossing.lat, lng: dtncrossing.lng},
        {lat: south.lat, lng: south.lng},
        {lat: broadway.lat, lng: broadway.lng},
        {lat: andrew.lat, lng: andrew.lng},
        {lat: jfkumass.lat, lng: jfkumass.lng}
    ];

    var braintreePath = [
        {lat: jfkumass.lat, lng: jfkumass.lng},
        {lat: northquincy.lat, lng: northquincy.lng},
        {lat: wollaston.lat, lng: wollaston.lng},
        {lat: quincycenter.lat, lng: quincyadams.lng},
        {lat: quincyadams.lat, lng: quincyadams.lng},
        {lat: braintree.lat, lng: braintree.lng}
    ];

    var ashmontPath = [
        {lat: jfkumass.lat, lng: jfkumass.lng},
        {lat: savin.lat, lng: savin.lng},
        {lat: fieldscorner.lat, lng: fieldscorner.lng},
        {lat: shawmut.lat, lng: shawmut.lng},
        {lat: ashmont.lat, lng: ashmont.lng}
    ];


    var mainLine = new google.maps.Polyline({
        path: mainPath,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    mainLine.setMap(map);

    var braintreeLine = new google.maps.Polyline({
        path: braintreePath,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    braintreeLine.setMap(map);

    var ashmontLine = new google.maps.Polyline({
        path: ashmontPath,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    ashmontLine.setMap(map);

}

function createMarker(marker, station, title){
    marker = new google.maps.Marker({
        position: station,
        title: title,
        icon: 'marker.png'
    });
    marker.setMap(map);
    return marker;
}

function addInfo(marker, title, name){
    google.maps.event.addListener(marker, 'click', function() {
        var xmlhttp = new XMLHttpRequest();
        var url = "https://intense-ocean-57182.herokuapp.com/redline.json"; 
        var info = new Array();
        xmlhttp.open("GET", url, true);
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var sched = JSON.parse(this.responseText);
                var out = "";
                var i, j;
                for(i = 0; i < sched.TripList.Trips.length; i++){
                    for(j = 0; j < sched.TripList.Trips[i].Predictions.length; j++){
                        if(sched.TripList.Trips[i].Predictions[j].StopID == ids[name]){
                            info.push(sched.TripList.Trips[i].Predictions[j].Seconds);
                        }
                    }
                }
            //}
            if(info.length >= 3){
                infowindow.setContent(title + " train schedule: " + "<br>" + "Arriving in " + (info[0]/60).toFixed(2) + " minutes"+ "<br>" + "Arriving in " + (info[1]/60).toFixed(2) + " minutes"+ "<br>" + "Arriving in " + (info[2]/60).toFixed(2) + " minutes");
                infowindow.open(map, marker);
            }
            if(info.length == 2){
                infowindow.setContent(title + " train schedule: " + "<br>" + "Arriving in " + (info[0]/60).toFixed(2) + " minutes"+ "<br>" + "Arriving in " + (info[1]/60).toFixed(2) + " minutes");
                infowindow.open(map, marker);
            }
            if(info.length == 1){
                infowindow.setContent(title + " train schedule: " + "<br>" + "Arriving in " + (info[0]/60).toFixed(2) + " minutes");
                infowindow.open(map, marker);
            }
        };
        }

        xmlhttp.send();
    });
}

function closestStation(){
    var distances = [
        {"name": "South", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, SouthStation), "lat": south.lat, "lng": south.lng},
        {"name": "Andrew", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, AndrewStation), "lat": andrew.lat, "lng": andrew.lng},
        {"name": "Porter", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, PorterStation), "lat": porter.lat, "lng": porter.lng},
        {"name": "Harvard", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, HarvardStation), "lat": harvard.lat, "lng": harvard.lng},
        {"name": "JFK/UMass", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, JFKUmassStation), "lat": jfkumass.lat, "lng": jfkumass.lng},
        {"name": "Savin", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, SavinHillStation), "lat": savin.lat, "lng": savin.lng},
        {"name": "Park", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, ParkStreetStation), "lat": park.lat, "lng": park.lng},
        {"name": "Broadway", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, BroadwayStation), "lat": broadway.lat, "lng": broadway.lng},
        {"name": "Northquincy", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, NorthQuincyStation), "lat": northquincy.lat, "lng": northquincy.lng},
        {"name": "Shawmut", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, ShawmutStation), "lat": shawmut.lat, "lng": shawmut.lng},
        {"name": "Davis Square", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, DavisStation), "lat": davis.lat, "lng": davis.lng},
        {"name": "Alewife", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, AlewifeStation), "lat": alewife.lat, "lng": alewife.lng},
        {"name": "Kendall/MIT", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, KendallMITStation), "lat": kendall.lat, "lng": kendall.lng},
        {"name": "Charles/MGH", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, CharlesMGHStation), "lat": charles.lat, "lng": charles.lng},
        {"name": "Dtncrossing", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, DowntownCrossingStation), "lat": dtncrossing.lat, "lng": dtncrossing.lng},
        {"name": "Quincy Center", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, QuincyCenterStation), "lat": quincycenter.lat, "lng": quincycenter.lng},
        {"name": "Quincy Adams", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, QuincyAdamsStation), "lat": quincyadams.lat, "lng": quincyadams.lng},
        {"name": "Ashmont", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, AshmontStation), "lat": ashmont.lat, "lng": ashmont.lng},
        {"name": "Wollaston", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, WollastonStation), "lat": wollaston.lat, "lng": wollaston.lng},
        {"name": "Fields Corner", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, FieldsCornerStation), "lat": fieldscorner.lat, "lng": fieldscorner.lng},
        {"name": "Central", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, CentralStation), "lat": central.lat, "lng": central.lng},
        {"name": "Braintree", "distance": google.maps.geometry.spherical.computeDistanceBetween(myLocation, BraintreeStation), "lat": braintree.lat, "lng": braintree.lng}
    ]
    var shortest = distances[0];
    var shortestDistance = google.maps.geometry.spherical.computeDistanceBetween(myLocation, SouthStation);
    for(i = 0; i < distances.length; i++){
        if(distances[i].distance < shortestDistance){
            shortest = distances[i];
            shortestDistance = distances[i].distance;
        }
    }

    return shortest;
}

function renderMap()
{
    myLocation = new google.maps.LatLng(myLat, myLng);
    myMarker = new google.maps.Marker({
        position: myLocation,
        title: "Your location",
        icon: 'me.png'
    });
    myMarker.setMap(map);
    map.panTo(myLocation);

    southMarker = createMarker(southMarker, SouthStation, "South Station");
    andrewMarker = createMarker(andrewMarker, AndrewStation, "Andrew Station");
    porterMarker = createMarker(porterMarker, PorterStation, "Porter Station");
    harvardMarker = createMarker(harvardMarker, HarvardStation, "Harvard Station");
    jfkumassMarker = createMarker(jfkumassMarker, JFKUmassStation, "JFK/UMASS Station");
    savinMarker = createMarker(savinMarker, SavinHillStation, "Savin Hill Station");
    parkMarker = createMarker(parkMarker, ParkStreetStation, "Park Street Station");
    broadwayMarker = createMarker(broadwayMarker, BroadwayStation, "Broadway Station");
    northquincyMarker = createMarker(northquincyMarker, NorthQuincyStation, "North Quincy Station");
    shawmutMarker = createMarker(shawmutMarker, ShawmutStation, "Shawmut Station");
    davisMarker = createMarker(davisMarker, DavisStation, "Davis Station");
    alewifeMarker = createMarker(alewifeMarker, AlewifeStation, "Alewife Station");
    kendallMarker = createMarker(kendallMarker, KendallMITStation, "Kendall/MIT Station");
    charlesMarker = createMarker(charlesMarker, CharlesMGHStation, "Charles MGH Station");
    dtncrossingMarker = createMarker(dtncrossingMarker, DowntownCrossingStation, "Downtown Crossing Station");
    quincycenterMarker = createMarker(quincycenterMarker, QuincyCenterStation, "Quincy Center Station");
    quincyadamsMarker = createMarker(quincyadamsMarker, QuincyAdamsStation, "Quincy Adams Station");
    ashmontMarker = createMarker(ashmontMarker, AshmontStation, "Ashmont Station");
    wollastonMarker = createMarker(wollastonMarker, WollastonStation, "Wollaston Station");
    fieldscornerMarker = createMarker(fieldscornerMarker, FieldsCornerStation, "Fields Corner Station");
    centralMarker = createMarker(centralMarker, CentralStation, "Central Station");
    braintreeMarker = createMarker(braintreeMarker, BraintreeStation, "Braintree Station");

    var nearestStation = closestStation();
    google.maps.event.addListener(myMarker, 'click', function() {
        infowindow.setContent(nearestStation.name + " is the nearest station to your current location at a distance of " + (nearestStation.distance*0.000621371).toFixed(2) + 'miles.');
        infowindow.open(map, myMarker);
    });
    myPath = [
        {lat: myLat, lng: myLng},
        {lat: nearestStation.lat, lng: nearestStation.lng}
    ] 

    var closestLine = new google.maps.Polyline({
        path: myPath,
        geodesic: true,
        strokeColor: '#0000FF',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    closestLine.setMap(map);

    addInfo(southMarker, southMarker.title, "south");
    addInfo(andrewMarker, andrewMarker.title, "andrew");
    addInfo(porterMarker, porterMarker.title, "porter");
    addInfo(harvardMarker, harvardMarker.title, "harvard");
    addInfo(jfkumassMarker, jfkumassMarker.title, "jfkumass");
    addInfo(savinMarker, savinMarker.title, "savin");
    addInfo(parkMarker, parkMarker.title, "park");
    addInfo(broadwayMarker, broadwayMarker.title, "broadway");
    addInfo(northquincyMarker, northquincyMarker.title, "northquincy");
    addInfo(shawmutMarker, shawmutMarker.title, "shawmut");
    addInfo(davisMarker, davisMarker.title, "davis");
    addInfo(alewifeMarker, alewifeMarker.title, "alewife");
    addInfo(kendallMarker, kendallMarker.title, "kendall");
    addInfo(charlesMarker, charlesMarker.title, "charles");
    addInfo(dtncrossingMarker, dtncrossingMarker.title, "dtncrossing");
    addInfo(quincycenterMarker, quincycenterMarker.title, "quincycenter");
    addInfo(quincyadamsMarker, quincyadamsMarker.title, "quincyadams");
    addInfo(ashmontMarker, ashmontMarker.title, "ashmont");
    addInfo(wollastonMarker, wollastonMarker.title, "wollaston");
    addInfo(fieldscornerMarker, fieldscornerMarker.title, "fieldscorner");
    addInfo(centralMarker, centralMarker.title, "central");
    addInfo(braintreeMarker, braintreeMarker.title, "braintree");
}