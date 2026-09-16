const { addonBuilder } = require("stremio-addon-sdk");
const axios = require("axios");

const manifest = {
    id: "org.topcinema.community",
    version: "1.0.0",
    name: "TopCinema Arab Addon",
    description: "إضافة تجريبية لجلب محتوى تاوب سينما",
    resources: ["stream"],
    types: ["movie", "series"],
    idPrefixes: ["tt"]
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler(async (args) => {
    // هنا يتم البحث عن اسم الفيلم وتمرير الرابط
    return Promise.resolve({ streams: [] });
});

module.exports = (req, res) => {
    const interface = builder.getInterface();
    if (req.url === "/" || req.url === "/manifest.json") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(interface.manifest));
    } else {
        res.statusCode = 404;
        res.end();
    }
};
