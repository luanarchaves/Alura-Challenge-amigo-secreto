let showList = document.getElementById('listaAmigos');
let showChamp = document.getElementById('resultado')
let arrayInputsFriends = []

function addFriend(array){

    let newFriend = document.getElementById('amigo').value;

    if (newFriend == ''){
        alert('Insira um nome para poder sortear')
    }else{
        array.push(newFriend)
        showList.innerHTML = '';

        array.forEach(function(item){
            let li = document.createElement('li');
            li.textContent = item;
            showList.appendChild(li);
        })
        document.getElementById('amigo').value = '';
    }
}

function choiceChamp(array){
    
    if (array.length > 0){
        let result = Math.floor(Math.random() * array.length)
        showChamp.innerHTML = `O sorteado foi: ${array[result]}`
        array.splice(result, 1)
        console.log(array)
    }else{
        showChamp.innerHTML = `Você já sorteou todo mundo`
    }
}

buttonInput = document.getElementById('adicionarAmigo').addEventListener('click', function(){
    

    if (showChamp == ''){
        addFriend(arrayInputsFriends)
    }else{
        showChamp.innerHTML = '';
        addFriend(arrayInputsFriends)
    }

})


buttonResult = document.getElementById('sortearAmigo').addEventListener('click', function(){
    showList.innerHTML = '';
    choiceChamp(arrayInputsFriends)
})


