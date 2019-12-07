import React from 'react';

import { FaHeart, FaMugHot } from 'react-icons/fa';
import { Footer } from './styles';

export default function Copyrights() {
  return (
    <>
      <Footer>
        <span>
          Made by{' '}
          <a
            href="https://leunardo.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Léu Almeida
          </a>{' '}
          with <FaHeart color="#FFF" size={14} /> and{' '}
          <FaMugHot color="#FFF" size={14} />
        </span>
      </Footer>
    </>
  );
}
