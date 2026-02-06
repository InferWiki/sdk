import { getAssetBySlug } from "../../../lib/infer"

export default function AssetPage({ params }: { params: { slug: string } }) {
  const asset = getAssetBySlug(params.slug)

  if (!asset) return <div>Asset not found</div>

  return (
    <article>
      <h1>{asset.name}</h1>
      <p>{asset.description}</p>
      <code>{asset.contract}</code>
    </article>
  )
}
