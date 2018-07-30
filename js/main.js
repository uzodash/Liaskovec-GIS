let format = 'image/png';
let bounds = [9459234.99609375, 4666044.9296875,
            9481933.644470215, 4681464.00390625];

// let layerOSM = new ol.layer.Tile({
//     source: new ol.source.OSM(),
//     name: 'Улична основа',
//     preload: Infinity,
//     visible: true
// });

// let layerBing = new ol.layer.Tile({
//     source: new ol.source.BingMaps({key: 'Atj_O7GzP1FJbECPnyHwExqFTssFbKLbkrpNt6_hqnrGOt-0Hs7EN1cyILkr7Uwt'}),
//     name: 'Сателитна основа',
//     preload: Infinity,
//     visible: false
// });

// let sourceSgradi = new ol.source.TileWMS(({
//         url: 'http://84.43.190.242:8080/geoserver/letna/wms',
//         params: {'LAYERS': 'letna:Sgradi','CRS': 'EPSG:3857'},
//         serverType: 'geoserver'
//     }));

// let layerSgradi = new ol.layer.Tile({
//     source: sourceSgradi,
//     name: 'Сгради',
//     serverName:'Sgradi',
//     visible: false
// });

// let sourceImoti = new ol.source.TileWMS(({
//         url: 'http://84.43.190.242:8080/geoserver/letna/wms',
//         params: {'LAYERS': 'letna:Imoti','CRS': 'EPSG:3857'},
//         serverType: 'geoserver'
//     }));

// let layerImoti = new ol.layer.Tile({
//     source: sourceImoti,
//     name: 'Имоти',
//     serverName:'Imoti',
//     visible: false
// });

let layerStroitelniGranici = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/LyaskovecMay/wms',
        params: {'FORMAT': format, 
                   'VERSION': '1.1.1',
                   tiled: true,
                LAYERS: 'LyaskovecMay:granici',
             tilesOrigin: 9459234.99609375 + "," + 4666044.9296875},
        serverType: 'geoserver'
    })),
    name: 'Граници',
    serverName:'granici',
    serverWorkspace:'LyaskovecMay',
    visible: false
});

