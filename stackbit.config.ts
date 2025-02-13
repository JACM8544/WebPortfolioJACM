import { defineStackbitConfig, SiteMapEntry } from "@stackbit/types";

export default defineStackbitConfig({
    stackbitVersion: "~0.7.0",
    ssgName: "astro",
    nodeVersion: "16",

    contentSources: [
        {
            type: "contentful",
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
            environment: process.env.CONTENTFUL_ENVIRONMENT,
        },
    ],

    modelExtensions: [
        {
            name: "Page",
            type: "page",
            urlPath: "/{slug}", // Usa el `slug` para la URL
            fields: {
                slug: { type: "string", required: true },
                title: { type: "string", required: true },
                body: { type: "richText", required: true },
            },
        },
    ],

    siteMap: ({ documents, models }) => {
        const pageModels = models.filter((m) => m.type === "page");

        return documents
            .filter((d) => pageModels.some((m) => m.name === d.modelName))
            .map((document) => ({
                stableId: document.id,
                urlPath: `/${document.slug}`,
                document,
                isHomePage: false,
            }))
            .filter(Boolean) as SiteMapEntry[];
    },
});
