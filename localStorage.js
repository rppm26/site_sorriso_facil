function obterDadosFormulario() {
    // Obter os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var cep = document.getElementById("cep").value;
    var bairro = document.getElementById("bairro").value;
    var rua = document.getElementById("rua").value;
    var cidade = document.getElementById("cidade").value;
    var uf = document.getElementById("uf").value;
  
    // ... outros campos ...
  
    // Criar um objeto JavaScript com os dados do paciente
    return {
      nome: nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
      cep: cep,
      bairro: bairro,
      rua: rua,
      cidade: cidade,
      uf: uf,
      // ... outros campos ...
    };
  }
  
  function preencherFormulario(paciente) {
    // Preencher os campos do formulário com os dados do paciente
    document.getElementById("nome").value = paciente.nome;
    document.getElementById("cpf").value = paciente.cpf;
    document.getElementById("email").value = paciente.email;
    document.getElementById("telefone").value = paciente.telefone;
    document.getElementById("cep").value = paciente.cep;
    document.getElementById("bairro").value = paciente.bairro;
    document.getElementById("rua").value = paciente.rua;
    document.getElementById("cidade").value = paciente.cidade;
    document.getElementById("uf").value = paciente.uf;
    // ... outros campos ...
  }
  
  function salvarPaciente() {
    // Obter os dados do formulário
    var paciente = obterDadosFormulario();
  
    // Converter o objeto para uma string JSON
    var pacienteJSON = JSON.stringify(paciente);
  
    // Salvar a string JSON no Local Storage
    localStorage.setItem("paciente", pacienteJSON);
  
    // Exibir uma mensagem de sucesso
    alert("Paciente cadastrado com sucesso!");
  }
  
  function obterPaciente() {
    // Obter a string JSON do Local Storage
    var pacienteJSON = localStorage.getItem("paciente");
  
    // Verificar se existe um paciente salvo
    if (pacienteJSON) {
      // Converter a string JSON de volta para um objeto JavaScript
      var paciente = JSON.parse(pacienteJSON);
  
      // Preencher o formulário com os dados do paciente
      preencherFormulario(paciente);
    }
  }
  
  // Chamar a função obterPaciente() ao carregar a página
  window.onload = obterPaciente;
  
  // Adicionar evento de submit ao formulário
  document.getElementById("form-paciente").addEventListener("submit", function(event) {
    // Salvar os dados do paciente
    salvarPaciente();
  
    // descomentar a linha abaixo caso queira impedir o envio do formulário
    // event.preventDefault();
  });

    function limpa_formulário_cep() {
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");   
  
  }
  
  function meu_callback(conteudo) {
    if (!("erro" in conteudo))   
   {
      document.getElementById('rua').value=(conteudo.logradouro);
      document.getElementById('bairro').value=(conteudo.bairro);
      document.getElementById('cidade').value=(conteudo.localidade);
      document.getElementById('uf').value=(conteudo.uf);   
  
    } else {
      limpa_formulário_cep();
      alert("CEP não encontrado.");
    }
  }
  
  function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');
  
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
  
      if(validacep.test(cep)) {
        document.getElementById('rua').value="...";   
  
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById(   
  'uf').value="...";
  
        var script = document.createElement('script');
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
        document.body.appendChild(script);
      } else {
        limpa_formulário_cep();   
  
        alert("Formato de CEP inválido.");
      }
    } else {
      limpa_formulário_cep();   
  
    }
  }
  