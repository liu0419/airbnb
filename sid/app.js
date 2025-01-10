const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// restful api: get post put delete

// Define a simple API endpoint
app.get('/api/data', (req, res) => {

    const card1 = [
        {
            img1: "./img/b2c0f556-f726-4db8-985f-25a668369fe7.webp",
            img2: "https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/299f89ab-b4b5-4120-99ca-f6c5ae0b10dc.jpeg?im_w=720&im_format=avif",
            img3: "./img/b2c0f556-f726-4db8-985f-25a668369fe7.webp",
            title: "日本 Shinano, Kamiminoch",
            content: "距離 2,064 公里<br>3月2日至7日",
            price: "$15,190 TWD / 晚",
            rate: 4.94,
            product: "product1"
        },
        {
            img1: "https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720&im_format=avif.jpg",
            img2: "https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/299f89ab-b4b5-4120-99ca-f6c5ae0b10dc.jpeg?im_w=720&im_format=avif",
            img3: "./img/b2c0f556-f726-4db8-985f-25a668369fe7.webp",
            title: "印度 Jibhi",
            content: "距離 4,351 公里<br>2月4日至9日",
            price: "$2,243 TWD / 晚",
            rate: 4.89,
            product: "product2"
        },
        {
            img1: "https://a0.muscache.com/im/pictures/miso/Hosting-851221457069159416/original/827b7144-bfa4-4bb0-bd69-02579295bf9b.jpeg?im_w=720&im_format=avif",
            img2: "https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/299f89ab-b4b5-4120-99ca-f6c5ae0b10dc.jpeg?im_w=720&im_format=avif",
            img3: "./img/b2c0f556-f726-4db8-985f-25a668369fe7.webp",
            title: "夏威夷 Hawaii",
            content: "距離 4,350 公里<br>1月14日至19日",
            price: "$4,936 TWD / 晚",
            rate: 4.95,
            product: "product3"
        },
        {
            img1: "https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/299f89ab-b4b5-4120-99ca-f6c5ae0b10dc.jpeg?im_w=720&im_format=avif",
            img2: "https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/299f89ab-b4b5-4120-99ca-f6c5ae0b10dc.jpeg?im_w=720&im_format=avif",
            img3: "./img/b2c0f556-f726-4db8-985f-25a668369fe7.webp",
            title: "斯里蘭卡 Hemmathagama",
            content: "距離 4,776 公里<br>1月8日至13日",
            price: "$11,544 TWD / 晚",
            rate: 4.85,
            product: "product4"
        },
    ];


    res.status(200).json(card1);

});

// params：只有value, 內容根據順序
app.get("/prod/:productId", (req, res) => {

    const productId = req.params.productId;

    res.json({ k1: productId })
});

// queryString：有key, value，沒有順序問題
app.get("/api/queryString", (req, res) => {
    // 獲取所有查詢參數
    const type = req.query;
    req, res
    // 在終端機中印出查詢參數
    console.log("查詢參數:", type);

    // 回傳查詢參數作為 JSON
    res.json(type);
});


app.post("/api/post1", (req, res) => {
    const aaa = req.body;
    res.json({ hello: aaa })
});


