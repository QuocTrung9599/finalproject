var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; //array
var mf = 1; //default maximum frequency
var m = 0;  //counter
var item;  //to store item with maximum frequency
for (var i=0; i<arr1.length; i++)    //select element (current element)
{
        for (var j=i; j<arr1.length; j++)   //loop through next elements in array to compare calculate frequency of current element
        {
                if (arr1[i] == arr1[j])    //see if element occurs again in the array
                 m++;   //increment counter if it does
                if (mf<m)   //compare current items frequency with maximum frequency
                {
                  mf=m;      //if m>mf store m in mf for upcoming elements
                  item = arr1[i];   // store the current element.
                }
        }
        m=0;   // make counter 0 for next element.
}
console.log(`${item} (${mf} times)`)



var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

var newLib = library.map(function(library){
    return {
        author: library.author,
        title : library.title,
        readingStatus : library.readingStatus
    }
});
console.log(newLib);



