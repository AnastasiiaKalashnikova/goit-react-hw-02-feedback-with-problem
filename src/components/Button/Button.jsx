import { Btn } from './Button.styled';

export const Button = ({ children, onUpdate }) => {
  return (
    <Btn type="button" onClick={onUpdate}>
      {children}
    </Btn>
  );
};
