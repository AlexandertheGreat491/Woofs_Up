const db = require("../config/connection");
const { User } = require("../models");

db.once("open", async () => {
  await User.deleteMany();

  await User.create({
    username: "user1",
    email: "user1@testmail.com",
    password: "user1",
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

  console.log("users seeded");

  await Hotel.deleteMany();
// reference https://www.bringfido.com/lodging/
  const hotels = await Hotel.insertMany([
    {
      name: "Westin Edina Galleria",
      description:
        "Small dogs only. Two dogs up to 40 lbs are welcome for no additional fee. Dogs may not be left unattended in rooms at any time. The hotel provides treats, bowls, and bedding. There is a pet relief area on the property and waste bags are available at the frong desk.",
      createdAt: Date.now(),
      username: "user1",
      url: "https://www.bringfido.com/lodging/81929",
    },
    {
      name: "Edgewater Madison",
      description:
        "Edgewater Madison welcomes two pets of any size for an additional fee of $75 per stay.",
      createdAt: Date.now(),
      username: "user2",
      url: "https://www.bringfido.com/lodging/98970?arrival=2022-11-01&departure=2022-11-02&adults=1",
    },
    {
      name: "Element Bozeman",
      description:
        "Element Bozeman is pet friendly! One dog up to 40lbs or two dogs up to 20lbs are welcome for no additional fee. Well-behaved dogs may be left unattended in rooms. Treats, beds, and bowls are available, and there is a grassy pet relief area on site.",
      createdAt: Date.now(),
      username: "user3",
      url: "https://www.bringfido.com/lodging/283500?arrival=2022-11-01&departure=2022-11-02&adults=1",
    },
    {
      name: "The Kimpton Gray Hotel",
      description:
        "The Kimpton Gray Hotel is located in Chicago, Illinois. This hotel is pet friendly! Pets of any size are welcome for no additional fee. Both dogs and cats are permitted. Well-behaved pets may be left unattended in guest rooms. Treats are available at the front desk. There is agraccy area a few blocks from the hotel.",
      createdAt: Date.now(),
      username: "user4",
      url: "https://www.bringfido.com/lodging/282590?arrival=2022-11-01&departure=2022-11-02&adults=1",
    },
    {
      name: "Beacon Grand",
      description:
        "The Beacon Grand is located in San Francisco, California. Beacon Grand welcomes two dogs with a combined weight up to 50lbs for an additional fee of $75 per stay. All pets must be declared at the time of booking. Both dogs and cats are allowed, but pets may not be left unattended in rooms. Treats, dog beds, and bowls are available upon request. Union Square park is within walking distance from the property.",
      createdAt: Date.now(),
      username: "user5",
      url: "https://www.bringfido.com/lodging/68231?arrival=2022-11-01&departure=2022-11-02&adults=1",
    },
    {
      name: "Pan Pacific Seattle",
      description:
        "As you may have already guessed, this hotel is located in Seattle, Washington. Pan Pacific Seattle welcomes two pets of any size for an additional fee of $50 per pet, per stay. Guests with pets are assigned to rooms on the third floor, but suites are not pet friendly. Both dogs and cats are allowed, but pets may not be left unattended in the rooms. Treats, beds, and bowls are available at the front desk. There is a part just a few blocks from the property.",
      createdAt: Date.now(),
      username: "user6",
      url: "https://www.bringfido.com/lodging/98442?arrival=2022-11-01&departure=2022-11-02&adults=1",
    },
    {
      name: "South Congress Hotel",
      description:
        "The South Congress Hotel is located in Austin, Texas and is pet friendly. Two dogs of any size are welcome for no additional fee. Well-behaved dogs may be left unattended in rooms. There are grassy pet relief areas near the property.",
      createdAt: Date.now(),
      username: "user7",
      url: "https://www.bringfido.com/lodging/285096?arrival=2022-11-01&departure=2022-11-02&adults=1",
    },
    {
      name: "Four Seasons Hotel Atlanta",
      description:
        "Four Seasons Hotel Atlanta welcomes two pets up to 35 lbs for an additional fee of $100 per stay. Both dogs and cats are allowed, but pets may not be left unattended in rooms. Four-legged guests receive a homemade dog biscuit and use of bowls at check-in. There are small grassy relief areas across the street from the property, and Piedmont Park is nearby.",
      createdAt: Date.now(),
      username: "user8",
      url: "https://www.bringfido.com/lodging/74023?arrival=2022-11-01&departure=2022-11-02&adults=1",
    },
    {
      name: "Boston Harbor Hotel",
      description:
        "Boston Harbor Hotel welcomes two pets up to 80 lbs for an additional fee of $100 per pet, per stay. Both dogs and cats are allowed, but pets may not be left unattended in rooms. There are small grassy areas across the street from the hotel, and Boston Commons is about a 20-minute walk from the property. Cats require a litter box.",
      createdAt: Date.now(),
      username: "user9",
      url: "https://www.bringfido.com/lodging/79592?arrival=2022-11-01&departure=2022-11-02&adults=1",
    },
    {
      name: "Drury Inn & Suites West Des Moines",
      description:
        "Drury Inn and Suites West Des Moines welcomes two pets of any size for an additional fee of $40 plus tax per night. Both dogs and cats are accepted. Pets may not be left unattended in the room. There is a grassy relief area with a waste station to the south of the building.",
      createdAt: Date.now(),
      username: "user10",
      url: "https://www.bringfido.com/lodging/76159?arrival=2022-11-01&departure=2022-11-02&adults=1",
    },
    {
      name: "Residence Inn by Marriott Omaha Aksarben Village",
      description:
        "Residence Inn by Marriott Omaha Aksarben Village allows two pets with a combined weight up to 75 lbs for an additional fee of $150 per stay. Guests traveling with pets will be assigned to rooms on the first two floors. Both dogs and cats are allowed. Pets must be leashed in all common areas and are not allowed in the pool area, courtyard, or lobby. There is a dog park across the street.",
      createdAt: Date.now(),
      username: "user11",
      url: "https://www.bringfido.com/lodging/283829?arrival=2022-11-01&departure=2022-11-02&adults=1",
    },
    {
      name: "The Crawford Hotel",
      description:
        "The Crawford Hotel allows two dogs up to 60 lbs in designated pet-friendly rooms for a fee of $50 per room, per night. Sorry, no cats.",
      createdAt: Date.now(),
      username: "user12",
      url: "https://www.bringfido.com/lodging/281531?arrival=2022-11-01&departure=2022-11-02&adults=1",
    },
  ]);

  console.log("Hotel seeded");

  process.exit();
});
