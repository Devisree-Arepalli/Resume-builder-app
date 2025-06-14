// app/components/SearchSection.tsx
import Sidebar from "@/components/Sidebar-Res";
import FeaturesSection2 from "@/components/FeatureSection2";
export default function SearchSection() {
  return (
    <div className="w-full flex flex-col items-center mt-15 gap-6">
      {/* Centered Title */}
      <div className="text-3xl font-semibold leading-9 text-center">
       Resume- Templates...
      </div>

      {/* Centered Search Box */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full max-w-sm rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      {/* Nav Tabs aligned from 280px left */}
      <div className="w-full mt-4 pl-[280px]">
        <nav className="flex gap-2 flex-wrap min-h-[32px]">
          {[
            "Pro", "Business", "Programming", "Engineering", "Marketing",
            "Design", "Student", "Medical", "Finance", "Education", "Legal", "Other"
          ].map((label, i) => (
            <a key={i} href={`/dashboard/samples/${label.toLowerCase()}`}>
              <div className="rounded-md bg-tab-normal hover:bg-tab-hover focus:bg-tab-focus flex items-center h-6 px-2 text-xs cursor-pointer text-gray-900 font-semibold uppercase leading-4 font-sans-pro tracking-[.12px] bg-grey-100 data-[active=true]:bg-rezi-blue-600 data-[active=true]:text-white">
                <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                  {label}
                </span>
              </div>
            </a>
          ))}
        </nav>
      </div>
      <FeaturesSection2/>
    </div>
  );
}
