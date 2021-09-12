import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Bia',
      sobrenome: 'Bundrisch',
      email: 'bia.bundrisch@gmail.com',
      idade: 31,
      peso: 80,
      altura: 1.80,
    });
    res.json({
      novoAluno,
    });
  }
}

export default new HomeController();
