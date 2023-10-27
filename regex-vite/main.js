//regex
const nameregex = /[a-zA-Z\s]{1,}/
const countryregex = /[a-zA-Z\s]{1,}/
const cityregex = /[a-zA-Z.'\s]{1,}/
const addressregex = /([a-zA-Z'.,\s]{1,}),([a-zA-Z/.0-9\s]{1,})/
const zipregex = /[A-Z0-9]{1,}/
const cardnumberregex = /([0-9]{4}),"-",([0-9]{4})"-",([0-9]{4}),"-",([0-9]{4})/
const secregex = /[0-9]{3}/
const cardnameregex = /[A-Z\s]{1,}/
//

function form(){
  let name = document.getElementById('name').value
  let country = document.getElementById('country').value
  let city = document.getElementById('city').value
  let address = document.getElementById('address').value
  let zip = document.getElementById('zip-code').value
  let cardnumber = document.getElementById('card-number')
  let security = document.getElementById('security').value
  let date = document.getElementById('month')
  let cardname = document.getElementById('name-card').value
  let p = document.getElementById('results')
  const datecurrent = new Date()
  let year = datecurrent.getFullYear()
  let month = datecurrent.getMonth()
  if (name != nameregex){
    p.style.color = 'red'
    p.innerText = 'Hibás név'
  }
  else if (country != countryregex){
    p.style.color = 'red'
    p.innerText = 'Hibás ország'
  }
  else if (city != cityregex){
    p.style.color = 'red'
    p.innerText = 'Hibás város'
  }
  else if (address != addressregex){
    p.style.color = 'red'
    p.innerText = 'Hibás cím'
  }
  else if(zip != zipregex){
    p.style.color = 'red'
    p.innerText = 'Hibás irányító szám'
  }
  else if(cardnumber != cardnumberregex){
    p.style.color = 'red'
    p.innerText = 'Hibás kártya szám'
  }
  else if (security != secregex){
    p.style.color = 'red'
    p.innerText = 'Hibás biztonsági kód'
  }
  else if(date.year < year || (date.month < month && date.year == year)){
    p.style.color = 'red'
    p.innerText = 'Lejárt kártya'
  }
  else if(cardname != cardnameregex){
    p.style.color = 'red'
    p.innerText = 'Hibás Kártya név'
  }
  else{
    p.style.color = 'green'
    p.innerText = 'Sikeres fizetés'
  }
}

function init(){
  document.getElementById('fizet').addEventListener('click', form)
}

document.addEventListener('DOMContentLoaded', init)