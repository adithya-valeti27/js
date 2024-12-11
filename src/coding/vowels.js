// function removeVowels(name) {
    
//     return name.replace(/[aeiouAEIOU]/g, '');
//   }
  
//   const result = removeVowels("Adithya chowdary valeti");
//   console.log(result); // Output: "dthy chwdry vlt"
  

function removeVowels(name){
    return name.replace(/[aeiouAEIOU]/g,'')
}

const result = removeVowels("Adithya chowdary valeti");
console.log(result);
