var card_p=document.getElementById("card_p")
// var card_c=document.getElementById("card_c")
var total=document.getElementById("total")
var total_c=document.getElementById("total_c")
var msg=document.getElementById("msg")

var win=false
var game= true
var sgame=false

var pcard=[]
var sum=0
var computer_sum =0
var ccard=[]

var player=prompt("enter player name")
var amount=prompt(" Enter the amount")


function getrandom(){
 var random = Math.floor(Math.random()*13+1)
    if(random>10){
        return 10
    }
    else if(random==1){
        return 11
    }
    else{
        return random
    }
}

function start(){

    var num1=getrandom()
    var num2=getrandom()
    sum=num1+num2
    sgame=true

    pcard=[num1,num2]

    //For Generating Random card for Computer
    var cnum1 = getrandom()
    var cnum2=getrandom()
    computer_sum =cnum1+cnum2
    ccard=[cnum1,cnum2]

    render()
}

function render(){
    card_p.innerHTML="player :       "
    // card_c.innerHTML="computer :       "
    
    for(var i=0;i<pcard.length;i++){
        card_p.innerHTML+=`  ${pcard[i]}`
        // card_c.innerHTML+=`  ${ccard[i]}`
    }
    
    total.innerHTML =` total : ${sum}`
    total_c.innerHTML = ` total : ${computer_sum}`

    if (sum<21){
        msg.innerHTML="do you want another card"
    }
    else if(sum==21 && computer_sum<21){
        amount *=2
        msg.innerHTML=` ${player} ,you won ${amount} the game`
        win=true
    }
    else{
        msg.innerHTML =` Sorry ${player},your RS ${amount} is gaya`
        game=false
    }
}

function newcard(){


    if(win==false && game==true && sgame==true){
        var num= getrandom()
        pcard.push(num)
        sum+=num

        while(computer_sum<19){
            var num_c =getrandom()
        ccard.push(num_c)
        computer_sum+=num_c
        }
    
        render()
        if(sum>21){
            winner()
        }
       
    }
}


function winner(){


    if(sgame==true){

    while(computer_sum<17 && computer_sum<sum){
        var num_c =getrandom()
    ccard.push(num_c)
    computer_sum+=num_c
    }

    total_c.innerHTML=`computer total :${computer_sum}`
    if(sum>21 || (computer_sum<21 && computer_sum>sum)){
        msg.innerHTML =` Sorry ${player},your RS ${amount} is gaya`
        game=false
    }
    else if( sum==computer_sum){
        msg.innerHTML="Its a Tie"
    }
    else{
        amount *=2
        msg.innerHTML=` ${player} ,you won ${amount} the game`
        win=true
    }
    game=false
}
}