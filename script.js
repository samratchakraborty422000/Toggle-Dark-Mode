const body = document.querySelector('body');
const button = document.querySelector('.button');
const icon = document.querySelector('.button__icon');

//to save the dark mode use the object "local storage".

//function that stores the information that the dark mode is activated or not activated.

function store(value){
  localStorage.setItem('darkmode', value);
}

//function that indicates if the "darkmode" property exists or not. It loads the page as we had left it in previous visit.

function load(){
  const darkmode = localStorage.getItem('darkmode');

  //if the dark mode was never activated before.
  if(!darkmode){
    store(false);
    icon.classList.add('fa-sun');
  } else if( darkmode == 'true'){ //if the dark mode is activated
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
  } else if(darkmode == 'false'){ //if the dark mode exists but is disabled
    icon.classList.add('fa-sun');
  }
}


load();

button.addEventListener('click', () => {

  body.classList.toggle('darkmode');
  icon.classList.add('animated');

  //save true or false
  store(body.classList.contains('darkmode'));

  if(body.classList.contains('darkmode')){
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }else{
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  setTimeout( () => {
    icon.classList.remove('animated');
  }, 500)
})