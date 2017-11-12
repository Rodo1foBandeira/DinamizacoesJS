$('#modalExemplo').on('hide.bs.modal', function(e){
	$('#modalExemplo #nome').val('');
	$('#modalExemplo #sobreNome').val('');
})

var dataTable = $('#exemplo').DataTable({
	dom: "Bfrtip",
	columns: [
		{data: 'nome', title: 'Nome'},
		{data: 'sobreNome',	title: 'Sobre Nome'},
		{
			data: null,
			title: 'Ações',
			render: function(data, type, row, meta){
				return '<button class="btn btn-warning btn-xs" onclick="dataTable.editar('+meta.row+')"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>'+
					'<button class="btn btn-danger btn-xs" onclick="dataTable.confirmarExcluir('+meta.row+')"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>';
			}
		}
	],
	buttons: [
		{
			text: 'Novo',
			className:'btn btn-primary',
			action: function ( e, dt, node, config ) {
				dataTable.novo();
			}
		}
	]
});

dataTable.novo = function(){
	$('#modalExemplo #modalTitulo').html('Novo registro');
	$('#modalExemplo .btn-primary').val('Incluir').attr('onclick', 'dataTable.incluir()');
	$('#modalExemplo').modal('show');
}

dataTable.incluir = function(){
	var novoNome = $('#modalExemplo #nome').val();
	var novoSobreNome = $('#modalExemplo #sobreNome').val();
	var novoRegistro = {nome: novoNome, sobreNome: novoSobreNome}
	this.row.add(novoRegistro).draw();
	$('#modalExemplo').modal('hide');
}

dataTable.editar = function(rowId){
	var registro = this.row(rowId).data();
	$('#modalExemplo #nome').val(registro.nome);
	$('#modalExemplo #sobreNome').val(registro.sobreNome);
	$('#modalExemplo #modalTitulo').html('Editar registro');
	$('#modalExemplo .btn-primary').val('Salvar').attr('onclick', 'dataTable.salvar('+rowId+')');
	$('#modalExemplo').modal('show');
}

dataTable.salvar = function(rowId){
	var nome = $('#modalExemplo #nome').val();
	var sobreNome = $('#modalExemplo #sobreNome').val();
	var registro = {nome: nome, sobreNome: sobreNome}
	this.row(rowId).data(registro).draw();
	$('#modalExemplo').modal('hide');
}

dataTable.confirmarExcluir = function(rowId){
	$('#modalConfirmacao .btn-primary').attr('onclick', 'dataTable.excluir('+rowId+')');
	$('#modalConfirmacao').modal('show');
}

dataTable.excluir = function(rowId){
	this.row(rowId).remove().draw();
	$('#modalConfirmacao').modal('hide');
}