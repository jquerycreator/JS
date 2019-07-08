window.onload=()=>{
	ButRavn.onclick=()=>{
		var RegMassNumber=Primer.value;
		var EndMassiv=RegMassNumber.match(/[0-9]+|[-||+||//||*(||)]/gi);
		EndMassiv=UD(EndMassiv)
		var result=parseInt(EndMassiv[0]);
		for(let index=1;index<EndMassiv.length;index++){
			if(EndMassiv[index]=="+"){
				result+=parseInt(EndMassiv[index+1]);
			}
			else if(EndMassiv[index]=="-"){
			    result=result-parseInt(EndMassiv[index+1]);
			}

		}
		Otvet.value=result
	}
}
function UD(mas){
    for(let index=0;index<mas.length;index++){
         if(mas[index]=="*"){
			    result=mas[index-1]*parseInt(mas[index+1]);
			    mas.splice(index-1,index)
			    mas.splice(index-1,0,result)
			    index=0;
			}
		     else if(mas[index]=="/"){
			    result=mas[index-1]/parseInt(mas[index+1]);
			    mas.splice(index-1,index)
			    mas.splice(index-1,0,result)
			    index=0;
			}
    }
    return mas;
}