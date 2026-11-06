import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCalendarModal } from '@/context/CalendarModalContext';

export const BLOG_ARTICLES = [
  {
    slug: 'custom-web-mobile-software-built-around-your-business',
    title: 'Custom Web & Mobile Software Built Around Your Business: The Complete Guide to Streamlining Operations',
    date: 'November 5, 2026',
    author: 'GrowthLab Engineering Team',
    readTime: '8 min read',
    category: 'Engineering & Operations',
    excerpt: 'Off-the-shelf software often forces growing businesses into rigid, cookie-cutter workflows. Learn how GrowthLab Digital Solutions engineers tailored web and mobile applications engineered specifically to your business needs.',
    isPillar: true,
  },
];

export default function Blog() {
  const { slug } = useParams();
  const { openCalendar } = useCalendarModal();
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Identify active article if slug exists
  const activeArticle = BLOG_ARTICLES.find((a) => a.slug === slug);

  useEffect(() => {
    if (activeArticle) {
      document.title = `${activeArticle.title} | GrowthLab Digital Solutions`;
    } else {
      document.title = 'Blog & Engineering Insights | GrowthLab Digital Solutions';
    }

    // Dynamic meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = activeArticle
      ? activeArticle.excerpt
      : 'Explore articles from GrowthLab Digital Solutions on custom web development, mobile applications, and operational efficiency for growing businesses.';

    // Inject JSON-LD Schema for Article & FAQPage with High-Authority Citations
    if (!slug || (activeArticle && activeArticle.slug === 'custom-web-mobile-software-built-around-your-business')) {
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.id = 'blog-schema-ld';
      schemaScript.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            '@id': 'https://growthlabds.com/blog/custom-web-mobile-software-built-around-your-business#article',
            'headline': BLOG_ARTICLES[0].title,
            'description': BLOG_ARTICLES[0].excerpt,
            'image': 'https://lh3.googleusercontent.com/d/17c9yLRJpRqOc0BJv4Sm93PRAgDZfG8lg',
            'datePublished': '2026-11-05T08:00:00+00:00',
            'dateModified': '2026-11-05T08:00:00+00:00',
            'author': {
              '@type': 'Organization',
              'name': 'GrowthLab Digital Solutions',
              'url': 'https://growthlabds.com',
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'GrowthLab Digital Solutions',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://lh3.googleusercontent.com/d/17c9yLRJpRqOc0BJv4Sm93PRAgDZfG8lg',
              },
            },
            'citation': [
              'https://www.mckinsey.com/capabilities/operations/our-insights',
              'https://www.forrester.com/',
              'https://www.gartner.com/en/information-technology',
              'https://hbr.org/',
              'https://www.marketwatch.com/',
              'https://react.dev/',
              'https://developer.android.com/',
            ],
            'keywords': [
              'custom web application development',
              'mobile app development for businesses',
              'internal management systems',
              'GrowthLab Digital Solutions',
              'business software ROI',
              'Software Built Around Your Business',
            ],
          },
          {
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'What does GrowthLab Digital Solutions do?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text':
                    'GrowthLab Digital Solutions is a software development company specializing in custom web and mobile applications that help businesses streamline their daily operations and build internal management systems.',
                },
              },
              {
                '@type': 'Question',
                'name': 'Who does GrowthLab Digital Solutions serve?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text':
                    'We serve growing businesses, multi-location operators, logistics partners, healthcare providers, financial firms, retail brands, and service chains that require reliable software tailored specifically to their unique business workflows.',
                },
              },
              {
                '@type': 'Question',
                'name': 'What services does GrowthLab offer?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text':
                    'We offer two primary core services: Custom Web Application Development and Mobile Application Development for iOS and Android.',
                },
              },
              {
                '@type': 'Question',
                'name': 'Does GrowthLab provide 100% source code ownership?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text':
                    'Yes. Upon project completion and final handover, GrowthLab provides 100% full intellectual property and source code ownership with zero ongoing vendor lock-in.',
                },
              },
            ],
          },
        ],
      });

      const existing = document.getElementById('blog-schema-ld');
      if (existing) existing.remove();
      document.head.appendChild(schemaScript);
    }

    return () => {
      const s = document.getElementById('blog-schema-ld');
      if (s) s.remove();
    };
  }, [activeArticle, slug]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const filteredArticles = BLOG_ARTICLES.filter(
    (art) =>
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between selection:bg-[#008F83]/20 selection:text-[#008F83]">
      <div>
        <Navbar />

        {/* Dynamic Route: If slug is passed or selected, render Article view. Otherwise render Blog Index */}
        {slug ? (
          /* ======================================================== */
          /* WORDPRESS SINGLE ARTICLE VIEW (CLEAN TYPOGRAPHY, NO UNNECESSARY ICONS) */
          /* ======================================================== */
          <main className="pt-28 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              
              {/* Simple WordPress Navigation Link */}
              <div className="mb-6">
                <Link
                  to="/blog"
                  className="inline-flex items-center text-sm font-inter text-slate-600 hover:text-[#008F83] transition-colors"
                >
                  ← Back to Blog Index
                </Link>
              </div>

              {/* Classic Article Title & Byline Header */}
              <article className="border-b border-slate-200 pb-6 mb-8">
                <h1 className="font-poppins font-bold text-3xl sm:text-4xl text-slate-950 leading-tight mb-4 tracking-tight">
                  {activeArticle ? activeArticle.title : BLOG_ARTICLES[0].title}
                </h1>
                
                {/* WordPress Text Byline */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm font-inter text-slate-500 py-2 border-t border-b border-slate-100 my-4">
                  <span className="font-medium text-slate-800">
                    By {activeArticle ? activeArticle.author : BLOG_ARTICLES[0].author}
                  </span>
                  <span>•</span>
                  <span>
                    {activeArticle ? activeArticle.date : BLOG_ARTICLES[0].date}
                  </span>
                  <span>•</span>
                  <span>
                    {activeArticle ? activeArticle.readTime : BLOG_ARTICLES[0].readTime}
                  </span>
                  
                  <div className="ml-auto">
                    <button
                      type="button"
                      onClick={handleShare}
                      className="text-xs text-[#008F83] font-semibold hover:underline cursor-pointer"
                    >
                      {copied ? 'Link Copied!' : 'Share Article'}
                    </button>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-slate-700 font-inter leading-relaxed italic">
                  {activeArticle ? activeArticle.excerpt : BLOG_ARTICLES[0].excerpt}
                </p>
              </article>

              {/* ARTICLE BODY CONTENT - CLASSIC WORDPRESS PROSE */}
              <div className="prose prose-slate max-w-none text-slate-800 font-inter leading-relaxed space-y-8 text-base">
                
                {/* Executive Summary Blockquote (WordPress Quote Style) */}
                <blockquote className="border-l-4 border-[#008F83] pl-4 py-2 my-6 bg-slate-50/80 text-slate-900 font-medium text-base">
                  <p className="font-semibold text-slate-950 mb-2">Executive Summary & Key Takeaways:</p>
                  <ul className="space-y-2 text-sm text-slate-800 list-disc pl-4 font-normal">
                    <li><strong>Who We Are:</strong> GrowthLab Digital Solutions is a software development company specializing in custom web and mobile applications tailored to unique operational needs.</li>
                    <li><strong>Core Services:</strong> Custom Web Application Development and Mobile Application Development for iOS and Android.</li>
                    <li><strong>Who We Serve:</strong> Growing operators, multi-location businesses, logistics providers, healthcare clinics, financial services, and retail chains.</li>
                    <li><strong>5-Step Process:</strong> Consultation, Workflow Development & Proposal, Development & Testing, Deployment & Maintenance, and Scaling.</li>
                  </ul>
                </blockquote>

                {/* Section 1 */}
                <div>
                  <h2 className="font-poppins font-bold text-2xl text-slate-950 mb-3 tracking-tight">
                    1. The Shift to Software Built Around Your Business
                  </h2>
                  <p className="mb-4">
                    Every business operates differently. A regional logistics provider manages inventory differently than a private medical network, and an automotive service firm coordinates appointments differently than a financial lending institution. Yet according to operational studies published by <a href="https://hbr.org/" target="_blank" rel="noopener noreferrer" className="text-[#008F83] font-semibold underline hover:text-[#007A70]">Harvard Business Review</a>, companies have been forced to settle for off-the-shelf SaaS platforms designed for a generic customer.
                  </p>
                  <p className="mb-4">
                    When forced to adapt your real-world operations to a rigid SaaS tool, friction quickly builds up. Teams resort to workarounds: maintaining parallel spreadsheets, manually copy-pasting customer records across tools, or tracking critical updates over unstructured group chats.
                  </p>
                  <p className="mb-4">
                    <strong>Custom Operational Software</strong> addresses this directly by engineering web and mobile applications tailored specifically around your existing operational processes.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="font-poppins font-bold text-2xl text-slate-950 mb-3 tracking-tight">
                    2. Who Is GrowthLab Digital Solutions?
                  </h2>
                  <p className="mb-4">
                    <strong>GrowthLab Digital Solutions</strong> is a software development company specializing in custom web and mobile applications that help businesses streamline their daily operations. We develop reliable, user-friendly software tailored to each business's unique workflows and operational needs. Our solutions help businesses improve efficiency and operate more effectively.
                  </p>
                  <p className="mb-4">
                    We do not deliver generic website templates or rigid third-party wrappers. Instead, our software engineers collaborate directly with founders and operations leaders to analyze operational bottlenecks, map user journeys, and construct custom web portals and native mobile applications engineered with modern technologies like <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-[#008F83] font-semibold underline hover:text-[#007A70]">React</a> and <a href="https://developer.android.com/" target="_blank" rel="noopener noreferrer" className="text-[#008F83] font-semibold underline hover:text-[#007A70]">Android / iOS Mobile Architecture</a>.
                  </p>
                  <p className="mb-4 font-semibold text-slate-950">
                    Software Built Around Your Business.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="font-poppins font-bold text-2xl text-slate-950 mb-3 tracking-tight">
                    3. What We Do: Our Core Engineering Services
                  </h2>
                  <p className="mb-4">
                    GrowthLab focuses strictly on two core software development offerings. You can explore full details on our <a href="/#services" className="text-[#008F83] font-semibold underline hover:text-[#007A70]">Custom Web & Mobile Development Services</a> page:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="border-b border-slate-200 pb-4">
                      <h3 className="font-poppins font-bold text-slate-900 text-lg mb-1">
                        Custom Web Application Development
                      </h3>
                      <p className="text-slate-700 text-sm">
                        Centralized admin dashboards, operational portals, and client-facing web applications engineered to replace fragmented spreadsheets. Learn more on our <a href="/#services" className="text-[#008F83] font-semibold underline">Custom Web Application Development Services</a> section.
                      </p>
                    </div>

                    <div className="border-b border-slate-200 pb-4">
                      <h3 className="font-poppins font-bold text-slate-900 text-lg mb-1">
                        Mobile Application Development
                      </h3>
                      <p className="text-slate-700 text-sm">
                        Intuitive iOS and Android applications for remote field teams, logistics personnel, or customer self-service portals with real-time push notifications and offline support. Discover our <a href="/#services" className="text-[#008F83] font-semibold underline">Mobile App Development Services</a>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 4 - OUR 5-STEP PROCESS */}
                <div>
                  <h2 className="font-poppins font-bold text-2xl text-slate-950 mb-3 tracking-tight">
                    4. Our 5-Step Development Process
                  </h2>
                  <p className="mb-4">
                    We partner with businesses through a clear, transparent engineering process outlined in our <a href="/#process" className="text-[#008F83] font-semibold underline hover:text-[#007A70]">Homepage Process Section</a>:
                  </p>

                  <ol className="list-decimal pl-5 space-y-3 text-slate-800 text-sm sm:text-base">
                    <li><strong>Consultation:</strong> Consultation to identify the best solution including core technical functionalities tailored to business needs.</li>
                    <li><strong>Workflow Development and Proposal:</strong> Detailed mapping of operational flows, user interfaces, system requirements, and clear project timeline proposals.</li>
                    <li><strong>Development and Testing:</strong> Full-stack engineering, sprint builds, and continuous quality testing.</li>
                    <li><strong>Deployment and Maintenance:</strong> Smooth cloud deployment, live production launch, and ongoing technical maintenance.</li>
                    <li><strong>Scaling:</strong> Continuous performance optimization and architecture scaling as your business grows.</li>
                  </ol>
                </div>

                {/* Section 5 - INDUSTRY DATA */}
                <div>
                  <h2 className="font-poppins font-bold text-2xl text-slate-950 mb-3 tracking-tight">
                    5. Industry Data & The Value of Custom Software
                  </h2>
                  <p className="mb-4">
                    Empirical research from world-class research institutes underscores why custom operational software provides superior long-term returns compared to off-the-shelf subscriptions:
                  </p>

                  {/* Classic WordPress Table */}
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left border-collapse border border-slate-300 text-sm font-inter">
                      <thead>
                        <tr className="bg-slate-100 font-poppins text-slate-950 font-bold border-b border-slate-300">
                          <th className="p-3 border-r border-slate-300">Metric / Research Finding</th>
                          <th className="p-3 border-r border-slate-300">Industry Data Source</th>
                          <th className="p-3">Impact on Business Operations</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-300">
                        <tr>
                          <td className="p-3 border-r border-slate-300 font-medium">28% of workweek spent on manual admin</td>
                          <td className="p-3 border-r border-slate-300 text-slate-600">
                            <a href="https://www.mckinsey.com/capabilities/operations/our-insights" target="_blank" rel="noopener noreferrer" className="text-[#008F83] font-semibold underline">
                              McKinsey Global Institute
                            </a>
                          </td>
                          <td className="p-3 text-slate-800">Tailored web & mobile portals streamline team productivity</td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="p-3 border-r border-slate-300 font-medium">318% Average 3-Year ROI</td>
                          <td className="p-3 border-r border-slate-300 text-slate-600">
                            <a href="https://www.forrester.com/" target="_blank" rel="noopener noreferrer" className="text-[#008F83] font-semibold underline">
                              Forrester TEI Study
                            </a>
                          </td>
                          <td className="p-3 text-slate-800">Custom application engineering pays back initial capital quickly</td>
                        </tr>
                        <tr>
                          <td className="p-3 border-r border-slate-300 font-medium">88% of complex spreadsheets contain errors</td>
                          <td className="p-3 border-r border-slate-300 text-slate-600">
                            <a href="https://www.marketwatch.com/" target="_blank" rel="noopener noreferrer" className="text-[#008F83] font-semibold underline">
                              MarketWatch Financial Audit
                            </a>
                          </td>
                          <td className="p-3 text-slate-800">Database-backed portals prevent costly human data errors</td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="p-3 border-r border-slate-300 font-medium">70% of off-the-shelf SaaS features unused</td>
                          <td className="p-3 border-r border-slate-300 text-slate-600">
                            <a href="https://www.gartner.com/en/information-technology" target="_blank" rel="noopener noreferrer" className="text-[#008F83] font-semibold underline">
                              Gartner IT Research
                            </a>
                          </td>
                          <td className="p-3 text-slate-800">Custom software eliminates unnecessary subscription bloat</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 6 - FAQ */}
                <div className="pt-6 border-t border-slate-200">
                  <h2 className="font-poppins font-bold text-2xl text-slate-950 mb-4 tracking-tight">
                    Frequently Asked Questions
                  </h2>
                  
                  <div className="space-y-4 text-sm sm:text-base">
                    <div>
                      <h3 className="font-poppins font-bold text-slate-950 text-base mb-1">
                        How long does it take GrowthLab to build a custom web or mobile app?
                      </h3>
                      <p className="text-slate-700">
                        Focused custom web applications or internal management portals typically take 3 to 5 weeks from discovery to deployment. Complex multi-platform systems range from 6 to 10 weeks. See our <a href="/#faq" className="text-[#008F83] font-semibold hover:underline">Homepage FAQ Section</a> for more details.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-poppins font-bold text-slate-950 text-base mb-1">
                        Does GrowthLab provide full source code ownership?
                      </h3>
                      <p className="text-slate-700">
                        Yes, 100%. Upon completion and final handover, your company retains full ownership of all source code, database schemas, and intellectual property.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-poppins font-bold text-slate-950 text-base mb-1">
                        How do we get started with GrowthLab Digital Solutions?
                      </h3>
                      <p className="text-slate-700">
                        You can schedule a free technical call directly with our engineering team through our <a href="/#contact-form" className="text-[#008F83] font-semibold hover:underline">Booking Form</a>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call to Action Line */}
                <div className="pt-8 border-t border-slate-200 my-8">
                  <h3 className="font-poppins font-bold text-xl text-slate-950 mb-2">
                    Ready to Build Software Around Your Business?
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Speak directly with our software engineers to review your operational workflows and get a detailed timeline for your custom application.
                  </p>
                  <button
                    type="button"
                    onClick={openCalendar}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#008F83] text-white font-poppins font-medium text-sm hover:bg-[#007A70] transition-colors cursor-pointer"
                  >
                    Schedule a Free Technical Call &rarr;
                  </button>
                </div>

              </div>
            </div>
          </main>
        ) : (
          /* ======================================================== */
          /* WORDPRESS SIMPLE BLOG LIST VIEW (CLEAN TYPOGRAPHY, NO UNNECESSARY ICONS) */
          /* ======================================================== */
          <main className="pt-28 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              
              {/* WordPress Classic Header */}
              <div className="border-b border-slate-200 pb-8 mb-10">
                <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl text-slate-950 mb-3 tracking-tight">
                  GrowthLab Digital Solutions Blog
                </h1>
                <p className="text-slate-600 font-inter text-base sm:text-lg max-w-2xl leading-relaxed">
                  Software Built Around Your Business. Articles and practical guides on custom web & mobile app development and operational efficiency.
                </p>

                {/* Simple WordPress Search Bar */}
                <div className="mt-6 max-w-md relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search blog articles..."
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#008F83] focus:bg-white transition-colors"
                  />
                  <Search size={16} className="absolute left-3.5 top-3 text-slate-400" />
                </div>
              </div>

              {/* WordPress Classic Blog Posts Feed */}
              <div className="space-y-10">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article) => (
                    <article
                      key={article.slug}
                      className="border-b border-slate-200 pb-10 group"
                    >
                      {/* Classic Title */}
                      <h2 className="font-poppins font-bold text-xl sm:text-2xl text-slate-950 group-hover:text-[#008F83] transition-colors mb-2 leading-snug">
                        <Link to={`/blog/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h2>

                      {/* WordPress Meta Line (Date • Author • Read Time) */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-inter text-slate-500 mb-4">
                        <span className="font-medium text-slate-700">{article.author}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>

                      {/* Excerpt */}
                      <p className="text-slate-700 font-inter text-sm sm:text-base leading-relaxed mb-4">
                        {article.excerpt}
                      </p>

                      {/* Read More Link */}
                      <Link
                        to={`/blog/${article.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-poppins font-semibold text-[#008F83] hover:underline"
                      >
                        Read Article <ChevronRight size={16} />
                      </Link>
                    </article>
                  ))
                ) : (
                  <div className="text-center py-12 text-slate-500 font-inter">
                    No blog articles matched your search query.
                  </div>
                )}
              </div>

            </div>
          </main>
        )}
      </div>

      <Footer />
    </div>
  );
}
