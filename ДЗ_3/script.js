console.log('-----------------1 Задание-------------------')
var AgeActer=0,CountActer=0
for (film of films){
	if(film.director.oscarsCount==0){
		CountActer+=film.actors.length
		for(acter of film.actors){
			AgeActer+=acter.age
		}
	}
}
console.log('Средний возраст актеров которые снимались в фильмах и не получили оскара:',parseInt(AgeActer/CountActer))
console.log('---------------------------------------------')
console.log('---------------2 Задание--------------------')
for(film of films){
  if (film.creationYear>1995 && film.actors.some((acter)=>{
      return acter.name=="Tom Hanks"})){
      console.log("Фильм:",film.title)
      console.log("Актеры:");film.actors.forEach((item,index)=>{if(item.name!="Tom Hanks")console.log( index+")"+item.name+" ")})
  }
}
console.log('--------------------------------------------')

console.log('--------------------3 Задание-----------------')
var budgetSum=0;
for(film of films){
  if (film.director.age<70 && !film.actors.some((acter)=>{
      return acter.name=="Tom Hanks"})){
        budgetSum+=Number((film.budget.slice(1,film.budget.length)).split(' ').join(''))
  }
}
console.log('Сумарный бюджет фильмов:$',budgetSum)
console.log('---------------------------------------------')