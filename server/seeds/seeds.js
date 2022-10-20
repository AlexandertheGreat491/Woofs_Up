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

    await User.create({
        username: "user7",
        email: "user7@testmail.com",
        password: "user7",
    });

    await User.create({
        username: "user8",
        email: "user8@testmail.com",
        password: "user8",
    });

    await User.create({
        username: "user9",
        email: "user9@testmail.com",
        password: "user9",
    });

    await User.create({
        username: "user10",
        email: "user10@testmail.com",
        password: "user10",
    });

    await User.create({
        username: "user11",
        email: "user11@testmail.com",
        password: "user11",
    });

    await User.create({
        username: "user12",
        email: "user12@testmail.com",
        password: "user12",
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
        username:"user2",
        url: "https://www.bringfido.com/lodging/98970?arrival=2022-11-01&departure=2022-11-02&adults=1"
    },
    {
        name: "Element Bozeman",
        description: "Element Bozeman is pet friendly! One dog up to 40lbs or two dogs up to 20lbs are welcome for no additional fee. Well-behaved dogs may be left unattended in rooms. Treats, beds, and bowls are available, and there is a grassy pet relief area on site.",
        createdAt: Date.now(),
        username: "user3",
        url: "https://www.bringfido.com/lodging/283500?arrival=2022-11-01&departure=2022-11-02&adults=1"
    },
    {
        name: "The Kimpton Gray Hotel",
        description: "The Kimpton Gray Hotel is located in Chicago, Illinois. This hotel is pet friendly! Pets of any size are welcome for no additional fee. Both dogs and cats are permitted. Well-behaved pets may be left unattended in guest rooms. Treats are available at the front desk. There is agraccy area a few blocks from the hotel.",
        createdAt: Date.now(),
        username: "user4",
        url: "https://www.bringfido.com/lodging/282590?arrival=2022-11-01&departure=2022-11-02&adults=1",
    },
])