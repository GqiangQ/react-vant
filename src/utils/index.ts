export const createNamespace = (name: string|undefined|null, basename:string='van') => {
  return name ? `${basename}-${name}`:''
}