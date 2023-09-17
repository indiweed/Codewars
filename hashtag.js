function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}; 

function generateHashtag (str) {
    let toArray = str.split(' ').filter((el) => el.length !== 0);
    let toUpperCase = toArray.map((el) => capitalizeFirstLetter(el));
    let toString = toUpperCase.join('');
    if ((toString.length >= 140) || (toString.length === 0)) {
        return false
    }
    let result = '#' + toString;
    return result
}