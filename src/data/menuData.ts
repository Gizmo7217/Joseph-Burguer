export interface MenuItem {
  id: string;
  name: string;
  category: 'hamburguesas' | 'pizzas' | 'salchipapas' | 'desgranados' | 'perros' | 'entradas' | 'bebidas';
  categoryLabel: string;
  price: number;
  oldPrice?: number;
  description: string;
  longDescription: string;
  rating: number;
  reviewsCount: number;
  prepTime: string;
  image?: string;
  isPopular?: boolean;
  isNew?: boolean;
  isChefSpecial?: boolean;
  availableSauces?: string[];
  additions?: { id: string; name: string; price: number }[];
  tag?: string;
}

export const MENU_CATEGORIES = [
  { id: 'todas', label: 'Todo el Menú' },
  { id: 'hamburguesas', label: 'Hamburguesas' },
  { id: 'pizzas', label: 'Pizzas Artesanales' },
  { id: 'salchipapas', label: 'Salchipapas' },
  { id: 'desgranados', label: 'Desgranados' },
  { id: 'perros', label: 'Perros Calientes' },
  { id: 'entradas', label: 'Entradas & Papas' },
  { id: 'bebidas', label: 'Bebidas' },
];

export const SAUCE_OPTIONS = [
  'Tártara Especial Joseph',
  'Salsa de Piña Artesanal',
  'Salsa Rosada de la Casa',
  'BBQ Ahumada',
  'Mostaza Dulce Miel',
  'Ají Dulce Costeño',
];

export const EXTRA_ADDITIONS = [
  { id: 'extra_cheese', name: 'Queso Costeño Asado / Gratinado', price: 4000 },
  { id: 'extra_bacon', name: 'Tocineta Ahumada Crujiente', price: 4500 },
  { id: 'extra_patty', name: 'Carne Smash Adicional (130g)', price: 7000 },
  { id: 'extra_quail_egg', name: 'Huevos de Codorniz (3 und)', price: 2500 },
  { id: 'extra_fries', name: 'Porción Extra de Papas Francesas', price: 6000 },
  { id: 'extra_pepperoni', name: 'Porción Extra de Pepperoni', price: 4500 },
];

