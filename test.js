// c1:
// function startDiablo(m, d, k, c) {
//   let cost = 0;
//   let currentDurability = d;
//   if (d - k <= 0) {
//     return -1;
//   }
//   for (let i = m; i >= 0; i--) {
//     d -= k;
//     if (d - k < 0 && 0 <= m) {
//       d = currentDurability;
//       cost += c;
//     }
//     console.log(`lần ${m - i + 1}: m =${i}  ==========' d = ${d}`);
//     console.log(`lần ${m - i + 1}: m =${i}  ==========' cost = ${cost}`);
//   }
//   return cost;
// }

// console.log(startDiablo(10, 5, 1, 2));

// c2:
// function startDiablo(m, d, k, c) {
//   if (d - k <= 0) {
//     return -1;
//   }
//   let cost = 0;
//   let currentDurability = d;

//   const fixSword = () => {
//     cost += c;
//     currentDurability = d;
//   };

//   const killMonster = () => {
//     m -= 1;
//     currentDurability -= k;
//   };

//   for (var i = m; i >= 0; i--) {
//     if (currentDurability - k < 0 && m >= 0) {
//       fixSword();
//     }

//     killMonster();
//   }

//   return cost;
// }

// console.log(startDiablo(10, 4, 1, 2));

// B2:

// const shopList1 = [
//   { id: 1, quantity: 1 },
//   { id: 2, quantity: 2 },
//   { id: 3, quantity: 2 },
// ];

// const shopList2 = [
//   { id: 1, quantity: 2 },
//   { id: 2, quantity: 1 },
//   { id: 4, quantity: 4 },
// ];

// const shopList3 = [
//   { id: 1, quantity: 3 },
//   { id: 2, quantity: 4 },
//   { id: 5, quantity: 5 },
// ];

// const shopList4 = [
//   { id: 1, quantity: 3 },
//   { id: 4, quantity: 4 },
//   { id: 2, quantity: 5 },
// ];
// const getSmallest = (array) => {
//   let a = array.reduce(
//     (result, current) => {
//       if (result.smallest === null) {
//         result.smallest = current.quantity;
//         result.arr.push(current);
//       } else if (result.smallest === current.quantity) {
//         result.arr.push(current);
//       } else if (result.smallest > current.quantity) {
//         result.smallest = current.quantity;
//         result.arr = [current];
//       }
//       return result;
//     },
//     { smallest: null, arr: [] },
//   );
//   return a.arr;
// };

// let data = [shopList1, shopList2, shopList3, shopList4];
// console.log(data.map(getSmallest));

// function calculateOverlapse(rec1, rec2) {
//   // contains
//   if (
//     !(
//       rec2.x1 < rec1.x1 ||
//       rec2.y1 < rec1.y1 ||
//       rec2.x2 > rec1.x2 ||
//       rec2.y2 > rec1.y2
//     )
//   ) {
//     return false;
//   }
//   // touches horizontal
//   if (rec1.x1 > rec2.x2 || rec2.x1 > rec1.x2) return false;
//   // touches vertical
//   if (rec1.y1 > rec2.y2 || rec2.y1 > rec1.y2) return false;
//   // overlapse
//   if (rec1.x1 >= rec2.x2 || rec2.x1 >= rec1.x2) {
//     // no horizontal overlap
//     return false;
//   } else if (rec1.y1 >= rec2.y2 || rec2.y1 >= rec1.y2) {
//     // no vertical overlap
//     return false;
//   } else {
//     // calculate S và return
//     console.log('Passed');
//   }
// }
// console.log(calculateOverlapse((0,0,4,3),(-2,2,2,6)));

var watchList = [
  {
    Title: 'Inception',
    Year: '2010',
    Rated: 'PG-13',
    Released: '16 Jul 2010',
    Runtime: '148 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer: 'Christopher Nolan',
    Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy',
    Plot: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
    Language: 'English, Japanese, French',
    Country: 'USA, UK',
    imdbRating: '8.8',
    imdbVotes: '1,446,708',
    imdbID: 'tt1375666',
    Type: 'movie',
  },
  {
    Title: 'Interstellar',
    Year: '2014',
    Rated: 'PG-13',
    Released: '07 Nov 2014',
    Runtime: '169 min',
    Genre: 'Adventure, Drama, Sci-Fi',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan, Christopher Nolan',
    Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: 'English',
    Country: 'USA, UK',
    imdbRating: '8.6',
    imdbVotes: '910,366',
    imdbID: 'tt0816692',
    Type: 'movie',
  },
  {
    Title: 'The Dark Knight',
    Year: '2008',
    Rated: 'PG-13',
    Released: '18 Jul 2008',
    Runtime: '152 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer:
      'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
    Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
    Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    Language: 'English, Mandarin',
    Country: 'USA, UK',
    imdbRating: '9.0',
    imdbVotes: '1,652,832',
    imdbID: 'tt0468569',
    Type: 'movie',
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    Rated: 'PG-13',
    Released: '15 Jun 2005',
    Runtime: '140 min',
    Genre: 'Action, Adventure',
    Director: 'Christopher Nolan',
    Writer:
      'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
    Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
    Plot: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
    Language: 'English, Urdu, Mandarin',
    Country: 'USA, UK',
    imdbRating: '8.3',
    imdbVotes: '972,584',
    imdbID: 'tt0372784',
    Type: 'movie',
  },
  {
    Title: 'Avatar',
    Year: '2009',
    Rated: 'PG-13',
    Released: '18 Dec 2009',
    Runtime: '162 min',
    Genre: 'Action, Adventure, Fantasy',
    Director: 'James Cameron',
    Writer: 'James Cameron',
    Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
    Plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    Language: 'English, Spanish',
    Country: 'USA, UK',
    imdbRating: '7.9',
    imdbVotes: '876,575',
    imdbID: 'tt0499549',
    Type: 'movie',
  },
];

// console.log(a);
function calculateRating(data) {
  let a = data.filter((list) => {
    let arr = [];
    if (list.Director == 'Christopher Nolan') arr.push(list);

    return arr;
  });
  console.log(a);
  let length = a.length;
  console.log(length);
  let result = a.reduce((results, data) => {
    results = results + Number(data.imdbRating);
    return results;
  }, 0);
  return result/length;
}
// Expected results
console.log(calculateRating(watchList));
