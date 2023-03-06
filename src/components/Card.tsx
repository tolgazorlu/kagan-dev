

export default function Card({asset}) {
  return (
    
<div className="w-full max-w-sm border border-gray-200 rounded-lg shadow">
    <a href={asset.href}>
        <img className="rounded-t-lg" src={asset.url} alt="product image" />
    </a>
</div>

  )
}
