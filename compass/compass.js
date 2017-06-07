var text;
var zone;
var street;

var mapMarginLeft = API.getScreenResolution().Width / 64;
var mapMarginBottom = API.getScreenResolution().Height / 60;
var mapWidth = API.getScreenResolution().Width / 7.11;
var mapHeight = API.getScreenResolution().Height / 5.71;
var resX = mapMarginLeft  + mapWidth + mapMarginLeft;
var resY = API.getScreenResolution().Height - mapHeight - mapMarginBottom;

var updateTimeoutInMilliseconds = 500;
var lastUpdateTickCount = 0;

function updateDirectionText() {
    var cameraDirection = API.getGameplayCamDir();
    
    if (0.3 < cameraDirection.X && 0.3 < cameraDirection.Y) {
        text = "NE";
    }
    else if (cameraDirection.X < -0.3 && 0.3 < cameraDirection.Y) {
        text = "NW";
    }
    else if (0.3 < cameraDirection.X && cameraDirection.Y < -0.3) {
        text = "SE";
    }
    else if (cameraDirection.X < -0.3 && cameraDirection.Y < -0.3) {
        text = "SW";
    }
    else if (-0.3 < cameraDirection.X && cameraDirection.X < 0.3 && cameraDirection.Y < -0.3) {
        text = "S";
    }
    else if (cameraDirection.X < -0.3 && -0.3 < cameraDirection.Y && cameraDirection.Y < 0.3) {
        text = "W";
    }
    else if (0.3 < cameraDirection.X && -0.3 < cameraDirection.Y && cameraDirection.Y < 0.3) {
        text = "E";
    }
    else if (-0.3 < cameraDirection.X && cameraDirection.X < 0.3 && cameraDirection.Y > 0.3) {
        text = "N";
    }
}

function updateValues() {
    var playerPosition = API.getEntityPosition(API.getLocalPlayer());
    
    zone = API.getZoneNameLabel(playerPosition);
    street = API.getStreetName(playerPosition);

    updateDirectionText();
}

API.onUpdate.connect(function (sender) {
    var currentTimeInMilliseconds = new Date().getTime();
    if (currentTimeInMilliseconds - lastUpdateTickCount > updateTimeoutInMilliseconds)
    {
        lastUpdateTickCount = currentTimeInMilliseconds;
        updateValues();
    }
    
    API.drawText(text, resX+10, resY+127, 1.05, 255, 255, 255, 200, 2, 1, false, true, 0);
    API.drawText("|", resX+45, resY+130, 1, 255, 255, 255, 200, 4, 1, false, true, 0);
    API.drawText(zone, resX+105, resY+133, 0.5, 255, 255, 255, 200, 4, 1, false, true, 0);
    API.drawText(street, resX+105, resY+160, 0.4, 255, 255, 255, 200, 4, 1, false, true, 0);
});