let layerGranica = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/Liaskovec70/wms',
        params: {'FORMAT': format, 
                   'VERSION': '1.1.1',
                   tiled: true,
                LAYERS: 'Liaskovec70:granica_obshtina',
             tilesOrigin: 9459234.99609375 + "," + 4666044.9296875},
        serverType: 'geoserver'
    })),
    name: 'Граница община',
    serverName:'granica_obshtina',
    serverWorkspace:'Liaskovec70',
    visible: false
});
let layerKVS = new ol.layer.Tile({
    source: new ol.source.TileWMS({
          url: 'http://84.43.190.246:8080/geoserver/Liaskovec70/wms',
          params: {'FORMAT': format, 
                   'VERSION': '1.1.1',
                   tiled: true,
                LAYERS: 'Liaskovec70:KVS_ob_cyr',
             tilesOrigin: 9459234.99609375 + "," + 4666044.9296875
          }
        }),
    name: 'КВС',
    serverName:'KVS_obshtina',
    serverWorkspace:'Liaskovec70',
    visible: false
});
let layerOporenPlan = new ol.layer.Tile({
    source: new ol.source.TileWMS({
          url: 'http://84.43.190.246:8080/geoserver/LyaskovecMay/wms',
          params: {'FORMAT': format, 
                   'VERSION': '1.1.1',
                   tiled: true,
                   tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                   LAYERS: 'LyaskovecMay:oporen_plan'}
        }),
    name: 'Опорен план',
    serverName:'oporen_plan',
    serverWorkspace:'LyaskovecMay',
    visible: true
});
let layerNaseleniMesta = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/Liaskovec70/wms',
        params: {'FORMAT': format, 
                'VERSION': '1.1.1',
                tiled: true,
                tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                LAYERS: 'Liaskovec70:naseleni_mesta'},
        serverType: 'geoserver'
    })),
    name: 'Населени места',
    serverName:'naseleni_mesta',
    serverWorkspace:'Liaskovec70',
    visible: false
});
let layerNaturalHabitati = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/Liaskovec70/wms',
        params: {'FORMAT': format, 
                'VERSION': '1.1.1',
                tiled: true,
                tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                LAYERS: 'Liaskovec70:natura_habitati'},
        serverType: 'geoserver'
    })),
    name: 'Зони за защита по Директивата за хабитатите 92/43/ЕЕС (NATURA 2000)',
    serverName:'natura_habitati',
    serverWorkspace:'Liaskovec70',
    visible: false
});
let layerPUP = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/LyaskovecMay/wms',
        params: {'FORMAT': format, 
                'VERSION': '1.1.1',
                tiled: true,
                tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                LAYERS: 'LyaskovecMay:pup'},
        serverType: 'geoserver'
    })),
    name: 'ПУП',
    serverName:'pup',
    serverWorkspace:'LyaskovecMay',
    visible: false
});
let layerTransport = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/LyaskovecMay/wms',
        params: {'FORMAT': format, 
                'VERSION': '1.1.1',
                tiled: true,
                tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                LAYERS: 'LyaskovecMay:Transport'},
        serverType: 'geoserver'
    })),
    name: 'Транспорт',
    serverName:'Transport',
    serverWorkspace:'LyaskovecMay',
    visible: false
});
let layerUstroistveniZoni = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/LyaskovecMay/wms',
        params: {'FORMAT': format, 
                'VERSION': '1.1.1',
                tiled: true,
                tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                LAYERS: 'LyaskovecMay:Ustroistveni_zoni'},
        serverType: 'geoserver'
    })),
    name: 'Устройствени зони',
    serverName:'Ustroistveni_zoni',
    serverWorkspace:'LyaskovecMay',
    visible: false
});
let layerZashtitenaMestnost = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/Liaskovec70/wms',
        params: {'FORMAT': format, 
                'VERSION': '1.1.1',
                tiled: true,
                tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                LAYERS: 'Liaskovec70:zashtitena_mestnost'},
        serverType: 'geoserver'
    })),
    name: 'Защитена местност',
    serverName:'zashtitena_mestnost',
    serverWorkspace:'Liaskovec70',
    visible: false
});
let layerZemlishtniGranici = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/Liaskovec70/wms',
        params: {'FORMAT': format, 
                'VERSION': '1.1.1',
                tiled: true,
                tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                LAYERS: 'Liaskovec70:zemlishtni_granici'},
        serverType: 'geoserver'
    })),
    name: 'Землищни граници',
    serverName:'zemlishtni_granici',
    serverWorkspace:'Liaskovec70',
    visible: false
});

let layerBazoviStancii = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/LyaskovecMay/wms',
        params: {'FORMAT': format, 
                'VERSION': '1.1.1',
                tiled: true,
                tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                LAYERS: 'LyaskovecMay:Bazovi_stancii'},
        serverType: 'geoserver'
    })),
    name: 'Базови станции',
    serverName:'Bazovi_stancii',
    serverWorkspace:'LyaskovecMay',
    visible: false
});

let layerOptichniKabeli = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/LyaskovecMay/wms',
        params: {'FORMAT': format, 
                'VERSION': '1.1.1',
                tiled: true,
                tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                LAYERS: 'LyaskovecMay:Optichni_kabeli'},
        serverType: 'geoserver'
    })),
    name: 'Оптични кабели',
    serverName:'Optichni_kabeli',
    serverWorkspace:'LyaskovecMay',
    visible: false
});

let layerGroupTelekom = new ol.layer.Group({
    layers: [layerOptichniKabeli,layerBazoviStancii],
    name: 'Телекомуникации'
});

let layerGazosnabdqvane = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/LyaskovecMay/wms',
        params: {'FORMAT': format, 
                'VERSION': '1.1.1',
                tiled: true,
                tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                LAYERS: 'LyaskovecMay:Gazosnabdqvane'},
        serverType: 'geoserver'
    })),
    name: 'Газоснабдяване',
    serverName:'Gazosnabdqvane',
    serverWorkspace:'LyaskovecMay',
    visible: false
});

let layerKanalizaciq = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/LyaskovecMay/wms',
        params: {'FORMAT': format, 
                'VERSION': '1.1.1',
                tiled: true,
                tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                LAYERS: 'LyaskovecMay:Kanalizacia'},
        serverType: 'geoserver'
    })),
    name: 'Канализация',
    serverName:'Kanalizacia',
    serverWorkspace:'LyaskovecMay',
    visible: false
});

