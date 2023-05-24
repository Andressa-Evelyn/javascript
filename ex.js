(function() {
  
    })

    var person = {name: 'Andressa', lastname :'Luna' , age : 20}
    console.log(person)
   
    var propriedade = Object.keys(person);
console.log(propriedade);

var books = [];
console.log(books)

books.push({name: 'Maça dourada', pages: 255})
books.push({name: 'Jumentinho', pages: 548})
console.log(books)

var lastbook = books.pop();
console.log(lastbook)

var livro = JSON.stringify(books);
console.log(livro)

books.push({name: 'Rapunzel', pages: 233})

for( i = 0; i < Object.keys(books).length; i++)
{
    console.log('-----------')
    console.log(books[i])
}


