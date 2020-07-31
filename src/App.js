import React from 'react';
import Menu from './components/Menu';
import styled from 'styled-components';
import dados_iniciais from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain/index';
import Carousel from './components/Carousel/index';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  background: var(--grayDark);

  padding-top:94px;

  @media(max-width: 800px){
    padding-top: 40px;
  }

`

function App(){
  return(
  <AppWrapper>
    <Menu />
    <BannerMain
    videoTitle={dados_iniciais.categorias[0].videos[0].title}
    url={dados_iniciais.categorias[0].videos[0].url}
    videoDescription=
    {"O que é Front-End? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
    />

    <Carousel
    ignoreFirstVideo
    category={dados_iniciais.categorias[0]}
    />

    <Carousel
    ignoreFirstVideo
    category={dados_iniciais.categorias[1]} />

    <Carousel 
      ignoreFirstVideo
      category={dados_iniciais.categorias[2]}
    />
    <Carousel 
      ignoreFirstVideo
      category={dados_iniciais.categorias[3]}
    />
    <Carousel 
      ignoreFirstVideo
      category={dados_iniciais.categorias[4]}
    />
    <Carousel 
    ignoreFirstVideo
    category={dados_iniciais.categorias[5]}
    />
    <Footer/>
  </AppWrapper>
  )
}

export default App;
