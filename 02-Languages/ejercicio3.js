function clone(source) {
    return {...source}
}

function merge(source, target) {
    return {...target, ...source}
}