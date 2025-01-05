var size = 0;
var placement = 'point';

var style_Jaz_pop_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "26.0px \'Simple Bold Jut Out\', sans-serif";
    var labelFill = "#c6e514";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("PAU_Name") !== null && resolution > 0 && resolution < 14) {
        labelText = String(feature.get("PAU_Name"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.4 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(100,30,219,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
