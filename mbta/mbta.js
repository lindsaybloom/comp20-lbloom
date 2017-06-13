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

function center() {
    southLat = 42.352271;
    southLng = -71.05524200000001
    renderMap();
}

function init()
{
    map = new google.maps.Map(document.getElementById("map"), myOptions);
    center();
  
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

function renderMap()
{
    SouthStation = new google.maps.LatLng(southLat, southLng);

    map.panTo(SouthStation);
    
    

    //marker pins for each station
    southMarker = new google.maps.Marker({
        position: SouthStation,
        title: "South Station",
        icon: 'marker.png'
    });
    southMarker.setMap(map);
    
    andrewMarker = new google.maps.Marker({
        position: AndrewStation,
        title: "Andrew Station",
        icon: 'marker.png'
    });
    andrewMarker.setMap(map);
    
    porterMarker = new google.maps.Marker({
        position: PorterStation,
        title: "Porter Square Station",
        icon: 'marker.png'
    });
    porterMarker.setMap(map);
    
    harvardMarker = new google.maps.Marker({
        position: HarvardStation,
        title: "Harvard Square Station",
        icon: 'marker.png'
    });
    harvardMarker.setMap(map);

    jfkumassMarker = new google.maps.Marker({
        position: JFKUmassStation,
        title: "JFK/UMass Station",
        icon: 'marker.png'
    });
    jfkumassMarker.setMap(map);
    
    savinMarker = new google.maps.Marker({
        position: SavinHillStation,
        title: "Savin Hill Station",
        icon: 'marker.png'
    });
    savinMarker.setMap(map);
    
    parkMarker = new google.maps.Marker({
        position: ParkStreetStation,
        title: "Park Street Station",
        icon: 'marker.png'
    });
    parkMarker.setMap(map);
    
    broadwayMarker = new google.maps.Marker({
        position: BroadwayStation,
        title: "Broadway Station",
        icon: 'marker.png'
    });
    broadwayMarker.setMap(map);
    
    northquincyMarker = new google.maps.Marker({
        position: NorthQuincyStation,
        title: "North Quincy Station",
        icon: 'marker.png'
    });
    northquincyMarker.setMap(map);
    
    shawmutMarker = new google.maps.Marker({
        position: ShawmutStation,
        title: "Shawmut Station",
        icon: 'marker.png'
    });
    shawmutMarker.setMap(map);
    
    davisMarker = new google.maps.Marker({
        position: DavisStation,
        title: "Davis Square Station",
        icon: 'marker.png'
    });
    davisMarker.setMap(map);
    
    alewifeMarker = new google.maps.Marker({
        position: AlewifeStation,
        title: "Alewife Station",
        icon: 'marker.png'
    });
    alewifeMarker.setMap(map);
    
    kendallMarker = new google.maps.Marker({
        position: KendallMITStation,
        title: "Kendall/MIT Station",
        icon: 'marker.png'
    });
    kendallMarker.setMap(map);
    
    charlesMarker = new google.maps.Marker({
        position: CharlesMGHStation,
        title: "Charles/MGH Station",
        icon: 'marker.png'
    });
    charlesMarker.setMap(map);
    
    dtncrossingMarker = new google.maps.Marker({
        position: DowntownCrossingStation,
        title: "Downtown Crossing Station",
        icon: 'marker.png'
    });
    dtncrossingMarker.setMap(map);
    
    quincycenterMarker = new google.maps.Marker({
        position: QuincyCenterStation,
        title: "Quincy Center Station",
        icon: 'marker.png'
    });
    quincycenterMarker.setMap(map);
    
    quincyadamsMarker = new google.maps.Marker({
        position: QuincyAdamsStation,
        title: "Quincy Adams Station",
        icon: 'marker.png'
    });
    quincyadamsMarker.setMap(map);
    
    ashmontMarker = new google.maps.Marker({
        position: AshmontStation,
        title: "Ashmont Station",
        icon: 'marker.png'
    });
    ashmontMarker.setMap(map);
    
    wollastonMarker = new google.maps.Marker({
        position: WollastonStation,
        title: "Wollaston Station",
        icon: 'marker.png'
    });
    wollastonMarker.setMap(map);
    
    fieldscornerMarker = new google.maps.Marker({
        position: FieldsCornerStation,
        title: "Fields Corner Station",
        icon: 'marker.png'
    });
    fieldscornerMarker.setMap(map);
    
    centralMarker = new google.maps.Marker({
        position: CentralStation,
        title: "Central Square Station",
        icon: 'marker.png'
    });
    centralMarker.setMap(map);
    
    braintreeMarker= new google.maps.Marker({
        position: BraintreeStation,
        title: "Braintree Station",
        icon: 'marker.png'
    });
    braintreeMarker.setMap(map);
    
    //Info windows for each station
    google.maps.event.addListener(southMarker, 'click', function() {
        infowindow.setContent(southMarker.title);
        infowindow.open(map, southMarker);
    });
    
     google.maps.event.addListener(andrewMarker, 'click', function() {
        infowindow.setContent(andrewMarker.title);
        infowindow.open(map, andrewMarker);
    });
    
     google.maps.event.addListener(porterMarker, 'click', function() {
        infowindow.setContent(porterMarker.title);
        infowindow.open(map, porterMarker);
    });
    
     google.maps.event.addListener(harvardMarker, 'click', function() {
        infowindow.setContent(harvardMarker.title);
        infowindow.open(map, harvardMarker);
    });
    
    google.maps.event.addListener(jfkumassMarker, 'click', function() {
        infowindow.setContent(jfkumassMarker.title);
        infowindow.open(map, jfkumassMarker);
    });
    
    google.maps.event.addListener(savinMarker, 'click', function() {
        infowindow.setContent(savinMarker.title);
        infowindow.open(map, savinMarker);
    });
    
    google.maps.event.addListener(parkMarker, 'click', function() {
        infowindow.setContent(parkMarker.title);
        infowindow.open(map, parkMarker);
    });
    
    google.maps.event.addListener(broadwayMarker, 'click', function() {
        infowindow.setContent(broadwayMarker.title);
        infowindow.open(map, broadwayMarker);
    });
    
    google.maps.event.addListener(northquincyMarker, 'click', function() {
        infowindow.setContent(northquincyMarker.title);
        infowindow.open(map, northquincyMarker);
    });
    
    google.maps.event.addListener(shawmutMarker, 'click', function() {
        infowindow.setContent(shawmutMarker.title);
        infowindow.open(map, shawmutMarker);
    });
    
    google.maps.event.addListener(davisMarker, 'click', function() {
        infowindow.setContent(davisMarker.title);
        infowindow.open(map, davisMarker);
    });
    
    google.maps.event.addListener(alewifeMarker, 'click', function() {
        infowindow.setContent(alewifeMarker.title);
        infowindow.open(map, alewifeMarker);
    });
    
    google.maps.event.addListener(kendallMarker, 'click', function() {
        infowindow.setContent(kendallMarker.title);
        infowindow.open(map, kendallMarker);
    });
    
    google.maps.event.addListener(charlesMarker, 'click', function() {
        infowindow.setContent(charlesMarker.title);
        infowindow.open(map, charlesMarker);
    });
    
    google.maps.event.addListener(dtncrossingMarker, 'click', function() {
        infowindow.setContent(dtncrossingMarker.title);
        infowindow.open(map, dtncrossingMarker);
    });
    
    google.maps.event.addListener(quincycenterMarker, 'click', function() {
        infowindow.setContent(quincycenterMarker.title);
        infowindow.open(map, quincycenterMarker);
    });
    
    google.maps.event.addListener(quincyadamsMarker, 'click', function() {
        infowindow.setContent(quincyadamsMarker.title);
        infowindow.open(map, quincyadamsMarker);
    });
    
    google.maps.event.addListener(ashmontMarker, 'click', function() {
        infowindow.setContent(ashmontMarker.title);
        infowindow.open(map, ashmontMarker);
    });
    
    google.maps.event.addListener(wollastonMarker, 'click', function() {
        infowindow.setContent(wollastonMarker.title);
        infowindow.open(map, wollastonMarker);
    });
    
    google.maps.event.addListener(fieldscornerMarker, 'click', function() {
        infowindow.setContent(fieldscornerMarker.title);
        infowindow.open(map, fieldscornerMarker);
    });
    
    google.maps.event.addListener(centralMarker, 'click', function() {
        infowindow.setContent(centralMarker.title);
        infowindow.open(map, centralMarker);
    });
    
    google.maps.event.addListener(braintreeMarker, 'click', function() {
        infowindow.setContent(braintreeMarker.title);
        infowindow.open(map, braintreeMarker);
    });
    
}