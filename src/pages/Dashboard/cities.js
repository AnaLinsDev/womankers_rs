const cities = [
  {
    name: "Todos",
  },
  {
    name: "Porto Alegre",
  },
  {
    name: "Caxias do Sul",
  },
  {
    name: "Canoas",
  },
  {
    name: "Pelotas",
  },
  {
    name: "Santa Maria",
  },
  {
    name: "Gravataí",
  },
  {
    name: "Novo Hamburgo",
  },
  {
    name: "Viamão",
  },
  {
    name: "São Leopoldo",
  },
  {
    name: "Passo Fundo",
  },
  {
    name: "Rio Grande",
  },
  {
    name: "Alvorada",
  },
  {
    name: "Cachoeirinha",
  },
  {
    name: "Santa Cruz do Sul",
  },
  {
    name: "Bento Gonçalves",
  },
  {
    name: "Bagé",
  },
  {
    name: "Uruguaiana",
  },
  {
    name: "Erechim",
  },
  {
    name: "Lajeado",
  },
  {
    name: "Guaíba",
  },
  {
    name: "Ijuí",
  },
  {
    name: "Santana do Livramento",
  },
  {
    name: "Cachoeira do Sul",
  },
  {
    name: "Santa Rosa",
  },
  {
    name: "Santo Ângelo",
  },
  {
    name: "Esteio",
  },
  {
    name: "Sapiranga",
  },
  {
    name: "Alegrete",
  },
  {
    name: "Farroupilha",
  },
  {
    name: "Venâncio Aires",
  },
  {
    name: "Vacaria",
  },
  {
    name: "Capão da Canoa",
  },
  {
    name: "Campo Bom",
  },
  {
    name: "Caràzinho",
  },
  {
    name: "Camaquã",
  },
  {
    name: "São Borja",
  },
  {
    name: "Montenegro",
  },
  {
    name: "Cruz Alta",
  },
  {
    name: "Parobé",
  },
  {
    name: "São Gabriel",
  },
  {
    name: "Taquara",
  },
  {
    name: "Tramandaí",
  },
  {
    name: "Estância Velha",
  },
  {
    name: "Canguçu",
  },
  {
    name: "Santiago",
  },
  {
    name: "Osório",
  },
  {
    name: "Canela",
  },
  {
    name: "Marau",
  },
  {
    name: "Panambi",
  },
  {
    name: "Santo Antônio",
  },
  {
    name: "São Lourenço do Sul",
  },
  {
    name: "Tôrres",
  },
  {
    name: "Gramado",
  },
  {
    name: "Itaqui",
  },
  {
    name: "Dom Pedrito",
  },
  {
    name: "Rosário do Sul",
  },
  {
    name: "Charqueadas",
  },
  {
    name: "São Luís Gonzaga",
  },
  {
    name: "Rio Pardo",
  },
  {
    name: "Garibaldi",
  },
  {
    name: "Portão",
  },
  {
    name: "Palmeira das Missões",
  },
  {
    name: "Igrejinha",
  },
  {
    name: "Teutônia",
  },
  {
    name: "Frederico Westphalen",
  },
  {
    name: "Caçapava do Sul",
  },
  {
    name: "Estrêla",
  },
  {
    name: "Santa Vitória do Palmar",
  },
  {
    name: "Flores da Cunha",
  },
  {
    name: "Dois Irmãos",
  },
  {
    name: "Carlos Barbosa",
  },
  {
    name: "Soledade",
  },
  {
    name: "Candelária",
  },
  {
    name: "Lagoa Vermelha",
  },
  {
    name: "Triunfo",
  },
  {
    name: "Jaguarão",
  },
  {
    name: "Capão do Leão",
  },
  {
    name: "Nova Prata",
  },
  {
    name: "São José do Norte",
  },
  {
    name: "Três Passos",
  },
  {
    name: "Taquari",
  },
  {
    name: "Três de Maio",
  },
  {
    name: "Tapejara",
  },
  {
    name: "São Sebastião do Caí",
  },
  {
    name: "Três Coroas",
  },
  {
    name: "Veranópolis",
  },
  {
    name: "Encruzilhada do Sul",
  },
  {
    name: "Quaraí",
  },
  {
    name: "Nova Petrópolis",
  },
  {
    name: "Ivoti",
  },
  {
    name: "Encantado",
  },
  {
    name: "Sarandi",
  },
  {
    name: "Arroio do Meio",
  },
  {
    name: "São Francisco de Paula",
  },
  {
    name: "Ibirubá",
  },
  {
    name: "Rolante",
  },
  {
    name: "São Sepé",
  },
  {
    name: "São Marcos",
  },
  {
    name: "São Jerônimo",
  },
  {
    name: "Tupanciretã",
  },
  {
    name: "Butiá",
  },
  {
    name: "Horizontina",
  },
  {
    name: "Júlio de Castilhos",
  },
  {
    name: "Não-Me-Toque",
  },
  {
    name: "São Francisco de Assis",
  },
  {
    name: "Arroio Grande",
  },
  {
    name: "Piratini",
  },
  {
    name: "Serafina Corêa",
  },
  {
    name: "Getúlio Vargas",
  },
  {
    name: "Cidreira",
  },
  {
    name: "Sananduva",
  },
  {
    name: "Agudo",
  },
  {
    name: "Giruá",
  },
  {
    name: "São Pedro do Sul",
  },
  {
    name: "Espumoso",
  },
  {
    name: "Restinga Sêca",
  },
  {
    name: "Tapes",
  },
  {
    name: "Arroio dos Ratos",
  },
  {
    name: "Tenente Portela",
  },
  {
    name: "Santo Augusto",
  },
  {
    name: "Feliz",
  },
  {
    name: "Nonoai",
  },
  {
    name: "Cêrro Largo",
  },
  {
    name: "Bom Princípio",
  },
  {
    name: "Dom Feliciano",
  },
  {
    name: "Antônio Prado",
  },
  {
    name: "Crissiumal",
  },
  {
    name: "Palmares do Sul",
  },
  {
    name: "Bom Retiro do Sul",
  },
  {
    name: "Barra do Ribeiro",
  },
  {
    name: "Mostardas",
  },
  {
    name: "Arroio do Tigre",
  },
  {
    name: "Seberi",
  },
  {
    name: "Cruzeiro do Sul",
  },
  {
    name: "Pinheiro Machado",
  },
  {
    name: "Bom Jesus",
  },
  {
    name: "Capela de Santana",
  },
  {
    name: "Cacequi",
  },
  {
    name: "Três Cachoeiras",
  },
  {
    name: "Candiota",
  },
  {
    name: "Jaguari",
  },
  {
    name: "Roca Sales",
  },
  {
    name: "Planalto",
  },
  {
    name: "Constantina",
  },
  {
    name: "Àrvorezinha",
  },
  {
    name: "Terra de Areia",
  },
  {
    name: "Pântano Grande",
  },
  {
    name: "Pôrto Xavier",
  },
  {
    name: "Ronda Alta",
  },
  {
    name: "Redentora",
  },
  {
    name: "Nova Bassano",
  },
  {
    name: "Fontoura Xavier",
  },
  {
    name: "Casca",
  },
  {
    name: "Barros Cassal",
  },
  {
    name: "Cêrro Grande",
  },
  {
    name: "Entre Ijuís",
  },
  {
    name: "Catuípe",
  },
  {
    name: "Sinimbu",
  },
  {
    name: "Ararica",
  },
];

export default cities;
