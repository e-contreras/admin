export function copyByField(arrayObject, field){
    let result = [];
    arrayObject.forEach(element => {
        result.push(element[field]);
    });
    return result;
}

export function sortByField(field, data, setState, arrayOrder, paginator, e, posArrayOrder){
    e.preventDefault();
    let ordenamientoLog = arrayOrder;        
    let arrayGlobal = data;        
    if(ordenamientoLog[posArrayOrder] === true){
        arrayGlobal.sort(function(a, b){
            if(a[field] > b[field]){
                return 1;
            }
            if(a[field] < b[field]){
                return -1;
            }
            return 0;
        });
    }
    else{
        arrayGlobal.sort(function(a, b){
            if(a[field] < b[field]){
                return 1;
            }
            if(a[field] > b[field]){
                return -1;
            }
            return 0;
        });            
    }
    ordenamientoLog[posArrayOrder] = !ordenamientoLog[posArrayOrder];
    setState({
        listaProyectos: arrayGlobal,
        ordenamientoLog: ordenamientoLog
    });
    paginator();    
}