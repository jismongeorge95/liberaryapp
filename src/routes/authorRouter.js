const express = require('express');
const authorRouter = express.Router();
var authors = [
    {
        name: "apj abdul kalam",
        age: "75",
        place: "Ramesharam",
        image: "/img/img1.jpeg"
    },
    {
        name: "kamalasuraya",
        age: "60",
        place: "kozhikode",
        image: "/img/img2.jpg"
    },
    {
        name: "onv kurip",
        age: "72",
        place: "alapuzha",
        image: "/img/img3.jpg",
    },
]

function router(nav) {
    authorRouter.route('/')
        .get((req, res) => {
            res.render('authors.ejs',
                {
                    nav,authors,
                    title: "Author"
                });
        });
    return authorRouter;
}
module.exports = router;