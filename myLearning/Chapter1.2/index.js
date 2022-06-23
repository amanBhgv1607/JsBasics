//This one I wasn't able to execute here on my own.

function showStars(rowCount)
{
    for(let row=1;row<=rowCount;row++) 
          {  let pattern ='';
        for(let i=1;i<=row;i++)
           pattern+='*';
        console.log(pattern);
          } 
        
    
}

showStars(4);

function showPrime(limit)
{
   for(let i=2;i<=limit;i++)
       if(isPrime(i)) console.log(i)
       
}

const isPrime = (value) => {
    for(let j=2;j<value;j++)
        if(value%j==0)
        return false

    return true
}

showPrime(10);


