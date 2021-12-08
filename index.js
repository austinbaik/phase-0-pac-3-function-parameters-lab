function introduction(Name) { 
    
    return `Hi, my name is ${Name}.`;    

}
console.log(introduction("Aki"));

function introductionWithLanguage(Name, Language){

    return `Hi, my name is ${Name} and I am learning to program in ${Language}.`;
}
console.log(introductionWithLanguage("Aki" , "Ember.js"));

function introductionWithLanguageOptional(Name, Language = "JavaScript"){

    return `Hi, my name is ${Name} and I am learning to program in ${Language}.`;
}
console.log(introductionWithLanguage("Aki" , "Ember.js"));