function construct(name1)
{
    let identity = {
        name : name1,
        material : 'human',
        assemble : true,
        duration : 1000
    };

    return identity;
}

const somePerson = construct('Kevin');
console.log('name is: ' + somePerson.name); // should be "Kevin"
console.log('duration is: ' + somePerson.duration); // should be 1000