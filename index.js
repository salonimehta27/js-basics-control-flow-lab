function scuberGreetingForFeet(ride){
  if(ride<=400)
  {
    return "This one is on me!";
  }
  else if(ride>2000 && ride<2500)
  {
    return "I will gladly take your thirty bucks.";
  }
  else
  {
    return "No can do.";
  }
}
scuberGreetingForFeet(199);

function ternaryCheckCity(city){
const message= city==='NYC'? "Ok, sounds good." : "No go.";
return message;
}

ternaryCheckCity('Pittsburgh');
function switchOnCharmFromTip(tip){
  let response;
  switch(tip)
{
  case 'generous':
    response="Thank you so much.";
    break;
  case 'not as generous':
    response="Thank you.";
    break;
  case 'thanks for everything':
    response='Bye.';
    break;
}
return response;
}