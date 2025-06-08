// components/BannerSection.tsx

export default function BannerSection() {
  return (
    <section className="py-1 bg-white border-b">
      <div className="px-2 sm:px-4 lg:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-1 md:space-y-0">
          <div className="flex items-center space-x-1">
            <img
              src="https://cdn.prod.website-files.com/62f0854c1cef28185535ab61/639817eac9353e9ca8a33058_data_quality_green.svg"
              alt="Money-back"
              width={12}
              className="opacity-75"
              loading="lazy"
            />
            <span className="text-xs text-gray-500">100% money-back guarantee</span>
          </div>

          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, idx) => (
              <img
                key={idx}
                src="https://cdn.prod.website-files.com/62f0854c1cef28185535ab61/65b8f43249e89e0ba5c6b1d4_star-solid.svg"
                alt="Star"
                width={10}
                className="opacity-75"
                loading="lazy"
              />
            ))}
            <span className="text-xs text-gray-500">
              Used by 3,365,312 job seekers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
