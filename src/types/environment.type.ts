export type Environment = {
  production: boolean;
  application: {
    name: string;
    version: string;
    tailwind: string;
    fontawesome: string;
    iconify: string;
    primeng: string;
    ngrx: string;
  };
}
