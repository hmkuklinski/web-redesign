const coffeeInfo = document.querySelector('.coffee');
const specialtyInfo = document.querySelector('.specialty');
const frapInfo = document.querySelector('.fraps');
const seasonalInfo = document.querySelector('.seasons');
const beanInfo = document.querySelector('.beans');
const merchInfo = document.querySelector('.merch');
const mobile = document.querySelector('.mobile-main');
const main1 = document.getElementById('main-1');
const main2 = document.getElementById('main-2');
const size = window.innerWidth;
function showDefault(){
    if(size>950){
        mobile.style.display="none";
        main1.style.display= "flex";
        main2.style.display="flex";
    }
    else{
        mobile.style.display="flex";
        main1.style.display= "none";
    main2.style.display="none";
    }
    coffeeInfo.style.display="none";
    specialtyInfo.style.display="none";
    frapInfo.style.display="none";
    seasonalInfo.style.display="none";
    beanInfo.style.display="none";
    merchInfo.style.display="none";
}

function resetOptions(){
    main1.style.display="none";
    main2.style.display = "none";
    coffeeInfo.style.display="none";
    specialtyInfo.style.display="none";
    frapInfo.style.display="none";
    seasonalInfo.style.display="none";
    beanInfo.style.display="none";
    merchInfo.style.display="none";
   mobile.style.display="none";
}

function showCoffee(){
    resetOptions();
    coffeeInfo.style.display="flex";

}
function showSpecialty(){
    main1.style.display="none";
    main2.style.display = "none";
    coffeeInfo.style.display="none";
    frapInfo.style.display="none";
    seasonalInfo.style.display="none";
    beanInfo.style.display="none";
    merchInfo.style.display="none";
    specialtyInfo.style.display="flex";
}
function showFraps(){
    main1.style.display="none";
    main2.style.display = "none";
    coffeeInfo.style.display="none";
    specialtyInfo.style.display="none";
    frapInfo.style.display="flex";
    seasonalInfo.style.display="none";
    beanInfo.style.display="none";
    merchInfo.style.display="none";
}
function showSeasonal(){
    main1.style.display="none";
    main2.style.display = "none";
    coffeeInfo.style.display="none";
    specialtyInfo.style.display="none";
    frapInfo.style.display="none";
    seasonalInfo.style.display="flex";
    beanInfo.style.display="none";
    merchInfo.style.display="none";
}
function showBeans(){
    main1.style.display="none";
    main2.style.display = "none";
    coffeeInfo.style.display="none";
    specialtyInfo.style.display="none";
    frapInfo.style.display="none";
    seasonalInfo.style.display="none";
    beanInfo.style.display="flex";
    merchInfo.style.display="none";
}
function showMerch(){
    main1.style.display="none";
    main2.style.display = "none";
    coffeeInfo.style.display="none";
    specialtyInfo.style.display="none";
    frapInfo.style.display="none";
    seasonalInfo.style.display="none";
    beanInfo.style.display="none";
    merchInfo.style.display="flex";
}