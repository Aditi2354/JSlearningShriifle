function throttle (func, limit){
    let flag = true

    return function(){
        if(flag){
            func()
            flag=false



            setTimeout(()=>{
            flag=true;
            },limit)
        }
    }
}

const logscroll = ()=> console.log('even scrolled')
const processChange= throttle(logscroll,3000)

window.addEventListener('scroll',processChange)