const divH = document.querySelector('section').clientHeight;
const body = document.querySelector('body');
let li;

let lastScroll = 0;

$(window).bind('mousewheel', goTo);

const addEvent = ()=>{
    $(window).bind('mousewheel', goTo);
}

const addLetters = ()=>{
    li = document.querySelectorAll('li');
    li.forEach(li => li.classList.add('active'));
    setTimeout(addMakeUp,500)
    setTimeout(changeLetters,1000);
}

function goTo(event){
    setTimeout(addEvent,2000);
    $(window).unbind('mousewheel', goTo);
    if( i>=0&& i<=3){
    if (event.originalEvent.wheelDelta >= 0) {
        i--;
        //up
        $('body, html').animate({
            scrollTop: divH*i
        },1000)
        if(i>=0){
            addLetters();
        }
        if(i==-1){
            i=0;
        }
    }
    else {
        //down
            i++;
            $('body, html').animate({
            scrollTop: divH*i
            },1000)
            if(i<=3){
                addLetters();
            }
            if(i==4){
                i=3;
            }

    }
    }
}


