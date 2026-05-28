import { Link, useParams } from 'react-router';
import SectionLabel from '@/components/SectionLabel';

const ventures = [
  {
    slug: 'lettrblack',
    name: 'Lettrblack',
    category: 'Creative Studio',
    brandColor: '#0D0D0D',
    textColor: '#FFFFFF',
    founded: '2023',
    website: 'lettrblack.com',
    logoSrc: '/lettrblack-logo.png',
    about:
      "Lettrblack helps modern brands stand out with identity systems, motion-first storytelling, and web experiences built to convert.",
    whatTheyDo: ['Brand identity', 'Motion design', 'Web experiences', 'Creative strategy'],
  },
  {
    slug: 'progen5',
    name: 'Progen5',
    category: 'Productivity Tech',
    brandColor: '#FFFFFF',
    textColor: '#C41D1D',
    founded: '2023',
    website: 'progen5.com',
    logoSrc: '/progen5-logo.png',
    about:
      'Progen5 builds next-generation productivity tools for modern teams—automation, collaboration, and clarity in one streamlined workflow.',
    whatTheyDo: ['Workflow automation', 'Task management', 'Team collaboration', 'Productivity analytics'],
  },
  {
    slug: 'fusecake',
    name: 'FuseCake',
    category: 'Event Tech',
    brandColor: '#0D0D0D',
    textColor: '#C9A84C',
    founded: '2024',
    website: 'fusecake.com',
    logoSrc: '/fc-logo.png',
    about:
      "FuseCake bridges the gap between celebration and technology. Whether it's a college fest or a corporate event, FuseCake's platform handles everything from ticketing to on-ground coordination.",
    whatTheyDo: [
      'Event Management Platform',
      'Ticketing & Registration',
      'On-ground Tech Tools',
      'B2B Event Services',
    ],
  },
];

export default function VentureDetail() {
  const { ventureId } = useParams();
  const venture = ventures.find((v) => v.slug === ventureId);

  if (!venture) {
    return (
      <main className="bg-embranix-bg px-6 lg:px-16 pt-[120px] pb-20">
        <div className="max-w-[900px] mx-auto">
          <SectionLabel text="Ventures" className="mb-4 block" />
          <h1 className="font-serif text-4xl lg:text-5xl text-embranix-text tracking-tight mb-6">
            Venture not found
          </h1>
          <Link className="text-link" to="/ventures">
            Back to Ventures →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-embranix-bg">
      <section className="px-6 lg:px-16 pt-[120px] pb-20">
        <div className="max-w-[1200px] mx-auto">
          <Link className="text-link mb-8 inline-flex" to="/ventures">
            Back to Ventures →
          </Link>

          <div className="rounded-2xl overflow-hidden shadow-card bg-white">
            <div
              className="h-[240px] flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: venture.brandColor }}
            >
              <img
                src={venture.logoSrc}
                alt={`${venture.name} logo`}
                className="venture-logo relative z-10"
              />
            </div>

            <div className="p-8 lg:p-12">
              <SectionLabel text={venture.category} className="mb-4 block" />

              <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,0.6fr] gap-10">
                <div>
                  <h2 className="font-serif text-3xl lg:text-4xl text-embranix-text tracking-tight mb-4">
                    About
                  </h2>
                  <p className="font-sans text-base text-embranix-text leading-relaxed mb-8 max-w-[680px]">
                    {venture.about}
                  </p>

                  <h3 className="font-serif text-2xl lg:text-3xl text-embranix-text tracking-tight mb-4">
                    What they do
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {venture.whatTheyDo.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-[rgba(26,20,16,0.08)] px-4 py-3 font-sans text-sm text-embranix-text"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <aside className="rounded-2xl border border-[rgba(26,20,16,0.08)] p-6 h-fit">
                  <div className="mb-4">
                    <div className="font-sans text-xs text-embranix-text-secondary uppercase tracking-wide">
                      Founded
                    </div>
                    <div className="font-sans text-sm text-embranix-text mt-1">
                      {venture.founded}
                    </div>
                  </div>
                  <div>
                    <div className="font-sans text-xs text-embranix-text-secondary uppercase tracking-wide">
                      Website
                    </div>
                    <a
                      className="text-link mt-1 inline-flex"
                      href={`https://${venture.website}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {venture.website} →
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

