import type { MetadataRoute } from "next";
import { site } from "@/content/site";
export default function sitemap():MetadataRoute.Sitemap{return ["","/features","/pricing","/about","/contact","/privacy","/terms"].map(path=>({url:`${site.url}${path}`,lastModified:new Date(),changeFrequency:path===""?"weekly":"monthly",priority:path===""?1:0.7}));}
