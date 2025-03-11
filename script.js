// Definindo a classe base Funcionario
class Funcionario {
  #salario; // Dado encapsulado (privado)

  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.#salario = salario; // Protegendo o salário
  }

  // Método para mostrar a fala (polimorfismo)
  falar() {
    return `${this.nome} - ${this.cargo}, diz: "Estou aqui para ajudar!"`;
  }

  // Getter para acessar o salário de maneira controlada
  getSalario() {
    return this.#salario;
  }

  // Setter para modificar o salário (apenas se necessário)
  setSalario(novoSalario) {
    this.#salario = novoSalario;
  }
}

// Classe Medico - Herança de Funcionario
class Medico extends Funcionario {
  constructor(nome, salario) {
    super(nome, 'Médico(a)', salario);
  }

  // Polimorfismo - Sobrescrevendo o método falar
  falar() {
    return `${this.nome} - Médico(a), diz: "Vou cuidar de você agora!"`;
  }
}

// Classe Enfermeira - Herança de Funcionario
class Enfermeira extends Funcionario {
  constructor(nome, salario) {
    super(nome, 'Enfermeira', salario);
  }

  // Polimorfismo - Sobrescrevendo o método falar
  falar() {
    return `${this.nome} - Enfermeira, diz: "Preciso medir seus sinais vitais."`;
  }
}

// Classe Recepcionista - Herança de Funcionario
class Recepcionista extends Funcionario {
  constructor(nome, salario) {
    super(nome, 'Recepcionista', salario);
  }

  // Polimorfismo - Sobrescrevendo o método falar
  falar() {
    return `${this.nome} - Recepcionista, diz: "Bem-vindo ao hospital, como posso ajudar?"`;
  }
}

// Classe Administrador - Herança de Funcionario
class Administrador extends Funcionario {
  constructor(nome, salario) {
    super(nome, 'Administrador(a)', salario);
  }

  // Polimorfismo - Sobrescrevendo o método falar
  falar() {
    return `${this.nome} - Administrador(a), diz: "Estou aqui para garantir que tudo funcione bem."`;
  }
}

// Criando os objetos para os funcionários do hospital com os novos nomes
const funcionarios = [
  new Medico('Dra. Laura', 12000),
  new Enfermeira('Jaiza', 4000),
  new Recepcionista('Angel', 3000),
  new Administrador('Gabriel', 8000),
  new Medico('Dr. Valdemar', 13000),
  new Enfermeira('Mirelle', 3500),
  new Recepcionista('Tereza', 3200),
];

  // Exibir falas dos funcionários
  funcionarios.forEach(funcionario => {
    const item = document.createElement('div');
    item.classList.add('resultado-item');
    item.innerHTML = `
      <h3>${funcionario.nome} - ${funcionario.cargo}</h3>
      <p>${funcionario.falar()}</p>
    `;
    resultadosDiv.appendChild(item);
  });

// Carregar as falas ao carregar a página
window.onload = exibirFalas;
