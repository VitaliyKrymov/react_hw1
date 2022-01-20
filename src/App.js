import './App.css';

const name='Demo video'
const part = 2;
const favoriteMovie = `Star ${part}`;
let variable = 'Chanal 25'

function User({name,lastName,...rest}) {
  return(
      <div>
      <h1>{name}</h1>
      <h2>{lastName}</h2>
          <p>{JSON.stringify(rest)}</p>
</div>
)
  }



const fruits = ['banan', 'orange', 'apple'];
fruits.push('mango');
const [banana,orange,...restFruits] = fruits;

const user = {
    name: 'Max',
    lastName: 'Rudniy',
    age: 27,
    status: false,
    fruits,
    bestFriend:{
        name:"Nataly",
        age:43
    }
};
const user2={
    ...user,
    bestFriend: {
        ...user.bestFriend
    }
}
user2.name='Vitaliy'
user2.lastName='Krymov'
user2.bestFriend.name='Natasha'

console.log(user);
console.log(user2);

const {name:nameUser,age,lastName,status,city="Kyiv",...rest}=user

function App() {
    return (
        <div className="App">
            <h1>{nameUser}-{lastName} age:{age} {city}</h1>
            {JSON.stringify(restFruits)}
            <h2>{JSON.stringify(rest)}</h2>
            <div>{restFruits[0]}</div>
            <div>{restFruits[1]}</div>
            <div> Fruit: {fruits[3]}</div>
            {fruits.map(function (fruit, index) {
                return <div key={fruit}>fruit{index}:{fruit}</div>
            })}
<div>First fruit:{banana}</div>
<div>Second fruit:{orange}</div>

            <User {...user}/>

        </div>
    );
}

export default App;
