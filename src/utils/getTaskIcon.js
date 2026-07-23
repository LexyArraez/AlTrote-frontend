const KEYWORD_MAP = [
  { keywords: ['mesa', 'cocina', 'plato', 'comida', 'cenar'], icon: 'mdi:silverware-fork-knife', color: 'tertiary' },
  { keywords: ['perro', 'gato', 'mascota', 'alimentar'], icon: 'mdi:paw', color: 'secondary' },
  { keywords: ['leer', 'lectura', 'libro', 'estudiar', 'tarea', 'deberes'], icon: 'mdi:book-open-variant', color: 'primary' },
  { keywords: ['ropa', 'lavar', 'doblar', 'planchar'], icon: 'mdi:tshirt-crew-outline', color: 'tertiary' },
  { keywords: ['cama', 'dormitorio', 'habitacion'], icon: 'mdi:bed-outline', color: 'primary' },
  { keywords: ['basura', 'reciclar', 'reciclaje'], icon: 'mdi:trash-can-outline', color: 'secondary' },
  { keywords: ['planta', 'jardin', 'regar'], icon: 'mdi:flower-outline', color: 'secondary' },
  { keywords: ['baño', 'limpiar', 'limpieza', 'trapear', 'barrer'], icon: 'mdi:broom', color: 'tertiary' },
]

const DEFAULT_ICON = { icon: 'mdi:checkbox-marked-circle-outline', color: 'primary' }

export function getTaskIcon(title = '') {
  const normalized = title.toLowerCase()

  for (const entry of KEYWORD_MAP) {
    if (entry.keywords.some((word) => normalized.includes(word))) {
      return { icon: entry.icon, color: entry.color }
    }
  }

  return DEFAULT_ICON
}