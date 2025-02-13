import { defineStackbitConfig, SiteMapEntry } from "@stackbit/types";

export default defineStackbitConfig({
    stackbitVersion: "~0.6.0", // Asegurar compatibilidad
    modelExtensions: [
        { name: "PortafolioJACM", type: "page", urlPath: "/{slug}" } // Ajustar la URL dinámica
    ],
    siteMap: ({ documents, models }) => {
        // 1. Filtrar los modelos de contenido que son páginas
        const pageModels = models.filter((m) => m.type === "page");

        return documents
            // 2. Filtrar solo documentos de los modelos de tipo "page"
            .filter((d) => pageModels.some((m) => m.name === d.modelName))
            // 3. Mapear cada documento a una URL
            .map((document) => {
                const urlModel = (() => {
                    switch (document.modelName) {
                        case "PortafolioJACM":
                            return "portafolio";
                        default:
                            return null;
                    }
                })();

                return urlModel
                    ? {
                        stableId: document.id,
                        urlPath: `/${urlModel}/${document.id}`, // URL dinámica
                        document,
                        isHomePage: false
                    }
                    : null;
            })
            .filter(Boolean) as SiteMapEntry[];
    }
});
