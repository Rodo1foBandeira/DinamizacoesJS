/**
 * Created by Rodolfo on 22/10/2017.
 */
function Dataset(data) {
    var varAux = data;

    if (Object.prototype.toString.call(varAux) === '[object Array]') {
        // Aplica metodos
        varAux.incluir = function (object) {
            var idx = this.push(object) - 1;
            return idx;
        }

        varAux.excluir = function (idx) {
            delete this[idx];
        }

        varAux.alterar = function (idx, property, value) {
            this[idx][property] = value;
        }
    }
    Object.keys(varAux).map(function (key, idx) {
        if (varAux[key] != undefined && (Object.prototype.toString.call(varAux[key]) === '[object Object]' || Object.prototype.toString.call(varAux[key]) === '[object Array]'))
            // Recurssão para aplicar metodos
            varAux[key] = new Dataset(varAux[key])
    })
    return varAux;
}

// Importante reindexar antes de serializar. Pois dara pau no backend
function reindexar (varQlqrTipo) { // Remove recursivamente todos Undefined
    var varAux = varQlqrTipo;
    if (Object.prototype.toString.call(varAux) === '[object Array]') {
        varAux = varAux.filter(function (n) {
            return n != undefined
        })
    }
    Object.keys(varAux).map(function (key, idx) {
        if (varAux[key] != undefined && (Object.prototype.toString.call(varAux[key]) === '[object Object]' || Object.prototype.toString.call(varAux[key]) === '[object Array]'))
            varAux[key] = dados.acao.reindexar(varAux[key]);
    })
    return varAux;
}