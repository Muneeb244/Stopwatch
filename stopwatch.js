let start = document.querySelector(".btn-1");
let stop = document.querySelector(".btn-2");
let reset = document.querySelector(".btn-3");
let minutes = document.getElementById('min');
let seconds = document.getElementById('sec');
let miliSeconds = document.getElementById('m-sec');
let now = document.querySelector(".time");
let head = document.querySelector(".head");
let secs = 0;
let m_secs = 0;
let min = 0;
let stop_intervel = "";
let state = false;
let stopChk = false;

start.addEventListener('click', () => {
    if(!state){
        state = true;
        stop_intervel = setInterval(() => {
            m_secs++;
            if(m_secs <= 9){
                m_secs = `0${m_secs}`;
            }
            miliSeconds.innerHTML = m_secs;

            if(m_secs == 99){
                m_secs = 0;
                secs++;
                if(secs <= 9){
                    secs = `0${secs}`;
                }
                seconds.innerHTML = secs;
            }
            if(secs == 60){
                secs = 0;
                min++;
                if(min <= 9){
                    min = `0${min}`;
                }
                minutes.innerHTML = min;
            }
        }, 10);
    }
});

stop.addEventListener('click', () => {
    if(state){
        clearInterval(stop_intervel);
        state = false;
        stopChk = true;
    }
});

reset.addEventListener('click', () => {
    if(state || stopChk){
        secs = 0;
        m_secs = 0;
        min = 0;

        seconds.innerHTML = '00';
        miliSeconds.innerHTML = '00';
        minutes.innerHTML = '00';
        removeChilds();
    }
    else if(head.hasChildNodes()){
        removeChilds();
    }
});

function removeChilds(){
    while (head.hasChildNodes()) {
        head.removeChild(head.firstChild);
      }
}


window.addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        let newEle1 = document.createElement("span");
        newEle1.id = "no";
        let newEle2 = document.createElement("span");
        newEle2.id = "stopped";
        newEle1.innerHTML = "#" + (head.childElementCount + 1);
        newEle2.innerHTML = now.innerText;
        let list = document.createElement("li");
        list.classList = "list";
        
        list.appendChild(newEle1);
        list.appendChild(newEle2);
        head.appendChild(list);
    }
});