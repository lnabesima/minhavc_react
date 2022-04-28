export const NavbarData = [
  { id: 'home', label: 'Home', path: '/home' },
  {
    id: 'plans',
    label: 'Meus Planos',
    path: '/plans',
    subMenu: [
      { id: 'internet', label: 'Internet', path: '/plans/internet' },
      { id: 'phone', label: 'Telefone', path: '/plans/phone' },
      { id: 'tv', label: 'TV', path: '/plans/tv' },
    ],
  },
  {
    id: 'bills',
    label: 'Faturas',
    path: '/bills',
    subMenu: [
      { id: 'actual', label: 'Fatura Atual', path: '/bills/actual' },
      {
        id: 'history',
        label: 'Histórico de Pagamentos',
        path: '/bills/history',
      },
      { id: 'invoice', label: 'Notas Fiscais', path: '/bills/invoice' },
      {
        id: 'clearance',
        label: 'Declaração de Quitação de Débitos',
        path: '/bills/clearance',
      },
    ],
  },
  {
    id: 'support',
    label: 'Atendimentos',
    path: '/support',
    subMenu: [
      { id: 'support', label: 'Suporte', path: '/support/support' },
      { id: 'address', label: 'Mudança de Endereço', path: '/support/address' },
      { id: 'spot', label: 'Mudança de Ponto Interno', path: '/support/spot' },
      {
        id: 'holder',
        label: 'Mudança de Titularidade',
        path: '/support/holder',
      },
      {
        id: 'duedate',
        label: 'Mudança de Vencimento',
        path: '/support/duedate',
      },
      {
        id: 'appointments',
        label: 'Meus Atendimentos',
        path: '/support/appointments',
      },
    ],
  },
  { id: 'suggestions', label: 'Sugestões', path: '/suggestions' },
  { id: 'faq', label: 'Ajuda', path: '/faq' },
];
