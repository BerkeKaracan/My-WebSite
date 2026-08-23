import SectionLabel from "@/components/SectionLabel";
import {
  coreTechs,
  processSkills,
  tools,
  education,
  languages,
  certifications,
} from "@/data/profile";

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-zinc-500 dark:text-zinc-500 mb-4">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="px-3 py-1.5 text-xs font-medium rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <>
      <section id="skills" className="py-20 md:py-28 border-t border-zinc-200 dark:border-zinc-800">
        <SectionLabel index="02" title="Skills & Stack" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <SkillGroup title="Core" items={coreTechs} />
          <SkillGroup title="Tools" items={tools} />
          <SkillGroup title="Process" items={processSkills} />
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-zinc-200 dark:border-zinc-800">
        <SectionLabel index="03" title="Background" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-zinc-500 mb-3">
              Education
            </h3>
            <p className="text-base font-medium text-zinc-900 dark:text-zinc-100">
              {education.degree}
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {education.school} · {education.period}
            </p>
          </div>
          <div>
            <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-zinc-500 mb-3">
              Languages
            </h3>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex justify-between text-sm border-b border-zinc-100 dark:border-zinc-800/80 pb-2"
                >
                  <span className="text-zinc-800 dark:text-zinc-200">{lang.name}</span>
                  <span className="text-zinc-500 dark:text-zinc-500">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-zinc-500 mb-4">
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <a
                key={cert.title}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-[border-color] duration-200"
              >
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:underline underline-offset-4">
                  {cert.title}
                </p>
                <p className="mt-1 font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
                  {cert.issuer} · {cert.year}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
