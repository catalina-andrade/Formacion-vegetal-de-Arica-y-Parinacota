var wms_layers = [];

var format_Provincia_0 = new ol.format.GeoJSON();
var features_Provincia_0 = format_Provincia_0.readFeatures(json_Provincia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincia_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincia_0.addFeatures(features_Provincia_0);
var lyr_Provincia_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provincia_0, 
                style: style_Provincia_0,
                popuplayertitle: 'Provincia',
                interactive: true,
                title: '<img src="styles/legend/Provincia_0.png" /> Provincia'
            });

        var lyr_EsriSatellite_1 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_matorral_bajo_de_altitud_2 = new ol.format.GeoJSON();
var features_matorral_bajo_de_altitud_2 = format_matorral_bajo_de_altitud_2.readFeatures(json_matorral_bajo_de_altitud_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matorral_bajo_de_altitud_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matorral_bajo_de_altitud_2.addFeatures(features_matorral_bajo_de_altitud_2);
var lyr_matorral_bajo_de_altitud_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matorral_bajo_de_altitud_2, 
                style: style_matorral_bajo_de_altitud_2,
                popuplayertitle: 'matorral_bajo_de_altitud',
                interactive: true,
                title: '<img src="styles/legend/matorral_bajo_de_altitud_2.png" /> matorral_bajo_de_altitud'
            });
var format_formacinvegetal_3 = new ol.format.GeoJSON();
var features_formacinvegetal_3 = format_formacinvegetal_3.readFeatures(json_formacinvegetal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_formacinvegetal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_formacinvegetal_3.addFeatures(features_formacinvegetal_3);
var lyr_formacinvegetal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_formacinvegetal_3, 
                style: style_formacinvegetal_3,
                popuplayertitle: 'formación vegetal',
                interactive: true,
                title: '<img src="styles/legend/formacinvegetal_3.png" /> formación vegetal'
            });
var format_matorral_bajo_de_altitud_1_4 = new ol.format.GeoJSON();
var features_matorral_bajo_de_altitud_1_4 = format_matorral_bajo_de_altitud_1_4.readFeatures(json_matorral_bajo_de_altitud_1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matorral_bajo_de_altitud_1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matorral_bajo_de_altitud_1_4.addFeatures(features_matorral_bajo_de_altitud_1_4);
var lyr_matorral_bajo_de_altitud_1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matorral_bajo_de_altitud_1_4, 
                style: style_matorral_bajo_de_altitud_1_4,
                popuplayertitle: 'matorral_bajo_de_altitud_1',
                interactive: true,
                title: '<img src="styles/legend/matorral_bajo_de_altitud_1_4.png" /> matorral_bajo_de_altitud_1'
            });
var format_matorral_bajo_de_altitud_4_5 = new ol.format.GeoJSON();
var features_matorral_bajo_de_altitud_4_5 = format_matorral_bajo_de_altitud_4_5.readFeatures(json_matorral_bajo_de_altitud_4_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matorral_bajo_de_altitud_4_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matorral_bajo_de_altitud_4_5.addFeatures(features_matorral_bajo_de_altitud_4_5);
var lyr_matorral_bajo_de_altitud_4_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matorral_bajo_de_altitud_4_5, 
                style: style_matorral_bajo_de_altitud_4_5,
                popuplayertitle: 'matorral_bajo_de_altitud_4',
                interactive: true,
                title: '<img src="styles/legend/matorral_bajo_de_altitud_4_5.png" /> matorral_bajo_de_altitud_4'
            });
var format_matorral_bajo_de_altitud_2_6 = new ol.format.GeoJSON();
var features_matorral_bajo_de_altitud_2_6 = format_matorral_bajo_de_altitud_2_6.readFeatures(json_matorral_bajo_de_altitud_2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matorral_bajo_de_altitud_2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matorral_bajo_de_altitud_2_6.addFeatures(features_matorral_bajo_de_altitud_2_6);
var lyr_matorral_bajo_de_altitud_2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matorral_bajo_de_altitud_2_6, 
                style: style_matorral_bajo_de_altitud_2_6,
                popuplayertitle: 'matorral_bajo_de_altitud_2',
                interactive: true,
                title: '<img src="styles/legend/matorral_bajo_de_altitud_2_6.png" /> matorral_bajo_de_altitud_2'
            });
