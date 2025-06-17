const quizzes = {
  mente: [
    { pergunta: "O que é a resiliência emocional?", respostas: ["Capacidade de se recuperar diante de desafios", "Evitar conflitos a todo custo", "Ignorar os sentimentos", "Controlar os outros"], correta: 0 },
    { pergunta: "Qual neurotransmissor está ligado à sensação de prazer?", respostas: ["Serotonina", "Dopamina", "GABA", "Acetilcolina"], correta: 1 },
    { pergunta: "O que é mindfulness?", respostas: ["Meditação focada no presente", "Previsão do futuro", "Revisão do passado", "Controle da respiração apenas"], correta: 0 },
    { pergunta: "Qual é o principal efeito do estresse crônico?", respostas: ["Aumento da criatividade", "Danos à saúde física e mental", "Melhora da concentração", "Maior resistência física"], correta: 1 },
    { pergunta: "O que é a Teoria do Apego?", respostas: ["Estudo sobre relações afetivas na infância", "Teoria econômica", "Estudo da gravidade", "Uma prática de meditação"], correta: 0 },
    { pergunta: "Qual técnica ajuda a melhorar a auto percepção?", respostas: ["Terapia cognitivo-comportamental", "Evitar emoções", "Reprimir sentimentos", "Negligenciar sonhos"], correta: 0 }
  ],
  
  filosofia: [
    { pergunta: "Quem é considerado o pai da filosofia ocidental?", respostas: ["Sócrates", "Platão", "Aristóteles", "Descartes"], correta: 0 },
    { pergunta: "O que significa 'Cogito, ergo sum'?", respostas: ["Penso, logo existo", "Sei, logo existo", "Amo, logo existo", "Escrevo, logo existo"], correta: 0 },
    { pergunta: "Qual filósofo defendeu a ideia do contrato social?", respostas: ["Maquiavel", "Hobbes", "Kant", "Nietzsche"], correta: 1 },
    { pergunta: "O que é niilismo?", respostas: ["Crença na ausência de valores e sentido", "Busca pelo sentido da vida", "Filosofia da ciência", "Estudo das emoções"], correta: 0 },
    { pergunta: "Qual filósofo é famoso pela ideia do 'Super-Homem'?", respostas: ["Nietzsche", "Freud", "Locke", "Kierkegaard"], correta: 0 },
    { pergunta: "O que é a ética?", respostas: ["Estudo dos costumes e moral", "Estudo da física", "Ramo da matemática", "Ciência da comunicação"], correta: 0 }
  ],
  
  espiritualidade: [
    { pergunta: "Qual prática é comum para a meditação?", respostas: ["Respiração consciente", "Comer rápido", "Assistir TV", "Estar distraído"], correta: 0 },
    { pergunta: "O que é chakras?", respostas: ["Centros energéticos do corpo", "Doenças físicas", "Tipo de alimento", "Instrumento musical"], correta: 0 },
    { pergunta: "Qual filosofia fala sobre o desapego?", respostas: ["Budismo", "Materialismo", "Capitalismo", "Existencialismo"], correta: 0 },
    { pergunta: "O que significa aura?", respostas: ["Campo energético ao redor do corpo", "Voz humana", "Luz solar", "Som da natureza"], correta: 0 },
    { pergunta: "Qual é o objetivo da meditação transcendental?", respostas: ["Alcançar paz interior profunda", "Ganhar dinheiro", "Ficar mais rápido", "Dormir mais"], correta: 0 },
    { pergunta: "O que é reencarnação?", respostas: ["Retorno da alma em outro corpo", "Sono profundo", "Doença espiritual", "Tipo de oração"], correta: 0 }
  ],

  autoconhecimento: [
    { pergunta: "Qual é a base do autoconhecimento?", respostas: ["Reconhecer seus pensamentos e emoções", "Ignorar seus sentimentos", "Controlar outras pessoas", "Fugir dos problemas"], correta: 0 },
    { pergunta: "Qual técnica ajuda a refletir sobre si mesmo?", respostas: ["Journaling (escrita reflexiva)", "Assistir séries", "Ficar nas redes sociais", "Dormir muito"], correta: 0 },
    { pergunta: "O que é inteligência emocional?", respostas: ["Gerenciar emoções com consciência", "Reprimir sentimentos", "Explodir de raiva", "Ignorar emoções"], correta: 0 },
    { pergunta: "Por que é importante entender seus valores?", respostas: ["Para tomar decisões alinhadas com você", "Para copiar os outros", "Para agradar só os outros", "Para se confundir"], correta: 0 },
    { pergunta: "O que significa autoaceitação?", respostas: ["Aceitar suas qualidades e limitações", "Ignorar seus defeitos", "Se comparar sempre", "Ser arrogante"], correta: 0 },
    { pergunta: "Qual prática fortalece o autoconhecimento?", respostas: ["Meditação e reflexão diária", "Procrastinar", "Fugir dos problemas", "Consumir muito conteúdo"], correta: 0 }
  ],

  criatividade: [
    { pergunta: "O que é pensamento lateral?", respostas: ["Resolver problemas de forma criativa e diferente", "Fazer sempre igual", "Copiar soluções prontas", "Ignorar problemas"], correta: 0 },
    { pergunta: "Qual atividade estimula a criatividade?", respostas: ["Desenhar ou escrever livremente", "Assistir TV o dia todo", "Dormir demais", "Ficar no celular"], correta: 0 },
    { pergunta: "Por que é importante errar no processo criativo?", respostas: ["Pois erros geram aprendizado e inovação", "Porque é ruim", "Para desistir logo", "Para copiar os outros"], correta: 0 },
    { pergunta: "O que é brainstorming?", respostas: ["Gerar várias ideias sem julgamentos", "Planejar tudo detalhadamente", "Ignorar opiniões", "Copiar ideias prontas"], correta: 0 },
    { pergunta: "Como sair da zona de conforto para ser criativo?", respostas: ["Experimentar coisas novas", "Ficar sempre no mesmo", "Evitar desafios", "Rejeitar opiniões"], correta: 0 },
    { pergunta: "Qual é o papel da curiosidade na criatividade?", respostas: ["Estimula a busca por soluções novas", "É desnecessária", "Atrasa o processo", "Inibe ideias"], correta: 0 }
  ],

  motivacao: [
    { pergunta: "O que é motivação intrínseca?", respostas: ["Motivação que vem de dentro", "Motivação por recompensas externas", "Preguiça", "Falta de foco"], correta: 0 },
    { pergunta: "Qual técnica ajuda a manter o foco?", respostas: ["Dividir metas em passos pequenos", "Deixar tudo para última hora", "Ficar distraído", "Não planejar"], correta: 0 },
    { pergunta: "Por que celebrar pequenas conquistas?", respostas: ["Para aumentar a motivação e autoestima", "Para parar tudo", "Para procrastinar", "Para se comparar"], correta: 0 },
    { pergunta: "O que é procrastinação?", respostas: ["Adiar tarefas importantes", "Fazer logo", "Conseguir resultados", "Motivar pessoas"], correta: 0 },
    { pergunta: "Como a visualização ajuda na motivação?", respostas: ["Imagina o sucesso para aumentar a vontade", "Ignorar objetivos", "Ficar sonhando sem agir", "Desistir cedo"], correta: 0 },
    { pergunta: "O que é disciplina?", respostas: ["Fazer o que precisa mesmo sem vontade", "Só fazer quando quiser", "Desistir fácil", "Evitar esforços"], correta: 0 }
  ],

  historia: [
    { pergunta: "O que é história interior?", respostas: ["Narrativa sobre o crescimento pessoal", "Fatos políticos", "Datas históricas", "Eventos militares"], correta: 0 },
    { pergunta: "Quem foi Carl Jung?", respostas: ["Psicólogo que estudou o inconsciente", "General da guerra", "Filósofo grego", "Poeta"], correta: 0 },
    { pergunta: "Qual o papel dos arquétipos?", respostas: ["Modelos universais de comportamento", "Nomes de reis", "Tipos de guerra", "Livros antigos"], correta: 0 },
    { pergunta: "O que é sombra na psicologia?", respostas: ["Partes reprimidas da personalidade", "Luz natural", "Fatos históricos", "Eventos sociais"], correta: 0 },
    { pergunta: "Por que refletir sobre o passado interior?", respostas: ["Para crescer e se transformar", "Para se prender no passado", "Para esquecer", "Para julgar outros"], correta: 0 },
    { pergunta: "Qual a importância do autoconhecimento na história pessoal?", respostas: ["É chave para evolução e escolhas conscientes", "É irrelevante", "Só serve para decorar", "Só serve para conversar"], correta: 0 }
  ],

  linguagem: [
    { pergunta: "Qual é a função da comunicação eficaz?", respostas: ["Transmitir ideias claramente", "Confundir os outros", "Falar rápido", "Não ouvir"], correta: 0 },
    { pergunta: "O que é linguagem corporal?", respostas: ["Comunicação não verbal do corpo", "Só palavras", "Somente fala", "Silêncio"], correta: 0 },
    { pergunta: "Por que escutar é fundamental?", respostas: ["Para entender o outro e responder melhor", "Para esperar falar", "Para ignorar", "Para discordar sempre"], correta: 0 },
    { pergunta: "O que são palavras-chave?", respostas: ["Termos importantes para o entendimento", "Palavras sem sentido", "Frases longas", "Expressões antigas"], correta: 0 },
    { pergunta: "Como evitar mal-entendidos?", respostas: ["Ser claro e perguntar dúvidas", "Falar rápido", "Ignorar perguntas", "Ficar calado"], correta: 0 },
    { pergunta: "O que é feedback construtivo?", respostas: ["Comentário que ajuda a melhorar", "Crítica destrutiva", "Ignorar erros", "Elogiar sempre"], correta: 0 }
  ]
};

