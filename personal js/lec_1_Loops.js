let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Berlin: 3500000,
  Paris: 2200000,
};

cityNewPopulation = []

for(const city in citiesPopulation){
    if(city=="Berlin"){
      continue
    }
    cityNewPopulation[city] = citiesPopulation[city]
}

console.log(cityNewPopulation);
    
