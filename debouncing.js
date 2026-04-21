
function debounce(func, delay){
    let timer;
    return function(){
        console.log("Timer reset process started..."); 
        clearTimeout(timer);
        timer = setTimeout(()=>{ 
            func();
        }, delay);
    }
}

const savedInput = () => console.log( 'My api called');
const processChange = debounce(savedInput, 3000); // 3 sec delay

// Testing: Baar-baar call karna
processChange(); // Pehla call
setTimeout(processChange, 1000); // 1 sec baad doosra call (Reset karega)
setTimeout(processChange, 2000); // 2 sec baad teesra call (Reset karega)

