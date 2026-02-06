import { assets } from "../data/sampleAssets"
import AssetCard from "../components/AssetCard"

export default function Home() {
  return (
    <section>
      <h1>INFER</h1>
      <p>AI-assisted crypto asset encyclopedia</p>

      <div>
        {assets.map(asset => (
          <AssetCard key={asset.slug} asset={asset} />
        ))}
      </div>
    </section>
  )
}
