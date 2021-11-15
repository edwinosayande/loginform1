
const knew = document.getElementById('knew');
const ref = document.querySelector('.ref');
const high = document.getElementById('username');
const high2 = document.getElementById('password');
const add_board = document.getElementById('add-board');
const form = document.querySelector('form');
const input = document.querySelector('.bind');
form.addEventListener('submit', e => {
    e.preventDefault();

    // console.log("hello world");

    const list = form.username.value.trim();
    const list2 = form.password.value.trim();

    form.username.value ="";
    form.password.value ="";
    // console.log(list, list2);
    passLive(list, list2,);
});


    const passLive = (list, list2) => {
        // let pswd = /^[A-Za-z]\z{7, 14}$/;
        let pswd = 8;
        // if(list.match(pswd) && list2.match(pswd)) {
            if(list.length === pswd && list2.length === pswd){
                high.classList.add('unhighlight');
                high2.classList.add('unhighlight');
            stateStart();
        }else if(list.length < pswd && list2.length < pswd){
            high.classList.add('highlight');
            high2.classList.add('highlight');
            stateRend();
        }
        return(pswd);
    
    };

const stateStart = () => {
    add_board.innerHTML = `Login Successfully`;
    add_board.classList.add('show-item');
    setTimeout(function() {
        add_board.remove(add_board.innerHTML)
    }, 4000);
}


    const stateRend = () => {
add_board.innerHTML = `invalid username or password`;
add_board.classList.add('items');
setTimeout(function() {
    add_board.remove(add_board.innerHTML)
}, 4000);
  }

