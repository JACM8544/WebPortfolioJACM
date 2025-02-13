import { defineStackbitConfig, SiteMapEntry } from "@stackbit/types";

export default defineStackbitConfig({
    stackbitVersion: "~0.6.0",
    contentSources: [
        {
            type: "contentful",
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN
        }
    ],
    modelExtensions: [
        {
            name: "PortafolioJACM", // Asegúrate de que este nombre coincida con Contentful
            type: "page",
            urlPath: "/{slug}"
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
