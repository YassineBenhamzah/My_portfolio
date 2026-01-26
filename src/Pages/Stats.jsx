import React from "react";

export default function Stats() {
  const stats = [
    { label: "Projects Completed", value: 12 },
    { label: "Frameworks Used", value: 5 },
    { label: "Years of Experience", value: 3 },
  ];

  return (
    <section className="text-white w-full flex items-center justify-center px-0 md:px-20">
      <div
        className={`
          w-full flex flex-col md:flex-row items-center justify-around gap-6 md:gap-16
          p-6 md:p-12
          bg-gray-900
          md:shadow-2xl
          rounded-none md:rounded-lg
          max-w-full md:max-w-6xl
        `}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl md:text-5xl font-extrabold text-green-500">{stat.value}</p>
            <p className="text-gray-300 mt-2 text-lg md:text-xl">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
