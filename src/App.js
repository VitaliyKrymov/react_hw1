import './App.css';

const name = 'Demo video'
const part = 2;
const favoriteMovie = `Star ${part}`;
let variable = 'Chanal 25'

const fruites = ['banana', 'orange', 'apple'];
fruites.push('mango');
const [banana, orange, ...restFruites] = fruites;

// function sum(a, b) {              //function declaration
//     console.log(a, b);
//     console.log(a+ b);
//     return a + b;
// }
const multiple = function (a,b)  {   //function expresion
  return a*b;
}
console.log(multiple(2, 20));

const sum2 = (...rest) => {
    let sum=0;
    for (let i=0;i<rest.length;i++){
        sum +=rest[i]
    }
    return sum
};        //arrow function
console.log('Sum: ',sum2(2,3,4,5,6))

const myFruits = (fruites= []) => {
    let html = [];

    // try {
        for (let i = 0; i < fruites.length; i++) {
            console.log(i, fruites[i]);
            html.push(<p>{i}-{fruites[i]}</p>);//пушим параграфи в масив html
        }
    // } catch (e){
    //     console.error('New error:',e);
    //     html.push(<h1>No fruits</h1>)
    // }

    return html;
}

const user = {
    name: 'Max',
    lastName: 'Rudniy',
    age: 27,
    status: false,
    fruites,
    gender: 'male',
    bestFriend: {
        name: "Nataly",
        age: 43
    }
};

const user2 = {
    ...user,
    bestFriend: {
        ...user.bestFriend
    }
}
user2.name = 'Vitaliy'
user2.lastName = 'Krymov'
user2.bestFriend.name = 'Natasha'

console.log(user);
console.log(user2);

const {name: nameUser, age, lastName, status, city = "Kyiv", ...rest} = user;

const iLikeTheseFruits=myFruits(restFruites);

const User = ({name="Guest"}) => (<h1>{name}</h1> || <p>No Data</p>);



// function User({name, lastName,gender, ...rest}) {
// return (name && <h1>{name}</h1>)||(<h2>{"N0 name"}</h2>)//якщо є нейм тоді виведемо нейм інакше"N0 name"

    // if (name && lastName) {
//     if (name ||lastName) {
//         const salut=`Hello,${gender ==="male"?'Mr':'Ms'} ${name}`;
//         return name ? (<h1>{salut}</h1>): (<p>No Data</p>)// ternarka
//     }
// return null;
    // if (!name) {
    //     return null;
    // }
    // if (name) {
    //     return (
    //         <div>
    //             <h1>{name}</h1>
    //             <h2>{lastName}</h2>
    //             <p>{JSON.stringify(rest)}</p>
    //         </div>
    //     );
    // } else {
    //     return <h2>No Data</h2>;
    // }
    // return name ?"true": 'false'// ternarka
// }


function App() {
    return (
        <div className="App">

            <User name={user.name}/>
            {myFruits()}
            {/*{iLikeTheseFruits}*/}
            {/*{sum(5,10)}*/}
            <br/>
            {/*{multiple(3,3)}*/}
            <br/>
            {/*{sum2(5,50,500,1000)}*/}

            {/*{html}*/}
            {/*<h1>{nameUser}-{lastName} age:{age} {city}</h1>*/}
            {/*{JSON.stringify(restFruits)}*/}
            {/*<h2>{JSON.stringify(rest)}</h2>*/}
            {/*<div>{restFruits[0]}</div>*/}
            {/*<div>{restFruits[1]}</div>*/}
            {/*<div> Fruit: {fruits[3]}</div>*/}
            {/*{fruits.map(function (fruit, index) {*/}
            {/*    return <div key={fruit}>fruit{index}:{fruit}</div>*/}
            {/*})}*/}
            {/*<div>First fruit:{banana}</div>*/}
            {/*<div>Second fruit:{orange}</div>*/}

            {/*<User {...user}/>*/}
            {/*<User/>*/}

        </div>
    );
}
export default App;
