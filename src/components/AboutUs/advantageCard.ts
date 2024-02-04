interface AdvantageCardProps {
  id: number;
  title: string;
  description: string;
  colorClass?: string;
}

export const advantages = [
  {
    title: 'Kreatywne podejście i dbałość o szczegóły',
    description:
      'Specjaliści zapewniają doradztwo i kreatywność przy wyborze dekoracji balonowych, z dbałością o szczegóły',
  },
  {
    title: 'Materiały przyjazne dla środowiska',
    description:
      'Wykorzystywane są materiały najwyższej jakości, w tym biodegradowalne materiały balonowe, aby pozostawić jak najmniejszy ślad na środowisku.',
  },
  {
    title: 'Szeroka gama kolorów do personalizacji',
    description:
      'Balony i dekoracje są wybierane z szerokiej gamy kolorów, co pozwala spersonalizować wystrój na każdą okazję.',
  },
  {
    title: 'Gwarancja dostawy i montażu',
    description:
      'Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale także ich montaż, zapewniając klientom kompleksową obsługę.',
  },
];

export const generateAdvantageCards = (): AdvantageCardProps[] => {
  return advantages.map((item, index) => ({
    id: index + 1,
    title: item.title,
    description: item.description,
  }));
};