let layerVodoprovod = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/LyaskovecMay/wms',
        params: {'FORMAT': format, 
                'VERSION': '1.1.1',
                tiled: true,
                tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                LAYERS: 'LyaskovecMay:vodoprovod'},
        serverType: 'geoserver'
    })),
    name: 'Водопоровод',
    serverName:'vodoprovod',
    serverWorkspace:'LyaskovecMay',
    visible: false
});

let layerGroupVIK = new ol.layer.Group({
    layers: [layerVodoprovod,layerKanalizaciq],
    name: 'ВиК'
});

let layerElektroporovodi = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/LyaskovecMay/wms',
        params: {'FORMAT': format, 
                'VERSION': '1.1.1',
                tiled: true,
                tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                LAYERS: 'LyaskovecMay:Elektroprovodi'},
        serverType: 'geoserver'
    })),
    name: 'Електропороводи',
    serverName:'Elektroprovodi',
    serverWorkspace:'LyaskovecMay',
    visible: false
});

let layerGroupInj = new ol.layer.Group({
    layers: [layerGroupTelekom,layerGazosnabdqvane,layerGroupVIK,layerElektroporovodi],
    name: 'Инженерна инфраструктура'
});

let layerNKC = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/LyaskovecMay/wms',
        params: {'FORMAT': format, 
                'VERSION': '1.1.1',
                tiled: true,
                tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                LAYERS: 'LyaskovecMay:NKC'},
        serverType: 'geoserver'
    })),
    name: 'НКЦ',
    serverName:'NKC',
    serverWorkspace:'LyaskovecMay',
    visible: false
});

let layerRejimiNkc = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/Liaskovec70/wms',
        params: {'FORMAT': format, 
                'VERSION': '1.1.1',
                tiled: true,
                tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                LAYERS: 'Liaskovec70:Rezhimi_nkc'},
        serverType: 'geoserver'
    })),
    name: 'Режими',
    serverName:'Rezhimi_nkc',
    serverWorkspace:'Liaskovec70',
    visible: false
});

let layerTuristicheskiMarshruti = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/Liaskovec70/wms',
        params: {'FORMAT': format, 
                'VERSION': '1.1.1',
                tiled: true,
                tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                LAYERS: 'Liaskovec70:glavni_turisticheski_marshruti'},
        serverType: 'geoserver'
    })),
    name: 'Главни туристически маршрути',
    serverName:'glavni_turisticheski_marshruti',
    serverWorkspace:'Liaskovec70',
    visible: false
});

let layerTkin = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/LyaskovecMay/wms',
        params: {'FORMAT': format, 
                'VERSION': '1.1.1',
                tiled: true,
                tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                LAYERS: 'LyaskovecMay:Tkin'},
        serverType: 'geoserver'
    })),
    name: 'Tкин',
    serverName:'Tkin',
    serverWorkspace:'LyaskovecMay',
    visible: false
});

let layerAns = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: 'http://84.43.190.246:8080/geoserver/LyaskovecMay/wms',
        params: {'FORMAT': format, 
                'VERSION': '1.1.1',
                tiled: true,
                tilesOrigin: 9459234.99609375 + "," + 4666044.9296875,
                LAYERS: 'LyaskovecMay:Aktivno_svlachishte'},
        serverType: 'geoserver'
    })),
    name: 'Aктивно неукрепено свлачище',
    serverName:'Aktivno_svlachishte ',
    serverWorkspace:'LyaskovecMay',
    visible: false
});

let layerGroupKin = new ol.layer.Group({
    layers: [layerTkin,layerTuristicheskiMarshruti,layerNKC,layerRejimiNkc],
    name: 'Културно историческо наследство'
});

//vector layer for displaying WFS responses from identification and search
let vectorSource = new ol.source.Vector();
let vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    name: 'theVectorLayer',
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color:'rgba(0,0,255,1.0)',
            width: 2
        })
    })
});

let mousePositionControl = new ol.control.MousePosition({
        className: 'custom-mouse-position',
        target: document.getElementById('location'),
        coordinateFormat: ol.coordinate.createStringXY(3),
        undefinedHTML: '&nbsp;'
      });

// let scaleLineControl = new ol.control.ScaleLine({
//         className: 'custom-scale-position',
//         target: document.getElementById('scale'),
//         undefinedHTML: '&nbsp;'
//       });

//Main map control and view
let projection = new ol.proj.Projection({
          code: 'EPSG:32635',
          units: 'm',
          axisOrientation: 'neu',
          global: false
      });

