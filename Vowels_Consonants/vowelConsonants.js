function vowelsAndConsonants(s) {
    // to print vowels
    for(var i = 0; i < s.length; i++) {
        if ((s.charAt(i) == 'a') ||  (s.charAt(i) == 'e') || (s.charAt(i) == 'i') ||             (s.charAt(i) == 'o') || (s.charAt(i) == 'u')){    
            console.log(s.charAt(i))
        }
    }
    // to print the constants
    for(var i = 0; i < s.length; i++) {
         if ((s.charAt(i) != 'a') &&  (s.charAt(i) != 'e') && (s.charAt(i) != 'i') &&             (s.charAt(i) != 'o') && (s.charAt(i) != 'u')){    
            console.log(s.charAt(i))
        }
    }
}

vowelsAndConsonants('javascriptloops')