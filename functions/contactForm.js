exports.handler = async function (event, context) {
  // your server-side functionality
  let ip = event.headers["client-ip"];
  console.log(JSON.parse(event.body));
  let body = JSON.parse(event.body);
  buildMsg(body, ip);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Contact form sent" }),
  };
};

// Funtions

function buildMsg(body, ip) {
  let msg = {
    username: "Contact form by Discord",
    content: "On cherche à te contacter !",
    embeds: [
      {
        color: 1127128,
        fields: [
          {
            name: "IP",
            value: ip,
            inline: false,
          },
          {
            name: "Civilité",
            value: body.civilite,
            inline: true,
          },

          {
            name: "Nom Prénom",
            value: body.name,
            inline: true,
          },

          {
            name: "email",
            value: body.email,
            inline: false,
          },
          {
            name: "tel",
            value: body.tel,
            inline: true,
          },
          {
            name: "message",
            value: body.comment,
            inline: false,
          },
        ],
      },
    ],
  };

  sendWH(msg);
}

function sendWH(msg) {
  const axios = require("axios");
  // require("dotenv").config();
  const uri = process.env.DiscordUri;

  // console.log(uri);

  axios
    .post(uri, msg)
    .then((r) => console.log("Msg sent"))
    .catch((e) => console.log(e));
}
