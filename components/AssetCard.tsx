import Link from "next/link"

export default function AssetCard({ asset }: any) {
  return (
    <Link href={`/assets/${asset.slug}`}>
      <div>
        <h3>{asset.name}</h3>
        <p>{asset.symbol}</p>
      </div>
    </Link>
  )
}
