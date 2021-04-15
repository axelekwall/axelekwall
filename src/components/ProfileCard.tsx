import styled from '@emotion/styled';
import Image from 'next/image';
import { FC } from 'react';

const Row = styled.div`
  margin: 25px 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  ${({ theme }): string => theme.media.phone} {
    flex-direction: column-reverse;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  max-width: 400px;
  ${({ theme }): string => theme.media.phone} {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 20px;
  width: 100%;
  ${({ theme }): string => theme.media.phone} {
    flex-direction: row-reverse;
    padding: 0;
  }
`;

const Text = styled.h3`
  font-family: ${({ theme }): string => theme.fonts['sans']};
`;

const ProfileCard: FC = ({ children }) => (
  <Row>
    <ImageWrapper>
      <Image
        priority
        sizes="(min-width: 0px) 400px"
        layout="responsive"
        width="400"
        height="400"
        src="/media/me_image.jpg"
        alt="Picture of me"
      />
    </ImageWrapper>
    <TextWrapper>
      <Text>{children}</Text>
    </TextWrapper>
  </Row>
);

export default ProfileCard;
