function saturdayFun (activity) {
    if (typeof activity === 'string') {
    return `This Saturday, I want to ${activity}!`
    }
    else {
        return 'This Saturday, I want to roller-skate!'
    }
}
function mondayWork (job) {
    if (typeof job === 'string') {
    return `This Monday, I will ${job}.`
    }
    else {
        return 'This Monday, I will go to the office.'
    }
}
function wrapAdjective (flair = "*") {
    return function (adjective) {
        return `You are ${flair}${adjective}${flair}!`;
    }
}
