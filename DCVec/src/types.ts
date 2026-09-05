export type RequestCategory = "Herramientas" | "Traslados" | "Información" | "Compañía";

export type HelpRequest = {
  id: string;
  title: string;
  description: string;
  category: RequestCategory;
  author: string;
  distance: string;
  time: string;
  urgent?: boolean;
};
