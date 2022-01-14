let catFact = document.querySelector('.catFact');
const url = "https://catfact.ninja/fact";
fetch(url)
.then(data=>data.json())
.then(data=>{
    let p = document.createElement('p');
    p.classList.add('p');
    p.innerHTML = data.fact;
    catFact.appendChild(p);
    
})
.catch(error=>{
    alert(error)
})


let refresh = document.querySelector('#refresh');
refresh.addEventListener("click", ()=>{
    location.reload();
})