let tema = new URLSearchParams(window.location.search).get("tema");
let perguntas = quizzes[tema];
let indice = 0;
let pontuacao = 0;
let tempoPorTema = 90; // 90 segundos para cada tema
let timerId;

const quizTitle = document.getElementById("quiz-title");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const nextQuizBtn = document.getElementById("next-quiz-btn");
const backBtn = document.getElementById("back-btn");

function startTimer() {
  clearInterval(timerId);
  let tempoRestante = tempoPorTema;
  updateTitleTimer(tempoRestante);
  timerId = setInterval(() => {
    tempoRestante--;
    updateTitleTimer(tempoRestante);
    if (tempoRestante <= 0) {
      clearInterval(timerId);
      alert("Tempo do tema esgotado! O quiz vai reiniciar.");
      reiniciarQuiz();
    }
  }, 1000);
}

function updateTitleTimer(time) {
  quizTitle.textContent = `Quiz Melhor do Mundo Interior - Tema: ${tema.toUpperCase()} ⏳ ${time}s`;
}

function mostrarPergunta() {
  clearInterval(timerId);
  if (!perguntas || perguntas.length === 0) {
    quizTitle.textContent = "Tema inválido ou sem perguntas!";
    return;
  }

  if (indice >= perguntas.length) {
    mostrarResultado();
    return;
  }

  startTimer();

  let perguntaAtual = perguntas[indice];
  questionEl.textContent = perguntaAtual.pergunta;
  answersEl.innerHTML = "";
  pontuacao = pontuacao; // manter pontuação

  perguntaAtual.respostas.forEach((resp, i) => {
    let btn = document.createElement("button");
    btn.textContent = resp;
    btn.classList.add("answer");
    btn.addEventListener("click", () => escolherResposta(i));
    answersEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
  scoreEl.textContent = `Pontuação: ${pontuacao} / ${perguntas.length}`;
  nextQuizBtn.style.display = "none";
  backBtn.style.display = "inline-block";
}

function escolherResposta(i) {
  let correta = perguntas[indice].correta;
  let botoes = answersEl.querySelectorAll("button");

  botoes.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correta) {
      btn.classList.add("correct");
    }
    if (idx === i && idx !== correta) {
      btn.classList.add("wrong");
    }
  });

  if (i === correta) pontuacao++;

  nextBtn.style.display = "inline-block";
  clearInterval(timerId);
}

function nextQuestion() {
  indice++;
  mostrarPergunta();
}

function mostrarResultado() {
  questionEl.textContent = "🎉 Quiz finalizado! 🎉";
  answersEl.innerHTML = "";
  scoreEl.textContent = `Sua pontuação final foi: ${pontuacao} / ${perguntas.length}`;

  nextBtn.style.display = "none";
  nextQuizBtn.style.display = "inline-block";
  backBtn.style.display = "inline-block";
}

function reiniciarQuiz() {
  indice = 0;
  pontuacao = 0;
  mostrarPergunta();
}

function proximoQuiz() {
  const temas = Object.keys(quizzes);
  let atual = temas.indexOf(tema);
  let proximo = (atual + 1) % temas.length;
  window.location.href = `quiz.html?tema=${temas[proximo]}`;
}

window.onload = () => {
  if (!tema || !quizzes[tema]) {
    alert("Tema inválido! Voltando à página inicial.");
    window.location.href = "index.html";
    return;
  }
  quizTitle.textContent = `Quiz Melhor do Mundo Interior - Tema: ${tema.toUpperCase()}`;
  mostrarPergunta();
};
