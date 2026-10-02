/* Mextas mock data — single source for every screen. Swap IMG paths when real photography arrives. */
(function () {
  const IMG = '../../assets/img/';
  const R = window.__resources || {};
  const im = (id, f) => R['img_' + id] || IMG + f;
  const I = {
    hero: im('hero', 'hero-casa-moderna.jpg'), valle: im('valle', 'casa-valle-real.jpg'), lomas: im('lomas', 'residencia-lomas.jpg'),
    polanco: im('polanco', 'depto-polanco.jpg'), cabo: im('cabo', 'penthouse-cabo.jpg'), interior: im('interior', 'vender.jpg'),
    mty: im('mty', 'monterrey.jpg'), gdl: im('gdl', 'guadalajara.jpg'), cdmx: im('cdmx', 'cdmx.jpg'), cun: im('cun', 'cancun.jpg'), mid: im('mid', 'merida.jpg'),
  };
  const ARCH = [I.valle, I.hero, I.lomas, I.polanco, I.cabo, I.interior];
  const gallery = (first, ...rest) => [first, ...ARCH.filter((x) => x !== first && !rest.includes(x)), ...rest].slice(0, 6);

  const agents = [
    { id: 'ag1', name: 'Mariana Ortega', role: 'Asesora senior · Zona Metropolitana GDL', phone: '33 1234 5678', email: 'mariana@mextas.mx', initials: 'MO' },
    { id: 'ag2', name: 'Andrés Villarreal', role: 'Asesor residencial · Monterrey', phone: '81 1234 5678', email: 'andres@mextas.mx', initials: 'AV' },
    { id: 'ag3', name: 'Lucía Fernández', role: 'Directora comercial · CDMX', phone: '55 1234 5678', email: 'lucia@mextas.mx', initials: 'LF' },
    { id: 'ag4', name: 'Rodrigo Canul', role: 'Asesor de inversión · Península', phone: '999 123 4567', email: 'rodrigo@mextas.mx', initials: 'RC' },
  ];

  const P = (o) => Object.assign({ currency: 'MXN', operation: 'venta', status: 'Disponible', parking: 2, amenities: [], features: [] }, o);
  const properties = [
    P({ id: 'MX-1024', slug: 'casa-en-valle-real', title: 'Casa en Valle Real', type: 'Casa', city: 'Zapopan', state: 'Jalisco', location: 'Zapopan, Jalisco', zones: ['zapopan', 'guadalajara', 'valle-real'],
      price: 12850000, beds: 4, baths: 4.5, area: 320, lot: 410, parking: 3, year: 2021, badge: 'Destacada', image: I.valle, images: gallery(I.valle),
      amenities: ['Alberca', 'Jardín', 'Terraza', 'Seguridad', 'Cocina equipada', 'Estacionamiento', 'Bodega'],
      features: ['Doble altura en estancia', 'Cancelería de aluminio negro', 'Paneles solares', 'Cuarto de servicio independiente'],
      description: ['Residencia de dos niveles dentro de coto privado en Valle Real, a cinco minutos de Andares. La planta baja integra sala, comedor y cocina en un solo espacio abierto hacia el jardín y la alberca.', 'En planta alta, cuatro recámaras con baño completo y vestidor; la principal cuenta con terraza propia. Materiales de piedra natural, madera de parota y acabados en mármol travertino.'],
      lat: 20.7401, lng: -103.4262, agent: 'ag1', publishedAt: '2026-09-02' }),
    P({ id: 'MX-1031', slug: 'residencia-en-lomas', title: 'Residencia en Lomas', type: 'Casa', city: 'Monterrey', state: 'Nuevo León', location: 'Monterrey, Nuevo León', zones: ['monterrey', 'lomas'],
      price: 9750000, beds: 3, baths: 3.5, area: 280, lot: 350, parking: 2, year: 2023, badge: 'Nueva', image: I.lomas, images: gallery(I.lomas),
      amenities: ['Jardín', 'Terraza', 'Seguridad', 'Cocina equipada', 'Estacionamiento', 'Pet friendly'],
      features: ['Vista a la Sierra Madre', 'Estudio en planta baja', 'Sistema de riego automatizado'],
      description: ['Casa contemporánea en Lomas del Valle con vista abierta a la Sierra Madre. Volúmenes limpios, grandes ventanales y una terraza techada que extiende la estancia hacia el exterior.', 'Tres recámaras en planta alta, estudio en planta baja que puede funcionar como cuarta recámara y cochera para dos autos.'],
      lat: 25.6415, lng: -100.3521, agent: 'ag2', publishedAt: '2026-09-18' }),
    P({ id: 'MX-1046', slug: 'departamento-en-polanco', title: 'Departamento en Polanco', type: 'Departamento', city: 'Ciudad de México', state: 'CDMX', location: 'Miguel Hidalgo, CDMX', zones: ['cdmx', 'polanco', 'miguel-hidalgo'],
      price: 15600000, beds: 2, baths: 2, area: 150, parking: 2, year: 2020, badge: 'Premium', image: I.polanco, images: gallery(I.polanco, I.cdmx),
      amenities: ['Elevador', 'Gimnasio', 'Seguridad', 'Roof garden', 'Terraza', 'Estacionamiento', 'Pet friendly'],
      features: ['Piso 14 con vista a Chapultepec', 'Lobby con recepción 24 h', 'Bodega de 6 m²'],
      description: ['Departamento en piso alto sobre Campos Elíseos, con ventanales de piso a techo orientados al Bosque de Chapultepec. Distribución eficiente con estancia amplia y cocina integral abierta.', 'El edificio cuenta con roof garden, gimnasio equipado y recepción 24 horas. A pasos de Presidente Masaryk y del Auditorio Nacional.'],
      lat: 19.4285, lng: -99.1945, agent: 'ag3', publishedAt: '2026-08-21' }),
    P({ id: 'MX-1052', slug: 'penthouse-en-cabo', title: 'Penthouse en Cabo', type: 'Penthouse', city: 'Los Cabos', state: 'Baja California Sur', location: 'Los Cabos, Baja California Sur', zones: ['los-cabos'],
      price: 18900000, beds: 3, baths: 3.5, area: 210, parking: 2, year: 2024, badge: 'Nueva', image: I.cabo, images: gallery(I.cabo),
      amenities: ['Alberca', 'Terraza', 'Elevador', 'Gimnasio', 'Seguridad', 'Amueblado'],
      features: ['Terraza de 60 m² con vista al Mar de Cortés', 'Se entrega amueblado', 'Programa de renta vacacional opcional'],
      description: ['Penthouse frente al Mar de Cortés en el corredor turístico, con terraza privada de 60 m² y vista abierta al atardecer. Se entrega amueblado y listo para habitar o rentar.', 'El desarrollo incluye alberca infinita, gimnasio y acceso controlado. Potencial de renta vacacional con administración opcional.'],
      lat: 22.9431, lng: -109.8187, agent: 'ag4', publishedAt: '2026-09-10' }),
    P({ id: 'MX-1060', slug: 'residencia-lomas-de-chapultepec', title: 'Residencia en Lomas de Chapultepec', type: 'Casa', city: 'Ciudad de México', state: 'CDMX', location: 'Lomas de Chapultepec, CDMX', zones: ['cdmx', 'lomas', 'miguel-hidalgo'],
      price: 42500000, beds: 5, baths: 5.5, area: 620, lot: 900, parking: 4, year: 2019, badge: 'Premium', image: I.hero, images: gallery(I.hero),
      amenities: ['Alberca', 'Jardín', 'Terraza', 'Seguridad', 'Gimnasio', 'Cocina equipada', 'Estacionamiento', 'Bodega'],
      features: ['Alberca climatizada', 'Cava para 400 botellas', 'Casa de huéspedes', 'Domótica integral'],
      description: ['Residencia de autor en calle cerrada de Lomas de Chapultepec. Arquitectura horizontal de concreto y piedra, con alberca climatizada y jardín de 300 m².', 'Cinco recámaras, casa de huéspedes, cava, gimnasio y cuarto de cine. Sistema de domótica integral y seguridad perimetral.'],
      lat: 19.4234, lng: -99.2156, agent: 'ag3', publishedAt: '2026-07-30' }),
    P({ id: 'MX-1067', slug: 'departamento-en-condesa', title: 'Departamento en Condesa', type: 'Departamento', operation: 'renta', city: 'Ciudad de México', state: 'CDMX', location: 'Cuauhtémoc, CDMX', zones: ['cdmx', 'condesa'],
      price: 38000, beds: 2, baths: 2, area: 110, parking: 1, year: 2018, image: I.interior, images: gallery(I.interior),
      amenities: ['Terraza', 'Elevador', 'Seguridad', 'Amueblado', 'Pet friendly'],
      features: ['Frente a Parque México', 'Contrato mínimo 12 meses', 'Mantenimiento incluido'],
      description: ['Departamento amueblado frente a Parque México, con terraza privada y luz natural durante todo el día. Ideal para una estancia larga en una de las zonas más caminables de la ciudad.', 'Incluye mantenimiento, un cajón de estacionamiento y admite mascotas.'],
      lat: 19.4122, lng: -99.1716, agent: 'ag3', publishedAt: '2026-09-20' }),
    P({ id: 'MX-1073', slug: 'casa-en-san-pedro', title: 'Casa en San Pedro Garza García', type: 'Casa', city: 'Monterrey', state: 'Nuevo León', location: 'San Pedro Garza García, N.L.', zones: ['monterrey', 'san-pedro'],
      price: 24300000, beds: 4, baths: 5, area: 450, lot: 600, parking: 4, year: 2022, badge: 'Destacada', image: I.hero, images: gallery(I.hero, I.mty),
      amenities: ['Alberca', 'Jardín', 'Terraza', 'Seguridad', 'Gimnasio', 'Estacionamiento'],
      features: ['Fraccionamiento con caseta', 'Recámara principal con sala privada', 'Asador techado'],
      description: ['Casa en fraccionamiento privado de San Pedro, con alberca, jardín y asador techado. Espacios sociales en doble altura conectados al exterior.', 'Cuatro recámaras con baño y vestidor, sala de TV en planta alta y gimnasio.'],
      lat: 25.6573, lng: -100.4027, agent: 'ag2', publishedAt: '2026-08-05' }),
    P({ id: 'MX-1081', slug: 'departamento-en-puerto-cancun', title: 'Departamento en Puerto Cancún', type: 'Departamento', city: 'Cancún', state: 'Quintana Roo', location: 'Cancún, Quintana Roo', zones: ['cancun'],
      price: 8950000, beds: 2, baths: 2.5, area: 140, parking: 2, year: 2023, badge: 'Destacada', image: I.cabo, images: gallery(I.cabo, I.cun),
      amenities: ['Alberca', 'Gimnasio', 'Elevador', 'Seguridad', 'Roof garden', 'Estacionamiento'],
      features: ['Vista a la marina', 'Club de playa con acceso', 'Alta demanda de renta vacacional'],
      description: ['Departamento con vista a la marina en Puerto Cancún, a minutos de la zona hotelera. Terraza con cocineta exterior y acceso al club de playa del desarrollo.', 'Alta ocupación para renta vacacional; se puede integrar a programa de administración.'],
      lat: 21.1619, lng: -86.8187, agent: 'ag4', publishedAt: '2026-09-12' }),
    P({ id: 'MX-1088', slug: 'casa-en-centro-merida', title: 'Casa en Centro de Mérida', type: 'Casa', city: 'Mérida', state: 'Yucatán', location: 'Mérida, Yucatán', zones: ['merida'],
      price: 6400000, beds: 3, baths: 3, area: 260, lot: 330, parking: 1, year: 1920, badge: 'Nueva', image: I.interior, images: gallery(I.interior, I.mid),
      amenities: ['Alberca', 'Jardín', 'Terraza', 'Cocina equipada'],
      features: ['Casona restaurada', 'Pisos de pasta originales', 'Techos de 5 m de altura'],
      description: ['Casona restaurada en el Centro Histórico, con techos altos, pisos de pasta originales y patio central con alberca.', 'Tres recámaras independientes, cocina abierta y terraza en azotea. A dos calles del Paseo de Montejo.'],
      lat: 20.9754, lng: -89.6216, agent: 'ag4', publishedAt: '2026-09-15' }),
    P({ id: 'MX-1094', slug: 'terreno-en-temozon-norte', title: 'Terreno en Temozón Norte', type: 'Terreno', city: 'Mérida', state: 'Yucatán', location: 'Mérida, Yucatán', zones: ['merida'],
      price: 3200000, beds: 0, baths: 0, area: 600, parking: 0, year: null, image: I.mid, images: [I.mid, I.hero, I.valle],
      amenities: ['Seguridad'], features: ['Uso de suelo habitacional', 'Servicios a pie de lote', 'Privada con caseta'],
      description: ['Lote residencial en privada de Temozón Norte, con servicios a pie de lote y acceso controlado. Topografía plana, lista para construir.'],
      lat: 21.0592, lng: -89.6103, agent: 'ag4', publishedAt: '2026-06-28' }),
    P({ id: 'MX-1102', slug: 'oficina-en-santa-fe', title: 'Oficina en Santa Fe', type: 'Oficina', city: 'Ciudad de México', state: 'CDMX', location: 'Santa Fe, CDMX', zones: ['cdmx', 'santa-fe'],
      price: 11200000, beds: 0, baths: 2, area: 240, parking: 6, year: 2017, image: I.cdmx, images: [I.cdmx, I.polanco, I.interior],
      amenities: ['Elevador', 'Seguridad', 'Estacionamiento'], features: ['Piso 22, planta libre', 'Certificación LEED', 'Seis cajones de estacionamiento'],
      description: ['Oficina en planta libre en torre corporativa con certificación LEED. Entrega en obra gris acondicionada, lista para adaptar al proyecto de cada empresa.'],
      lat: 19.3659, lng: -99.2596, agent: 'ag3', publishedAt: '2026-07-11' }),
    P({ id: 'MX-1109', slug: 'casa-en-juriquilla', title: 'Casa en Juriquilla', type: 'Casa', city: 'Querétaro', state: 'Querétaro', location: 'Juriquilla, Querétaro', zones: ['queretaro'],
      price: 7850000, beds: 3, baths: 3.5, area: 300, lot: 360, parking: 2, year: 2024, image: I.valle, images: gallery(I.valle, I.lomas),
      amenities: ['Jardín', 'Terraza', 'Seguridad', 'Cocina equipada', 'Estacionamiento', 'Pet friendly'],
      features: ['Vista al campo de golf', 'Preparación para paneles solares'],
      description: ['Casa nueva frente al campo de golf de Juriquilla, en condominio con seguridad 24 horas. Estancia con doble altura y jardín trasero.'],
      lat: 20.7036, lng: -100.4468, agent: 'ag2', publishedAt: '2026-09-08' }),
    P({ id: 'MX-1115', slug: 'departamento-en-angelopolis', title: 'Departamento en Angelópolis', type: 'Departamento', city: 'Puebla', state: 'Puebla', location: 'Angelópolis, Puebla', zones: ['puebla'],
      price: 4650000, beds: 2, baths: 2, area: 118, parking: 2, year: 2022, image: I.polanco, images: gallery(I.polanco),
      amenities: ['Alberca', 'Gimnasio', 'Elevador', 'Seguridad', 'Estacionamiento'], features: ['Torre con amenidades completas', 'Cerca de Lomas de Angelópolis'],
      description: ['Departamento en torre residencial de Angelópolis con alberca, gimnasio y áreas comunes. Estancia luminosa con balcón.'],
      lat: 19.0197, lng: -98.2440, agent: 'ag2', publishedAt: '2026-08-14' }),
    P({ id: 'MX-1121', slug: 'local-en-andares', title: 'Local comercial en Andares', type: 'Local', operation: 'renta', city: 'Zapopan', state: 'Jalisco', location: 'Zapopan, Jalisco', zones: ['zapopan', 'guadalajara'],
      price: 95000, beds: 0, baths: 1, area: 180, parking: 4, year: 2016, image: I.gdl, images: [I.gdl, I.interior, I.polanco],
      amenities: ['Seguridad', 'Estacionamiento'], features: ['Frente de 12 m', 'Alto flujo peatonal'],
      description: ['Local en planta baja sobre el corredor comercial de Andares, con frente de 12 metros y alto flujo peatonal.'],
      lat: 20.7101, lng: -103.4115, agent: 'ag1', publishedAt: '2026-09-01' }),
    P({ id: 'MX-1128', slug: 'departamento-en-providencia', title: 'Departamento en Providencia', type: 'Departamento', operation: 'renta', city: 'Guadalajara', state: 'Jalisco', location: 'Guadalajara, Jalisco', zones: ['guadalajara'],
      price: 26000, beds: 2, baths: 2, area: 105, parking: 1, year: 2021, image: I.interior, images: gallery(I.interior, I.gdl),
      amenities: ['Elevador', 'Gimnasio', 'Roof garden', 'Seguridad', 'Pet friendly'], features: ['Roof garden con asadores', 'A una calle de Av. Providencia'],
      description: ['Departamento en edificio boutique de Providencia con roof garden y gimnasio. Ubicación caminable, cerca de cafés y restaurantes.'],
      lat: 20.6913, lng: -103.3906, agent: 'ag1', publishedAt: '2026-09-21' }),
    P({ id: 'MX-1134', slug: 'casa-en-cumbres', title: 'Casa en Cumbres', type: 'Casa', city: 'Monterrey', state: 'Nuevo León', location: 'Monterrey, Nuevo León', zones: ['monterrey'],
      price: 5900000, beds: 3, baths: 2.5, area: 210, lot: 240, parking: 2, year: 2020, image: I.lomas, images: gallery(I.lomas, I.mty),
      amenities: ['Jardín', 'Seguridad', 'Estacionamiento', 'Pet friendly'], features: ['Privada con áreas verdes', 'Cocina abierta'],
      description: ['Casa en privada de Cumbres con áreas verdes y vigilancia. Distribución funcional para familias, con jardín trasero y cocina abierta.'],
      lat: 25.7288, lng: -100.3935, agent: 'ag2', publishedAt: '2026-06-02' }),
  ];

  const developments = [
    { slug: 'altura-polanco', name: 'Altura Polanco', city: 'Ciudad de México', state: 'CDMX', zone: 'cdmx', location: 'Polanco, Miguel Hidalgo', from: 9800000, units: 18, total: 64, progress: 72, delivery: 'Diciembre 2027', status: 'En construcción',
      image: I.cdmx, gallery: [I.cdmx, I.polanco, I.interior, I.hero], amenities: ['Roof garden', 'Gimnasio', 'Alberca', 'Seguridad', 'Elevador', 'Terraza'],
      tagline: 'Vivir a la altura de Polanco.', description: 'Torre residencial de 22 niveles sobre Ejército Nacional, con departamentos de uno a tres recámaras, roof garden con alberca y vistas abiertas a Chapultepec.',
      models: [{ type: 'Studio', area: 68, beds: 1, price: 9800000, available: 4 }, { type: 'Residencia A', area: 112, beds: 2, price: 14500000, available: 9 }, { type: 'Residencia B', area: 156, beds: 3, price: 19900000, available: 5 }, { type: 'Penthouse', area: 280, beds: 3, price: 38000000, available: 0 }] },
    { slug: 'torre-monterrey', name: 'Torre Monterrey', city: 'Monterrey', state: 'Nuevo León', zone: 'monterrey', location: 'Valle Oriente, San Pedro', from: 6200000, units: 31, total: 120, progress: 45, delivery: 'Junio 2028', status: 'Preventa',
      image: I.mty, gallery: [I.mty, I.lomas, I.polanco, I.interior], amenities: ['Alberca', 'Gimnasio', 'Seguridad', 'Elevador', 'Roof garden', 'Estacionamiento'],
      tagline: 'Una nueva línea en el perfil de Valle Oriente.', description: 'Proyecto de uso mixto con 120 residencias, lobby de doble altura y amenidades en el nivel 30 con vista a la Sierra Madre.',
      models: [{ type: 'Loft', area: 74, beds: 1, price: 6200000, available: 12 }, { type: 'Residencia', area: 128, beds: 2, price: 10400000, available: 14 }, { type: 'Residencia Plus', area: 176, beds: 3, price: 14800000, available: 5 }] },
    { slug: 'marea-los-cabos', name: 'Maréa Los Cabos', city: 'Los Cabos', state: 'Baja California Sur', zone: 'los-cabos', location: 'Corredor turístico, Los Cabos', from: 12400000, units: 9, total: 42, progress: 88, delivery: 'Marzo 2027', status: 'Entrega inmediata',
      image: I.cabo, gallery: [I.cabo, I.hero, I.interior, I.valle], amenities: ['Alberca', 'Terraza', 'Gimnasio', 'Seguridad', 'Amueblado'],
      tagline: 'Frente al Mar de Cortés.', description: 'Residencias frente al mar con terrazas privadas, alberca infinita y programa de renta vacacional administrado.',
      models: [{ type: 'Ocean 2', area: 145, beds: 2, price: 12400000, available: 4 }, { type: 'Ocean 3', area: 198, beds: 3, price: 16900000, available: 4 }, { type: 'Sky Villa', area: 320, beds: 4, price: 29500000, available: 1 }] },
    { slug: 'casa-nautica-cancun', name: 'Casa Náutica Cancún', city: 'Cancún', state: 'Quintana Roo', zone: 'cancun', location: 'Puerto Cancún', from: 7300000, units: 22, total: 58, progress: 30, delivery: 'Octubre 2028', status: 'Preventa',
      image: I.cun, gallery: [I.cun, I.cabo, I.interior, I.polanco], amenities: ['Alberca', 'Gimnasio', 'Roof garden', 'Seguridad', 'Elevador'],
      tagline: 'La marina como punto de partida.', description: 'Departamentos con vista a la marina y al mar Caribe, club de playa y muelle para residentes.',
      models: [{ type: 'Marina 1', area: 82, beds: 1, price: 7300000, available: 8 }, { type: 'Marina 2', area: 124, beds: 2, price: 10900000, available: 10 }, { type: 'Marina 3', area: 168, beds: 3, price: 14600000, available: 4 }] },
    { slug: 'centro-merida', name: 'Centro Mérida', city: 'Mérida', state: 'Yucatán', zone: 'merida', location: 'Centro Histórico, Mérida', from: 4100000, units: 11, total: 24, progress: 60, delivery: 'Agosto 2027', status: 'En construcción',
      image: I.mid, gallery: [I.mid, I.interior, I.valle, I.hero], amenities: ['Alberca', 'Jardín', 'Terraza', 'Seguridad'],
      tagline: 'Arquitectura contemporánea en el corazón colonial.', description: 'Veinticuatro residencias alrededor de patios con alberca, integradas a una casona restaurada del siglo XIX.',
      models: [{ type: 'Patio', area: 96, beds: 2, price: 4100000, available: 6 }, { type: 'Casona', area: 148, beds: 3, price: 6300000, available: 5 }] },
  ];

  const locations = [
    { slug: 'monterrey', name: 'Monterrey', region: 'Nuevo León', image: I.mty },
    { slug: 'guadalajara', name: 'Guadalajara', region: 'Jalisco', image: I.gdl },
    { slug: 'cdmx', name: 'CDMX', region: 'Ciudad de México', image: I.cdmx },
    { slug: 'cancun', name: 'Cancún', region: 'Quintana Roo', image: I.cun },
    { slug: 'merida', name: 'Mérida', region: 'Yucatán', image: I.mid },
  ];

  const locationOptions = [
    { value: 'cdmx', label: 'Ciudad de México' }, { value: 'monterrey', label: 'Monterrey' }, { value: 'guadalajara', label: 'Guadalajara' },
    { value: 'cancun', label: 'Cancún' }, { value: 'merida', label: 'Mérida' }, { value: 'los-cabos', label: 'Los Cabos' },
    { value: 'zapopan', label: 'Zapopan' }, { value: 'polanco', label: 'Polanco' }, { value: 'lomas', label: 'Lomas' },
    { value: 'queretaro', label: 'Querétaro' }, { value: 'puebla', label: 'Puebla' },
  ];
  const suggestions = [
    { value: 'polanco', label: 'Polanco', sub: 'Miguel Hidalgo, CDMX' }, { value: 'valle-real', label: 'Valle Real', sub: 'Zapopan, Jalisco' },
    { value: 'lomas', label: 'Lomas', sub: 'Monterrey, Nuevo León' }, { value: 'cancun', label: 'Cancún', sub: 'Quintana Roo' },
    { value: 'cdmx', label: 'Ciudad de México', sub: 'CDMX' }, { value: 'monterrey', label: 'Monterrey', sub: 'Nuevo León' },
    { value: 'san-pedro', label: 'San Pedro Garza García', sub: 'Nuevo León' }, { value: 'guadalajara', label: 'Guadalajara', sub: 'Jalisco' },
    { value: 'zapopan', label: 'Zapopan', sub: 'Jalisco' }, { value: 'condesa', label: 'Condesa', sub: 'Cuauhtémoc, CDMX' },
    { value: 'santa-fe', label: 'Santa Fe', sub: 'Álvaro Obregón, CDMX' }, { value: 'merida', label: 'Mérida', sub: 'Yucatán' },
    { value: 'los-cabos', label: 'Los Cabos', sub: 'Baja California Sur' }, { value: 'queretaro', label: 'Juriquilla', sub: 'Querétaro' },
    { value: 'puebla', label: 'Angelópolis', sub: 'Puebla' },
  ];
  const types = ['Casa', 'Departamento', 'Penthouse', 'Terreno', 'Oficina', 'Local', 'Desarrollo'];
  const priceOptions = [
    { value: '2000000', label: 'Hasta $2M' }, { value: '5000000', label: 'Hasta $5M' }, { value: '10000000', label: 'Hasta $10M' },
    { value: '20000000', label: 'Hasta $20M' }, { value: '50000000', label: 'Hasta $50M' }, { value: '', label: 'Sin límite' },
  ];
  const bedOptions = [{ value: '', label: 'Cualquiera' }, { value: '1', label: '1+' }, { value: '2', label: '2+' }, { value: '3', label: '3+' }, { value: '4', label: '4+' }, { value: '5', label: '5+' }];
  const amenityList = ['Alberca', 'Terraza', 'Jardín', 'Seguridad', 'Elevador', 'Gimnasio', 'Roof garden', 'Estacionamiento', 'Amueblado', 'Pet friendly'];
  const amenityIcons = { 'Alberca': 'Waves', 'Jardín': 'Trees', 'Terraza': 'Sun', 'Seguridad': 'ShieldCheck', 'Gimnasio': 'Dumbbell', 'Elevador': 'ArrowUpDown',
    'Cocina equipada': 'CookingPot', 'Estacionamiento': 'Car', 'Roof garden': 'Flower2', 'Bodega': 'Package', 'Amueblado': 'Sofa', 'Pet friendly': 'PawPrint' };
  const categories = [
    { type: 'Casa', label: 'Casas', icon: 'House' }, { type: 'Departamento', label: 'Departamentos', icon: 'Building2' },
    { type: 'Terreno', label: 'Terrenos', icon: 'LandPlot' }, { type: 'Oficina', label: 'Oficinas', icon: 'Briefcase' },
    { type: 'Desarrollo', label: 'Desarrollos', icon: 'Building' }, { type: 'Local', label: 'Locales', icon: 'Store' },
  ];

  const services = {
    buyers: [
      { icon: 'Search', title: 'Búsqueda personalizada', text: 'Definimos contigo zona, presupuesto y prioridades, y filtramos el mercado para presentarte solo opciones que cumplen.' },
      { icon: 'MessagesSquare', title: 'Asesoría inmobiliaria', text: 'Un asesor asignado te acompaña desde la primera visita hasta la firma ante notario.' },
      { icon: 'TrendingUp', title: 'Análisis de inversión', text: 'Comparamos precio por m², plusvalía histórica de la zona y rendimiento estimado de renta.' },
      { icon: 'CalendarCheck', title: 'Visitas', text: 'Coordinamos recorridos presenciales o por videollamada, agrupados para aprovechar tu tiempo.' },
      { icon: 'Handshake', title: 'Negociación', text: 'Revisamos documentación y negociamos precio y condiciones con base en comparables reales.' },
    ],
    owners: [
      { icon: 'Calculator', title: 'Valuación', text: 'Opinión de valor con comparables de la zona y recomendación de precio de salida.' },
      { icon: 'Camera', title: 'Fotografía', text: 'Sesión de fotografía arquitectónica, video y recorrido virtual de la propiedad.' },
      { icon: 'Megaphone', title: 'Marketing', text: 'Campaña digital segmentada por perfil de comprador y presentación editorial de la propiedad.' },
      { icon: 'Globe', title: 'Publicación', text: 'Publicación en Mextas y en los principales portales, con seguimiento semanal de desempeño.' },
      { icon: 'Users', title: 'Promoción', text: 'Difusión con nuestra red de compradores calificados y asesores aliados.' },
      { icon: 'FileCheck', title: 'Gestión de venta', text: 'Coordinamos visitas, ofertas, due diligence y cierre notarial.' },
    ],
  };

  const posts = [
    { slug: 'como-elegir-tu-primera-propiedad', title: 'Cómo elegir tu primera propiedad', category: 'Compra', read: '6 min', date: '12 sep 2026', image: I.valle,
      excerpt: 'Ubicación, presupuesto total y proyección a cinco años: los tres filtros que conviene aplicar antes de visitar.',
      body: ['Antes de comparar acabados, define el radio de ubicación que realmente funciona para tu día a día: trayectos, escuelas y servicios cercanos pesan más que un metro cuadrado adicional.', 'Calcula el presupuesto total, no solo el precio: gastos notariales, impuestos de adquisición y mobiliario pueden sumar entre 6% y 9% del valor.', 'Por último, piensa a cinco años. Una recámara extra o un estudio pueden evitar una segunda mudanza.'] },
    { slug: 'que-revisar-antes-de-comprar-una-casa', title: 'Qué revisar antes de comprar una casa', category: 'Compra', read: '8 min', date: '2 sep 2026', image: I.lomas,
      excerpt: 'Escrituras, libertad de gravamen, uso de suelo y estado de instalaciones: una lista práctica para tu visita.',
      body: ['Solicita copia de escrituras y un certificado de libertad de gravamen reciente. Verifica que el vendedor sea el propietario registrado.', 'Revisa predial y agua al corriente, y confirma que el uso de suelo coincida con lo que planeas.', 'En la visita, pon atención a humedad, instalaciones eléctricas y presión de agua. Un peritaje técnico es una inversión menor frente al valor de la propiedad.'] },
    { slug: 'comprar-o-rentar', title: '¿Comprar o rentar?', category: 'Finanzas', read: '5 min', date: '26 ago 2026', image: I.interior,
      excerpt: 'Una comparación honesta entre pago mensual, costo de oportunidad y flexibilidad.',
      body: ['Rentar ofrece flexibilidad y menor desembolso inicial; comprar construye patrimonio y protege contra aumentos de renta.', 'Compara la mensualidad hipotecaria con la renta equivalente y considera cuánto tiempo planeas quedarte: por debajo de cinco años, rentar suele ser más eficiente.'] },
    { slug: 'como-calcular-una-inversion-inmobiliaria', title: 'Cómo calcular una inversión inmobiliaria', category: 'Inversión', read: '7 min', date: '18 ago 2026', image: I.cabo,
      excerpt: 'Rendimiento bruto, neto y plusvalía: fórmulas simples para comparar oportunidades.',
      body: ['El rendimiento bruto es la renta anual dividida entre el precio de compra. El neto descuenta mantenimiento, predial, administración y periodos de vacancia.', 'Suma la plusvalía estimada de la zona para obtener el retorno total, y compáralo con alternativas de riesgo similar.'] },
  ];

  const fmt = (n) => '$' + Math.round(n).toLocaleString('en-US');
  const fmtPrice = (p) => fmt(p.price) + ' ' + (p.currency || 'MXN') + (p.operation === 'renta' ? ' / mes' : '');
  const fmtShort = (n) => n >= 1e6 ? '$' + (n / 1e6).toLocaleString('en-US', { maximumFractionDigits: 1 }) + 'M' : fmt(n);

  window.MXData = { IMG: I, agents, properties, developments, locations, locationOptions, suggestions, types, priceOptions, bedOptions, amenityList, amenityIcons, categories, services, posts, fmt, fmtPrice, fmtShort };
})();
