export default function Marquee() {
  const items = [
    "Product Design",
    "Development",
    "Creative Technology",
    "UX / UI",
    "Machine Learning",
    "Visual Storytelling",
  ];

  return (
    <div className="overflow-hidden border-y border-black/10 bg-[#f8f6f4] py-5">
      <div className="flex min-w-max animate-[marquee_24s_linear_infinite] items-center whitespace-nowrap">
        {[...items, ...items].map(
          (item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center"
            >
              <span
                className={`mx-7 text-[11px] uppercase tracking-[0.2em] ${
                  index % 3 === 1
                    ? "font-editorial text-base italic normal-case tracking-normal text-[#e83e8c]"
                    : "text-black/45"
                }`}
              >
                {item}
              </span>

              <span className="text-[8px] text-[#e83e8c]">
                ✦
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}