var format_bosqueespinoso_7 = new ol.format.GeoJSON();
var features_bosqueespinoso_7 = format_bosqueespinoso_7.readFeatures(json_bosqueespinoso_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bosqueespinoso_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bosqueespinoso_7.addFeatures(features_bosqueespinoso_7);
var lyr_bosqueespinoso_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bosqueespinoso_7, 
                style: style_bosqueespinoso_7,
                popuplayertitle: 'bosque-espinoso',
                interactive: true,
                title: '<img src="styles/legend/bosqueespinoso_7.png" /> bosque-espinoso'
            });
var format_bosque_espinosobosqueespinoso_8 = new ol.format.GeoJSON();
var features_bosque_espinosobosqueespinoso_8 = format_bosque_espinosobosqueespinoso_8.readFeatures(json_bosque_espinosobosqueespinoso_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bosque_espinosobosqueespinoso_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bosque_espinosobosqueespinoso_8.addFeatures(features_bosque_espinosobosqueespinoso_8);
var lyr_bosque_espinosobosqueespinoso_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bosque_espinosobosqueespinoso_8, 
                style: style_bosque_espinosobosqueespinoso_8,
                popuplayertitle: 'bosque_espinoso — bosque espinoso',
                interactive: true,
                title: '<img src="styles/legend/bosque_espinosobosqueespinoso_8.png" /> bosque_espinoso — bosque espinoso'
            });
var format_Matorral_bajo_desrtico_9 = new ol.format.GeoJSON();
var features_Matorral_bajo_desrtico_9 = format_Matorral_bajo_desrtico_9.readFeatures(json_Matorral_bajo_desrtico_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Matorral_bajo_desrtico_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Matorral_bajo_desrtico_9.addFeatures(features_Matorral_bajo_desrtico_9);
var lyr_Matorral_bajo_desrtico_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Matorral_bajo_desrtico_9, 
                style: style_Matorral_bajo_desrtico_9,
                popuplayertitle: 'Matorral_bajo_desértico',
                interactive: true,
                title: '<img src="styles/legend/Matorral_bajo_desrtico_9.png" /> Matorral_bajo_desértico'
            });
var format_matorral_bajo_desertico__10 = new ol.format.GeoJSON();
var features_matorral_bajo_desertico__10 = format_matorral_bajo_desertico__10.readFeatures(json_matorral_bajo_desertico__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matorral_bajo_desertico__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matorral_bajo_desertico__10.addFeatures(features_matorral_bajo_desertico__10);
var lyr_matorral_bajo_desertico__10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matorral_bajo_desertico__10, 
                style: style_matorral_bajo_desertico__10,
                popuplayertitle: 'matorral_bajo_desertico_',
                interactive: true,
                title: '<img src="styles/legend/matorral_bajo_desertico__10.png" /> matorral_bajo_desertico_'
            });
var format_matorral_desertico_11 = new ol.format.GeoJSON();
var features_matorral_desertico_11 = format_matorral_desertico_11.readFeatures(json_matorral_desertico_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matorral_desertico_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matorral_desertico_11.addFeatures(features_matorral_desertico_11);
var lyr_matorral_desertico_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matorral_desertico_11, 
                style: style_matorral_desertico_11,
                popuplayertitle: 'matorral_desertico',
                interactive: true,
                title: '<img src="styles/legend/matorral_desertico_11.png" /> matorral_desertico'
            });
var format_formacinvegetal_12 = new ol.format.GeoJSON();
var features_formacinvegetal_12 = format_formacinvegetal_12.readFeatures(json_formacinvegetal_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_formacinvegetal_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_formacinvegetal_12.addFeatures(features_formacinvegetal_12);
var lyr_formacinvegetal_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_formacinvegetal_12, 
                style: style_formacinvegetal_12,
                popuplayertitle: 'formación vegetal',
                interactive: true,
                title: '<img src="styles/legend/formacinvegetal_12.png" /> formación vegetal'
            });
