const Var = process.argv[2];
const numVar = Number(Var);
if(numVar%3 === 0 && numVar%5 === 0 )
{
    console.log('JavaScript');
}
else if(numVar%3 === 0)
{
    console.log('Java');
}
else if(numVar%5 === 0)
{
    console.log('Script');
}
else
{
    console.log(numVar);
}