var pessoas = {
		dataset: [],
		criar: function () {
			var idx = dados.acao.incluir(this.dataset, {Nome: '', SobreNome:''});
            var idElm = 'pessoas' + idx;
            var div = $('<div>', {
                id: idElm,
                class: 'form-group',
            });
			
			var nome = $('<input>', {
                onchange: "dados.acao.alterar(pessoas.dataset,"+idx+', "Nome", this.value)'
            });

            var sobreNome = $('<input>', {
                onchange: "dados.acao.alterar(pessoas.dataset,"+idx+', "SobreNome", this.value)'
            });

            var btnExcluir = $('<button>', {
                class: 'btn btn-waring btn-sm',
                onclick: "pessoas.remover("+idx+', $(this).parent())', // $(this).parent() = FieldSet
                html: 'Excluir'
            });
			
			$(div).append('<label>Nome: </label>').append(nome).append('<label>Sobre Nome: </label>').append(sobreNome).append(btnExcluir);
            $(div).children().css('margin-left','10pt');
            $('div#pessoas').append(div);
        },
		
		remover: function(idx, element){
			$(element).remove();
			dados.acao.excluir(this.dataset, idx);
		}
	}