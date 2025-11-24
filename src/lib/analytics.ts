// Funções auxiliares para rastreamento do Google Analytics
// Essas funções são chamadas diretamente do window, que foram definidas no index.html

declare global {
  interface Window {
    gtag: (command: string, eventName: string, params?: Record<string, any>) => void;
    beginCheckout: () => void;
    purchaseApproved: (valor: number, transacao: string) => void;
    viewUpsell: () => void;
    acceptUpsell: () => void;
    rejectUpsell: () => void;
    signupEvent: () => void;
    loginEvent: () => void;
  }
}

export const trackBeginCheckout = () => {
  if (typeof window !== 'undefined' && window.beginCheckout) {
    window.beginCheckout();
  }
};

export const trackPurchaseApproved = (valor: number, transacao: string) => {
  if (typeof window !== 'undefined' && window.purchaseApproved) {
    window.purchaseApproved(valor, transacao);
  }
};

export const trackViewUpsell = () => {
  if (typeof window !== 'undefined' && window.viewUpsell) {
    window.viewUpsell();
  }
};

export const trackAcceptUpsell = () => {
  if (typeof window !== 'undefined' && window.acceptUpsell) {
    window.acceptUpsell();
  }
};

export const trackRejectUpsell = () => {
  if (typeof window !== 'undefined' && window.rejectUpsell) {
    window.rejectUpsell();
  }
};

export const trackSignup = () => {
  if (typeof window !== 'undefined' && window.signupEvent) {
    window.signupEvent();
  }
};

export const trackLogin = () => {
  if (typeof window !== 'undefined' && window.loginEvent) {
    window.loginEvent();
  }
};

// Evento customizado para visualização de produto
export const trackProductView = (productName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      items: [{
        item_name: productName
      }]
    });
  }
};
