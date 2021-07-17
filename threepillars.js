class Bookshelf{
    constructor(){
        this.favoriteBooks = [];
    }

    addFavoriteBook(bookName){
        if(!bookName.includes("Great")){
            this.favoriteBooks.push(bookName);
        }
    }

    printFavoriteBooks(){
        console.log(`Favorite Book : ${String(this.favoriteBooks.length)}`);
        for(let bookName of this.favoriteBooks){
            console.log(bookName);
        }
    }
}

function loadBooks(theBookShelfs){
    fakeAjax(BOOK_API, function onBooks(bookNames){
        for(let bookName of bookNames){
            theBookShelfs.addFavoriteBook(bookName);
        }
        theBookShelfs.printFavoriteBooks();
    });
}

var BOOK_API = "https://some.url/api";

var myBooks = new Bookshelf();
loadBooks(myBooks);

function fakeAjax(url,cb){
    setTimeout(function fakeLoadingDelay(){
        cb([
            "A song of Ice and Fire",
            "The Great Gatby",
            "Crime and Punishment",
            "Great Expectations",
            "You don't know JS"

        ]);
    },500);
}







