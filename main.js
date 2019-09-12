document.getElementById("calculate").addEventListener("click", mainCalc)
document.getElementById("m_balance").style.color = "yellow"

var girdsize;
var gravity;

var shipMass;
var cargoMass;

var hyd_l;
var hyd_s;

var atm_l;
var atm_s;

var ion_l;
var ion_s;

var totalThrust;



function mainCalc(){
gravity = document.getElementById("se_planet").value;
girdsize = document.getElementById("se_gird").value;

shipMass = document.getElementById("ship_mass").value;
cargoMass = document.getElementById("cargo_mass").value;

hyd_l = document.getElementById("hyd_l").value;
hyd_s = document.getElementById("hyd_s").value;

atm_l = document.getElementById("atm_l").value;
atm_s = document.getElementById("atm_s").value;

ion_l = document.getElementById("ion_l").value;
ion_s = document.getElementById("ion_s").value;

if (girdsize == "small"){

    totalThrust = (144*ion_l)+(12*ion_s)+(516.7*atm_l)+(86.1*atm_s)+(400*hyd_l)+(82*hyd_s);
    

}
else if (girdsize == "large"){

    totalThrust = (3600*ion_l)+(288*ion_s)+(5800.7*atm_l)+(581.5*atm_s)+(6000*hyd_l)+(900*hyd_s);
    
}

 var k_thrust = totalThrust / gravity;
 var m_balance = k_thrust - shipMass;

 if(m_balance>0){
    document.getElementById("m_balance").style.color = "green";
 }
 else if (m_balance<0){
    document.getElementById("m_balance").style.color = "red";
 }
 else{
    document.getElementById("m_balance").style.color = "yellow";
 }
 

document.getElementById("t_thrust").innerHTML = totalThrust.toFixed(2);
document.getElementById("kg_thrust").innerHTML = k_thrust.toFixed(2);
document.getElementById("m_balance").innerHTML = m_balance.toFixed(2);

}