import { SectionWrapp, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapp>
      <Title>{title}</Title>
      {children}
    </SectionWrapp>
  );
};
