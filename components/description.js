import styled from 'react-emotion';

const DescriptionComponent = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 3rem;
`;
export const Description = ({ children }) => (
  <DescriptionComponent>{children}</DescriptionComponent>
);

export default Description;
