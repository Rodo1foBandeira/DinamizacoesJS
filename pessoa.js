var pessoas = {
		dataset: [],
		criar: function () {
			var idx = dados.acao.incluir(this.dataset, {Nome: ''})
            var idElm = 'pessoas' + idx;
            var fieldset = $('<fieldset>', {
                id: idElm,
                class: '',
            });
			
			var input = $('<input>', {
                onchange: "dados.acao.alterar(pessoas.dataset,"+idx+', "Nome", this.value)'
            });

            var btnExcluir = $('<button>', {
                class: 'btn btn-waring',
                onclick: "pessoas.remover("+idx+', $(this).parent())', // $(this).parent() = FieldSet
                html: 'Excluir'
            });
			
			$(fieldset).append(input).append(btnExcluir);
            $('div#pessoas').append(fieldset);			
        },
		
		remover: function(idx, element){
			$(element).remove();
			dados.acao.excluir(this.dataset, idx);
		}
	}