export interface Tema {
  nome: string;
  bg: string;
  cor: string;
}

export interface Dia {
  ref: string;
  texto: string;
  reflexao: string;
  tarefa: string;
  tema: number;
  exame: string;
  dinamica: string;
  desafio: string;
}

export const TEMAS: Tema[] = [
  { nome: "Fé", bg: "#1a2e48", cor: "#60a5fa" },
  { nome: "Gratidão", bg: "#1a3020", cor: "#4ade80" },
  { nome: "Esperança", bg: "#2a1a3a", cor: "#c084fc" },
  { nome: "Amor", bg: "#3a1a2e", cor: "#f472b6" },
  { nome: "Oração", bg: "#1a2e2e", cor: "#2dd4bf" },
  { nome: "Perdão", bg: "#3a2a1a", cor: "#fb923c" },
  { nome: "Paz", bg: "#2a2010", cor: "#f5c842" },
  { nome: "Propósito", bg: "#1e2a10", cor: "#a3e635" },
  { nome: "Palavra", bg: "#10202e", cor: "#38bdf8" },
  { nome: "Presença", bg: "#2e1020", cor: "#e879f9" },
];

const INITIAL_DIAS: Dia[] = [
  // 1–10: FÉ
  {
    ref: "Salmos 23:1",
    texto: "O Senhor é o meu pastor, nada me faltará.",
    reflexao: "Deus cuida de cada detalhe da sua vida com o mesmo carinho de um pastor que conhece cada ovelha pelo nome. Hoje, confie que Ele supre tudo o que você precisa.",
    tarefa: "Escreva 3 coisas pelas quais você é grato hoje e ore agradecendo por cada uma delas.",
    tema: 0,
    exame: "Em qual área da sua vida você tem tentado caminhar no escuro, sem consultar a Deus?",
    dinamica: "Acenda uma vela em um quarto escuro. Medite por 5 minutos sobre como uma pequena luz muda tudo.",
    desafio: "Envie um versículo de encorajamento para alguém que está passando por um momento de incerteza hoje."
  },
  {
    ref: "Hebreus 11:1",
    texto: "Ora, a fé é a certeza de coisas que se esperam, a convicção de coisas que não se veem.",
    reflexao: "A fé não é ingenuidade — é a coragem de confiar no que ainda não se vê, baseada em quem Deus demonstrou ser. Ela move montanhas não pela força da crença, mas pela fidelidade dEle.",
    tarefa: "Escreva uma promessa bíblica que ainda aguarda realização em sua vida. Cole-a em lugar visível.",
    tema: 0,
    exame: "Existe algum medo que tem sido maior que sua fé ultimamente? O que impede sua entrega total?",
    dinamica: "Feche os olhos e imagine uma montanha. Visualize-a sendo movida pela mão de Deus enquanto você ora.",
    desafio: "Compartilhe um testemunho de fé com um amigo próximo hoje."
  },
  {
    ref: "Marcos 11:22",
    texto: "Tende fé em Deus.",
    reflexao: "Quatro palavras simples, mas que contêm um universo de significado. Ter fé em Deus não é uma tarefa — é uma atitude de cada manhã, de cada decisão, de cada medo enfrentado.",
    tarefa: "Antes de sair de casa hoje, declare em voz alta: 'Eu confio em Deus com a minha vida hoje.'",
    tema: 0,
    exame: "Você tem confiado em suas próprias forças ou na soberania de Deus nas pequenas decisões?",
    dinamica: "Escreva 'Eu confio em Ti' em um papel e coloque-o dentro da sua carteira ou bolsa.",
    desafio: "Ore por alguém que você sabe que está enfrentando uma crise de fé."
  },
  {
    ref: "Mateus 17:20",
    texto: "Se tiverdes fé como um grão de mostarda, direis a este monte: Passa daqui para acolá, e ele passará.",
    reflexao: "A fé não é medida pelo tamanho, mas pela direção — quando apontada para o Deus infinito, até a menor centelha de fé move o impossível.",
    tarefa: "Identifique um 'monte' em sua vida agora. Ore with fé sobre ele, pedindo a Deus que mova ou que te dê força para contorná-lo.",
    tema: 0,
    exame: "Qual é o 'grão de mostarda' que você pode plantar hoje em uma situação difícil?",
    dinamica: "Segure um pequeno objeto (como uma semente ou pedra) e medite sobre como Deus usa o pequeno para o grande.",
    desafio: "Diga a alguém hoje: 'Deus é capaz de resolver o impossível na sua vida'."
  },
  {
    ref: "Romanos 10:17",
    texto: "A fé vem pelo ouvir, e o ouvir pela palavra de Deus.",
    reflexao: "Alimentar a fé é como alimentar o corpo: exige regularidade e boas fontes. A Palavra de Deus é o nutriente que mantém a fé viva e crescente.",
    tarefa: "Leia um capítulo dos Salmos hoje. Releia o versículo que mais tocou seu coração.",
    tema: 0,
    exame: "Quanto tempo você tem dedicado a ouvir a voz de Deus em comparação às vozes do mundo?",
    dinamica: "Ouça um áudio da Bíblia ou um louvor focado na Palavra enquanto realiza uma tarefa doméstica.",
    desafio: "Leia um versículo em voz alta para alguém da sua família hoje."
  },
  {
    ref: "Tiago 2:17",
    texto: "Assim também a fé, se não tiver obras, é morta em si mesma.",
    reflexao: "A fé verdadeira não é apenas crença intelectual — ela transforma ações. Um coração que confia em Deus inevitavelmente age de acordo com esse amor.",
    tarefa: "Faça hoje uma ação concreta motivada pela sua fé: visite alguém, ajude um vizinho, doe algo.",
    tema: 0,
    exame: "Suas ações de hoje refletem a fé que você diz ter?",
    dinamica: "Organize algo que estava bagunçado como um ato de ordem e serviço ao Senhor.",
    desafio: "Ajude alguém anonimamente hoje, sem esperar reconhecimento."
  },
  {
    ref: "Gálatas 2:20",
    texto: "Já estou crucificado com Cristo; e vivo, não mais eu, mas Cristo vive em mim.",
    reflexao: "A vida cristã não é uma reforma do eu antigo — é um novo nascimento. Cristo não vem melhorar quem você é; Ele vem viver em você.",
    tarefa: "Passe 5 minutos em oração pedindo que Cristo viva através de você hoje em suas interações.",
    tema: 0,
    exame: "Quem tem sentado no trono do seu coração hoje: você ou Cristo?",
    dinamica: "Olhe-se no espelho e diga: 'Não sou eu quem vive, mas Cristo vive em mim'.",
    desafio: "Responda a uma provocação ou estresse com a mansidão de Cristo hoje."
  },
  {
    ref: "João 20:29",
    texto: "Bem-aventurados os que não viram e creram.",
    reflexao: "Crer sem ver é difícil. Mas é exatamente esse tipo de fé que Jesus elogiou. Você não precisa de todas as respostas para confiar em Deus.",
    tarefa: "Escreva uma dúvida que você tem sobre Deus ou a vida. Em seguida, entregue ela em oração: 'Senhor, não entendo, mas confio.'",
    tema: 0,
    exame: "Você exige sinais de Deus para obedecer ou obedece por quem Ele é?",
    dinamica: "Caminhe por um cômodo da casa de olhos fechados (com cuidado), confiando no seu conhecimento do caminho, como símbolo de fé.",
    desafio: "Encoraje alguém que está esperando por uma resposta de Deus."
  },
  {
    ref: "1 Pedro 1:7",
    texto: "Para que a prova da vossa fé, muito mais preciosa do que o ouro que perece, seja achada em louvor, glória e honra na revelação de Jesus Cristo.",
    reflexao: "As tribulações não destroem a fé genuína — elas a refinam. Cada dificuldade enfrentada com confiança em Deus é uma prova que produz algo eterno.",
    tarefa: "Pense em uma dificuldade atual. Como ela pode estar refinando sua fé? Escreva uma reflexão curta.",
    tema: 0,
    exame: "Como você tem reagido ao 'fogo' das provações? Com murmuração ou com adoração?",
    dinamica: "Lave as mãos com água morna, meditando sobre a purificação e o refinamento da alma.",
    desafio: "Agradeça a Deus por uma lição aprendida em meio a uma dor passada."
  },
  {
    ref: "Efésios 6:16",
    texto: "Além de tudo, tomando o escudo da fé, com o qual podereis apagar todos os dardos inflamados do maligno.",
    reflexao: "A fé é sua armadura diária. Cada tentação, cada mentira do inimigo encontra uma barreira quando você permanece na verdade de Deus.",
    tarefa: "Memorize hoje um versículo sobre fé. Repita-o sempre que uma pensamento negativo vier à mente.",
    tema: 0,
    exame: "Quais 'dardos' (mentiras) o inimigo tem lançado contra sua mente hoje?",
    dinamica: "Faça o gesto simbólico de vestir uma armadura antes de sair de casa ou começar o trabalho.",
    desafio: "Interceda por um irmão que está sob forte ataque espiritual ou emocional."
  },
  // 11–20: GRATIDÃO
  {
    ref: "1 Tessalonicenses 5:18",
    texto: "Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.",
    reflexao: "'Em tudo' não significa por tudo — mas em tudo. Mesmo nas circunstâncias difíceis, é possível encontrar Deus presente e agradecer por Sua fidelidade.",
    tarefa: "Faça uma lista de 10 bênçãos que você costuma ignorar por considerá-las pequenas demais.",
    tema: 1,
    exame: "Sua primeira reação aos imprevistos é a reclamação ou a busca por um motivo de gratidão?",
    dinamica: "Sorria para 3 pessoas desconhecidas hoje como um transbordar de um coração grato.",
    desafio: "Poste ou envie uma mensagem de gratidão pública a Deus hoje."
  },
  {
    ref: "Salmos 100:4",
    texto: "Entrai pelas suas portas com ações de graças, e pelos seus átrios com louvor.",
    reflexao: "A gratidão é a linguagem da alma que reconhece sua dependência de Deus. Entrar na presença dEle com louvor transforma o coração antes mesmo de qualquer oração.",
    tarefa: "Comece sua oração de amanhã com 5 minutos só de agradecimento — sem pedir nada.",
    tema: 1,
    exame: "Como está o 'tom' das suas conversas com Deus? Exigente ou agradecido?",
    dinamica: "Cante um hino ou louvor de gratidão enquanto toma banho ou se arruma.",
    desafio: "Agradeça a alguém por um serviço simples que ela prestou (garçom, caixa, gari)."
  },
  {
    ref: "Filipenses 4:6",
    texto: "Em tudo seja conhecida diante de Deus a vossa petição, pela oração e súplica, com ação de graças.",
    reflexao: "A ação de graças não é o final da oração — é o começo. Ela posiciona o coração em confiança antes mesmo de apresentar os pedidos.",
    tarefa: "Antes de qualquer pedido hoje em oração, liste o que Deus já respondeu na sua vida.",
    tema: 1,
    exame: "Você tem apresentado seus pedidos com a certeza de que Deus já é bom, ou com desespero?",
    dinamica: "Escreva 3 pedidos em um papel e, ao lado de cada um, escreva um motivo para agradecer antecipadamente.",
    desafio: "Encoraje alguém ansioso a listar motivos de gratidão."
  },
  {
    ref: "Colossenses 3:15",
    texto: "E a paz de Cristo governe em vossos corações; e sede agradecidos.",
    reflexao: "Gratidão e paz caminham juntas. Um coração agradecido raramente é ansioso — porque reconhece que o mesmo Deus que supriu ontem supre hoje.",
    tarefa: "Toda vez que sentir ansiedade hoje, pause e nomeie 3 coisas pelas quais é grato neste momento.",
    tema: 1,
    exame: "A falta de gratidão tem roubado a paz do seu coração?",
    dinamica: "Respire fundo 3 vezes, agradecendo a Deus pelo fôlego de vida em cada inspiração.",
    desafio: "Elogie sinceramente alguém da sua casa ou trabalho hoje."
  },
  {
    ref: "Lucas 17:15-16",
    texto: "Um deles, vendo que estava curado, voltou, glorificando a Deus em alta voz. E prostrou-se com o rosto em terra aos seus pés, dando-lhe graças.",
    reflexao: "Dos dez leprosos curados, apenas um voltou para agradecer. Seja o que volta — o que não esquece de onde veio e quem o ajudou.",
    tarefa: "Ligue ou mande mensagem a alguém que fez diferença na sua vida. Agradeça com palavras sinceras.",
    tema: 1,
    exame: "Você tem se esquecido de voltar para agradecer a Deus pelas 'curas' e livramentos diários?",
    dinamica: "Ajoelhe-se por um momento apenas para dizer 'Obrigado, Senhor' pelo dia de hoje.",
    desafio: "Escreva uma nota de agradecimento e deixe em um lugar inesperado para alguém ler."
  },
  {
    ref: "Salmos 107:1",
    texto: "Louvai ao Senhor, porque ele é bom, porque a sua benignidade dura para sempre.",
    reflexao: "A bondade de Deus não é circunstancial — ela 'dura para sempre'. Isso significa que mesmo quando as coisas estão difíceis, Sua bondade permanece ativa.",
    tarefa: "Leia o Salmo 107 completo hoje e marque os versículos que mais tocaram seu coração.",
    tema: 1,
    exame: "Você consegue enxergar a bondade de Deus mesmo nos dias 'cinzentos'?",
    dinamica: "Observe a natureza por 5 minutos (uma planta, o céu) e agradeça pela beleza da criação.",
    desafio: "Diga a alguém hoje: 'Deus tem sido muito bom para mim'."
  },
  {
    ref: "2 Coríntios 9:15",
    texto: "Graças a Deus pelo seu dom inefável.",
    reflexao: "Há presentes que palavras não conseguem descrever. O maior deles é Jesus — a salvação, a vida nova, o acesso a Deus. Deixe este dom renovar sua gratidão hoje.",
    tarefa: "Escreva uma carta de gratidão a Deus. Inclua pelo menos 5 bênçãos específicas da sua vida.",
    tema: 1,
    exame: "O sacrifício de Jesus ainda gera gratidão profunda em você ou tornou-se algo comum?",
    dinamica: "Desenhe uma cruz simples e escreva 'Obrigado' ao redor dela.",
    desafio: "Explique a alguém hoje por que Jesus é o seu maior presente."
  },
  {
    ref: "Salmos 136:1",
    texto: "Louvai ao Senhor, porque ele é bom, porque a sua benignidade dura para sempre.",
    reflexao: "A repetição nesse salmo — 'porque a sua benignidade dura para sempre' — em 26 versículos seguidos não é monotonia. É convicção. É o coração que se lembra e afirma.",
    tarefa: "Repita hoje a frase 'A bondade de Deus dura para sempre' sempre que passar por algo bom ou ruim.",
    tema: 1,
    exame: "Qual área da sua vida mais precisa da afirmação de que a misericórdia de Deus dura para sempre?",
    dinamica: "Crie seu próprio 'Salmo 136' listando fatos da sua vida seguidos da frase 'porque a sua misericórdia dura para sempre'.",
    desafio: "Lembre alguém que está sofrendo que a misericórdia de Deus não acabou."
  },
  {
    ref: "Apocalipse 4:11",
    texto: "Digno és tu, Senhor e Deus nosso, de receber a glória, e a honra, e o poder.",
    reflexao: "A gratidão mais profunda não é pelo que Deus faz — é por quem Ele é. Louvar Sua glória é reconhecer que Ele merece adoração independentemente das circunstâncias.",
    tarefa: "Dedique 10 minutos para ouvir uma música de adoração e deixe o louvor fluir.",
    tema: 1,
    exame: "Sua adoração depende das bênçãos recebidas ou da dignidade de Deus?",
    dinamica: "Levante as mãos por um minuto em silêncio, reconhecendo a soberania de Deus sobre sua vida.",
    desafio: "Convide alguém para ouvir um louvor com você hoje."
  },
  {
    ref: "Salmos 34:1",
    texto: "Bendirei ao Senhor em todo o tempo; o seu louvor estará sempre nos meus lábios.",
    reflexao: "'Em todo o tempo' inclui as manhãs difíceis, os dias sem resposta, as noites longas. Decidir louvar é um ato de fé que transforma nossa perspectiva.",
    tarefa: "Ao acordar amanhã, antes de checar o celular, diga em voz alta: 'Senhor, eu te louvo hoje.'",
    tema: 1,
    exame: "O que tem saído dos seus lábios ultimamente: louvor ou murmuração?",
    dinamica: "Coloque um lembrete no celular para 'Louvar a Deus' em um horário aleatório do dia.",
    desafio: "Não reclame de nada durante as próximas 3 horas. Se reclamar, recomece."
  },
  // 21–30: ESPERANÇA
  {
    ref: "Jeremias 29:11",
    texto: "Porque eu sei os planos que tenho para vós, diz o Senhor; planos de paz e não de mal, para vos dar um futuro e uma esperança.",
    reflexao: "Essas palavras foram escritas para pessoas em exílio — longe de casa, confusas e com medo. E é exatamente nesses momentos que Deus afirma: Eu tenho um plano. Confie.",
    tarefa: "Escreva um medo ou incerteza que você está carregando. Em oração, entregue a Deus e confie no plano Dele.",
    tema: 2,
    exame: "Você tem tentado controlar o futuro ou descansa nos planos de Deus?",
    dinamica: "Desenhe uma estrada e coloque Deus no final dela, simbolizando o destino seguro.",
    desafio: "Diga a alguém que está desempregado ou em crise: 'Deus tem planos de paz para você'."
  },
  {
    ref: "Romanos 15:13",
    texto: "Ora, o Deus de esperança vos encha de todo o gozo e paz no crer, para que abundeis em esperança pelo poder do Espírito Santo.",
    reflexao: "Deus é chamado aqui de 'Deus de esperança'. Esperança não é ingenuidade — é o resultado de conhecer o caráter de Deus e confiar em Seu poder.",
    tarefa: "Ore pedindo que o Espírito Santo encha seu coração de esperança nesta semana.",
    tema: 2,
    exame: "Sua esperança está baseada em probabilidades humanas ou no poder do Espírito Santo?",
    dinamica: "Encha um copo com água até transbordar, meditando sobre como Deus quer transbordar esperança em você.",
    desafio: "Seja a pessoa que traz uma perspectiva positiva em uma conversa negativa hoje."
  },
  {
    ref: "Isaías 40:31",
    texto: "Mas os que esperam no Senhor renovam as suas forças, sobem com asas como águias.",
    reflexao: "Esperar em Deus não é passividade — é o ato mais corajoso de fé. Enquanto esperamos, Deus trabalha de formas que não conseguimos ver.",
    tarefa: "Passe 10 minutos em silêncio, sem celular, apenas descansando na presença de Deus.",
    tema: 2,
    exame: "Você está cansado por tentar carregar o mundo nas costas? O que significa 'esperar no Senhor' para você hoje?",
    dinamica: "Abra os braços e respire fundo, imaginando-se ganhando novas forças como uma águia.",
    desafio: "Ajude alguém que está visivelmente cansado ou sobrecarregado hoje."
  },
  {
    ref: "Salmos 42:11",
    texto: "Por que te abates, ó minha alma, e por que te perturbas dentro em mim? Espera em Deus, pois ainda o louvarei.",
    reflexao: "O salmista fala com a própria alma — um ato de autoliderança espiritual. Você pode escolher direcionar seus pensamentos para Deus mesmo quando os sentimentos apontam outra direção.",
    tarefa: "Se estiver com pensamentos negativos hoje, fale consigo mesmo: 'Alma, espera em Deus.'",
    tema: 2,
    exame: "Quais diálogos internos têm roubado sua esperança? Como você pode pregar para sua própria alma hoje?",
    dinamica: "Escreva uma carta para você mesmo (sua alma) lembrando dos motivos para esperar em Deus.",
    desafio: "Compartilhe este versículo com alguém que parece triste hoje."
  },
  {
    ref: "Lamentações 3:22-23",
    texto: "As misericórdias do Senhor não têm fim; as suas compaixões não se esgotam. Renovam-se cada manhã.",
    reflexao: "Escrito em meio à maior dor da história de Israel, este versículo é a esperança mais improvável — e mais real. Cada manhã é uma nova oportunidade de experimentar a graça de Deus.",
    tarefa: "Amanhã, ao acordar, leia este versículo antes de qualquer coisa. Deixe-o definir o tom do seu dia.",
    tema: 2,
    exame: "Você tem se prendido aos erros de ontem ou aceitado a misericórdia nova de hoje?",
    dinamica: "Lave o rosto com água fria ao acordar, simbolizando o frescor das novas misericórdias.",
    desafio: "Perdoe alguém hoje, oferecendo a ela uma 'nova manhã' no relacionamento."
  },
  {
    ref: "João 16:33",
    texto: "No mundo tereis aflições; mas confiai, eu venci o mundo.",
    reflexao: "Jesus não prometeu ausência de dificuldades — prometeu Sua presença em meio a elas. A vitória dEle não elimina o sofrimento, mas o transforma em algo com sentido.",
    tarefa: "Escreva a maior dificuldade de hoje. Ao lado, escreva: 'Jesus venceu isso. Eu não estou sozinho.'",
    tema: 2,
    exame: "As aflições do mundo têm gritado mais alto que a vitória de Cristo em sua vida?",
    dinamica: "Aperte as mãos com força e depois relaxe, lembrando que a vitória final já foi conquistada.",
    desafio: "Encoraje alguém que está passando por uma luta difícil agora."
  },
  {
    ref: "Romanos 8:24-25",
    texto: "Porque em esperança fomos salvos. Ora a esperança que se vê não é esperança.",
    reflexao: "A esperança cristã não é desejo vago — é certeza do que ainda não se vê. É ancorada em promessas, não em circunstâncias.",
    tarefa: "Leia Romanos 8 completo. Identifique 3 promessas que sustentam sua esperança.",
    tema: 2,
    exame: "Sua esperança morre quando as evidências visíveis são contrárias?",
    dinamica: "Plante uma semente (ou cuide de uma planta), lembrando que o crescimento acontece primeiro onde não vemos.",
    desafio: "Fale sobre a vida eterna com alguém hoje."
  },
  {
    ref: "Zacarias 9:12",
    texto: "Voltai à fortaleza, ó prisioneiros da esperança.",
    reflexao: "Há momentos em que somos prisioneiros — mas prisioneiros da esperança. A esperança nos mantém cativos a Deus quando tudo nos empurra para a descrença.",
    tarefa: "Escreva 3 promessas de Deus em que você vai se agarrar esta semana.",
    tema: 2,
    exame: "Onde você tem buscado refúgio (fortaleza) nos dias de crise?",
    dinamica: "Construa uma pequena 'fortaleza' com objetos e coloque um símbolo de Deus dentro.",
    desafio: "Ajude alguém a encontrar um motivo para não desistir hoje."
  },
  {
    ref: "1 Pedro 1:3",
    texto: "Bendito o Deus e Pai de nosso Senhor Jesus Cristo que, segundo a sua grande misericórdia, nos regenerou para uma viva esperança.",
    reflexao: "A esperança cristã é viva — não é uma ideia morta, mas uma realidade que cresce e se fortalece à medida que nos aprofundamos em Deus.",
    tarefa: "Compartilhe com alguém hoje uma palavra de esperança. Uma mensagem pode mudar um dia.",
    tema: 2,
    exame: "Sua esperança parece 'morta' ou 'viva' diante dos desafios atuais?",
    dinamica: "Assista ao nascer ou pôr do sol, meditando sobre a renovação da vida em Deus.",
    desafio: "Mande uma mensagem de 'bom dia' com um versículo de esperança para 3 pessoas."
  },
  {
    ref: "Salmos 62:5",
    texto: "Descansa somente em Deus, ó minha alma, porque dele vem a minha esperança.",
    reflexao: "A esperança verdadeira só tem um lugar seguro: Deus. Não nas circunstâncias, não nas pessoas, não em nós mesmos — em Deus somente.",
    tarefa: "Identifique onde você tem buscado esperança fora de Deus. Entregue isso em oração hoje.",
    tema: 2,
    exame: "Sua alma tem estado agitada ou descansada em Deus?",
    dinamica: "Deite-se no chão por 2 minutos em silêncio total, entregando seu peso a Deus.",
    desafio: "Diga a alguém: 'Eu não sei como, mas sei que Deus está no controle'."
  }
];

export const getDias = (): Dia[] => {
  const dias: Dia[] = [...INITIAL_DIAS];
  while (dias.length < 365) {
    const idx = dias.length % INITIAL_DIAS.length;
    const original = INITIAL_DIAS[idx];
    dias.push({
      ...original,
      tema: (original.tema + Math.floor(dias.length / INITIAL_DIAS.length)) % TEMAS.length
    });
  }
  return dias;
};