app.get('/mm/kk', (req, res) => {

    const card1 = [
        {
            img1: "./img/b2c0f556-f726-4db8-985f-25a668369fe7.webp",
            img2: "https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/299f89ab-b4b5-4120-99ca-f6c5ae0b10dc.jpeg?im_w=720&im_format=avif",
            img3: "./img/b2c0f556-f726-4db8-985f-25a668369fe7.webp",
            title: "日本 Shinano, Kamiminoch",
            content: "距離 2,064 公里<br>3月2日至7日",
            price: "$15,190 TWD / 晚",
            rate: 4.94,
            product: "product1"
        },
        {
            img1: "https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720&im_format=avif.jpg",
            img2: "https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/299f89ab-b4b5-4120-99ca-f6c5ae0b10dc.jpeg?im_w=720&im_format=avif",
            img3: "./img/b2c0f556-f726-4db8-985f-25a668369fe7.webp",
            title: "印度 Jibhi",
            content: "距離 4,351 公里<br>2月4日至9日",
            price: "$2,243 TWD / 晚",
            rate: 4.89,
            product: "product2"
        },
        {
            img1: "https://a0.muscache.com/im/pictures/miso/Hosting-851221457069159416/original/827b7144-bfa4-4bb0-bd69-02579295bf9b.jpeg?im_w=720&im_format=avif",
            img2: "https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/299f89ab-b4b5-4120-99ca-f6c5ae0b10dc.jpeg?im_w=720&im_format=avif",
            img3: "./img/b2c0f556-f726-4db8-985f-25a668369fe7.webp",
            title: "夏威夷 Hawaii",
            content: "距離 4,350 公里<br>1月14日至19日",
            price: "$4,936 TWD / 晚",
            rate: 4.95,
            product: "product3"
        },
        {
            img1: "https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/299f89ab-b4b5-4120-99ca-f6c5ae0b10dc.jpeg?im_w=720&im_format=avif",
            img2: "https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/299f89ab-b4b5-4120-99ca-f6c5ae0b10dc.jpeg?im_w=720&im_format=avif",
            img3: "./img/b2c0f556-f726-4db8-985f-25a668369fe7.webp",
            title: "斯里蘭卡 Hemmathagama",
            content: "距離 4,776 公里<br>1月8日至13日",
            price: "$11,544 TWD / 晚",
            rate: 4.85,
            product: "product4"
        },
    ];

    const card2 = [
        {
            img1: "./img/b2c0f556-f726-4db8-985f-25a668369fe7.webp",
            img2: "https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/299f89ab-b4b5-4120-99ca-f6c5ae0b10dc.jpeg?im_w=720&im_format=avif",
            img3: "./img/b2c0f556-f726-4db8-985f-25a668369fe7.webp",
            title: "1111日本 Shinano, Kamiminoch",
            content: "距離 2,064 公里<br>3月2日至7日",
            price: "$15,190 TWD / 晚",
            rate: 4.94,
            product: "product1"
        },
        {
            img1: "https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720&im_format=avif.jpg",
            img2: "https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/299f89ab-b4b5-4120-99ca-f6c5ae0b10dc.jpeg?im_w=720&im_format=avif",
            img3: "./img/b2c0f556-f726-4db8-985f-25a668369fe7.webp",
            title: "印度 Jibhi",
            content: "距離 4,351 公里<br>2月4日至9日",
            price: "$2,243 TWD / 晚",
            rate: 4.89,
            product: "product2"
        },
        {
            img1: "https://a0.muscache.com/im/pictures/miso/Hosting-851221457069159416/original/827b7144-bfa4-4bb0-bd69-02579295bf9b.jpeg?im_w=720&im_format=avif",
            img2: "https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/299f89ab-b4b5-4120-99ca-f6c5ae0b10dc.jpeg?im_w=720&im_format=avif",
            img3: "./img/b2c0f556-f726-4db8-985f-25a668369fe7.webp",
            title: "夏威夷 Hawaii",
            content: "距離 4,350 公里<br>1月14日至19日",
            price: "$4,936 TWD / 晚",
            rate: 4.95,
            product: "product3"
        },
        {
            img1: "https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/299f89ab-b4b5-4120-99ca-f6c5ae0b10dc.jpeg?im_w=720&im_format=avif",
            img2: "https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/299f89ab-b4b5-4120-99ca-f6c5ae0b10dc.jpeg?im_w=720&im_format=avif",
            img3: "./img/b2c0f556-f726-4db8-985f-25a668369fe7.webp",
            title: "斯里蘭卡 Hemmathagama",
            content: "距離 4,776 公里<br>1月8日至13日",
            price: "$11,544 TWD / 晚",
            rate: 4.85,
            product: "product4"
        },
    ];

    const { typee } = req.query;

    console.log(typee)

    if (typee === "1") {
        res.json(card1);
    } else if (typee === "2") {
        res.json(card2);
    } else {
        res.status(400).send('Invalid type parameter');
    }
});






// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});



