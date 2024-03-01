firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("login.html")
    }else{
        
    }
})


function logout(){
    firebase.auth().signOut()
}


