const solution = (n) => {
    let missingSteps    = n;
    let arraySteps      = [];
    let stringSteps     = "";
    let x = 1;
    let y = 1;
    
    while( missingSteps > 0 ){
        stringSteps += 1 + ',';
        missingSteps--;
    }
    
    stringSteps = stringSteps.substring( 0, stringSteps.length - 1 );
    arraySteps.push( stringSteps );
    
    while( x <= 3 ){
        if( (x + y) <= n ){
            if(  x==1 && y==1 && n>3 || x>1 || y>1 ){
                validateSteps( x, y, n, arraySteps );
            }
        }
        y++;
        
        if( y > 3 ){
            y = 1;
            x++;
        }
    }

    console.log( "Total ways: " + arraySteps.length );
    return arraySteps;
};

const validateSteps = ( firstStep, steps, n, arraySteps ) => {
    let stringSteps     = '';
    let totalSteps      = 0;
    let missingSteps    = n;
    
    if( firstStep + steps == n ){
        stringSteps     = firstStep + ',' + steps;
        totalSteps      = firstStep + steps;
        missingSteps    = 0;
        arraySteps.push( stringSteps );
    }else if( firstStep + steps < n ){
        stringSteps     = firstStep + ',' + steps; 
        totalSteps      = firstStep + steps;
        missingSteps    = n - totalSteps;
    }else{
        missingSteps    = 0;
    }
    
    while( missingSteps > 0 ){
        if( missingSteps <= 3 ){
            if( missingSteps == 3 ){
                arraySteps.push( stringSteps + ',1,2' );
                arraySteps.push( stringSteps + ',2,1' );
            }else if( missingSteps == 2 ){
                if( stringSteps.includes('2') || stringSteps.includes('3') ){
                    arraySteps.push( stringSteps + ',1,1' );
                }
            }
            stringSteps += ',' + missingSteps;
            missingSteps -= missingSteps;
            arraySteps.push( stringSteps );
        }else{
            stringSteps += ',' + steps;
            missingSteps -= steps;
        }
    }
    
    return stringSteps;
}

console.log( solution(4) );
