import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(name: string): string {
    if (!name) {
      return ''
    }

    const words = name.split(' ')
    let initials = words[0].charAt(0)

    if (words.length > 1) {
      for (let i = 1; i < words.length; i++) {
        initials += words[i].charAt(0)
      }
    }

    return initials.toUpperCase()
  }

}