var format_formacinvegetal_13 = new ol.format.GeoJSON();
var features_formacinvegetal_13 = format_formacinvegetal_13.readFeatures(json_formacinvegetal_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_formacinvegetal_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_formacinvegetal_13.addFeatures(features_formacinvegetal_13);
var lyr_formacinvegetal_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_formacinvegetal_13, 
                style: style_formacinvegetal_13,
                popuplayertitle: 'formación vegetal',
                interactive: true,
                title: '<img src="styles/legend/formacinvegetal_13.png" /> formación vegetal'
            });
var format_desierto_14 = new ol.format.GeoJSON();
var features_desierto_14 = format_desierto_14.readFeatures(json_desierto_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desierto_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desierto_14.addFeatures(features_desierto_14);
var lyr_desierto_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desierto_14, 
                style: style_desierto_14,
                popuplayertitle: 'desierto',
                interactive: true,
                title: '<img src="styles/legend/desierto_14.png" /> desierto'
            });
var format_Comuna_15 = new ol.format.GeoJSON();
var features_Comuna_15 = format_Comuna_15.readFeatures(json_Comuna_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comuna_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comuna_15.addFeatures(features_Comuna_15);
var lyr_Comuna_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comuna_15, 
                style: style_Comuna_15,
                popuplayertitle: 'Comuna',
                interactive: true,
                title: '<img src="styles/legend/Comuna_15.png" /> Comuna'
            });
var format_Regin_16 = new ol.format.GeoJSON();
var features_Regin_16 = format_Regin_16.readFeatures(json_Regin_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regin_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regin_16.addFeatures(features_Regin_16);
var lyr_Regin_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regin_16, 
                style: style_Regin_16,
                popuplayertitle: 'Región',
                interactive: true,
                title: '<img src="styles/legend/Regin_16.png" /> Región'
            });

