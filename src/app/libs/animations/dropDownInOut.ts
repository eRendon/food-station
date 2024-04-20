import { animate, state, style, transition, trigger } from '@angular/animations'

export const dropdownAnimation = trigger('dropdownAnimation', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateY(-20px)', // Mueve el menú hacia arriba al ocultarlo
    display: 'none' // Asegura que el menú no sea visible cuando esté oculto
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateY(0)', // No se aplica ninguna transformación cuando el menú está visible
    display: 'block' // Asegura que el menú sea visible cuando esté desplegado
  })),
  transition('hidden => visible', [
    animate('300ms ease-in-out') // Animación al desplegar el menú
  ]),
  transition('visible => hidden', [
    animate('300ms ease-in-out') // Animación al ocultar el menú
  ])
]);
