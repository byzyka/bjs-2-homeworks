class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    };

    fix() {  
        this.state = 1.5 * this.state;
       
    };
    
   set state(num) {

        if (num < 0) {
            num = 0;
        } else if (num > 100) { 
            num = 100;
        } 

        this._state = num;    
    }

    get state () {
        return this._state;
    };
};        
    

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount); 
        this.type = 'magazine';
    }
};

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    } 
}


class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = 'novel';
    } 
}
  
class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    } 
}    

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = 'detective';
    } 
}    

class Library {
    
    constructor (name) {
       this.name = name;
       this.books = [];
        
    } 

    addBook(book){
        if(book.state > 30) {
            this.books.push(book)
        }
    } 

    findBookBy(type, value){
        let findBook = this.books.find(item => item[type] == value);
        if(findBook === undefined) {
            findBook = null;
       }
       return findBook;
      
    }

    giveBookByName(bookName) {
        let findIndexBook = this.books.findIndex(item => item.name == bookName);
        let findBook;

        if(findIndexBook === -1) {
            findBook = null;
        } else {
            findBook = this.books[findIndexBook];
            this.books.splice(findIndexBook, 1);
            
        }
        
        return findBook;
    }
}