import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({ name: 'imagen' })
export class ImagenPipe implements PipeTransform {
  transform(heroe: Heroe): string {
    if (!heroe) return 'assets/no-image.png';

    // 1) Si hay URL explícita, úsala (http(s) o ruta local)
    if (heroe.alt_img && heroe.alt_img.trim() !== '') {
      return heroe.alt_img;
    }

    // 2) Para los héroes “clásicos” del dataset, usa /assets/heroes/{id}.jpg
    if (heroe.id && heroe.id.includes('-')) {
      return `assets/heroes/${heroe.id}.jpg`;
    }

    // 3) Para IDs nuevos (p.ej. qRl0I3s), muestra imagen por defecto
    return 'assets/no-image.png';
  }
}