let zoomToOriginalExtent = new ol.control.ZoomToExtent({
    label: 'О', tipLabel:'Начална позиция на картата', extent: bounds
});

let view = new ol.View({
    projection: projection
});

let map = new ol.Map({
    controls: ol.control.defaults({attribution: true}).extend([mousePositionControl, zoomToOriginalExtent]),
    target: 'map',
    layers: [layerOporenPlan,layerAns,layerPUP,layerUstroistveniZoni,layerZashtitenaMestnost,layerNaturalHabitati,layerGroupKin,layerGroupInj,layerKVS,layerZemlishtniGranici,layerNaseleniMesta, layerGranica,layerStroitelniGranici,layerTransport, vectorLayer],
    view: new ol.View({
           projection: projection
        })
});

map.getLayerGroup().set('name', 'Слоеве');
map.getView().on('change:resolution', function(evt) {
        let resolution = evt.target.get('resolution');
        let units = map.getView().getProjection().getUnits();
        let dpi = 25.4 / 0.28;
        let mpu = ol.proj.METERS_PER_UNIT[units];
        let scale = resolution * mpu * 39.37 * dpi;
        scale = Math.round(scale);
        document.getElementById('scale').innerHTML = "1 : " + scale;
      });
      map.getView().fit(bounds, map.getSize());
//Table of Contents
/**
* Build a tree layer from the map layers with visible and opacity 
* options.
* 
* @param {type} layer
* @returns {String}
*/
function buildLayerTree(layer) {

    let elem;
    let name = layer.get('name') ? layer.get('name') : "Group";
    let visibility = layer.get('visible');
    let div = "";
    
    //a condition to hide the vector layer from the TOC
    if (name == 'theVectorLayer'){
        elem = '';
        return elem;
    }

    //get TOC elements
    if (!layer.getLayers) {
        if (visibility !== true ){
            div = "<li data-layerid='" + name + "'>" +
                "<span>" + layer.get('name')  +
                "<i class='glyphicon glyphicon-unchecked'></i> " + "</span>";
        }
        else {
            div = "<li data-layerid='" + name + "'>" +
                "<span>" + layer.get('name') + 
                "<i class='glyphicon glyphicon-check'></i> " + "</span>";
        }
    }
    else{
        div = "<li data-layerid='" + name + "'>" +
                "<span>" + layer.get('name') + 
                "<i class='glyphicon glyphicon-minus'></i> " + "</span>";
    }
    
    if (layer.getLayers) {
        let sublayersElem = ''; 
        let layers = layer.getLayers().getArray(),
                len = layers.length;

        for (let i = len - 1; i >= 0; i--) {
            sublayersElem += buildLayerTree(layers[i]);

        }
        elem = div + " <ul>" + sublayersElem + "</ul></li>";
    } else {
        elem = div + " </li>";
    }
    return elem;
}

/**
 * Initialize the tree from the map layers
 * @returns {undefined}
 */
function initializeTree() {
    
    let elem = buildLayerTree(map.getLayerGroup());
    console.log(elem);
    $('#layertree').empty().append(elem);

    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Покажи подслоевете');
    $('.tree li.parent_li > span').on('click', function(e) {
        let children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).attr('title', 'Отвори').find(' > i').fadeIn(400).addClass('glyphicon-plus').removeClass('glyphicon-minus');
        } else {
            children.show('fast');
            $(this).attr('title', 'Затвори').find(' > i').fadeIn(400).addClass('glyphicon-minus').removeClass('glyphicon-plus');
        }
        e.stopPropagation();
    });
}

/**
 * Finds recursively the layer with the specified key and value.
 * @param {ol.layer.Base} layer
 * @param {String} key
 * @param {any} value
 * @returns {ol.layer.Base}
 */
function findBy(layer, key, value) {

    if (layer.get(key) === value) {
        return layer;
    }

    // Find recursively if it is a group
    if (layer.getLayers) {
        let layers = layer.getLayers().getArray(),
                len = layers.length, result;
        for (let i = 0; i < len; i++) {
            result = findBy(layers[i], key, value);
            if (result) {
                return result;
            }
        }
    }

    return null;
}

