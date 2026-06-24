const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];
function getBooks() {
  return data;
}
function getBook(id) {
  return data.find((d) => d.id == id);
}

// Destructing with object
const books = getBook(2);
//console.log(books);
// const title = books.title;
// const author = books.author;
// console.log(title);
// console.log(author);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  books;
console.log(title, author, genres);

// Destructuring of Arrays
const primaryGenre = genres[0];
const seondaryGenre = genres[1];
console.log(primaryGenre, seondaryGenre);

//using Rest Operator
const [primary, secondary, ...othergenres] = genres;
console.log(primary, secondary, othergenres);

//using Spread Operator
const newgenres = [...genres, "epic"];
console.log(newgenres);

//Objects with Spread - allows to add new and update the existing once
const udpatebook = {
  ...books,
  movirePublicationDate: "2001",
  pages: 1520,
};
console.log(udpatebook);

//Literals
const summary = `
a book 
is a book ${title}
${publicationDate.split("-")[0]} ${publicationDate.split("-")[1]}`;
console.log(summary);

// Short Circuting and Logical Operators

//&&
console.log(true && "Some String");
console.log(false && "Some String");
console.log(hasMovieAdaptation && "This Book has a movie");

//||
console.log(books.reviews.librarything.reviewsCount);
console.log(books.reviews.librarything.reviewsCount || "No Data");
console.log(books.reviews.librarything.reviewsCount ?? "No Data");

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;

  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
}
console.log(getTotalReviewCount(books));

//Map

const allbooks = getBooks();
const x = [1, 2, 3, 4, 5].map((ele) => ele * 2);
console.log(x);

const titles = allbooks.map((ele) => ele.title);
console.log(titles);

const essentialdata = allbooks.map((ele) => {
  return {
    title: ele.title,
    author: ele.author,
    reviewsCount: getTotalReviewCount(books),
  };
});
console.log(essentialdata);

// Array Second last data
const arr = [1, 2, 3, 4, 5];
const length_arr = arr.length;
console.log(arr[length_arr - 2]);

const arr_rev = [];
for (let i = length_arr - 1; i >= 0; i--) {
  arr_rev.push(arr[i]);
}
console.log(arr_rev);

// Filter
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = nums.filter((num) => num % 2 == 0);
console.log(evens);

const words = ["apple", "banana", "kiwi", "pineapple", "fig"];
const longWords = words.filter((word) => word.length > 5);
console.log(longWords);

const tasks = [
  { id: 1, title: "Clean room", completed: true },
  { id: 2, title: "Study code", completed: false },
  { id: 3, title: "Buy groceries", completed: true },
];
const completedTasks = tasks.filter((task) => task.completed);
console.log(completedTasks);
// Output: [{ id: 1, ... }, { id: 3, ... }]

const items = ["A", "B", "C", "D", "E", "F"];
// Keep items at odd indices (1, 3, 5)
const alternateItems = items.filter((item, index) => index % 2 !== 0);
console.log(alternateItems);
// Output: ["B", "D", "F"]

const duplicates = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(duplicates.indexOf(3));

// indexOf returns the FIRST index where a value appears
const uniqueNumbers = duplicates.filter((num, index, arr) => {
  return arr.indexOf(num) === index;
});
console.log(uniqueNumbers);
// Output: [1, 2, 3, 4, 5]

Q;
