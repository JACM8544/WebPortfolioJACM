import { defineStackbitConfig, SiteMapEntry } from "@stackbit/types";

export default defineStackbitConfig({
    stackbitVersion: "~0.6.0",
    modelExtensions: [
        {
            name: "PortafolioJACM", // Debe coincidir exactamente con Contentful
            type: "page",
            urlPath: "/{slug}" // Usa el campo slug para generar la URL
        }
    ],
    siteMap: ({ documents, models }) => {
        const pageModels = models.filter((m) => m.type === "page");

        return documents
            .filter((d) => pageModels.some((m) => m.name === d.modelName))
            .map((document) => ({
                stableId: document.id,
                urlPath: `/${document.slug || document.id}`,
                document,
                isHomePage: false
            })) as SiteMapEntry[];
    }
});
