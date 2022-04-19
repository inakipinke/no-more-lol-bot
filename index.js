require("dotenv").config(); //initialize dotenv
const { Client, Intents } = require("discord.js");
var moment = require("moment");

const express = require("express");
const app = express();

// Create a new client instance
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_PRESENCES,
  ],
});
var mainChannel;
// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
  mainChannel = client.channels.cache.get("965795997127180329");
});

client.on("messageCreate", (message) => {
  console.log("We got message, it says: ", message.content);
  if (message.content == "semen") {
    message.reply("Gordo teton deja del lol de una vez por todas");
  }
  if (message.content == "lorem") {
    message.reply(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );
  }
  console.log(message, "message");
});

client.on("presenceUpdate", (oldMember, newMember) => {
  // do your thing

  if (newMember.activities.length === 0) return;
  console.log(newMember, "member");
  for (let index = 0; index < newMember.activities.length; index++) {
    const element = newMember.activities[index];
    console.log(element);
    if (element.applicationId === "401518684763586560") {
      mainChannel.send(`@everyone , ALGUIEN ESTA JUGANDO AL LOL`);
    }
    // } else {
    //   setTimeout(getTimestimestamps, 5000, element);

    // }
  }
});
// function getTimestimestamps(element) {

//   let propuesta = moment().diff(moment.utc(element.timestamps.start), "seconds")
//   console.log(propuesta)
//   if (propuesta >= 2) {

//   }
// }

// Login to Discord with your client's token
client.login(process.env.CLIENT_TOKEN); //login bot using token

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
