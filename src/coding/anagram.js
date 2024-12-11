function anagram(str1,str2){
    const one = str1.split('').sort().join();
    const two = str2.split('').sort().join();
    if(one===two){
        console.log("The words are anagrams");
        
    }
    else{
        console.log("The words are not anagrams");
        
    }
}

anagram("listen","sil")