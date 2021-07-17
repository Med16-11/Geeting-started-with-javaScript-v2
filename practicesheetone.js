function addFavoriteBook(bookName){
    if(!bookName.includes("Great")){
        favoriteBooks.push(bookName);
    }
}

var favoriteBooks = [];

addFavoriteBook("A song of Ice and Fire")
addFavoriteBook("The Great Gatby")
addFavoriteBook("Crime and Punishment")
addFavoriteBook("Great Expectations")
addFavoriteBook("You don't know JS")

function printFavoriteBooks(){
    console.log(
        `favorite book : ${favoriteBooks.length}`
    );

    for(let bookName of favoriteBooks){
        console.log(bookName);
    }
}


