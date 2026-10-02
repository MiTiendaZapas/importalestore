/*
 * CONFIGURACIÓN DE LA TIENDA: ImportAle Store (clienta Alejandra)
 * ---------------------------------------------------------------------------
 * Tienda de cliente: usa el mismo catálogo y el mismo motor que L.A IMP, con
 * su propio nombre, colores, contacto y precios (precios-minorista.json).
 *
 * Solo tienda al público (sin versión por mayor). Colores negro y dorado,
 * como su logo. Lo marcado con "COMPLETAR" todavía no lo sabemos.
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

  // Negro y dorado, como el logo. Abre en negro; con el botón del header se pasa a blanco.
  theme: {
    fonts: {
      stylesheet: "/motor/fuentes/fuentes.css",
      display: "'Barlow Condensed', 'Arial Narrow', sans-serif",
      body: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
    },
    colors: {
      "bg": "#f7f5f1",
      "surface": "#ffffff",
      "surface-2": "#efebe4",
      "border": "#ddd6ca",
      "text": "#141414",
      "text-muted": "#5e5a54",
      "accent": "#141414",
      "accent-strong": "#7a5c30",
      "accent-contrast": "#ffffff",
      "accent-gradient": "#141414",
      "danger": "#c62828",
      "success": "#2e7d32",
    },
    colorScheme: "light",
    defaultMode: "dark",
    darkColors: {
      "bg": "#0b0b0c",
      "surface": "#161616",
      "surface-2": "#222222",
      "border": "#3a3328",
      "text": "#f5f1ea",
      "text-muted": "#b3aa9c",
      "accent": "#d6b98a",
      "accent-strong": "#e6cda3",
      "accent-contrast": "#0b0b0c",
      "accent-gradient": "#d6b98a",
      "danger": "#ef5350",
      "success": "#66bb6a",
    },
    density: "compacta",
  },

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
