import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import { ArrowUpRight, BookOpen, Mic, FileCheck } from 'lucide-react';

export const PublicationsSection: React.FC = () => {
  const { publications } = portfolioData;
  const visiblePubs = publications.filter((p) => p.visible !== false);

  return (
    <section id="publications" className="py-20 border-b border-[#D9DDEE]/60 bg-[#FBFBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9091DF] block mb-2">
            PUBLICATIONS & DISSEMINATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#20243C] tracking-tight mb-3">
            Peer-reviewed research dispatches
          </h2>
          <p className="text-base text-[#626A7C]">
            Evidence disseminated across top biomedical imaging conferences, workshops, and journals.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="space-y-6">
          {visiblePubs.map((pub) => {
            return (
              <Link
                key={pub.id}
                to={`/publications/${pub.slug}`}
                className="group block bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#D9DDEE] hover:border-[#9091DF] hover:shadow-md transition-all focus-visible:outline-2 focus-visible:outline-[#9091DF]"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  
                  {/* Content Left */}
                  <div className="flex-1">
                    
                    {/* Badges & Meta */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#A0A1F8]/15 text-[#20243C] border border-[#A0A1F8]/30">
                        {pub.status}
                      </span>
                      {pub.presentationType && (
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA] flex items-center gap-1">
                          {pub.presentationType === 'Oral' && <Mic className="w-3 h-3 text-[#20243C]" />}
                          {pub.presentationType === 'Poster' && <BookOpen className="w-3 h-3 text-[#20243C]" />}
                          {pub.presentationType === 'Journal' && <FileCheck className="w-3 h-3 text-[#20243C]" />}
                          <span>{pub.presentationType}</span>
                        </span>
                      )}
                      <span className="text-xs font-semibold text-[#626A7C]">
                        {pub.venue} ({pub.year})
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#20243C] group-hover:text-[#9091DF] transition-colors mb-3 leading-snug">
                      {pub.title}
                    </h3>

                    {/* Highlighted Authors List */}
                    <p className="text-xs font-medium text-[#626A7C] mb-4">
                      {pub.authors.map((author, idx) => (
                        <React.Fragment key={idx}>
                          {author === 'Seoyoung Oh' ? (
                            <span className="font-bold text-[#20243C] underline decoration-[#9091DF] underline-offset-2">
                              {author}
                            </span>
                          ) : (
                            <span>{author}</span>
                          )}
                          {idx < pub.authors.length - 1 ? ', ' : ''}
                        </React.Fragment>
                      ))}
                    </p>

                    {/* Research Problem & Core Contribution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs bg-[#FBFBFF] p-4 rounded-xl border border-[#D9DDEE]/60 mb-2">
                      <div>
                        <span className="font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
                          Research Problem
                        </span>
                        <p className="text-[#20243C] font-medium leading-relaxed">
                          {pub.problem}
                        </p>
                      </div>
                      <div>
                        <span className="font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
                          Core Contribution
                        </span>
                        <p className="text-[#20243C] font-medium leading-relaxed">
                          {pub.contribution}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* CTA Arrow Right */}
                  <div className="shrink-0 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#20243C] group-hover:text-[#9091DF] pt-2 md:pt-0 border-t md:border-t-0 border-[#D9DDEE]/60">
                    <span>View Publication</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#9091DF]" />
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
