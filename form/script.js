
let username = document.getElementById('txtname')
let team = document.getElementById('txtteam')
let team2 = document.getElementById('txtteam2')
function enviar()
{

    if(username.value == 0 || team.value == 0 || team2.value == 0)
    {
        window.alert("Por favor, preencha os campos obrigatórios\nNome;\nTime;\nTime estrangeiro.")
    }
    
}    