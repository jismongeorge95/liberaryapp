const express=require('express');
const booksRouter=express.Router();

var books=[
    {
        title:"war and peace",
        genre:"historical fiction",
        author:"lev Nicolayervich",
        image:"/img/img1.jpeg"
    },
    {
        title:"wings of fire",
        genre:"auto biography",
        author:"DR.apj abdul kalam",
        image:"/img/img2.jpg"
    },
    {
        title:"book4",
        genre:"histrical fiction",
        author:"ONV kurip",
        image:"/img/img3.jpg",
    },
]
function router(nav){
    booksRouter.route('/')
.get((req,res)=>{
    res.render('books.ejs',
    {
        nav,
        title:"Books",books
        });
});
booksRouter.route('/addform').get((req,res)=>{
    res.render('addform.ejs',{    
        nav,
        title:"Addbook",
    
});
});
booksRouter.route('/save').post((req,res)=>{
console.log(req.body);
    res.send('hello world');
});
booksRouter.route('/:id')
.get((req,res)=>{
    res.render('book.ejs',{    
        nav,
        title:"book",
    book:books[req.params.id]
});
});
return booksRouter;

}

module.exports=router;