"use client";
import React from 'react'
import Navbar from '@/components/navbar'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LandingPage = () => {

  // Animação de aparecer suavemente na tela
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Executa quando 10% do item está visível
      }
    );

    const element = document.querySelector("#animateMe");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <main className='text-center'>
      <Navbar></Navbar>
      {/* imagem de jovens da landinpage */}
      <div className="w-full h-[90vh] sticky">
        <img src="/images/image.png" alt="Bem-vindo" className="w-full h-full object-cover" />
      </div>
      {/* Texto principal */}
      <motion.div className='flex justify-center '
        id="animateMe"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}>
        <div className='flex justify-center items-center flex-col gap-4 mt-24'>
          <svg height="115" width="85" fill="none" viewBox="0 0 85 115" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 13.8793C0.5 6.79999 6.20172 1.0665 13.2285 1.0665C20.2552 1.0665 25.957 6.79999 25.957 13.8793C25.957 20.9586 20.2552 26.6921 13.2285 26.6921C6.20172 26.6921 0.5 20.9586 0.5 13.8793ZM0.5 33.4236C0.5 31.5067 2.04331 29.9581 3.9404 29.9581H22.5166C24.4136 29.9581 25.957 31.5067 25.957 33.4236V52.1182C25.957 54.0352 24.4136 55.5837 22.5166 55.5837H3.9404C2.04331 55.5837 0.5 54.0352 0.5 52.1182V33.4236ZM0.5 62.8818C0.5 60.9648 2.04331 59.4163 3.9404 59.4163H22.5166C24.4136 59.4163 25.957 60.9648 25.957 62.8818V81.5764C25.957 83.4933 24.4136 85.0419 22.5166 85.0419H3.9404C2.04331 85.0419 0.5 83.4933 0.5 81.5764V62.8818ZM0.5 92.3399C0.5 90.4229 2.04331 88.8744 3.9404 88.8744H22.5166C24.4136 88.8744 25.957 90.4229 25.957 92.3399V111.034C25.957 112.951 24.4136 114.5 22.5166 114.5H3.9404C2.04331 114.5 0.5 112.951 0.5 111.034V92.3399ZM29.7715 33.4236C29.7715 31.5067 31.3148 29.9581 33.2119 29.9581H51.7881C53.6852 29.9581 55.2285 31.5067 55.2285 33.4236V52.1182C55.2285 54.0352 53.6852 55.5837 51.7881 55.5837H33.2119C31.3148 55.5837 29.7715 54.0352 29.7715 52.1182V33.4236ZM29.7715 3.96552C29.7715 2.04856 31.3148 0.5 33.2119 0.5H51.7881C53.6852 0.5 55.2285 2.04857 55.2285 3.96552V22.6601C55.2285 24.5771 53.6852 26.1256 51.7881 26.1256H33.2119C31.3148 26.1256 29.7715 24.5771 29.7715 22.6601V3.96552ZM29.7715 62.8818C29.7715 60.9648 31.3148 59.4163 33.2119 59.4163H51.7881C53.6852 59.4163 55.2285 60.9648 55.2285 62.8818V81.5764C55.2285 83.4933 53.6852 85.0419 51.7881 85.0419H33.2119C31.3148 85.0419 29.7715 83.4933 29.7715 81.5764V62.8818ZM59.043 62.8818C59.043 60.9648 60.5864 59.4163 62.4834 59.4163H81.0596C82.9567 59.4163 84.5 60.9648 84.5 62.8818V81.5764C84.5 83.4933 82.9567 85.0419 81.0596 85.0419H62.4834C60.5864 85.0419 59.043 83.4933 59.043 81.5764V62.8818ZM59.043 4.53202C59.043 2.61507 60.5864 1.0665 62.4834 1.0665H81.0596C82.9567 1.0665 84.5 2.61507 84.5 4.53202V23.2266C84.5 25.1436 82.9567 26.6921 81.0596 26.6921H62.4834C60.5864 26.6921 59.043 25.1436 59.043 23.2266V4.53202ZM29.7715 92.3399C29.7715 90.4229 31.3148 88.8744 33.2119 88.8744H51.7881C53.6852 88.8744 55.2285 90.4229 55.2285 92.3399V111.034C55.2285 112.951 53.6852 114.5 51.7881 114.5H33.2119C31.3148 114.5 29.7715 112.951 29.7715 111.034V92.3399Z" fill="#1E1E1E" stroke="#1E1E1E" />
          </svg>
          <p className='text-2xl font-light tracking-wide'>Gerenciamento de <span className='font-extrabold'>Estágio</span></p>
          <p className=''>Facilitando a comunicação entre <br />
            <span className='font-bold'>Alunos, Docentes</span> e <span className='font-bold'>Coordenação!</span></p>
        </div>
      </motion.div>
      {/* container verde divisor */}
      <div className='bg-verdemain rounded-2xl h-[25px] my-24'></div>
      {/* Nossa intenção */}
      <motion.div 
        id="animateMe"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}>
        <p className='my-24 font-bold text-lg'>Nossa Intenção</p>
        <div className='flex justify-center mb-24'>
          <p className='max-w-[700px]'>Estamos aqui para descomplicar o processo de estágio, garantindo uma plataforma completa para atender às necessidades de alunos professores e gestão!</p>
        </div>
      </motion.div>
    </main>
  )
};

export default LandingPage  