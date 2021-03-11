function regexVar(re) {
    
    //first checking to see if the first letter is a vowel
    if((re[0] == 'a') || (re[0] == 'e') || (re[0] == 'o') || (re[0] == 'i') || (re[0] == 'u')){

        //checking to see if the first and last letter match
        if( re.charAt(0) == re.charAt(re.length-1)) {
            console.log(true)
        }
        else{
            console.log(false)
        }
    }
    else{
        console.log(false)
    }
    
    return re;
}

//should be true
console.log(regexVar('abba'));
//should be false
console.log(regexVar('bbba'));
