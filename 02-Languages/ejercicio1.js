const head = ([head,]) => head;
const tail = ([,...tail]) => tail;
const init = (array) => array.slice(0,-1);
const last = (array) => array.slice(-1);