//Legend 
/**
* Build a <img> list from the map layers
* 
* @param {type} layer
* @returns {String}
*/
function buildLegend(layer) {

    let elem;
    //let name = layer.get('name') ? layer.get('name') : "Group";
    //let visibility = layer.get('visible');
    let layerSource = layer.get('serverName');
    let layerWorkspace = layer.get('serverWorkspace');
    let div = "";

    let legendService = "http://84.43.190.246:8080/geoserver/" + layerWorkspace + "/wms?Service=WMS&REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=15&LAYER="
    
    if (!layer.getLayers && layerSource != null) {
        
        let layerName = layer.get('name');
        let legendSource = legendService + layerSource;
        let layerVisible = layer.get('visible');
        
        if(layerVisible == false){
            div = "<div class='legendItem' legend-layerid='"+ layerName +"'>" +
                    "<span class='legendItemName'>" + layerName + "</span>" +
                    "<img class='' id='legendItem" + layerSource + "' src= '" + legendSource + "'>" +
                  "</div>";
         }
         else{
            div = "<div class='legendItem active' legend-layerid='"+ layerName +"'>" +
                "<span class='legendItemName'>" + layerName + "</span>" +
                "<img class='' id='legendItem" + layerSource + "' src= '" + legendSource + "'>" +
                "</div>";
         }
        
                  
        //if(layerVisible == false){$("[legend-layerid='"+ layerName +"']").hide();}
    }
    else{
        div = "";
    }

    if (layer.getLayers) {
        let sublayersElem = ''; 
        let layers = layer.getLayers().getArray(),
                len = layers.length;
        for (let i = len - 1; i >= 0; i--) {
            sublayersElem += buildLegend(layers[i]);
            
        }
        elem = div + sublayersElem;
    } else {
        elem = div;
    }
    return elem;

    
}

/**
 * Initialize the legend from the map layers
 * @returns {undefined}
 */
function initializeLegend() {
    
    let legendElem = buildLegend(map.getLayerGroup());
    $('#legendMain').append(legendElem);
}

/**
 * Search tool - using WFS GetFeature from searchInput box to retrieve 
 * info from layer
 * 
 */
function searchForFeatures() {

    searchInputValue = document.getElementById('searchInput').value;
    if (searchInputValue !== ''){

        vectorSource.clear()

        let searchValue = '%' + document.getElementById('searchInput').value + '%';
        
        // generate a GetFeature request
        let featureRequest = new ol.format.WFS().writeGetFeature({
            srsName: 'EPSG:32635',
            featureNS: 'Liaskovec70',
            featurePrefix: 'Liaskovec70',
            featureTypes: ['KVS_ob_cyr'],
            outputFormat: 'application/json',
            filter: ol.format.filter.like('ident', searchValue, '%')
        })
    
        fetchFeatures(featureRequest);

    }
}

/**
 * Identification tool - using WFS GetFeature from map click to retrieve 
 * info from layer
 * 
 */
let viewProjection = view.getProjection();
let viewResolution = view.getResolution();

map.on('click', function(evt) {

    vectorSource.clear()

    let coords = evt.coordinate;
    let bbox_area = [coords[0],coords[1],coords[0],coords[1]];
    
    let coordX = coords[0].toString().replace(/^(\d+\.\d{2}).*$/, '$1');
    let coordY = coords[1].toString().replace(/^(\d+\.\d{2}).*$/, '$1');

    let coordsForInput = coordX + ', ' + coordY;
    document.getElementById('searchInput').value = coordsForInput;
    //a letiable to hold the features returned from the POST
    let features;

    // generate a GetFeature request
    let featureRequest = new ol.format.WFS().writeGetFeature({
        srsName: 'EPSG:32635',
        featureNS: 'Liaskovec70',
        featurePrefix: 'Liaskovec70',
        featureTypes: ['KVS_ob_cyr'],
        outputFormat: 'application/json',
        filter: ol.format.filter.bbox('the_geom', bbox_area)
    })
    
    fetchFeatures(featureRequest);
});

/**
 * Sends a fetch request to the Geoserver and waits for 
 * success or error response
 * 
 * @param {type} featureRequest
 * 
 * not in use
 * not working in IE
 */
