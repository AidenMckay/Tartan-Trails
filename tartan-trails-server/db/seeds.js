use tartanTrails;
db.dropDatabase();

db.gnomes.insertMany([
    {
        name: "Aiden House",
        coords: {
            lat: 57.263474000000005,
            lng: -2.373995
        }
    },
    {
        name: "Kintore",
        coords: {
            lat: 57.2328724,
            lng: -2.3659651
        }
    }
]);
