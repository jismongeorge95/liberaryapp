const express=require('express');
const chalk=require('chalk');
const path=require('path');
var app=new express();
var cors = require('cors')
var bodyparser = require('body-parser');

var nav=[{link:'/books',title:'BOOKS'},{link:'/authors',title:'Authors'},{link:'books/addform',title:'Add newBook'}];
var authorRouter=require('./src/routes/authorRouter')(nav);
var booksRouter=require('./src/routes/booksRouter')(nav);
app.use(express.static(path.join(__dirname,"/public")));


app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))
app.use('/authors',authorRouter);
app.use('/books',booksRouter);
app.set('views','./src/views');
app.set('view engine','ejs');


// {
// res.send('hello world welcome to desktop');
// res.sendFile(path.join(__dirname,"/src/views/index.html"));
// });
app.get('/',function(req,res)
{
    res.render('index',
        {
        nav,
        title:"Library"
        }
    );
});

    

// app.get('/books',function(req,res){

//     res.render('books.ejs',
//     {
//         nav,
//         title:"Books",books
//         });

// });

// app.get('/books/:id',function(req,res){
    
    // res.render('book.ejs',{
    
    //     nav,
    //     title:"book",
    // book:books[req.params.id]
// });
// });
app.get('/authors',function(req,res){

    res.render('authors.ejs',
    {
        nav,
        title:"Authors"
        });
});

app.listen(3000, function(){
    console.log('listerning on port'+chalk.yellowBright('3000'));
});
