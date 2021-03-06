import { FC, useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface Props {
  image: string;
  slug: string;
  alt?: string;
}

interface TextWrapperProps {
  hover: boolean;
}

const Row = styled.div`
  cursor: pointer;
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
  position: relative;
  height: 125px;
  ${({ theme }): string => theme.media.phone} {
    height: 200px;
    width: 100%;
  }
`;

const TextWrapper = styled.div<TextWrapperProps>`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 20px;
  width: 100%;
  background-color: ${({ hover }): string => (hover ? 'black' : 'white')};
  color: ${({ hover }): string => (!hover ? 'black' : 'white')};
  text-align: left;
  ${({ theme }): string => theme.media.phone} {
    flex-direction: row-reverse;
    text-align: right;
    padding: 0;
  }
`;

const WorkCard: FC<Props> = ({ image, children, slug, alt }) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  return (
    <Row
      onMouseEnter={(): void => {
        setHover(true);
      }}
      onMouseLeave={(): void => {
        setHover(false);
      }}
      onClick={(): void => {
        router.push(slug);
      }}
    >
      <ImageWrapper>
        <Image
          sizes="(min-width: 0px) 500px"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src={image}
          alt={alt}
        />
      </ImageWrapper>
      <TextWrapper hover={hover}>{children}</TextWrapper>
    </Row>
  );
};

export default WorkCard;
