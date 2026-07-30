export const whatsappNumber = "+59172270494";
export const whatsappLink = "https://wa.me/59172270494";

export const navItems = [
  { label: "ÚLTIMA MILLA", href: "/ultima-milla", disabled: false },
  { label: "DRIVERS", href: "/drivers", disabled: false },
  { label: "TECNOLOGÍA", href: "/tecnologia", disabled: false },
  { label: "INVERTIR", href: "/invertir", disabled: false },
] as const;

export const formasUnirte = [
  {
    id: "invertir",
    icon: "/icons/home/icon-invertir.png",
    titleHighlight: "Invertir",
    titleRest: "y dar valor a tus ahorros",
    description:
      "Nuestro modelo de inversión colaborativa (fractional ownership) te permite financiar lo que puedas para la compra de nuevos vehículos y recuperar tu inversión mes a mes durante 5 años con un 50% de ganancia.",
    href: "/invertir",
  },
  {
    id: "trabajar",
    icon: "/icons/home/icon-trabajar.png",
    titleHighlight: "Trabajar",
    titleRest: "como driver",
    description:
      "Generamos fuentes de trabajo para mujeres comprometidas que quieran manejar una de nuestras abejas. Capacitamos, acompañamos y conectamos con una fuente estable de ingresos.",
    href: "/drivers",
  },
  {
    id: "delegar",
    icon: "/icons/home/icon-delegar.png",
    titleHighlight: "Delegar transporte",
    titleRest: "y logística de última milla",
    description:
      "Ofrecemos soluciones de movilidad y reparto eficientes, limpias y a medida para todo tipo de empresas. Así, ayudamos a reducir costos y emisiones.",
    href: "/ultima-milla",
  },
] as const;

export const impactStats = [
  { value: "+650.000", label: "KM recorridos" },
  { value: "+65.000", label: "litros de gasolina sustituidos" },
  { value: "+68.000", label: "carreras" },
  { value: "145", label: "TN de CO₂ evitadas" },
] as const;

export const teamMembers = [
  {
    name: "MIGUEL FERNÁNDEZ",
    role: "CEO",
    bio: "Define la visión estratégica y lidera nuestro crecimiento hacia una movilidad más sostenible e inclusiva.",
    image: "/images/home/team-miguel-photo.webp",
  },
  {
    name: "ALEJANDRA MONTENEGRO",
    role: "COO",
    bio: "Lidera el seguimiento a nuestras operaciones, las finanzas y el crecimiento sostenible del negocio.",
    image: "/images/home/team-alejandra.webp",
  },
  {
    name: "ANDREA LÓPEZ",
    role: "CPO",
    bio: "Impulsa el talento, fortalece la cultura organizacional y desarrolla equipos comprometidos con nuestro propósito.",
    image: "/images/home/team-andrea.webp",
  },
  {
    name: "CARLI FLORIDA",
    role: "CTO",
    bio: "Lidera el desarrollo tecnológico para mejorar nuestras operaciones con eficiencia y escalabilidad.",
    image: "/images/home/team-carli.webp",
  },
] as const;

export const comoFuncionaSteps = [
  {
    step: "01",
    title: "Define cuánto invertir",
    description:
      "Invierte el capital que consideres adecuado; tus ganancias serán proporcionales.",
  },
  {
    step: "02",
    title: "Ponemos a trabajar tu inversión",
    description:
      "Los vehículos brindan servicio de transporte, logística de última milla y movilidad corporativa.",
  },
  {
    step: "03",
    title: "Recupera tu inversión mes a mes",
    description:
      "Obtén una parte proporcional de los ingresos generados durante 5 años.",
  },
  {
    step: "04",
    title: "Reportes mensuales",
    description:
      "Sigue el desempeño de tu inversión con informes de sostenibilidad.",
  },
] as const;

export const beneficios = [
  {
    icon: "/icons/invertir/beneficio-icon.png",
    highlight: "Inversión accesible",
    rest: ", sin necesidad de comprar un vehículo completo.",
  },
  {
    icon: "/icons/invertir/beneficio-icon.png",
    highlight: "Respaldo tangible",
    rest: " de una empresa legalmente constituida con operación real y resultados.",
  },
  {
    icon: "/icons/invertir/beneficio-icon.png",
    highlight: "Transparencia financiera",
    rest: " con reportes de operación y rendimiento.",
  },
] as const;

export const ctaBanner = {
  heading: "¿Estás listo para multiplicar el valor de tus ahorros?",
  buttonLabel: "Pongámonos en contacto",
  href: whatsappLink,
} as const;

