// Scroll Reveal
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

export const useHomeScrollReveal = () => {
  useEffect(() => {
    // Configuración general de ScrollReveal
    const sr = ScrollReveal({
      duration: 800,
      easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)', // Animación elástica suave
      reset: false,
      once: true
    })

    sr.reveal('.hero__avatar', {
      duration: 400,
      scale: 0.85,
      opacity: 0,
      origin: 'right',
      delay: 200,
      afterReveal: (el) => {
        el.style.animation = 'floating 3s ease-in-out infinite'
      }
    })

    sr.reveal('.hero__title', {
      scale: 1.2,
      opacity: 0,
      origin: 'left',
      delay: 400
    })

    sr.reveal('.hero__subtitle', {
      scale: 0.9,
      opacity: 0,
      origin: 'bottom',
      delay: 600
    })

    sr.reveal('.hero__text', {
      opacity: 0,
      distance: '50px',
      origin: 'bottom',
      delay: 800
    })

    sr.reveal('.social__icon', {
      opacity: 0,
      scale: 0.8,
      distance: '20px',
      origin: 'bottom',
      delay: 400,
      interval: 200
    })
  }, [])
}

export const useAboutScrollReveal = () => {
  useEffect(() => {
    // Configuración general de ScrollReveal
    const sr = ScrollReveal({
      duration: 800,
      reset: false,
      once: true
    })

    sr.reveal('.description__text', {
      duration: 1200,
      opacity: 0,
      origin: 'right',
      delay: 100,
      scale: 1.5
    })

    sr.reveal('.about__buttons', {
      distance: '600px',
      origin: 'left',
      delay: 400
    })
  }, [])
}

export const useProjectsScrollReveal = () => {
  useEffect(() => {
    // Configuración general de ScrollReveal
    const sr = ScrollReveal({
      duration: 800,
      reset: false,
      once: true
    })

    sr.reveal('.project__frontend', {
      duration: 900,
      distance: '600px',
      opacity: 0,
      origin: 'right',
      delay: 100
    })

    sr.reveal('.project__backend', {
      duration: 900,
      distance: '600px',
      opacity: 0,
      origin: 'left',
      delay: 300
    })
  }, [])
}

export const useContactScrollReveal = () => {
  useEffect(() => {
    // Configuración general de ScrollReveal
    const sr = ScrollReveal({
      duration: 800,
      reset: false,
      once: true
    })

    sr.reveal('.form__content', {
      duration: 900,
      distance: '600px',
      opacity: 0,
      origin: 'bottom',
      delay: 100
    })

    sr.reveal('.project__backend', {
      duration: 900,
      distance: '600px',
      opacity: 0,
      origin: 'left',
      delay: 300
    })

    sr.reveal('.social__icon', {
      opacity: 0,
      scale: 0.8,
      distance: '20px',
      origin: 'bottom',
      delay: 400,
      interval: 200
    })
  }, [])
}
