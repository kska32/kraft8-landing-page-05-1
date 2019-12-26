export function ioCallback(target,callbackIn,callbackOut){
        let io = new IntersectionObserver((entry)=>{
                entry.forEach((v)=>{
                    if(v.isIntersecting){
                       callbackIn && callbackIn(v);
                    }else{
                       callbackOut && callbackOut(v);
                    }
                });
        });
        io.observe(document.querySelector(target));
}

export function animate(element, animationName, callback=true){
        const node = document.querySelector(element);
        node.classList.add('animated', ...animationName.split(" "));

        if(callback){
            node.addEventListener('animationend',function handleAnimationEnd() {
                node.classList.remove('animated', ...animationName.split(" "));
                node.removeEventListener('animationend', handleAnimationEnd);
                if (typeof callback === 'function') callback();
            });
        }
}

export function simpleIoCallback(element, animationNameIn, animationNameOut){
    ioCallback(element,(v)=>{
        animate(element, animationNameIn);
    },()=>{
        animationNameOut && animate(element, animationNameOut);
    });
}