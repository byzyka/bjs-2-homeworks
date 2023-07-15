function parseCount(str) {
    if(isNaN(str)) {
        throw new Error("Невалидное значение");
    } 
    let number = parseFloat(str);
    return number;
}   

function validateCount(str) {
    try {
        str = parseCount(str) 
        return str;
    } catch(error) {
        return error;
    }  
}   
    
class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        
        if( (a + c) < b || (a + b) < c || (b + c) < a ) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
          
    }
   
    get perimeter() {
        let p = this.a + this.c + this.b;
        return p;
        
    }

    get area() {
        let semiPerimeter = this.perimeter * 0.5;
        
        let sqrt = Math.sqrt( semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));
        
        return +sqrt.toFixed(3);
    }
    
}

function getTriangle(a, b, c) {
    
    try {
        let triangle = new Triangle(a, b, c);
        return triangle;
               
    } catch(error) {    
       return  {
                get perimeter() {return 'Ошибка! Треугольник не существует'},
                get area()  {return 'Ошибка! Треугольник не существует' }
                }
      
    }
}

    

