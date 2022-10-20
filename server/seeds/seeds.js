const db = require("../config/connection");
const {User} = require("../models");

db.once("open", async () => {
    await User.deleteMany();

    await User.create({
        username: "user1",
        email: "user1@testmail.com",
        password: "user1"
    });

    await User.create({
        username: "user2",
        email: "user2@testmail.com",
        password: "user2",
    });

    await User.create({
        username: "user3",
        email: "user3@testmail.com",
        password: "user3",
    });

    await User.create({
        username: "user4",
        email: "user4@testmail.com",
        password: "user4",
    });

    await User.create({
        username: "user5",
        email: "user5@testmail.com",
        password: "user5",
    });

    await User.create({
        username: "user6",
        email: "user6@testmail.com",
        password: "user6",
    });


});

console.log("users seeded");

await Hotel.deleteMany();

const hotels = await Hotel.insertMany([
    {
        name: "Westin Edina Galleria",
        description: "Small dogs only. Two dogs up to 40 lbs are welcome for no additional fee. Dogs may not be left unattended in rooms at any time. The hotel provides treats, bowls, and bedding. There is a pet relief area on the property and waste bags are available at the frong desk.",
        createdAt: Date.now(),
        username: "user1",
        url: "https://www.bringfido.com/lodging/81929"
    },
    {
        name: "Edgewater Madison",
        description: "Edgewater Madison welcomes two pets of any size for an additional fee of $75 per stay.",
        createdAt: Date.now(),
        username:"user1",
        url: "https://www.bringfido.com/lodging/98970?arrival=2022-11-01&departure=2022-11-02&adults=1"
    },
])