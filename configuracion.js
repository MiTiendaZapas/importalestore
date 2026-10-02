/*
 * CONFIGURACIÓN DE LA TIENDA: ImportAle Store (clienta Alejandra)
 * ---------------------------------------------------------------------------
 * Tienda de cliente: usa el mismo catálogo y el mismo motor que L.A IMP, con
 * su propio nombre, colores, contacto y precios (precios-minorista.json).
 *
 * Solo tienda al público (sin versión por mayor). Colores neutros, iguales
 * a los de ClienteA (todas las tiendas de clientes usan los mismos). Lo marcado con "COMPLETAR" todavía no lo sabemos.
 */
window.STORE_CONFIG = {
  id: "importalestore",
  name: "ImportAle Store",
  tagline: "Zapatillas importadas de las mejores marcas",

  // Catálogo, fotos y motor: se toman del repositorio principal (no se copian).
  catalogBase: "/catalogo/",
  catalogOrder: "marca-modelo",
  catalogHeader: "compacto",

  // Igual que las otras tiendas de clientes: solo stock del proveedor.
  includeHouseStock: false,

  logo: {
    small: "marca/logo-160.webp",
    large: "marca/logo-512.webp",
    alt: "ImportAle Store",
  },

  // Tema neutro. Para personalizarlo alcanza con cambiar estos colores.
  theme: {
    fonts: {
      stylesheet: "/motor/fuentes/fuentes.css",
      display: "'Barlow Condensed', 'Arial Narrow', sans-serif",
      body: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
    },
    colors: {
      "bg": "#f5f5f3",
      "surface": "#ffffff",
      "surface-2": "#ececea",
      "border": "#d9d9d5",
      "text": "#18181b",
      "text-muted": "#5b5b63",
      "accent": "#18181b",
      "accent-strong": "#18181b",
      "accent-contrast": "#ffffff",
      "accent-gradient": "#18181b",
      "danger": "#c62828",
      "success": "#2e7d32",
    },
    colorScheme: "light",
    // Modo oscuro: abre en blanco, salvo que el celular o la computadora del
    // cliente esté configurado en oscuro. Con el botón del header se cambia a mano.
    darkColors: {
      "bg": "#111113",
      "surface": "#1a1a1d",
      "surface-2": "#26262a",
      "border": "#34343a",
      "text": "#f4f4f5",
      "text-muted": "#a1a1aa",
      "accent": "#f4f4f5",
      "accent-strong": "#ffffff",
      "accent-contrast": "#111113",
      "accent-gradient": "#f4f4f5",
      "danger": "#ef5350",
      "success": "#66bb6a",
    },
    density: "compacta",
  },

  // El mensaje del pedido no dice "El envío se coordina aparte".
  orderShippingNote: false,

  contact: {
    whatsappQueries: "5491122502172",
    whatsappOrders: "5491122502172",
  },

  // COMPLETAR: redes de la clienta. Si la lista está vacía, no se muestran.
  social: [],

  channels: {
    minorista: {
      label: "Tienda",
      page: "./",
      prices: "precios-minorista.json",
      share: "link",
      hero: {
        showSocial: true,
        // Accesos por marca con su logo, arriba del catálogo.
        brandAccess: true,
        // Fila "Últimos pares": modelos con 3 pares o menos (se arma sola con el stock).
        lastPairs: true,
        text: "Elegí tu modelo y tu talle, armá el pedido y envialo por WhatsApp. Te confirmamos el stock y coordinamos la entrega.",
        points: [
          { icon: "chat", text: "Sin pago por la web: confirmás por WhatsApp" },
        ],
      },
    },
  },

  pages: [
    { id: "como-comprar", label: "Cómo comprar", file: "como-comprar/", menu: true },
  ],

  sizeChart: null,

  // En el pedido no se piden datos: el envío se coordina por WhatsApp.
  shipping: {
    methods: {
      envio: {
        label: "Envío a coordinar",
        icon: "truck",
        summary: "Coordinamos el envío y su costo por WhatsApp.",
      },
    },
  },

  howToBuy: {
    title: "Cómo comprar",
    lead: "Armás el pedido en la tienda y lo terminamos por WhatsApp. No se paga nada en la web.",
    steps: [
      { title: "Elegí modelo y talle", text: "Tocá el talle en cada modelo y agregalo a tu pedido." },
      { title: "Revisá tu pedido", text: "En “Tu pedido” ves los modelos que elegiste y el total." },
      { title: "Envialo por WhatsApp", text: "Tocás “Enviar pedido por WhatsApp” y se arma el mensaje con todo el detalle." },
      { title: "Confirmamos y coordinamos", text: "Verificamos el stock, te confirmamos el pedido y coordinamos el pago y la entrega." },
    ],
  },

  platformPromo: { enabled: false },
  platformCredit: {
    enabled: true,
    text: "¿Querés una tienda así?",
    whatsapp: "5491153773771",
    message: "¡Hola! Vi la tienda de {tienda} y quiero una tienda así para mi negocio.",
  },

  footer: {
    description: "Zapatillas importadas de las mejores marcas. Pedidos por WhatsApp.",
    legal: "Los pedidos se confirman por WhatsApp. No se realizan cobros en este sitio.",
  },

  categories: {
    zapatillas: "Zapatillas",
    ninos: "Niños",
    ojotas: "Ojotas",
    indumentaria: "Indumentaria",
  },
};
