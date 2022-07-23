export function VerticalTabs({ tabs, selected, onChange, className, iconClassName }) {
  return (
    <div className="">
      <ul
        className=""
      >
        {tabs.map(tab => (
          <li 
            key={tab.label} 
            className={`flex mb-4 items-start last:mb-0 p-4 rounded-xl hover:bg-slate-50 ${selected === tab.label ? 'bg-slate-50' : 'hover:cursor-pointer'}`}
            onClick={() => onChange(tab.label)}
          >
            <button
              type="button"
              className={`group text-sm font-semibold flex items-center ${
                selected === tab.label ? className : ''
              }`}
            >
              <svg
                width="48"
                height="48"
                fill="none"
                aria-hidden="true"
                className={`${
                  selected === tab.label
                    ? iconClassName
                    : 'text-slate-300 group-hover:text-slate-400'
                }`}
              >
                {tab.icon(selected === tab.label)}
              </svg>
            </button>
            <div className="ml-4 grow">
              <span className={`block mt-2 text-xl ${selected === tab.label && 'font-bold'} ${selected === tab.label && className}`}>
                {tab.label}
              </span>
              <div className={`mt-2 ${selected !== tab.label ? 'hidden' : ''}`}>
                {tab.content}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
