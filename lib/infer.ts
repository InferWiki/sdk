import { assets } from "../data/sampleAssets"

export function getAssetBySlug(slug: string) {
  return assets.find(a => a.slug === slug)
}