export const faqItems = [
  {
    question: "¿Cuál es la inversión mínima?",
    answer: "Puedes comenzar a invertir desde USD 5.000.",
  },
  {
    question: "¿Cómo y cada cuánto se recibe el retorno?",
    answer:
      "Recibirás pagos mensuales durante un período de 60 meses (5 años). Al finalizar ese plazo, habrás recuperado el 100% de tu inversión, además de una rentabilidad estimada del 50% sobre el capital invertido, de acuerdo con las condiciones establecidas en tu contrato.",
  },
  {
    question: "¿Qué pasa si el vehículo requiere mantenimiento?",
    answer:
      "No tienes que preocuparte por ello. Bee Zero asume todos los costos de mantenimiento y operación de la flota, incluyendo revisiones preventivas, reparaciones y gestión operativa. Nuestro equipo se encarga de mantener los vehículos en óptimas condiciones para garantizar la continuidad del servicio.",
  },
  {
    question: "¿Quién administra la flota y la operación?",
    answer:
      "Bee Zero gestiona integralmente la operación: asignación de vehículos, captación de clientes, mantenimiento, seguros, carga eléctrica y seguimiento de la flota. Tú inviertes en el crecimiento del negocio y nosotros nos encargamos de que la operación funcione de manera eficiente.",
  },
  {
    question: "¿Mi inversión está respaldada por un contrato?",
    answer:
      "Sí. Cada inversión se formaliza mediante un contrato que establece el monto aportado, el plazo, la modalidad de retorno y las condiciones acordadas, brindando claridad y seguridad para ambas partes.",
  },
  {
    question: "¿Qué sucede al finalizar los 5 años?",
    answer:
      "Al concluir el plazo del contrato, habrás recuperado la totalidad del capital invertido más la rentabilidad acordada. Si lo deseas, podrás evaluar nuevas oportunidades para seguir participando en la expansión de la flota de Bee Zero.",
  },
] as const;

export const ultimaMillaBeneficios = [
  {
    icon: "/icons/ultima-milla/beneficio-1.png",
    text: "Reducción de costos de combustible y mantenimiento.",
  },
  {
    icon: "/icons/ultima-milla/beneficio-2.png",
    text: "Menor huella de carbono, con reportes de impacto para tus propios informes de sostenibilidad.",
  },
  {
    icon: "/icons/ultima-milla/beneficio-3.png",
    text: "Flota moderna con seguimiento y trazabilidad de entregas.",
  },
  {
    icon: "/icons/ultima-milla/beneficio-4.png",
    text: "Escalabilidad según volumen: desde entregas puntuales hasta operación recurrente.",
  },
] as const;

export const ultimaMillaIdealPara = [
  "E-COMMERCE",
  "RETAIL",
  "FARMACIAS",
  "MENSAJERÍA CORPORATIVA",
] as const;

export const ultimaMillaComoFuncionaSteps = [
  {
    step: "01",
    title: "Cuéntanos sobre tu operación",
    description:
      "Cuéntanos sobre la labor de tu empresa, volumen de entregas y zonas geográficas.",
  },
  {
    step: "02",
    title: "Diseñamos tu plan",
    description:
      "Diseñamos un plan logístico a la medida de tus operaciones.",
  },
  {
    step: "03",
    title: "Ejecutamos las entregas",
    description:
      "Nos hacemos cargo de tus entregas con nuestra flota eléctrica y equipo capacitado.",
  },
  {
    step: "04",
    title: "Reportes mensuales",
    description:
      "Recibes reportes mensuales de entregas e impacto ambiental.",
  },
] as const;

export const ultimaMillaCta = {
  headingLine1: "¿Estás listo para delegar tu",
  headingHighlight: "última milla",
  headingLine2: "a un aliado especialista?",
  buttonLabel: "Pongámonos en contacto",
  href: whatsappLink,
} as const;

export const ultimaMillaFaqItems = [
  {
    question: "¿En qué ciudades operan?",
    answer:
      "Operamos en las principales ciudades de Bolivia. Contáctanos para confirmar cobertura en tu zona y evaluar la viabilidad del servicio según tu operación.",
  },
  {
    question: "¿Qué tipo de empresas pueden contratar el servicio?",
    answer:
      "Trabajamos con e-commerce, retail, farmacias, mensajería corporativa y empresas que necesiten distribución de última milla con entregas ágiles y sostenibles.",
  },
  {
    question:
      "¿Puedo contratar el servicio de forma ocasional o solo mediante un contrato?",
    answer:
      "Ofrecemos flexibilidad según tu volumen: desde entregas puntuales hasta operaciones recurrentes con contrato. Evaluamos juntos el modelo que mejor se adapte a tu negocio.",
  },
  {
    question: "¿Qué ventajas tiene externalizar mi logística con Bee Zero?",
    answer:
      "Delegar tu logística te permite reducir costos operativos, evitar la gestión de una flota propia y contar con un servicio confiable y planificado. Además, al operar con vehículos 100% eléctricos, tu empresa también reduce su impacto ambiental y puede acceder a reportes de sostenibilidad que cuantifican las emisiones de CO₂ evitadas.",
  },
] as const;

export const driversBeneficios = [
  {
    icon: "/icons/drivers/beneficio-1.png",
    text: "Ahorro significativo frente a un vehículo a gasolina o gas. Sin filas, ganas más.",
  },
  {
    icon: "/icons/drivers/beneficio-2.png",
    text: "Capacitación en manejo eléctrico y mantenimiento básico, y soporte continuo.",
  },
  {
    icon: "/icons/drivers/beneficio-3.png",
    text: "Carreras aseguradas que te dan un ingreso estable.",
  },
  {
    icon: "/icons/drivers/beneficio-4.png",
    text: "Horarios flexibles que se acomodan a tu disponibilidad.",
  },
] as const;

