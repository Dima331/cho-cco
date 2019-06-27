; (function () {
    ymaps.ready(init);
    function init() {
        var myMap = new ymaps.Map("map", {
            center: [53.904268, 27.558929],
            zoom: 14,

        });
        var coords = [
            [53.905475, 27.564452], [53.907426, 27.550526], [53.902079, 27.553917]
        ],
            myCollection = new ymaps.GeoObjectCollection({}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/footer/item.png',
                iconImageSize: [46, 57],
                iconImageOffset: [-26, -52]
            });
        for (var i = 0; i < coords.length; i++) {
            myCollection.add(new ymaps.Placemark(coords[i]));
        }
        myMap.geoObjects.add(myCollection);

        myMap.behaviors.disable('scrollZoom');
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('routeButtonControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('rulerControl');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('zoomControl');
        myMap.controls.add('zoomControl', {
            float: 'none',
            size: 'small',
            position: {
                top: 'auto',
                left: 'auto',
                bottom: '250px',
                right: '30px'
            }
        });




    }

})()


