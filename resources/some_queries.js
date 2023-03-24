var persons = await personRepository.search().where('age').eq(21).return.all();
var persons = await personRepository.search().where('age').gt(21).return.all();
var persons = await personRepository.search().where('age').gte(21).return.all();
var persons = await personRepository.search().where('age').lt(21).return.all();
var persons = await personRepository.search().where('age').lte(21).return.all();
var persons = await personRepository.search().where('age').between(21, 65).return.all();


var persons = await personRepository.search().where('verified').true().return.all();
var persons = await personRepository.search().where('verified').false().return.all();
var persons = await personRepository.search().where('verified').equals(true).return.all();


// Redis OM can handle .and() .or()
var persons = await personRepository.search()
    .where('verified').is.true()
    .and('age').gte(21)
    .and('lastName').equals(lastName).return.all();


// Redis text search is different to string search... string uses .equals()
// But text search ===> 
    // ignores a, an, the
    // search for "give" ===> matches with given, gives, giving         // called "stemming"





