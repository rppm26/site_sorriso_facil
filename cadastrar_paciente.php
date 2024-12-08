<?php

// Conexão com o banco de dados
$servername = "localhost";
$username = "root"; // Usuário padrão do XAMPP
$password = ""; // Senha padrão do XAMPP
$dbname = "sorriso_facil";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
  die("Falha na conexão: " . $conn->connect_error);

}

// Receber os dados do formulário
$nome = $_POST["nome"];
$data_nascimento = $_POST["datan"];
$cpf = $_POST["cpf"];
$niscadunico = $_POST["nis/cadunico"];
$telefone = $_POST["telefone"];
$cep = $_POST["cep"];
$bairro = $_POST["bairro"];
$rua = $_POST["rua"];
$cidade = $_POST["cidade"];
$uf = $_POST["uf"];
$email = $_POST["email"];
$senha = $_POST["senha"];

// ... (receber os outros dados)

// Inserir os dados no banco de dados
$sql = "INSERT INTO pacientes (nome, data_nascimento, cpf, niscadunico, telefone, cep, bairro, rua, cidade, uf, email, senha) 
        VALUES ('$nome', '$data_nascimento', '$cpf', '$niscadunico', '$telefone', '$cep', '$bairro', '$rua', '$cidade', '$uf', '$email', '$senha')";

if ($conn->query($sql) === TRUE) {
  echo "Paciente cadastrado com sucesso!";
} else {
  echo "Erro ao cadastrar paciente: " . $conn->error;
}

$conn->close();

?>


