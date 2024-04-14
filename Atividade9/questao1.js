// Definição da classe Aluno
class Aluno {
    // Construtor da classe Aluno para inicializar as propriedades id, nome e nota
    constructor(id, nome, nota) {
        this.id = id;     // ID do aluno
        this.nome = nome; // Nome do aluno
        this.nota = nota; // Nota do aluno
    }
}

// Definição da classe ListaDeAlunos
class ListaDeAlunos {
    // Construtor da classe ListaDeAlunos inicializando a propriedade alunos como um array vazio
    constructor() {
        this.alunos = [];
    }

    // Método para adicionar um novo aluno à lista
    adicionarAluno(id, nome, nota) {
        const aluno = new Aluno(id, nome, nota); // Criar um novo objeto Aluno com os parâmetros passados
        this.alunos.push(aluno); // Adicionar o aluno ao final do array alunos
    }

    // Método para buscar um aluno por seu ID na lista
    buscarAlunoPorId(id) {
        // Utiliza o método find para percorrer o array alunos e encontrar o aluno com o ID especificado
        return this.alunos.find(aluno => aluno.id === id);
    }

    // Método para calcular a média das notas dos alunos na lista
    calcularMediaDasNotas() {
        // Verifica se o array alunos está vazio
        if (this.alunos.length === 0) {
            return 0; // Se estiver vazio, retorna 0
        }
        // Utiliza o método reduce para somar todas as notas dos alunos
        const total = this.alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
        // Retorna a média das notas, dividindo o total pelo número de alunos na lista
        return total / this.alunos.length;
    }
}

// Cria uma instância da classe ListaDeAlunos chamada listaAlunos
const listaAlunos = new ListaDeAlunos();

// Adiciona três alunos à lista com o método adicionarAluno
listaAlunos.adicionarAluno(1, "João", 8);
listaAlunos.adicionarAluno(2, "Maria", 7);
listaAlunos.adicionarAluno(3, "Pedro", 6);

// Utiliza o método buscarAlunoPorId para encontrar um aluno específico pelo seu ID
console.log(listaAlunos.buscarAlunoPorId(2).nome); // Deve imprimir "Maria"

// Utiliza o método calcularMediaDasNotas para calcular a média das notas de todos os alunos na lista
console.log(listaAlunos.calcularMediaDasNotas());  // Deve imprimir a média das notas (7.0 neste caso)