function fetchFeaturesWithFETCH(featureRequest){

    console.log(featureRequest);

    $('.isLoadingIcon').show();
    $('#resultsPanel').empty();
    $('div#resultsPanel').css('height', '');
    // then post the request and add the received features to a layer
    window.fetch('http://84.43.190.246:8080/geoserver/wfs', {
        method: 'POST',
        body: new XMLSerializer().serializeToString(featureRequest)
    }).then(function(response) {
        return response.json();
    }).then(function(json) {
        let features = new ol.format.GeoJSON().readFeatures(json);
        vectorSource.addFeatures(features);

        zoomToExtent(vectorSource.getExtent());
        fillFeaturesInList(features);
    }).catch(function(error){

        $('.isLoadingIcon').hide();

        if (error.code == 25){
            $('#alertWrapper .alertMessage').text('Не са намерени резултати от търсенето!')
            $('#alertWrapper').show();
        }
        else {
            $('#alertWrapper .alertMessage').text('Възникна проблем, моля опитайте отново!')
            $('#alertWrapper').show();
        }
    });         
}

/**
 * Sends a XMLHttpRequest to the Geoserver and waits for 
 * success or error response
 * 
 * @param {type} featureRequest
 * 
 */
function fetchFeatures(featureRequest){

    $('.isLoadingIcon').show();
    $('#resultsPanel').empty();
    $('div#resultsPanel').css('height', '');

    console.log(featureRequest);
    let body = new XMLSerializer().serializeToString(featureRequest);
    console.log(body);

    let httpRequest = new XMLHttpRequest();
    let requestUrl = "http://84.43.190.246:8080/geoserver/wfs";
    httpRequest.open("POST", requestUrl, true);
    httpRequest.setRequestHeader("Content-type", "text/plain;charset=UTF-8");

    httpRequest.onreadystatechange = function() {//Call a function when the state changes.
        if(httpRequest.readyState == 4 && httpRequest.status == 200) {
            try{
                let features = new ol.format.GeoJSON().readFeatures(httpRequest.responseText);
                vectorSource.addFeatures(features);
                zoomToExtent(vectorSource.getExtent());
                fillFeaturesInList(features);           
            }
            catch(e){

                 $('.isLoadingIcon').hide();

                if (e.code == 25){
                    $('#alertWrapper .alertMessage').text('Не са намерени резултати от търсенето!')
                    $('#alertWrapper').show();
                }
                else {
                    $('#alertWrapper .alertMessage').text('Възникна проблем, моля опитайте отново!')
                    $('#alertWrapper').show();
        }
            }
           

        }
    }
    httpRequest.send(body);

}

/**
 * Error handler for fetch request
 * 
 * @param {type} error
 * 
 */
function handleFetchErrors(error){

    $('.isLoadingIcon').hide();

    if (error.code = 25){
        $('#alertWrapper .alertMessage').text('no result')
        $('#alertWrapper').show();
    }
    else {
        $('#alertWrapper .alertMessage').text('some other error')
        $('#alertWrapper').show();
    }
}

/**
 * Loads the returned features from search/identification to a list of found features
 * 
 * @param {type} features
 * 
 */
