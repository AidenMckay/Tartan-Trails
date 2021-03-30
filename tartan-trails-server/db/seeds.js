use ;tartanTrails;
db.dropDatabase();

db.gnomes.insertMany([
    {
        name: "Gertrude",
        coords: {
            lat: 57.275562, 
            lng: -2.455371
        }
    },
    {
        name: "Gnome2",
        coords: {
            lat: 57.2764644823521, 
            lng: -2.417051289953396
        }
    },
    {
        name: "gnome3",
        coords: {
            lat: 57.27444464777107,
            lng: -2.3822812075901445
        }
    }
]);
