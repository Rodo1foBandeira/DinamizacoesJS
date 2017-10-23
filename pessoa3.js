/**
 * Created by Rodolfo on 22/10/2017.
 */
/**
 * Created by Rodolfo on 22/10/2017.
 */
var pessoas = new Dataset([]);
pessoas.name = 'pessoas';

pessoas.criar = function () {
    var idx = this.incluir({Nome: '', SobreNome:''});
    var idElm = this.name + idx;
    var div = $('<div>', {
        id: idElm,
        class: 'form-group',
    });

    var nome = $('<input>', {
        onchange: this.name + ".alterar("+idx+', "Nome", this.value)'
    });

    var sobreNome = $('<input>', {
        onchange: this.name + ".alterar("+idx+', "SobreNome", this.value)'
    });

    var btnExcluir = $('<button>', {
        class: 'btn btn-waring btn-sm',
        onclick: this.name + ".remover("+idx+', $(this).parent())',
        html: 'Excluir'
    });

    $(div).append('<label>Nome: </label>').append(nome).append('<label>Sobre Nome: </label>').append(sobreNome).append(btnExcluir);
    $(div).children().css('margin-left','10pt');
    $('#' + this.name).append(div);
}

pessoas.remover = function(idx, element){
    $(element).remove();
    this.excluir(idx);
}