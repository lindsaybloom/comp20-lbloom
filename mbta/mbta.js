var southLat = 42.352271;
var southLng = -71.05524200000001;
var andrewLat = 42.330154;
var andrewLng = -71.057655;
var porterLat = 42.3884;
var porterLng = -71.11914899999999;
var harvardLat = 42.373362;
var harvardLng = -71.118956;
var jfkumassLat = 42.320685;
var jfkumassLng = -71.052391;
var savinLat = 42.31129;
var savinLng = -71.053331;
var parkLat = 42.35639457;
var parkLng = -71.0624242;
var broadwayLat = 42.342622;
var broadwayLng = -71.056967;
var northquincyLat = 42.275275;
var northquincyLng = -71.029583;
var shawmutLat = 42.29312583;
var shawmutLng = -71.06573796000001;
var davisLat = 42.39674;
var davisLng =  -71.121815;
var alewifeLat = 42.395428;
var alewifeLng = -71.142483;
var kendallLat = 42.36249079;
var kendallLng = -71.08617653;
var charlesLat = 42.361166;
var charlesLng = -71.070628;
var dtncrossingLat = 42.355518;
var dtncrossingLng = -71.060225;
var quincycenterLat = 42.251809;
var quincycenterLng = -71.005409;
var quincyadamsLat = 42.233391;
var quincyadamsLng = -71.007153;
var ashmontLat = 42.284652;
var ashmontLng = -71.06448899999999;
var wollastonLat = 42.2665139;
var wollastonLng = -71.0203369;
var fieldscornerLat = 42.300093;
var fieldscornerLng = -71.061667;
var centralLat = 42.365486;
var centralLng = -71.103802;
var braintreeLat = 42.2078543;
var braintreeLng = -71.0011385;

var SouthStation = new google.maps.LatLng(southLat, southLng);
var AndrewStation = new google.maps.LatLng(andrewLat, andrewLng);
var PorterStation = new google.maps.LatLng(porterLat, porterLng);
var HarvardStation = new google.maps.LatLng(harvardLat, harvardLng);
var JFKUmassStation = new google.maps.LatLng(jfkumassLat, jfkumassLng);
var SavinHillStation = new google.maps.LatLng(savinLat, savinLng);
var ParkStreetStation = new google.maps.LatLng(parkLat, parkLng);
var BroadwayStation = new google.maps.LatLng(broadwayLat, broadwayLng);
var NorthQuincyStation = new google.maps.LatLng(northquincyLat, northquincyLng);
var ShawmutStation = new google.maps.LatLng(shawmutLat, shawmutLng);
var DavisStation = new google.maps.LatLng(davisLat, davisLng);
var AlewifeStation = new google.maps.LatLng(alewifeLat, alewifeLng);
var KendallMITStation = new google.maps.LatLng(kendallLat, kendallLng);
var CharlesMGHStation = new google.maps.LatLng(charlesLat, charlesLng);
var DowntownCrossingStation = new google.maps.LatLng(dtncrossingLat, dtncrossingLng);
var QuincyCenterStation = new google.maps.LatLng(quincycenterLat, quincycenterLng);
var QuincyAdamsStation = new google.maps.LatLng(quincyadamsLat, quincyadamsLng);
var AshmontStation = new google.maps.LatLng(ashmontLat, ashmontLng);
var WollastonStation = new google.maps.LatLng(wollastonLat, wollastonLng);
var FieldsCornerStation = new google.maps.LatLng(fieldscornerLat, fieldscornerLng);
var CentralStation = new google.maps.LatLng(centralLat, centralLng);
var BraintreeStation = new google.maps.LatLng(braintreeLat, braintreeLng);

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
    if (navigator.geolocation) {  
        navigator.geolocation.getCurrentPosition(function(position) {
            myLat = position.coords.latitude;
            myLng = position.coords.longitude;
            renderMap();
        });
    }
    else {
        alert("Geolocation is not supported by your web browser.  What a shame!");
    }
    renderMap();
}

function init()
{
    map = new google.maps.Map(document.getElementById("map"), myOptions);
    getMyLocation();
   
    var mainPath = [
        {lat: alewifeLat, lng: alewifeLng},
        {lat: davisLat, lng: davisLng},
        {lat: porterLat, lng: porterLng},
        {lat: harvardLat, lng: harvardLng},
        {lat: centralLat, lng: centralLng},
        {lat: kendallLat, lng: kendallLng},
        {lat: charlesLat, lng: charlesLng},
        {lat: parkLat, lng: parkLng},
        {lat: dtncrossingLat, lng: dtncrossingLng},
        {lat: southLat, lng: southLng},
        {lat: broadwayLat, lng: broadwayLng},
        {lat: andrewLat, lng: andrewLng},
        {lat: jfkumassLat, lng: jfkumassLng}
    ];

    var braintreePath = [
        {lat: jfkumassLat, lng: jfkumassLng},
        {lat: northquincyLat, lng: northquincyLng},
        {lat: wollastonLat, lng: wollastonLng},
        {lat: quincycenterLat, lng: quincyadamsLng},
        {lat: quincyadamsLat, lng: quincyadamsLng},
        {lat: braintreeLat, lng: braintreeLng}
    ];

    var ashmontPath = [
        {lat: jfkumassLat, lng: jfkumassLng},
        {lat: savinLat, lng: savinLng},
        {lat: fieldscornerLat, lng: fieldscornerLng},
        {lat: shawmutLat, lng: shawmutLng},
        {lat: ashmontLat, lng: ashmontLng}
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

function renderMap()
{
    console.log(myLat);
    console.log(myLng);
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

