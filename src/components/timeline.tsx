type Item={company:string;role:string;start:string;end:string;highlights:string[]};
export default function Timeline({items}:{items:Item[]}) {
  return (
    <ol className="relative border-l pl-4 space-y-6">
      {items.map((it,i)=>(
        <li key={i}>
          <div className="text-sm text-slate-500">{it.start} – {it.end}</div>
          <div className="font-medium">{it.role} · {it.company}</div>
          <ul className="mt-1 list-disc pl-5 text-sm text-slate-700">
            {it.highlights.map((h,j)=><li key={j}>{h}</li>)}
          </ul>
        </li>
      ))}
    </ol>
  );
}
