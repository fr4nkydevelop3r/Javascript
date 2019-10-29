
//Counting instances of values in an object

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedNames = names.reduce((allNames, name) => {
    if(name in allNames){
        allNames[name] += 1;
    }
    else{
        allNames[name] = 1;
    }
    
    return allNames;
}, {});

//console.log(countedNames);

//{"Alice": 2, "Bob": 3, "Tiff": 1, "Bruce":1}



const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 },
    { name: 'Juan', age: 21 },
    { name: 'Frank', age: 29 },


  ];

// groupedPeople is:
// { 
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ], 
//   21: [{ name: 'Alice', age: 21 }] 
// }

const groupedPeople = people.reduce((grouped,person) => {
    
    //console.log(grouped[person.age]);

    if(typeof grouped[person.age] !== 'undefined'){ 
        grouped[person.age].push({ name : person.name, age: person.age });   
    } else{
        grouped[person.age] = [{ name : person.name, age: person.age }]

    }
    
    return grouped;
},  {});

//console.log(groupedPeople);



  var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }];


  // allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]

const checkSuspect = (room) => {
    const nameRoom = Object.keys(room);
    //console.log(nameRoom);
    if(!room[nameRoom]){
        return nameRoom.join('');
    } else{
        return undefined;
    }
}






const handleSuspects = (suspectsArray) => {

    const roomsSuspects = [];


    const rooms = suspectsArray.map((item) => {
        return item.rooms;
    });

   rooms.map((item) => {
        item.map((room) => {
             const key = Object.keys(room);
             if(!room[key]){
                 roomsSuspects.push(room);
             }
        });
    });

    //console.log(roomsSuspects);

    const data = roomsSuspects.reduce((ammount, current) => {
        //console.log(current);

        let key = Object.keys(current);
        if(typeof(ammount[key]) === 'undefined'){
            ammount[key] = 1; 
            //console.log(typeof(ammount[key]));
        } else {
            ammount[key] = ammount[key] + 1;
            //console.log(typeof(ammount[key]));

        }
        
        return ammount;

    }, {});

    //console.log(data);

    const finalRoom = Object.entries(data).reduce((ammount, current)  => {
     

       if(current[1] > ammount[1]){
            ammount[0] = current[0];   
            ammount[1] = current[1];

           return ammount;
       } else{
           return ammount;
       }
    });

    console.log(finalRoom);

}


const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];


handleSuspects(newDevelopment);


// ['ballroom']

