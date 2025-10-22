require("dotenv").config({ quiet: true });

const app = require("./app");

const http = require("http");

const https = require("https");

const PORT = process.env.PORT || 8000;

if(process.env.NODE_ENV !== "production")
{
    const server = http.createServer(app);

    server.listen(PORT, () => 
    {
        console.log(`http://localhost:${PORT}`);
    });
}
else
{
    const server = https.createServer(app);

    server.listen(PORT, () => 
    {
        console.log(`https://localhost:${PORT}`);
    });
}