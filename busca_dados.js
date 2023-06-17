const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            }
        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }
        ]
    }
]

let categoryCount = booksByCategory.length
console.log("Número de categorias: " + categoryCount)

for (let category of booksByCategory){
    console.log("Número de livros da categoria " + category.category + ": " + category.books.length)
}

let authors = []
for (let category of booksByCategory){
    for (let book of category.books){
        if (!authors.includes(book.author)){
            authors.push(book.author)
        }
    }
}
console.log("Número de autores: " + authors.length)

function booksOfAuthor(author){
    let i = 0
    console.log("Livros do autor " + author + ": ")
    for (let category of booksByCategory){
    for (let book of category.books){
        if (book.author == author){
            i++
            console.log(i + ". " + book.title)
        }
    }
}
}
booksOfAuthor("Augusto Cury")