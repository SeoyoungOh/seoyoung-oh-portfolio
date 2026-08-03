import React, { useState } from 'react';
import {
  HelpCircle,
  Link as LinkIcon,
  AlertTriangle,
  Layers,
  Users,
  Building,
  CheckCircle2,
  GitBranch,
  Table,
  Sparkles,
  ShieldAlert,
  ShieldCheck,
  FileText,
  Info,
  Award,
  UserCheck,
  BookOpen,
} from 'lucide-react';

export const BlockchainRealEstateContent: React.FC = () => {
  const [activeStakeholder, setActiveStakeholder] = useState<number>(0);

  const stakeholders = [
    {
      id: 'buyer',
      title: 'PROSPECTIVE BUYER',
      role: 'Market Participant & Searcher',
      points: [
        'Searches listings using familiar criteria (location, price, size, property type)',
        'Views a proposed listing trust indicator associated with property history',
        'Sees the number of agents reporting matching information for the property',
        'Receives warnings when conflicting records appear across different agents',
        'May view recommended agents ordered by the proposed trust score',
      ],
    },
    {
      id: 'owner',
      title: 'PROPERTY OWNER OR SELLER',
      role: 'Primary Authority & Authenticator',
      points: [
        'Registers a property directly or authorizes a real-estate agent to register it',
        'Reviews the submitted property details (price, size, location, metadata)',
        'Authenticates the listing before it is appended to the proposed blockchain record',
        'Confirms a completed transaction to trigger market-wide status updates',
      ],
    },
    {
      id: 'agent',
      title: 'REAL-ESTATE AGENT',
      role: 'Intermediary & Listing Manager',
      points: [
        'Registers and manages property information on behalf of sellers',
        'Receives shared updates when a listed property changes transaction status',
        'Gains trust when submitted information remains consistent with owners and peers',
        'Becomes more visible to buyers when the proposed reliability score is high',
      ],
    },
    {
      id: 'advertising',
      title: 'ADVERTISING SERVICE',
      role: 'Listing Platform & Media Display',
      points: [
        'Displays the first verified listing rather than creating isolated duplicate ads',
        'Avoids publishing duplicate advertisements for the same physical property',
        'Receives automatic status updates when a transaction is completed or updated',
      ],
    },
  ];

  return (
    <div className="space-y-12">
      
      {/* 1. RESEARCH PROBLEM */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            RESEARCH PROBLEM
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-4">
          Online real-estate services made listings easier to access—but not necessarily more trustworthy
        </h3>
        
        <div className="space-y-3 text-base text-[#20243C] font-medium leading-relaxed mb-6">
          <p>
            By 2017, a large number of web and mobile real-estate services allowed agents and individuals to register and advertise properties.
          </p>
          <p>
            These services improved accessibility, but false or outdated listings continued to reduce user trust.
          </p>
          <p>
            The paper investigates whether blockchain-inspired shared records could make listing information harder to falsify, easier to compare across agents, and faster to update after a transaction.
          </p>
        </div>

        {/* 3 Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-[#D97706]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#20243C]">
                DELIBERATELY FALSE LISTINGS
              </span>
            </div>
            <p className="text-xs font-medium text-[#626A7C] leading-relaxed">
              An agent may register nonexistent properties or alter price, size, or other details to attract prospective customers.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-[#D97706]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#20243C]">
                OUTDATED LISTINGS
              </span>
            </div>
            <p className="text-xs font-medium text-[#626A7C] leading-relaxed">
              A completed transaction may not be updated across every advertising or agency service, leaving unavailable properties visible.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-[#D97706]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#20243C]">
                FRAGMENTED RECORDS
              </span>
            </div>
            <p className="text-xs font-medium text-[#626A7C] leading-relaxed">
              The same property may be registered independently by multiple agents without a shared mechanism for identifying disagreement.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHY BLOCKCHAIN WAS CONSIDERED */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <LinkIcon className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            TECHNOLOGY–PROBLEM FIT
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-4">
          The proposed setting matched several properties associated with blockchain records
        </h3>
        
        <div className="space-y-3 text-base text-[#20243C] font-medium leading-relaxed mb-6">
          <p>
            The study identifies real-estate listings as information that should be visible to market participants, should not be silently altered, and arises through relationships between multiple parties.
          </p>
          <p>
            Blockchain was therefore considered as a shared and append-only record through which participants could compare listing histories and observe conflicting information.
          </p>
        </div>

        {/* 4 Reasoning Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              SHARED VISIBILITY
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              Listing information must be accessible to buyers, sellers, agents, and advertising services.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              APPEND-ONLY HISTORY
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              Previously registered information remains available rather than being silently overwritten.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              MULTIPLE PARTICIPANTS
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              The market involves property owners, prospective buyers, real-estate agents, and advertising platforms.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              CONSISTENCY CHECKING
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              Matching and conflicting records can be compared across participants.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CAUSES OF FALSE LISTINGS */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Layers className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            PROBLEM ANALYSIS
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-6">
          The study distinguishes intentional deception from operational omission
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="p-5 rounded-xl bg-[#FFF8F8] border border-[#F5C6C6]">
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert className="w-5 h-5 text-[#C53030]" />
              <h4 className="text-sm font-bold uppercase tracking-wide text-[#822727]">
                MALICIOUS REGISTRATION
              </h4>
            </div>
            <p className="text-sm text-[#20243C] font-medium leading-relaxed">
              An agent intentionally enters altered or nonexistent information, often to attract potential customers with an appealing listing.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FFFBF0] border border-[#F6E05E]">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-[#D69E2E]" />
              <h4 className="text-sm font-bold uppercase tracking-wide text-[#744210]">
                MANAGEMENT FAILURE
              </h4>
            </div>
            <p className="text-sm text-[#20243C] font-medium leading-relaxed">
              A legitimate listing remains advertised after a contract because updates across numerous services are performed manually or incompletely.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#F0F4FF] border border-[#C3DAFE] flex items-start gap-3">
          <Info className="w-5 h-5 text-[#3182CE] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm font-semibold text-[#2C5282]">
            Takeaway: The proposed model addresses both cases differently: owner confirmation is intended to reduce false registration, while shared transaction updates are intended to reduce outdated listings.
          </p>
        </div>
      </section>

      {/* 4. PROPOSED SERVICE MODEL */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Building className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            PROPOSED MODEL
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-4">
          A shared listing history connecting owners, agents, buyers, and advertising services
        </h3>
        
        <div className="space-y-3 text-base text-[#20243C] font-medium leading-relaxed mb-8">
          <p>
            The proposed service is accessible through web and mobile interfaces.
          </p>
          <p>
            A property owner may register a listing directly or ask a real-estate agent to register it.
          </p>
          <p>
            Before publication, the owner reviews and authenticates the information. The verified record is then added to the shared ledger and made available to buyers and advertising services.
          </p>
          <p>
            Subsequent registrations concerning the same property are linked to the existing history rather than treated as entirely unrelated advertisements.
          </p>
        </div>

        {/* Native Horizontal Process Flow (Vertical on Mobile) */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#626A7C] block mb-2">
            PROPOSED SERVICE WORKFLOW FLOW:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {[
              {
                step: '1',
                title: 'LISTING SUBMISSION',
                desc: 'The property owner or agent enters the listing information.',
              },
              {
                step: '2',
                title: 'OWNER CONFIRMATION',
                desc: 'The owner reviews the registered information and provides authentication or a signature.',
              },
              {
                step: '3',
                title: 'SHARED RECORD',
                desc: 'The confirmed listing is appended to the proposed blockchain record.',
              },
              {
                step: '4',
                title: 'PUBLICATION',
                desc: 'The listing becomes visible through the service and connected advertising interfaces.',
              },
              {
                step: '5',
                title: 'CONTINUOUS UPDATE',
                desc: 'Later registrations or transaction events extend the shared property history.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#20243C] text-[#FBFBFF] flex flex-col justify-between border border-[#A0A1F8]/20 relative"
              >
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#A0A1F8] text-[#20243C] mb-2">
                    STEP {item.step}
                  </span>
                  <h4 className="text-xs font-extrabold text-[#FBFBFF] mb-1.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#C3C7DB] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STAKEHOLDER ROLES */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            STAKEHOLDERS
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-6">
          Four participant groups interact with the proposed service
        </h3>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-[#D9DDEE] pb-3">
          {stakeholders.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveStakeholder(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeStakeholder === idx
                  ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                  : 'bg-[#F8F9FE] text-[#626A7C] hover:bg-[#EAEFFD] hover:text-[#20243C]'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Tab Content Card */}
        <div className="p-6 rounded-2xl bg-[#F8F9FE] border border-[#D9DDEE]">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-base font-extrabold text-[#20243C]">
              {stakeholders[activeStakeholder].title}
            </h4>
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#A0A1F8]/20 text-[#20243C]">
              {stakeholders[activeStakeholder].role}
            </span>
          </div>

          <ul className="space-y-3">
            {stakeholders[activeStakeholder].points.map((pt, pIdx) => (
              <li key={pIdx} className="flex items-start gap-3 text-sm text-[#20243C] font-medium leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#9091DF] shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. LISTING REGISTRATION WORKFLOW */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            SELLING WORKFLOW
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-6">
          Owner authentication is the first barrier against false registration
        </h3>

        <div className="space-y-3">
          {[
            {
              step: '1',
              title: 'REQUEST OR DIRECT ENTRY',
              text: 'The owner registers a property or asks an agent to register it.',
            },
            {
              step: '2',
              title: 'INFORMATION REVIEW',
              text: 'The owner receives a confirmation request and reviews the submitted price, size, and listing details.',
            },
            {
              step: '3',
              title: 'AUTHENTICATION',
              text: 'Only owner-confirmed information proceeds to the proposed blockchain record.',
            },
            {
              step: '4',
              title: 'RECORD LINKING',
              text: 'The service compares the property identifier and related information with existing records.',
            },
            {
              step: '5',
              title: 'ADVERTISEMENT',
              text: 'A first verified listing is published; matching later submissions extend the same history rather than creating independent duplicate advertisements.',
            },
            {
              step: '6',
              title: 'BRANCH OR CONSISTENCY',
              text: 'Matching information supports the existing record, while conflicting information creates a distinguishable branch in the proposed model.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-[#20243C] text-[#FBFBFF] flex items-center justify-center font-mono font-bold text-xs shrink-0">
                {item.step}
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#20243C] mb-1">
                  {item.title}
                </h4>
                <p className="text-sm font-medium text-[#626A7C] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. BUYER AND TRANSACTION WORKFLOW */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <UserCheck className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            BUYING WORKFLOW
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-6">
          Shared transaction updates are intended to prevent stale listings
        </h3>

        <div className="space-y-3">
          {[
            {
              step: '1',
              title: 'SEARCH',
              text: 'The buyer explores listings through the service or a connected advertising platform.',
            },
            {
              step: '2',
              title: 'TRUST-AWARE REVIEW',
              text: 'Results may be ordered using the proposed trust indicator and accompanied by conflict warnings.',
            },
            {
              step: '3',
              title: 'AGENT SELECTION',
              text: 'The buyer can review agents associated with the property and their proposed reliability information.',
            },
            {
              step: '4',
              title: 'TRANSACTION',
              text: 'A completed transaction is confirmed by the relevant participants.',
            },
            {
              step: '5',
              title: 'SHARED STATUS UPDATE',
              text: 'The transaction record is propagated to agents, buyers who saved the listing, and connected advertising services.',
            },
            {
              step: '6',
              title: 'LISTING REMOVAL OR UPDATE',
              text: 'The property is no longer presented as available, reducing outdated-listing errors caused by manual omission.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-[#20243C] text-[#FBFBFF] flex items-center justify-center font-mono font-bold text-xs shrink-0">
                {item.step}
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#20243C] mb-1">
                  {item.title}
                </h4>
                <p className="text-sm font-medium text-[#626A7C] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TRUST THROUGH CONSISTENT RECORDS */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <GitBranch className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            TRUST FORMATION
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-4">
          Repeated agreement strengthens a record; disagreement remains visible
        </h3>

        {/* Native Conceptual Branch Diagram */}
        <div className="p-6 rounded-2xl bg-[#181A2D] text-[#FBFBFF] border border-[#A0A1F8]/20 mb-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A0A1F8] block mb-4">
            PROPOSED RECORD BRANCHING MODEL CONCEPT
          </span>

          <div className="space-y-4 text-xs sm:text-sm font-mono">
            {/* Consistent Branch */}
            <div className="p-4 rounded-xl bg-[#20243C] border border-[#DFF8E1]/30">
              <div className="flex items-center gap-2 text-[#DFF8E1] font-bold mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>CONSISTENT MAIN BRANCH (Agent A & Agent B)</span>
              </div>
              <p className="text-[#C3C7DB] font-sans text-xs leading-relaxed">
                Agent A and Agent B register matching property information (e.g., price, square footage, owner verification). Their records append to and extend the same consistent history.
              </p>
            </div>

            {/* Conflicting Branch */}
            <div className="p-4 rounded-xl bg-[#20243C] border border-[#F5C6C6]/30">
              <div className="flex items-center gap-2 text-[#F5C6C6] font-bold mb-2">
                <AlertTriangle className="w-4 h-4 text-[#E53E3E]" />
                <span>CONFLICTING SEPARATE BRANCH (Agent C)</span>
              </div>
              <p className="text-[#C3C7DB] font-sans text-xs leading-relaxed">
                Agent C registers conflicting price or size information. Rather than silently overwriting, the conflicting record forms a separate branch in the proposed model. Buyers receive an explicit inconsistency warning.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 text-sm text-[#20243C] font-medium leading-relaxed">
          <p className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            The proposed reliability indicator considers factors such as the number of agents reporting the same information and the depth of the consistent record history.
          </p>
          <p className="p-4 rounded-xl bg-[#FFFBF0] border border-[#F6E05E] text-[#744210] font-semibold text-xs">
            Boundary Note: This branching process is the service model proposed by the 2017 paper. It should not be presented as a universal property or modern standard for all blockchain systems.
          </p>
        </div>
      </section>

      {/* 9. CONVENTIONAL SERVICE VS PROPOSED MODEL */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Table className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            SYSTEM COMPARISON
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-6">
          Conventional Service vs Proposed Model
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-[#D9DDEE] bg-[#F8F9FE]">
                <th className="p-3 text-xs font-mono font-bold uppercase tracking-wider text-[#626A7C] w-1/4">
                  DIMENSION
                </th>
                <th className="p-3 text-xs font-mono font-bold uppercase tracking-wider text-[#626A7C] w-3/8">
                  CONVENTIONAL SERVICE
                </th>
                <th className="p-3 text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] w-3/8">
                  PROPOSED MODEL
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D9DDEE] text-xs sm:text-sm text-[#20243C]">
              {[
                {
                  dim: 'PROPERTY RECORD',
                  conv: 'Independent records may be created by each advertiser or agent.',
                  prop: 'Records referring to the same property are linked through a shared history.',
                },
                {
                  dim: 'OWNER VERIFICATION',
                  conv: 'Verification varies by platform and may rely on later user reports.',
                  prop: 'Owner confirmation is required before the listing is appended.',
                },
                {
                  dim: 'CONFLICTING INFORMATION',
                  conv: 'Differences may remain distributed across separate services.',
                  prop: 'Conflicting data remain visible as disagreement within the proposed record structure.',
                },
                {
                  dim: 'COMPLETED TRANSACTION',
                  conv: 'Each service or agent may need to update the listing manually.',
                  prop: 'The transaction status is intended to propagate across participating services.',
                },
                {
                  dim: 'DUPLICATE ADVERTISEMENTS',
                  conv: 'The same property may appear repeatedly.',
                  prop: 'The first listing is advertised, while later matching registrations extend the shared record.',
                },
                {
                  dim: 'DATA DELETION',
                  conv: 'Old records may be updated or removed.',
                  prop: 'Historical records are intended to remain append-only.',
                },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8F9FE]/50 transition-colors">
                  <td className="p-3 font-mono font-bold text-xs text-[#20243C]">
                    {row.dim}
                  </td>
                  <td className="p-3 text-[#626A7C] font-medium leading-relaxed">
                    {row.conv}
                  </td>
                  <td className="p-3 text-[#20243C] font-semibold leading-relaxed bg-[#A0A1F8]/5">
                    {row.prop}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 10. EXPECTED BENEFITS */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            EXPECTED EFFECTS
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-6">
          The proposal aims to replace isolated verification with mutual monitoring
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-2">
              FOR BUYERS
            </span>
            <p className="text-sm font-medium text-[#20243C] leading-relaxed">
              Fewer suspected false listings, clearer conflict warnings, and access to the proposed reliability indicators.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-2">
              FOR OWNERS
            </span>
            <p className="text-sm font-medium text-[#20243C] leading-relaxed">
              An opportunity to confirm listing details and observe market interest in the property.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-2">
              FOR AGENTS
            </span>
            <p className="text-sm font-medium text-[#20243C] leading-relaxed">
              Automatic status sharing and incentives for maintaining consistent records.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-2">
              FOR ADVERTISING SERVICES
            </span>
            <p className="text-sm font-medium text-[#20243C] leading-relaxed">
              Reduced duplicate listings and lower dependence on manual verification or post-hoc reports.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] text-xs font-medium text-[#626A7C] leading-relaxed">
          The paper also suggests that similar principles could be explored in other markets with persistent record-integrity problems, such as used-vehicle transactions. (Described as a proposed extension, not a validated application.)
        </div>
      </section>

      {/* 11. PRIVACY AND DATA HANDLING */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            PRIVACY MODEL
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-4">
          The proposal records property information—not the full identities of buyers and sellers
        </h3>

        <div className="space-y-3 text-base text-[#20243C] font-medium leading-relaxed mb-6">
          <p>
            The paper proposes recording listing and real-estate-agent information while using buyers and sellers primarily for one-time authentication.
          </p>
          <p>
            Under the proposed design, ownership and occupancy identities would not remain publicly visible in the listing record.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#38A169] block mb-2">
              RECORDED ON LEDGER
            </span>
            <ul className="text-xs font-medium text-[#20243C] space-y-1.5 list-disc list-inside">
              <li>Property details & specifications</li>
              <li>Transaction status updates</li>
              <li>Participating agent information</li>
              <li>Append-only listing history</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#3182CE] block mb-2">
              USED FOR AUTHENTICATION
            </span>
            <ul className="text-xs font-medium text-[#20243C] space-y-1.5 list-disc list-inside">
              <li>Owner / seller confirmation</li>
              <li>Buyer confirmation of transaction</li>
              <li>One-time signature verification</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E53E3E] block mb-2">
              NOT PUBLIC LEDGER DATA
            </span>
            <ul className="text-xs font-medium text-[#20243C] space-y-1.5 list-disc list-inside">
              <li>Complete identity history of owners</li>
              <li>Complete identity history of occupants</li>
              <li>Private buyer identity information</li>
            </ul>
          </div>
        </div>

        <p className="text-xs font-medium text-[#626A7C] bg-[#F8F9FE] p-4 rounded-xl border border-[#D9DDEE]">
          The paper presents a conceptual privacy design. It does not report a formal privacy proof, implementation audit, regulatory analysis, or security penetration test.
        </p>
      </section>

      {/* 12. LIMITATIONS */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-4 h-4 text-[#D97706]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#D97706]">
            LIMITATIONS IDENTIFIED IN THE PAPER
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-6">
          Immutability and distribution also introduce operational risks
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-xl bg-[#FFFBF0] border border-[#F6E05E]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#744210] block mb-1">
              DATA GROWTH
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              Append-only records continually accumulate, increasing long-term storage and maintenance requirements.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FFFBF0] border border-[#F6E05E]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#744210] block mb-1">
              RETRIEVAL DELAY
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              As the ledger becomes larger, loading and synchronizing data across nodes may become slower.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FFFBF0] border border-[#F6E05E]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#744210] block mb-1">
              MALICIOUS MAJORITY
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              The paper notes that system trust can fail when a majority of participating nodes behaves maliciously.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FFFBF0] border border-[#F6E05E]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#744210] block mb-1">
              OPERATIONAL SCALABILITY
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              The proposal does not provide a complete solution for efficiently operating a large-scale, long-running property ledger.
            </p>
          </div>
        </div>

        <p className="text-xs font-semibold text-[#744210] bg-[#FFFBF0] p-4 rounded-xl border border-[#F6E05E]">
          These limitations were explicitly identified as areas requiring additional research before commercialization.
        </p>
      </section>

      {/* 13. INTERPRETATION BOUNDARIES */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Info className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            WHAT THIS PAPER DOES AND DOES NOT SHOW
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-6">
          Scope and Evaluation Boundaries
        </h3>

        <div className="space-y-2.5 text-xs sm:text-sm font-medium text-[#20243C]">
          {[
            'The work proposes a blockchain-based real-estate service architecture.',
            'It analyzes the causes of false and outdated listings.',
            'It defines stakeholder roles and selling and buying workflows.',
            'It describes a conceptual demonstration model.',
            'It does not report a production deployment.',
            'It does not report a field trial with buyers, owners, agents, or advertisers.',
            'It does not provide quantitative fraud-reduction results.',
            'It does not benchmark throughput, latency, storage growth, or consensus performance.',
            'It does not provide a formal security or privacy proof.',
            'It should be interpreted in its February 2017 technological and market context.',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
              <span className="w-2 h-2 rounded-full bg-[#9091DF] shrink-0 mt-1.5" />
              <span className="leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 14. MAIN CONTRIBUTIONS */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            MAIN CONTRIBUTIONS
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-6">
          Key Academic & Technical Contributions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-2">
              PROBLEM-DRIVEN APPLICATION
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              Identifies false and outdated real-estate listings as a multi-party record integrity problem suitable for a shared append-only model.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-2">
              STAKEHOLDER-CENTERED SERVICE
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              Defines how buyers, property owners, real-estate agents, and advertising services interact with the proposed record system.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-2">
              TRUST THROUGH CONSISTENCY
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              Uses owner authentication, linked property records, visible disagreements, and shared transaction updates to support a proposed trust indicator.
            </p>
          </div>
        </div>
      </section>

      {/* 15. MY CONTRIBUTION */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <UserCheck className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            MY CONTRIBUTION
          </h2>
        </div>
        <div className="p-6 rounded-2xl bg-[#20243C] text-[#FBFBFF] border border-[#A0A1F8]/20">
          <p className="text-sm sm:text-base text-[#FBFBFF] font-medium leading-relaxed">
            As first author, I contributed to the real-estate market problem analysis, blockchain application concept, stakeholder and service-workflow design, proposed trust and record-consistency model, evaluation of expected benefits and limitations, manuscript preparation, and publication in collaboration with the corresponding author.
          </p>
        </div>
      </section>

      {/* 16. PUBLICATION CONTEXT */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            PUBLICATION CONTEXT
          </h2>
        </div>
        
        <p className="text-sm sm:text-base text-[#20243C] font-medium leading-relaxed mb-6">
          This Korean-language article was published in Volume 22, Issue 1 of The Journal of Society for e-Business Studies in February 2017. The portfolio page presents its core problem formulation, proposed architecture, and limitations in English for an international audience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] text-xs font-mono font-semibold text-[#20243C]">
          <div>
            <span className="text-[#626A7C] block uppercase text-[10px] mb-0.5">DOI:</span>
            <a
              href="https://doi.org/10.7838/jsebs.2017.22.1.051"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9091DF] hover:underline"
            >
              10.7838/jsebs.2017.22.1.051
            </a>
          </div>
          <div>
            <span className="text-[#626A7C] block uppercase text-[10px] mb-0.5">PAGES:</span>
            <span>51–64</span>
          </div>
          <div>
            <span className="text-[#626A7C] block uppercase text-[10px] mb-0.5">LANGUAGE:</span>
            <span>Korean (English Title & Abstract)</span>
          </div>
        </div>
      </section>

    </div>
  );
};
