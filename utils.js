var dados = {
	acao: {
		incluir: function (dataset, object) {
            var idx = dataset.push(object) - 1;
			return idx;
        },        

        excluir: function (dataset, idx) {
            delete dataset[idx];
        },

        alterar: function (dataset, idx, property, value) {
            dataset[idx][property] = value;
        },

		// Importante: reindexar antes de serializar. Pois dara pau no backend
        reindexar: function (varQlqrTipo) { // Remove recursivamente todos Undefined
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
        },
	}
}