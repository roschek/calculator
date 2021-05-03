import'../styles/style.css';
window.onload = () =>{
    const  mainForm = document.forms.calculator
    const totalField = document.querySelector('.total')
    const bathSection = document.querySelector('.bath_section')
    const burgerBttn = document.querySelector('.burger')
    const mobileNavigation = document.querySelector('.header__nav')
     let mainSquare = mainForm.elements.square
    let houseType = mainForm.elements.type
    let perimetr = mainForm.elements.perimetr
    let electric = mainForm.elements.electric
    let remont = mainForm.elements.remont
    let roof = mainForm.elements.roof
    let bathSquare = mainForm.elements.bath
    let bathHandler = mainForm.elements.bathroom
    let floor = mainForm.elements.floor
    let doors = mainForm.elements.doors
    let checkFront = mainForm.elements.front

   const searchSquare = ()=>{
       let square = mainSquare.value
       document.querySelector('.square__view').textContent = `${square} кв.м.`
       return square
   }
   const  searchBath = () => {
        let square = bathSquare.value
       document.querySelector('.bath__square').textContent = `${square} кв.м.`
       return square
   }
 const printFinal = (sum)=>{
     totalField.textContent = `${sum} руб.`

 }
 const calculate = () =>{

     let sum =1
     searchSquare
     searchBath()
     if (bathHandler.value ==='да'){
         bathSection.classList.add('bath__active')}
     else if (bathHandler.value ==='нет'){
         bathSection.classList.remove('bath__active')
         bathSquare.value = 1
     }

     if (houseType.value === 'new' ) {
         sum = searchSquare()*6000 + searchBath()*13000 + doors.value*8500
         printFinal(sum)
     }
     else if(houseType.value === 'old') {
         sum = searchSquare()*8500 + searchBath()*13000 + doors.value*8500
         printFinal(sum)
     }

     if(electric.value === 'electric-part') {
         sum = sum + 300*parseInt(perimetr.value)
         printFinal(sum)}
     else if (electric.value === 'electric-new'){
         sum = sum + 600*parseInt(perimetr.value)
         printFinal(sum)
     }
     if (remont.value ==='design'){
         sum = sum + searchSquare()*3000
         printFinal(sum)
     }
     else if (remont.value ==='capital'){
         sum = sum + searchSquare()*1500
         printFinal(sum)
     }

     if (roof.value ==='gips'){
         sum = sum + 300*searchSquare()
         printFinal(sum)}
     else if (roof.value ==='stretch'){
         sum = sum + 450*searchSquare()
         printFinal(sum)}
     else if (roof.value ==='double_gips'){
         sum = sum + 600*searchSquare()
         printFinal(sum)}

     if (floor.value === 'да') {
         sum  = sum + 300*searchSquare()
         printFinal(sum)
     }
     if(checkFront.checked){
         sum = sum + sum/100*5
         printFinal(sum)
     }
 }

    burgerBttn.addEventListener('click',()=>{
        burgerBttn.classList.toggle('bttn-active')
        mobileNavigation.classList.toggle('header__visible')
    })
   mainForm.addEventListener('input',calculate)


}
