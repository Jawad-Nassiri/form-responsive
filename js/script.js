let countrySelect  =document.getElementById('countrySelect');
let citySelect  =document.getElementById('citySelect');



const countryCityMap = {
    us: ["Please select your city", "New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
    canada: ["Please select your city", "Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
    uk: ["Please select your city", "London", "Manchester", "Birmingham", "Leeds", "Glasgow"],
    australia: ["Please select your city", "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    india: ["Please select your city", "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"]
};



countrySelect.addEventListener('change' , ()=>{
    if(countrySelect.value === 'Please select your country'){
        citySelect.innerHTML = '<option>Please choose a country</option>';
    }else{
        let countrySelected = countrySelect.value;
        let mainCountrySelect = countryCityMap[countrySelected];
        citySelect.innerHTML = ' ';

        mainCountrySelect.forEach(function(city){
        citySelect.innerHTML += '<option>'+city+'</option>';
    })
    }
})