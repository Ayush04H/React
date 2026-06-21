const serverConfig = {
  port: 8080,
  host: "localhost",
  ssl: {
    enabled: true,
    cert: "path/to/cert",

    // Function inside ssl object
    showSSLStatus: function () {
      if (this.enabled) {
        console.log("SSL is Enabled");
      } else {
        console.log("SSL is Disabled");
      }
    },
  },

  // Function inside serverConfig object
  startServer: function () {
    console.log(`Server started at ${this.host}:${this.port}`);
  },
};

serverConfig.startServer();
serverConfig.ssl.showSSLStatus();

const users = [
  {
    id: 1,
    name: "Alice",

    greet: function () {
      console.log(`Hello, I am ${this.name}`);
    },
  },
  {
    id: 2,
    name: "Bob",

    greet: function () {
      console.log(`Hello, I am ${this.name}`);
    },
  },
];

users[0].greet();
users[1].greet();
