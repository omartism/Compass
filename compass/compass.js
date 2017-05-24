var x;
var y;
var text;
var zone;
var street;

API.onUpdate.connect(function (sender) {

    x = API.getGameplayCamDir().X;
    y = API.getGameplayCamDir().Y;
    zone = API.getZoneNameLabel(API.getEntityPosition(API.getLocalPlayer()));
    street = API.getStreetName(API.getEntityPosition(API.getLocalPlayer()));

    if (0.3 < x && 0.3 < y) {

        text="NE";

    }

    else if (x<-0.3 && 0.3 < y) {

        text="NW";
    }

    else if (0.3 < x && y < -0.3) {

        text="SE";
    }

    else if (x < -0.3 && y < -0.3) {

        text="SW";
    }

    else if (-0.3 < x && x < 0.3 && y < -0.3) {

        text="S";
    }

    else if (x < -0.3 && -0.3 < y && y < 0.3) {

        text="W";
    }

    else if (0.3 < x && -0.3 < y && y < 0.3) {

        text="E";
    }

    else if (-0.3 < x && x < 0.3 && y > 0.3) {

        text="N";
    }
    
    API.drawText(text, 350, 1000, 1, 255, 255, 255, 200, 2, 1, false, true, 0);
    API.drawText("|", 385, 1000, 1, 255, 255, 255, 200, 4, 1, false, true, 0);
    API.drawText(zone, 425, 1003, 0.5, 255, 255, 255, 200, 4, 1, false, true, 0);
    API.drawText(street, 425, 1030, 0.4, 255, 255, 255, 200, 4, 1, false, true, 0);
});


