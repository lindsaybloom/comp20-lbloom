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
var charles = {lat: 2.361166, lng: -71.070628};
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
    zoom: 13, // The larger the zoom number, the bigger the zoom
    center: SouthStation,
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
        {lat: savin.lat, lng: savi.lng},
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

function addInfo(marker, title){
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(title);
        infowindow.open(map, marker);
    });
}

//function closestStation(lat, lng){

//}

function renderMap()
{
    var myLocation = new google.maps.LatLng(myLat, myLng);
    myMarker = new google.maps.Marker({
        position: myLocation,
        title: "Your location",
        icon: 'me.png'
    });
    myMarker.setMap(map);
    map.panTo(myLocation);

    google.maps.event.addListener(myMarker, 'click', function() {
        infowindow.setContent(myMarker.title);
        infowindow.open(map, myMarker);
    });

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

    addInfo(southMarker, southMarker.title);
    addInfo(andrewMarker, andrewMarker.title);
    addInfo(porterMarker, porterMarker.title);
    addInfo(harvardMarker, harvardMarker.title);
    addInfo(jfkumassMarker, jfkumassMarker.title);
    addInfo(savinMarker, savinMarker.title);
    addInfo(parkMarker, parkMarker.title);
    addInfo(broadwayMarker, broadwayMarker.title);
    addInfo(northquincyMarker, northquincyMarker.title);
    addInfo(shawmutMarker, shawmutMarker.title);
    addInfo(davisMarker, davisMarker.title);
    addInfo(alewifeMarker, alewifeMarker.title);
    addInfo(kendallMarker, kendallMarker.title);
    addInfo(charlesMarker, charlesMarker.title);
    addInfo(dtncrossingMarker, dtncrossingMarker.title);
    addInfo(quincycenterMarker, quincycenterMarker.title);
    addInfo(quincyadamsMarker, quincyadamsMarker.title);
    addInfo(ashmontMarker, ashmontMarker.title);
    addInfo(wollastonMarker, wollastonMarker.title);
    addInfo(fieldscornerMarker, fieldscornerMarker.title);
    addInfo(centralMarker, centralMarker.title);
    addInfo(braintreeMarker, braintreeMarker.title);
}

