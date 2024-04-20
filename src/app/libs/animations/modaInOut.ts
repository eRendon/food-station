import { animate, state, style, transition, trigger } from '@angular/animations'

export const modalAnimations = trigger('modalAnimation', [
  state('open', style({
    opacity: 1,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1)'
  })),
  state('closed', style({
    opacity: 0,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(0.5)',
    visibility: 'hidden'
  })),
  transition('closed => open', [
    animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)')
  ]),
  transition('open => closed', [
    animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)')
  ])
]);
