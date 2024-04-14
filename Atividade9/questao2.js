// Definição da classe DicionarioDeAlunos
class DicionarioDeAlunos {
    // Construtor da classe DicionarioDeAlunos inicializando a propriedade alunos como um objeto vazio
    constructor() {
        this.alunos = {};
    }

    // Método para adicionar um novo aluno ao dicionário
    adicionarAluno(id, nome, nota) {
        // Adiciona uma entrada ao dicionário com o ID do aluno como chave e um objeto contendo nome e nota como valor
        this.alunos[id] = { nome, nota };
    }

    // Método para buscar um aluno por seu ID no dicionário
    buscarAlunoPorId(id) {
        // Retorna o valor correspondente à chave (ID) especificada no dicionário
        return this.alunos[id];
    }

    // Método para calcular a média das notas dos alunos no dicionário
    calcularMediaDasNotas() {
        // Obtém todas as chaves (IDs) do dicionário
        const ids = Object.keys(this.alunos);
        // Verifica se o dicionário está vazio
        if (ids.length === 0) {
            return 0; // Se estiver vazio, retorna 0
        }
        // Utiliza o método reduce para somar todas as notas dos alunos
        const total = ids.reduce((acc, id) => acc + this.alunos[id].nota, 0);
        // Retorna a média das notas, dividindo o total pelo número de alunos no dicionário
        return total / ids.length;
    }
}

// Cria uma instância da classe DicionarioDeAlunos chamada dicionarioAlunos
const dicionarioAlunos = new DicionarioDeAlunos();

// Adiciona três alunos ao dicionário com o método adicionarAluno
dicionarioAlunos.adicionarAluno(1, "João", 8);
dicionarioAlunos.adicionarAluno(2, "Maria", 7);
dicionarioAlunos.adicionarAluno(3, "Pedro", 6);

// Utiliza o método buscarAlunoPorId para encontrar um aluno específico pelo seu ID
console.log(dicionarioAlunos.buscarAlunoPorId(2).nome); // Deve imprimir "Maria"

// Utiliza o método calcularMediaDasNotas para calcular a média das notas de todos os alunos no dicionário
console.log(dicionarioAlunos.calcularMediaDasNotas());   // Deve imprimir a média das notas (7.0 neste caso)
