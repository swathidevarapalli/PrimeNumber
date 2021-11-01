var firstKPrime = function(k){
    var i=1;
    var arr =[];
    while (arr.length < k)
    {
        if(i == 2)
        { 
            arr.push(p(i)); 
        }
    
        if(i>2 && i%2!==0)
        {
            if (p(i)>1)
            {
                arr.push(p(i));
            }
        }
    
        i++;
    }
    
    return arr;
    }