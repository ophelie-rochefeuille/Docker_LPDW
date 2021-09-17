function oklogin() {
    if(true){
        var connexion = document.getElementById('connexion');
        var numcamion = document.getElementById('numcamion');
        connexion.style.transition="opacity 0.2s";
        connexion.style.opacity="0";
        setTimeout(()=>{
            connexion.style.display='none';
            numcamion.style.display='block';
            numcamion.style.transition="opacity 5s";
            numcamion.style.opacity="1";
        },500);
    }
}

var plaque=document.getElementById('plaque');

plaque.onkeyup=(e)=>{
    plaque.value=plaque.value.toUpperCase()
    if(/[^a-zA-Z0-9-]/g.test(plaque.value)){
        document.getElementById('plaque-error').style.display='block';
    }else{
        document.getElementById('plaque-error').style.display='none';
    }
    if(/^[a-zA-Z]{2,2}-[0-9]{3,3}-[a-zA-Z]{2,2}$/.test(plaque.value)){
        document.getElementById('plaque-error').style.display='none';
    }else{
        document.getElementById('plaque-error').style.display='block';
    }
}
plaque.onkeydown=(e)=>{
    if(e.key!='Backspace'){
        if(/^[a-zA-Z0-9]{2,2}$/.test(plaque.value) || /^[a-zA-Z0-9-]{6,6}$/.test(plaque.value)){
            plaque.value+='-';
        }
    }
}