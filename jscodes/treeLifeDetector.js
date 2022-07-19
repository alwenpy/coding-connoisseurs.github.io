const Val=process.argv[2];
const numm = Number(Val);
if(numm === 0)
{
    console.log('alive');
}
else if( numm === 1)
{
    console.log('flowering');
}
else if( numm === 2)
{
    console.log('shedding');
}
else
{
    console.log('other');
}