export const MENU_ITEMS: MenuItem[] = [
  // HAMBURGUESAS
  {
    id: 'joseph-burger-especial',
    name: 'Joseph Burger Especial',
    category: 'hamburguesas',
    categoryLabel: 'Hamburguesa Artesanal',
    price: 28000,
    oldPrice: 32000,
    description: 'Doble carne smash (260g), queso cheddar fundido, tocineta crujiente, cebolla caramelizada y salsa tártara Joseph en pan brioche.',
    longDescription: 'Nuestra hamburguesa insignia. Dos jugosas carnes smash 100% de res de 130g cada una, doble lámina de queso cheddar madurado, tocineta ahumada crujiente en tiras gruesas, cebolla lentamente caramelizada a la plancha, pepinillos encurtidos artesanalmente y nuestra salsa secreta Joseph en pan brioche suave dorado con mantequilla clarificada.',
    rating: 4.9,
    reviewsCount: 184,
    prepTime: '15-20 min',
    image: '/img/burger-hero.jpg',
    isPopular: true,
    isChefSpecial: true,
    tag: 'La Más Pedida',
  },
  {
    id: 'la-alboraya-monster',
    name: 'La Alboraya Monster',
    category: 'hamburguesas',
    categoryLabel: 'Hamburguesa Artesanal',
    price: 35000,
    oldPrice: 39000,
    description: 'Triple carne smash de res, triple queso cheddar, tocineta crocante, queso costeño fundido y ripio de papa.',
    longDescription: 'Diseñada para los verdaderos amantes del buen comer en el Barrio La Alboraya. Tres carnes smash de res seleccionada (390g en total), triple queso cheddar derretido, abundante tocineta crocante, corona de queso costeño dorado a la plancha, ripio de papa artesanal crujiente y salsa de la casa.',
    rating: 5.0,
    reviewsCount: 142,
    prepTime: '20 min',
    image: '/img/burger-smash.jpg',
    isPopular: true,
    tag: 'Especial Alboraya',
  },
  {
    id: 'smash-clasica-doble',
    name: 'Smash Clásica Doble',
    category: 'hamburguesas',
    categoryLabel: 'Hamburguesa Artesanal',
    price: 24000,
    description: 'Doble smash de res con bordes crocantes, queso americano, lechuga romana fresca, tomate de huerta y pepinillos.',
    longDescription: 'El balance perfecto de la tradición smash burger americana con el toque costeño. Dos patties aplastados finamente sobre plancha de hierro fundido para lograr costra dorada intensa, queso americano fundido, vegetales frescos y salsa rosada suave.',
    rating: 4.8,
    reviewsCount: 96,
    prepTime: '12-15 min',
    image: '/img/burger-cheddar.jpg',
  },
  {
    id: 'costena-criolla',
    name: 'Costeña Criolla con Maduro',
    category: 'hamburguesas',
    categoryLabel: 'Hamburguesa Artesanal',
    price: 29000,
    description: 'Carne artesanal de 180g, loncha gruesa de queso costeño asado, plátano maduro en tajadas meladas y tocineta.',
    longDescription: 'Orgullo de nuestra tierra caribeña. Deliciosa combinación dulce y salada con carne de res sazonada, tajadas de plátano maduro al punto perfecto, generosa tajada de queso costeño asado en la parrilla, tocineta y salsa tártara de ajo suave.',
    rating: 4.9,
    reviewsCount: 118,
    isChefSpecial: true,
    tag: 'Sabor Costeño',
    prepTime: '15-18 min',
    image: '/img/burger-smash.jpg',
  },
  {
    id: 'bbq-bacon-crunch',
    name: 'BBQ Bacon & Onion Crunch',
    category: 'hamburguesas',
    categoryLabel: 'Hamburguesa Artesanal',
    price: 27500,
    description: 'Carne smash jugosa, aros de cebolla crocantes, doble tocineta, salsa BBQ casera y queso cheddar líquido.',
    longDescription: 'Para los fanáticos de los sabores ahumados e intensos. Doble carne de res, aros de cebolla recién fritos bien crujientes, tocineta doradita, bañada con una salsa BBQ artesanal de la casa y mucho queso cheddar cremoso.',
    rating: 4.8,
    reviewsCount: 85,
    prepTime: '15 min',
    image: '/img/burger-hero.jpg',
  },

  // PIZZAS ARTESANALES (NUEVA CATEGORÍA SOLICITADA)
  {
    id: 'pizza-pepperoni-crunch',
    name: 'Pizza Pepperoni Especial',
    category: 'pizzas',
    categoryLabel: 'Pizza Artesanal',
    price: 31000,
    oldPrice: 35000,
    description: 'Masa madre horneada a la piedra, doble queso mozzarella fundido, pepperoni americano crujiente y orégano.',
    longDescription: 'Nuestra pizza estrella horneada a alta temperatura para lograr bordes aireados y base crujiente. Salsa de tomate natural con especias italianas, generosa capa de queso mozzarella hilado y abundantes rodajas de pepperoni dorado y crujiente.',
    rating: 4.9,
    reviewsCount: 112,
    prepTime: '18-20 min',
    image: '/img/pizza-pepperoni.jpg',
    isPopular: true,
    tag: 'Horno de Piedra',
  },
  {
    id: 'pizza-margherita-royale',
    name: 'Pizza Margherita Royale',
    category: 'pizzas',
    categoryLabel: 'Pizza Artesanal',
    price: 27000,
    description: 'Tomates San Marzano, mozzarella fresco en hebras, albahaca fresca del huerto y aceite de oliva virgen extra.',
    longDescription: 'La receta clásica tradicional con la frescura de ingredientes seleccionados. Masa artesanal delgada y crujiente, pomodoro aromático, abundante mozzarella derretido y hojas de albahaca fresca.',
    rating: 4.8,
    reviewsCount: 88,
    prepTime: '15-18 min',
    image: '/img/pizza-margherita.jpg',
  },
  {
    id: 'pizza-joseph-carnes',
    name: 'Pizza Joseph Cuatro Carnes',
    category: 'pizzas',
    categoryLabel: 'Pizza Especial',
    price: 36000,
    description: 'Carne smash picada, tocineta ahumada, pepperoni crocante, salchicha prémium y abundante mozzarella.',
    longDescription: 'Para los que no se conforman con poco. Combina lo mejor de nuestra parrilla y el horno: carne de res desmenuzada, tocineta crujiente, rodajas de salchicha seleccionada y pepperoni sobre masa crocante.',
    rating: 5.0,
    reviewsCount: 95,
    prepTime: '20 min',
    image: '/img/pizza-pepperoni.jpg',
    isChefSpecial: true,
    tag: 'Full Carnes',
  },

  // SALCHIPAPAS
  {
    id: 'salchipapa-alboraya-suprema',
    name: 'Salchipapa La Alboraya Suprema',
    category: 'salchipapas',
    categoryLabel: 'Salchipapa Especial',
    price: 34000,
    oldPrice: 38000,
    description: 'Papas a la francesa crocantes, salchicha prémium, lomo de res tierno, pechuga a la plancha, lluvia de queso costeño y salsas.',
    longDescription: 'La reina de la casa en el barrio. Base generosa de papas fritas doradas y crujientes, rodajas de salchicha especial de carnicería, trozos jugosos de pechuga a la plancha y carne de lomo salteada, bañada en ripio de papa, queso costeño rallado al tope y todas nuestras salsas.',
    rating: 5.0,
    reviewsCount: 220,
    prepTime: '18-22 min',
    image: '/img/salchipapa.jpg',
    isPopular: true,
    tag: 'Para 2 Personas',
  },
  {
    id: 'salchipapa-clasica-joseph',
    name: 'Salchipapa Clásica Joseph',
    category: 'salchipapas',
    categoryLabel: 'Salchipapa Tradicional',
    price: 20000,
    description: 'Papas francesas doraditas, abundante salchicha especial, lluvia de queso costeño fresco y salsas tártara y rosada.',
    longDescription: 'El clásico indiscutible con la sazón de Joseph Burger. Papas fritas en su punto exacto con abundante salchicha de res y cerdo de primera, coronada con delicioso queso costeño rallado y nuestras salsas.',
    rating: 4.8,
    reviewsCount: 165,
    prepTime: '12-15 min',
    image: '/img/salchipapa.jpg',
  },

  // DESGRANADOS
  {
    id: 'desgranado-mixto-alboraya',
    name: 'Desgranado Mixto La Alboraya',
    category: 'desgranados',
    categoryLabel: 'Desgranado Costeño',
    price: 28000,
    oldPrice: 31000,
    description: 'Maíz tierno desgranado a la mantequilla, pollo desmechado, carne tierna, tocineta, queso costeño y tártara casera.',
    longDescription: 'El auténtico desgranado de la costa caribeña preparado con maíz tierno salteado en mantequilla pura, pechuga de pollo desmechada jugosa, carne de res sazonada, tocineta en cubos, ripio fino de papa y una montaña de queso costeño.',
    rating: 4.9,
    reviewsCount: 175,
    prepTime: '15-18 min',
    image: '/img/desgranado.jpg',
    isPopular: true,
    tag: 'Auténtico Costeño',
  },

  // PERROS CALIENTES
  {
    id: 'perro-especial-joseph',
    name: 'Perro Especial Joseph',
    category: 'perros',
    categoryLabel: 'Perro Caliente Costeño',
    price: 19000,
    description: 'Salchicha especial manguera, tocineta picada, queso costeño a la plancha, ripio crujiente, huevo de codorniz y salsas.',
    longDescription: 'El perro caliente de barrio elevado a nivel gourmet. Salchicha de primera calidad en pan tierno al vapor, tocineta picada crujiente, lámina de queso costeño derretido en plancha, ripio de papa, salsa de piña casera, tártara y huevo de codorniz.',
    rating: 4.9,
    reviewsCount: 140,
    prepTime: '10-12 min',
    image: '/img/perro-caliente.jpg',
    isPopular: true,
    tag: 'Con Huevo de Codorniz',
  },
  {
    id: 'perro-americano-cheddar',
    name: 'Perro Americano con Cheddar & Bacon',
    category: 'perros',
    categoryLabel: 'Perro Caliente Americano',
    price: 16500,
    description: 'Salchicha tipo Frankfurt, abundante queso cheddar líquido, tocineta picada y cebollita frita crispy.',
    longDescription: 'Sencillo, delicioso y lleno de sabor con queso cheddar suave y caliente, tocineta crocante y pan artesanal.',
    rating: 4.6,
    reviewsCount: 65,
    prepTime: '10 min',
    image: '/img/perro-caliente.jpg',
  },

  // ENTRADAS & PAPAS
  {
    id: 'papas-rusticas-joseph',
    name: 'Papas Rústicas con Cheddar & Bacon',
    category: 'entradas',
    categoryLabel: 'Acompañamiento',
    price: 15000,
    description: 'Porción generosa de papas fritas doradas sazonadas con páprika, cubiertas de salsa cheddar fundida y tocineta picada.',
    longDescription: 'Papas fritas al punto perfecto de crocancia, cubiertas con salsa de queso cheddar caliente y tocineta picada crujiente.',
    rating: 4.8,
    reviewsCount: 92,
    prepTime: '10-12 min',
    image: '/img/papas-fritas.jpg',
  },

  // BEBIDAS
  {
    id: 'gaseosa-personal',
    name: 'Gaseosa Personal 400ml bien fría',
    category: 'bebidas',
    categoryLabel: 'Bebida Refrescante',
    price: 5000,
    description: 'Coca-Cola, Kola Román, Cuatro, Sprite o Manzana Postobón heladas.',
    longDescription: 'Bebida gaseosa helada para acompañar tus hamburguesas, pizzas y salchipapas favoritas.',
    rating: 4.9,
    reviewsCount: 310,
    prepTime: 'Inmediato',
  },
  {
    id: 'gaseosa-familiar-1-5l',
    name: 'Gaseosa Familiar 1.5 Litros',
    category: 'bebidas',
    categoryLabel: 'Bebida Familiar',
    price: 9000,
    description: 'Ideal para compartir en combos familiares o con amigos.',
    longDescription: 'Botella de 1.5L bien helada (Coca-Cola, Kola Román o Manzana).',
    rating: 4.9,
    reviewsCount: 120,
    prepTime: 'Inmediato',
  },
];

