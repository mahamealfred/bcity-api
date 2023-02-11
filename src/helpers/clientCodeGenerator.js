const generateClientCode = (name,rndInt) => {
    const randomNumber = Math.floor(Math.random()*(999-100+1)+100);
    const nameString= name.match(/(?<=(\s|^))[a-z]/gi).join('').toUpperCase();
    const nameWithSingleWord=name.indexOf(" ") >=0;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const randomletters= alphabet[Math.floor(Math.random() * alphabet.length)]
    const spacesCount = name.split(' ').length - 1;
   
    const value=rndInt.toString().length

const runNumb=()=>{
if(value===1){
    return "00"+rndInt
}
else if(value===2){
    return "0"+rndInt
}else{
    return rndInt
}
}
    if(!nameWithSingleWord && name.length>2){
      
    const namewithSgl=name.slice(0, 3).toUpperCase()
    return namewithSgl+runNumb()
    }
    else if(!nameWithSingleWord && name.length < 3 ){
        const nameStr= name.slice(0, 2).toUpperCase()
        return nameStr+randomletters+runNumb()
    }
    else if(spacesCount===1){
        const nst=name.match(/(?<=(\s|^))[a-z]/gi).join('').toUpperCase()
        return nst+randomletters+runNumb()
    }
    else{
        return nameString+runNumb()
    }
  };
  
  module.exports= generateClientCode;