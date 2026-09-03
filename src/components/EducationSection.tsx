import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import { GraduationCap, Calendar, Award, ArrowRight } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 border-b border-[#D9DDEE]/60 bg-[#FBFBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9091DF] block mb-2">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#20243C] tracking-tight mb-3">
            Education
          </h2>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu) => {
            const isClickable = Boolean(edu.route);
            const CardWrapper = isClickable ? Link : 'div';
            const wrapperProps = isClickable
              ? {
                  to: edu.route!,
                  'aria-label': `View PhD Research Hub: ${edu.degree}`,
                  className:
                    'bg-[#FFFFFF] rounded-2xl p-6 border border-[#D9DDEE] flex flex-col justify-between hover:border-[#9091DF] hover:shadow-md transition-all group/card focus-visible:outline-2 focus-visible:outline-[#9091DF]',
                }
              : {
                  className:
                    'bg-[#FFFFFF] rounded-2xl p-6 border border-[#D9DDEE] flex flex-col justify-between hover:border-[#9091DF] transition-all',
                };

            return (
              <CardWrapper key={edu.id} {...(wrapperProps as any)}>
                <div>
                  {/* Header Icon & Period */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#A0A1F8]/15 text-[#20243C] group-hover/card:bg-[#A0A1F8]/25 transition-colors">
                      <GraduationCap className="w-5 h-5 text-[#9091DF]" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-xs font-semibold text-[#626A7C]">
                        <Calendar className="w-3.5 h-3.5 text-[#9091DF]" />
                        <span>{edu.period}</span>
                      </div>
                      {isClickable && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#9091DF] group-hover/card:text-[#20243C] transition-colors">
                          <span>View PhD</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/card:translate-x-0.5 transition-transform" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Degree Title */}
                  <h3 className="text-lg font-extrabold text-[#20243C] mb-2 leading-snug group-hover/card:text-[#9091DF] transition-colors">
                    {edu.degree}
                  </h3>

                  {/* Institutions */}
                  <div className="flex flex-wrap gap-1 text-xs text-[#626A7C] font-medium mb-4">
                    {edu.institutions.map((inst, idx) => (
                      <span key={idx} className="bg-[#B9E0FC]/20 px-2 py-0.5 rounded text-[#20243C]">
                        {inst}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status Note or Grade Details */}
                <div className="pt-3 border-t border-[#D9DDEE]/60 space-y-1.5">
                  {edu.importantNote && (
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#20243C] bg-[#DFF8E1] p-2.5 rounded-lg border border-[#C8DFCA]">
                      <Award className="w-4 h-4 text-[#9091DF] shrink-0" />
                      <span>{edu.importantNote}</span>
                    </div>
                  )}
                  {edu.grade && (
                    <p className="text-xs text-[#626A7C] font-semibold">
                      Grade: <span className="text-[#20243C]">{edu.grade}</span>
                    </p>
                  )}
                  {edu.achievement && (
                    <p className="text-xs text-[#626A7C] italic">
                      {edu.achievement}
                    </p>
                  )}
                </div>

              </CardWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
};
