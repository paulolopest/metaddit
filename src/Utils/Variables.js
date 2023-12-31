export const topics = [
	'Animes',
	'Animais',
	'Arte',
	'Automóveis',
	'Aventura',
	'Biblioteca',
	'Cinema',
	'Ciência',
	'Comida',
	'Cultura',
	'Design',
	'Educação',
	'Empreendedorismo',
	'Esportes',
	'Fotografia',
	'Games',
	'Humor',
	'Internet',
	'Jardinagem',
	'Linguagem',
	'Literatura',
	'Música',
	'Natureza',
	'Notícias',
	'Poesia',
	'Política',
	'Programação',
	'Saúde',
	'Tecnologia',
	'Turismo',
	'Universo',
	'Vídeos',
	'Viagens',
	'Arquitetura',
	'Astronomia',
	'Automobilismo',
	'Beleza',
	'Culinária',
	'Dança',
	'Ecologia',
	'Economia',
	'Eletrodomésticos',
	'Escrita',
	'Esportes Radicais',
	'Estilo',
	'Eventos',
	'Ficção',
	'Fotografia',
	'Gastronomia',
	'Geek',
	'História',
	'Jogos de Tabuleiro',
	'Meditação',
	'Moda',
	'Negócios',
	'Pintura',
	'Psicologia',
	'Religião',
	'Robótica',
	'Sustentabilidade',
	'Tatuagens',
	'Teatro',
	'Urbano',
	'Veganismo',
	'Yoga',
	'Zoologia',
	'Aeroespacial',
	'Arco e Flecha',
	'Armas',
	'Astronáutica',
	'Barcos',
	'Cerveja',
	'Criatividade',
	'Drones',
	'Edição de Vídeo',
	'Esgrima',
	'Filosofia',
	'Física',
	'Gastronomia Molecular',
	'Gravuras',
	'Inovação',
	'Kart',
	'Mergulho',
	'Natação',
	'Orquídeas',
	'Parques Temáticos',
	'Pintura Digital',
	'Quiropraxia',
	'Retrogaming',
	'Sculptura',
	'Sports',
	'Telegrama',
	'Vinhos',
	'Whisky',
	'Xadrez',
	'Yoga',
	'Zumbis',
];

export const calcTime = (creationDate) => {
	const agora = new Date();
	const creationDateObj = new Date(creationDate);

	const differenceInMs = agora - creationDateObj;
	const seconds = Math.floor(differenceInMs / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);

	if (days > 0) {
		return days === 1 ? 'há 1 dia' : `há ${days} dias`;
	} else if (hours > 0) {
		return hours === 1 ? 'há 1 hora' : `há ${hours} horas`;
	} else if (minutes > 0) {
		return minutes === 1 ? 'há 1 minuto' : `há ${minutes} minutos`;
	} else {
		return 'há menos de um minuto';
	}
};

export const textLimit = (text, stringSize) => {
	if (text.length > stringSize) {
		return text.substring(0, stringSize) + '...';
	} else {
		return text;
	}
};

export const timeFilterOptions = [
	{ option: 'Hoje', value: '24h' },
	{ option: 'Esta semana', value: '7d' },
	{ option: 'Este mês', value: '1m' },
	{ option: 'Desde sempre', value: '24h' },
];