export const driversRequisitos = [
  "Licencia de conducir Tipo A vigente.",
  "Ser mayor de 25 años.",
  "Disponibilidad de al menos 4 horas continuas al día.",
  "Certificado de NO tener antecedentes penales.",
] as const;

export const driversComoFuncionaSteps = [
  {
    step: "01",
    title: "Postula",
    description:
      "Completa el formulario con tus datos, requisitos y disponibilidad. Evaluaremos tu perfil y te contactaremos.",
  },
  {
    step: "02",
    title: "Aprende",
    description:
      "Si eres seleccionada, recibirás capacitación sobre los vehículos, nuestras plataformas y protocolos.",
  },
  {
    step: "03",
    title: "Conduce",
    description:
      "Te asignaremos un vehículo que compartirás con otra conductora en turnos programados.",
  },
  {
    step: "04",
    title: "Genera ingresos",
    description:
      "Realiza carreras y entregas, y obtén el 40% de los ingresos generados en tu turno. Nosotros asumimos la carga, el mantenimiento y el soporte.",
  },
] as const;

export const driversCta = {
  heading: "¿Estás lista para generar ingresos conduciendo una abejita?",
  buttonLabel: "Pongámonos en contacto",
  href: whatsappLink,
} as const;

export const tecnologiaSistemas = [
  {
    id: "beezy",
    name: "Beezy",
    tagline: "Nuestro punto de control operativo",
    description:
      "Es la plataforma donde centralizamos toda la operación: agendamos pedidos, coordinamos llamadas y mantenemos el orden del día a día de una manera simple y muy amigable para nuestro equipo.",
    features: [
      "Centraliza la operación y la atención a clientes en un solo lugar.",
      "Los operadores agendan pedidos y llamadas de forma rápida.",
      "Interfaz intuitiva que mantiene el orden en cada turno.",
    ],
    image: "/images/tecnologia/beezy.webp",
    imageAlt: "Plataforma Beezy de Bee Zero",
  },
  {
    id: "beetracked",
    name: "BeeTracked",
    tagline: "Control de turnos y de nuestras drivers",
    description:
      "Es la app con la que gestionamos los inicios de turno y el trabajo de nuestras drivers. Es también nuestro punto de contacto directo con ellas para llevar el control del uso de cada vehículo.",
    features: [
      "Registro de inicio y cierre de turnos en tiempo real.",
      "Gestión y acompañamiento de nuestras drivers.",
      "Canal directo de comunicación con cada conductora.",
      "Trazabilidad completa del uso de los vehículos.",
    ],
    image: "/images/tecnologia/beetracked.webp",
    imageAlt: "Aplicación BeeTracked de Bee Zero",
  },
  {
    id: "beezy-clients",
    name: "Beezy Clients",
    tagline: "Control de inventario para nuestros clientes",
    description:
      "Es la plataforma donde nuestros clientes gestionan el inventario de sus productos. Pueden ver su stock y el manejo de sus productos en nuestras dark stores en tiempo real.",
    features: [
      "Visibilidad en tiempo real del stock de cada producto.",
      "Gestión de inventario dentro de nuestras dark stores.",
      "Información clara para la toma de decisiones de nuestros clientes.",
    ],
    image: "/images/tecnologia/beezy-clients.webp",
    imageAlt: "Plataforma Beezy Clients de Bee Zero",
  },
] as const;

export const tecnologiaCta = {
  heading: "¿Quieres conocer más sobre nuestra tecnología?",
  buttonLabel: "Pongámonos en contacto",
  href: "https://wa.me/59169533423",
} as const;

export const driversFaqItems = [
  {
    question: "¿Puedo postular de cualquier ciudad?",
    answer:
      "Sí, puedes postular desde cualquier ciudad donde Bee Zero tenga operación. Evaluaremos la disponibilidad de vehículos en tu zona y te contactaremos para confirmar los siguientes pasos.",
  },
  {
    question: "¿Necesito tener un vehículo propio?",
    answer:
      "No. Nosotros te asignamos uno de nuestros vehículos eléctricos, que compartirás con otra conductora en turnos programados. Solo necesitas cumplir con los requisitos de postulación.",
  },
  {
    question: "¿Cómo se calculan mis ganancias?",
    answer:
      "Tus ganancias se calculan sobre el 40% de los ingresos generados durante tu turno por carreras y entregas. Cuanto más actives tu disponibilidad, mayor será tu ingreso.",
  },
  {
    question: "Me falta uno de los requisitos, ¿puedo postular?",
    answer:
      "Todos los requisitos son indispensables para postular. Si falta alguno de ellos, no podremos continuar con tu proceso de selección. Mantenemos este estándar porque buscamos brindar un servicio seguro y de excelencia a nuestros clientes, además de garantizar las mejores condiciones para quienes forman parte de Bee Zero.",
  },
] as const;
