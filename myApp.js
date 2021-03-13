require('dotenv').config();
require('dotenv').config();
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true });

const personSchema= new mongoose.Schema({
name: {
  type: String,
  require: true,
},
age: Number,
favoriteFoods: [String],
});
let Person= mongoose.model("Person", personSchema);


const createAndSavePerson = (done) => {
  const person = new Person({name:"person", age:21, favoriteFoods: ["apple", "banna", "orange"]});

  person.save().then(resolte => {
  done(null ,resolte);
  })
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople).then(resolte => {
  done(null, resolte);}
  )};

  const findPeopleByName = (personName, done) => {
    Person.find({name: personName}).then(personFound =>
    done(null, personFound))
   
  };

  const findOneByFood = (food, done) => {
    Person.findOne({favoriteFoods: food}).then(resolte =>
    done(null ,resolte)
    )
  };
  const findPersonById = (personId, done) => {
    Person.findById(personId).then(resolte =>
    done(null, resolte))
  };
  

  const findEditThenSave = (personId, done) => {
    const foodToAdd = 'hamburger';
  
    Person.findById(personId, (err, person) => {
      if(err) return console.log(err); 
      person.favoriteFoods.push(foodToAdd);
      person.save((err, updatedPerson) => {
        if(err) return console.log(err);
        done(null, updatedPerson)
      })
    })
  };

  const findAndUpdate = (personName, done) => {
    const ageToSet = 20;
  
    Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, updatedDoc) => {
      if(err) return console.log(err);
      done(null, updatedDoc);
    })
  };
  const removeById = (personId, done) => {
    Person.findByIdAndRemove(personId).then(response =>
    done(null ,response)
    )
  };
const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
