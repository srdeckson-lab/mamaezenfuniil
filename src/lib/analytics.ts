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
    changeOfMind: () => void;
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

// Evento: Cliente mudou de ideia
export const trackChangeOfMind = () => {
  if (typeof window !== 'undefined' && window.changeOfMind) {
    window.changeOfMind();
  }
};

// Evento: Visualização de página
export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};

// Evento: Lead iniciou o formulário
export const trackFormStart = (formName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_start', {
      form_name: formName
    });
  }
};

// Evento: Lead submetido com sucesso
export const trackLeadSubmitted = (leadData: { name: string; email: string; phone: string }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      lead_name: leadData.name,
      lead_email: leadData.email
    });
  }
};

// Evento: Quiz iniciado
export const trackQuizStarted = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'quiz_started');
  }
};

// Evento: Etapa do quiz concluída
export const trackQuizStep = (stepNumber: number, stepTitle: string, answer: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'quiz_step', {
      step_number: stepNumber,
      step_title: stepTitle,
      answer: answer
    });
  }
};

// Evento: Quiz completado
export const trackQuizCompleted = (totalSteps: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'quiz_completed', {
      total_steps: totalSteps
    });
  }
};

// Evento: Botão clicado
export const trackButtonClick = (buttonName: string, location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'button_click', {
      button_name: buttonName,
      click_location: location
    });
  }
};