lyr_Provincia_0.setVisible(true);lyr_EsriSatellite_1.setVisible(true);lyr_matorral_bajo_de_altitud_2.setVisible(true);lyr_formacinvegetal_3.setVisible(true);lyr_matorral_bajo_de_altitud_1_4.setVisible(true);lyr_matorral_bajo_de_altitud_4_5.setVisible(true);lyr_matorral_bajo_de_altitud_2_6.setVisible(true);lyr_bosqueespinoso_7.setVisible(true);lyr_bosque_espinosobosqueespinoso_8.setVisible(true);lyr_Matorral_bajo_desrtico_9.setVisible(true);lyr_matorral_bajo_desertico__10.setVisible(true);lyr_matorral_desertico_11.setVisible(true);lyr_formacinvegetal_12.setVisible(true);lyr_formacinvegetal_13.setVisible(true);lyr_desierto_14.setVisible(true);lyr_Comuna_15.setVisible(true);lyr_Regin_16.setVisible(true);
var layersList = [lyr_Provincia_0,lyr_EsriSatellite_1,lyr_matorral_bajo_de_altitud_2,lyr_formacinvegetal_3,lyr_matorral_bajo_de_altitud_1_4,lyr_matorral_bajo_de_altitud_4_5,lyr_matorral_bajo_de_altitud_2_6,lyr_bosqueespinoso_7,lyr_bosque_espinosobosqueespinoso_8,lyr_Matorral_bajo_desrtico_9,lyr_matorral_bajo_desertico__10,lyr_matorral_desertico_11,lyr_formacinvegetal_12,lyr_formacinvegetal_13,lyr_desierto_14,lyr_Comuna_15,lyr_Regin_16];
lyr_Provincia_0.set('fieldAliases', {'fid': 'fid', 'PROVINCIA': 'PROVINCIA', });
lyr_matorral_bajo_de_altitud_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_formacinvegetal_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_matorral_bajo_de_altitud_1_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_matorral_bajo_de_altitud_4_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_matorral_bajo_de_altitud_2_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_bosqueespinoso_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_bosque_espinosobosqueespinoso_8.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_Matorral_bajo_desrtico_9.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_matorral_bajo_desertico__10.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_matorral_desertico_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_formacinvegetal_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_formacinvegetal_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_desierto_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'FORMACION': 'FORMACION', });
lyr_Comuna_15.set('fieldAliases', {'fid': 'fid', 'COMUNA': 'COMUNA', });
lyr_Regin_16.set('fieldAliases', {'fid': 'fid', 'Región': 'Región', });
lyr_Provincia_0.set('fieldImages', {'fid': 'TextEdit', 'PROVINCIA': 'TextEdit', });
lyr_matorral_bajo_de_altitud_2.set('fieldImages', {'OBJECTID': '', 'ID': '', 'NOMBRE': '', 'FORMACION': '', });
lyr_formacinvegetal_3.set('fieldImages', {'OBJECTID': '', 'ID': '', 'NOMBRE': '', 'FORMACION': '', });
lyr_matorral_bajo_de_altitud_1_4.set('fieldImages', {'OBJECTID': '', 'ID': '', 'NOMBRE': '', 'FORMACION': '', });
lyr_matorral_bajo_de_altitud_4_5.set('fieldImages', {'OBJECTID': '', 'ID': '', 'NOMBRE': '', 'FORMACION': '', });
lyr_matorral_bajo_de_altitud_2_6.set('fieldImages', {'OBJECTID': '', 'ID': '', 'NOMBRE': '', 'FORMACION': '', });
lyr_bosqueespinoso_7.set('fieldImages', {'OBJECTID': '', 'ID': '', 'NOMBRE': '', 'FORMACION': '', });
lyr_bosque_espinosobosqueespinoso_8.set('fieldImages', {'fid': '', 'ID': '', 'NOMBRE': '', 'FORMACION': '', });
lyr_Matorral_bajo_desrtico_9.set('fieldImages', {'ID': '', 'NOMBRE': '', 'FORMACION': '', });
lyr_matorral_bajo_desertico__10.set('fieldImages', {'ID': '', 'NOMBRE': '', 'FORMACION': '', });
lyr_matorral_desertico_11.set('fieldImages', {'OBJECTID': '', 'NOMBRE': '', 'FORMACION': '', });
lyr_formacinvegetal_12.set('fieldImages', {'OBJECTID': '', 'NOMBRE': '', 'FORMACION': '', });
lyr_formacinvegetal_13.set('fieldImages', {'OBJECTID': '', 'NOMBRE': '', 'FORMACION': '', });
lyr_desierto_14.set('fieldImages', {'OBJECTID': '', 'NOMBRE': '', 'FORMACION': '', });
lyr_Comuna_15.set('fieldImages', {'fid': 'TextEdit', 'COMUNA': 'TextEdit', });
lyr_Regin_16.set('fieldImages', {'fid': 'TextEdit', 'Región': '', });
lyr_Provincia_0.set('fieldLabels', {'fid': 'no label', 'PROVINCIA': 'no label', });
lyr_matorral_bajo_de_altitud_2.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_formacinvegetal_3.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_matorral_bajo_de_altitud_1_4.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_matorral_bajo_de_altitud_4_5.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_matorral_bajo_de_altitud_2_6.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_bosqueespinoso_7.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_bosque_espinosobosqueespinoso_8.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_Matorral_bajo_desrtico_9.set('fieldLabels', {'ID': 'no label', 'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_matorral_bajo_desertico__10.set('fieldLabels', {'ID': 'no label', 'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_matorral_desertico_11.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_formacinvegetal_12.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_formacinvegetal_13.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_desierto_14.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBRE': 'no label', 'FORMACION': 'no label', });
lyr_Comuna_15.set('fieldLabels', {'fid': 'no label', 'COMUNA': 'no label', });
lyr_Regin_16.set('fieldLabels', {'fid': 'no label', 'Región': 'no label', });
lyr_Regin_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});