export const BUSINESS_INFO = {
  name: 'Joseph Burger',
  logoUrl: '/img/joseph-burger-logo.svg',
  slogan: 'Hamburguesas, Salchipapas & Pizzas Artesanales',
  phone: '313 545 9315',
  phoneRaw: '3135459315',
  whatsappUrl: 'https://wa.me/573135459315',
  address: 'Barrio La Alboraya',
  city: 'Barranquilla, Atlántico',
  openingHours: 'Martes a Domingo: 5:30 PM - 11:30 PM (Lunes cerrado)',
  deliveryZones: 'Barrio La Alboraya, Las Palmas, Buenos Aires, Carrizal, La Unión, Los Andes y sectores cercanos',
  deliveryTime: '30 - 45 minutos',
  paymentMethods: ['Nequi', 'Daviplata', 'Efectivo', 'Datáfono'],
};

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Carlos Mendoza',
    neighborhood: 'Vecino de La Alboraya',
    comment: '¡Las mejores hamburguesas y pizzas de todo el sector! La carne tiene ese toque ahumado perfecto, el pan brioche es fresco y la salsa tártara de Joseph es otro nivel. El domicilio llegó caliente en 25 minutos.',
    rating: 5,
    dish: 'Joseph Burger Especial',
  },
  {
    id: '2',
    name: 'Andrea Paternina',
    neighborhood: 'Barrio Las Palmas',
    comment: 'La salchipapa suprema es gigantesca y deliciosa, con carne y pollo de verdad, no de esas carnes secas. El pedido por WhatsApp es súper rápido y atienden con mucha amabilidad.',
    rating: 5,
    dish: 'Salchipapa La Alboraya Suprema',
  },
  {
    id: '3',
    name: 'Javier Morales',
    neighborhood: 'Barrio La Alboraya',
    comment: 'El desgranado mixto costeño me sorprendió por completo. Generoso en queso costeño y tocineta. Y las nuevas pizzas a la piedra están brutales. Recomendadísimo.',
    rating: 5,
    dish: 'Desgranado Mixto & Pizza',
  },
];
