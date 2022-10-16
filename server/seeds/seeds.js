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