function fillFeaturesInList(features){

    //let featuresArray = features.getArray();
    let len = features.length;

    for (let i = len - 1; i >= 0; i--){
        
        let feature = features[i];
        let featureKeys = feature.getKeys();
        //console.log(featureKeys);
        let featureProperties = feature.getProperties();
        //console.log(featureProperties);
        let featureId = feature.getId();

        //a regular expression for checking the type of the feature
        let regImoti = /KVS_ob_cyr/;
        let testImoti = regImoti.test(featureId);

        let shapeArea = featureProperties.Shape_Area.toString().replace(/^(\d+\.\d{1}).*$/, '$1');
        
        if (testImoti == true){
            let div = "<div class='panel panel-default searchResult'>" + 
                        "<div class='panel-heading searchResultHeading' role='tab' id='heading"+ i +"'>" + 
                            "<h4 class='panel-title searchResultTitle'>" +
                                "<a id='"+ featureId +"'role='button' data-toggle='collapse' data-parent='#resultsPanel' href='#collapse"+ i +"' aria-expanded='false'  aria-controls='collapse"+ i +"'>" +
                                    "<img class='searchResultIcon' src='assets/icon_imot.png'>" + featureProperties.ident +
                                "</a>" +
                            "</h4>" +
                        "</div>" +
                        "<div id='collapse"+ i +"' class='panel-collapse collapse searchResultCollapse' role='tabpanel' aria-labelledby='heading"+ i +"'>" +
                            "<div class='panel-body searchResultBody'>" +
                               "<ul>" +
                                    "<li><span class='key'>Идентификатор: </span><span class='value'>"+ featureProperties.ident +"</span></li>"+
                                    "<li><span class='key'>EKATTE: </span><span class='value'>"+ featureProperties.EKATTE_1 +"</span></li>"+
                                    "<li><span class='key'>Начин на трайно ползване: </span><span class='value'>"+ featureProperties.NTP +"</span></li>"+
                                    "<li><span class='key'>Собственост: </span><span class='value'>"+ featureProperties.sobstv +"</span></li>"+
                                    "<li><span class='key'>Площ: </span><span class='value'>"+ shapeArea +" кв.м</span></li>"+
                            "</div>" +
                        "</div>" +
                    "</div>";
        }
        else {
             let div = "<div class='panel panel-default searchResult'>" + 
                        "<div class='panel-heading searchResultHeading' role='tab' id='heading"+ i +"'>" + 
                            "<h4 class='panel-title searchResultTitle'>" +
                                "<a id='"+ featureId +"' role='button' data-toggle='collapse' data-parent='#resultsPanel' href='#collapse"+ i +"' aria-expanded='false'  aria-controls='collapse"+ i +"'>" +
                                    "<img class='searchResultIcon' src='assets/icon_sgrada.png'>" + featureProperties.UPI +
                                "</a>" +
                            "</h4>" +
                        "</div>" +
                        "<div id='collapse"+ i +"' class='panel-collapse collapse searchResultCollapse' role='tabpanel' aria-labelledby='heading"+ i +"'>" +
                            "<div class='panel-body searchResultBody'>" +
                                "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid." +
                            "</div>" +
                        "</div>" +
                    "</div>";
       
        }
     
        $('#resultsPanel').append(div);
    }

    $('.isLoadingIcon').hide();
    $('.clearIcon').show();

    let resultsPanelH = $('#resultsPanel').height();
    let windowH = $(window).height() - 110;
    if (resultsPanelH > windowH){
        //$('#resultsPanel').height($(window).height()-110);  
        $('div#resultsPanel').css('height', $(window).height()-110);
    }
    else {
        $('div#resultsPanel').css('height', '');
    }
    
    //$('.scrollerContainer').jScrollPane();

    $('.searchResultTitle a').on('click', function(e)  {
        findInVector(e.target.id);     
    });
}

/**
 * Searches for the clicked featureId in rightPanel, in vector layer
 * 
 * @param {type} featureId
 * 
 */
function findInVector(featureId){
    
    vectorFeature = vectorSource.getFeatureById(featureId);
    featureGeom = vectorFeature.getGeometry();
    featureExtent = featureGeom.getExtent(featureGeom);
    zoomToExtent(featureExtent);
}

/**
 * Clears vector layer and results
 * 
 * 
 */
function clearRightPanel(){
    vectorSource.clear();
    $('.clearIcon').hide();
    $('#resultsPanel').empty();
    $('#searchInput').val('');
    $('div#resultsPanel').css('height', '');
}

/**
 * Zooms the map to the given extent 
 * 
 * @param {type} extent
 * 
 */
function zoomToExtent(featureExtent){
    map.getView().fit(featureExtent, (map.getSize()),{padding:[200, 300, 200, 300]});
}

$(document).ready(function() {

    $('.mainLeftPanelTabs .mainLeftPanelTabLinks a').on('click', function(e)  {
        let currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('.mainLeftPanelTabs ' + currentAttrValue).fadeIn(400).siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });

     $('.clearIcon').on('click', function(e)  {
        clearRightPanel();
     });

    initializeTree();
    initializeLegend();

    $("#searchInput").on('keyup', function (e) {
        if (e.keyCode == 13) {
           searchForFeatures();
        }
    });

    // Handle visibility control
    $('i').on('click', function() {
        let layername = $(this).closest('li').data('layerid');
        let layer = findBy(map.getLayerGroup(), 'name', layername);
        
        if (!layer.getLayers) {
            layer.setVisible(!layer.getVisible());

            if (layer.getVisible()) {
                $(this).removeClass('glyphicon-unchecked').addClass('glyphicon-check');
                //shows legend of selected item
                //$("[legend-layerid='"+ layername +"']").show();
                $("[legend-layerid='"+ layername +"']").addClass("active");

            } else {
                $(this).removeClass('glyphicon-check').addClass('glyphicon-unchecked');
                //shows legend of selected item
                //$("[legend-layerid='"+ layername +"']").hide();
                $("[legend-layerid='"+ layername +"']").removeClass("active");
            }
        }
    });

});	