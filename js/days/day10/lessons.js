/* ============================================================
   DAY 10 — Digital Presence & Social Media Management
   Everything a trainee reads on this day:
   - DAY10: the topics (lessons), Quick Checks, Knowledge Check questions (quiz)
     and the discussion question. A Quick Check's afterIndex is the position of
     the topic it follows (0 = first topic).
   - DAY10_EXTRA_LEARNING: the extra-learning box on some topics, keyed
     "10::<topic title>".
   The trainer's notes and slide scripts for this day are in notes.js and
   scripts.js in this folder. Topic titles must stay unique within the day:
   notes, scripts and saved progress are matched by title.
   Loaded before the portal's main script, which builds DAYS from every day.
   ============================================================ */
const DAY10 = {
  "id": 10,
  "title": "Digital Presence & Social Media Management",
  "theme": "Management vs. Marketing · Brand Voice & Visual Assets · Platforms & Publishing · Content, SEO & Copy · Metrics & Campaign Math · Social Media Risk & Compliance · Capstone",
  "objective": "Read social performance numbers correctly, write for the platform, and understand the basic math behind a campaign's ROI.",
  "lessons": [
    {
      "h": "Social Media Management vs. Marketing",
      "section": "Social Media Roles",
      "layout": "TABLE",
      "b": [
        "Management is the restaurant's dining room — keeping guests happy and the menu updated. Marketing is the billboard on the highway bringing new people in.",
        "EAs typically own Management (consistency, scheduling, DM filtering); PAs and marketing specialists lean more into Marketing (growth, content creation, campaigns)."
      ],
      "tableHeaders": [
        "Feature",
        "Social Media Management",
        "Social Media Marketing"
      ],
      "tableRows": [
        [
          "Primary Goal",
          "Consistency, engagement, retention",
          "Growth, lead gen, conversions"
        ],
        [
          "Focus",
          "'Keeping the lights on' and community care",
          "Driving strategic results and sales"
        ],
        [
          "Content Type",
          "Daily updates, behind-the-scenes",
          "Ad campaigns, promotional videos"
        ],
        [
          "Success Metric",
          "Follower growth, response time, likes",
          "Clicks, ROI, sales, email sign-ups"
        ],
        [
          "Nature",
          "Passive/ongoing — continuous presence",
          "Active/campaign — starts and ends"
        ]
      ],
      "howTo": [
        "Before taking on any social media task, identify whether it's Management (keeping the account running, engaging, current) or Marketing (a campaign designed to grow or convert) — the two need different approaches.",
        "For Management tasks, prioritize consistency and retention — steady daily presence, timely DM responses, an updated bio and content calendar.",
        "For Marketing tasks, prioritize the strategic goal — growth, lead generation, conversions — and measure against that goal specifically, not just engagement.",
        "Match your success metric to the task type: follower growth and response time for Management, clicks and ROI for Marketing — using the wrong metric will make good work look like it's failing.",
        "If a task genuinely spans both, split it explicitly — handle the ongoing management piece on the regular cadence, and treat the campaign piece as its own contained project with a start and end."
      ],
      "trainerCue": "Ask the room to describe, in one sentence, the difference between 'managing' and 'marketing' a social account BEFORE showing them the restaurant analogy — compare their instinct to the framework."
    },
    {
      "h": "EA vs. PA Roles in Social Media",
      "section": "Social Media Roles",
      "layout": "COMPARE",
      "b": [
        "The EA is the Gatekeeper & Moderator — daily task is filtering DMs and updating bios, crisis care is spotting negative PR early.",
        "The PA is the Ghostwriter & Promoter — daily task is writing articles or sharing wins, crisis care is distributing good news to bury the bad."
      ],
      "compareLeft": {
        "label": "Executive Assistant — Brand & Strategy",
        "items": [
          "Manages the content calendar for professional platforms (LinkedIn) and times posts for peak engagement.",
          "Filters DMs and comments for valuable networking, media inquiries, or urgent issues.",
          "Reviews posts to ensure tone matches the executive's public persona and company policy.",
          "Acts as first line of defense if a PR issue arises, coordinating with marketing or legal."
        ]
      },
      "compareRight": {
        "label": "Personal Assistant — Creation & Execution",
        "items": [
          "More hands-on with actual content creation for Instagram, TikTok, or personal blogs.",
          "Captures behind-the-scenes photos/video of the client's daily life, travel, or events.",
          "Uses apps like Canva or CapCut to edit raw footage before it goes live.",
          "Handles platform maintenance — bios, links (like Linktree) — and personal community replies."
        ]
      },
      "howTo": [
        "As EA, manage the content calendar for professional platforms and time posts for peak engagement, rather than posting reactively whenever content happens to be ready.",
        "As EA, filter DMs and comments specifically for valuable networking, media inquiries, or urgent issues — not every message needs the executive's direct attention.",
        "As EA, review every post against the executive's public persona and company policy before it goes live, catching a tone mismatch before it's published, not after.",
        "As PA, focus on hands-on content creation — capturing real moments and editing them into usable content with tools like Canva or CapCut.",
        "As PA, handle platform maintenance (bios, links) and personal community replies directly, keeping the EA free to focus on strategy and brand protection."
      ],
      "trainerCue": "This is a good place for a real division-of-labor discussion: who in the room has actually split brand-strategy work from content-creation work, and how did that split actually happen in practice?"
    },
    {
      "h": "Personal vs. Firm Brand Account Separation",
      "section": "Social Media Roles",
      "fourPart": {
        "corePrinciples": [
          "An executive's personal brand and the firm's institutional brand are related but distinct — content, tone, and even account ownership decisions should reflect that distinction deliberately, not by default.",
          "Account ownership and access matter practically, not just conceptually — who actually controls login credentials to an executive's \"personal\" account has real implications if that person ever leaves the firm."
        ],
        "howTo": [
          "Clarify explicitly, in writing, which accounts are the executive's personal property versus firm-owned assets — this avoids a genuinely difficult dispute later.",
          "Keep credentials and access management consistent with that ownership structure — a firm-owned account should have firm-controlled access, even if the executive is the primary poster.",
          "Apply consistent, but distinct, voice guidelines to each: personal accounts can carry more individual personality, while firm accounts stay closer to institutional voice."
        ],
        "bestPractices": [
          "Pitfall: leaving account ownership ambiguous until a departure or dispute forces the question — this is exactly the situation where clarity should have existed from the start.",
          "Never mix firm-confidential content into what's treated as a personal account without the same review process firm content would get.",
          "Document access credentials and account ownership in the firm's standard systems, not just in the executive's personal notes."
        ],
        "discussionCase": "An executive with a large personal following on a platform is preparing to leave the firm. The account has been used for both personal thought leadership and firm announcements. What questions does this raise that should have been settled long before this moment?"
      }
    },
    {
      "h": "The Executive Personal Brand Style Guide",
      "section": "Brand Voice & Style",
      "layout": "ICONLIST",
      "icons": [
        {
          "icon": "🎯",
          "label": "North Star",
          "desc": "The primary goal (thought leadership, recruiting, networking) and the 3 key topics the executive is the 'expert' in"
        },
        {
          "icon": "🗣",
          "label": "Voice & Tone",
          "desc": "Point of view (1st vs. 3rd person), emoji use, and punctuation rules — written down, not left to instinct"
        },
        {
          "icon": "🚫",
          "label": "The 'Never' List",
          "desc": "Banned topics, banned buzzwords, and formatting no-gos (e.g. no more than 5 hashtags)"
        },
        {
          "icon": "💬",
          "label": "Engagement Protocol",
          "desc": "Who gets a reply, how to handle trolls, and the approval workflow"
        },
        {
          "icon": "📸",
          "label": "Visual Standard",
          "desc": "Roughly 70% candid/authentic content, 30% polished (professional headshots for major announcements)"
        }
      ],
      "b": [
        "A style guide only works if it's actually written down somewhere everyone drafting content can reference — an unwritten 'sense' of the brand voice doesn't transfer between people."
      ],
      "howTo": [
        "Define the North Star first — the primary goal (thought leadership, recruiting, networking) and the 3 key topics the executive is positioned as an expert in.",
        "Write down Voice & Tone rules explicitly — point of view, emoji use, punctuation — rather than leaving it to each contributor's instinct.",
        "Build the \"Never\" List with specific banned topics, buzzwords, and formatting rules, so every contributor has the same clear boundaries.",
        "Set the Engagement Protocol in writing — who gets a reply, how to handle trolls, and what needs approval before it goes out.",
        "Establish the Visual Standard (e.g. roughly 70% candid, 30% polished) so image choices are consistent across contributors, not a matter of individual taste."
      ],
      "trainerCue": "Read the 'Never List' concept out loud and ask the room to draft one item for a hypothetical executive's own Never List on the spot — it makes the concept concrete fast."
    },
    {
      "h": "Content Pillars & Finding the Brand Voice",
      "section": "Brand Voice & Style",
      "layout": "QUADRANT",
      "b": [
        "The 'This, Not That' exercise defines boundaries for writers: Confident (not sarcastic), Witty (not arrogant), Accessible (not simple), Bold (not aggressive).",
        "A consistent voice signals a real human is behind the account — if it changes every two days, the audience gets 'brand whiplash' and unfollows."
      ],
      "quadrants": [
        {
          "label": "Funny vs. Serious",
          "desc": "Are you making jokes, or providing solemn expertise?"
        },
        {
          "label": "Formal vs. Casual",
          "desc": "Do you use 'Dear Sir/Madam' or 'Hey there!'?"
        },
        {
          "label": "Detached vs. Enthusiastic",
          "desc": "A calm, objective observer or a high-energy cheerleader?"
        },
        {
          "label": "Irreverent vs. Respectful",
          "desc": "Do you challenge the status quo with snark, or play by the rules?"
        }
      ],
      "howTo": [
        "Apply the \"This, Not That\" boundaries to every piece of content before it's published — confident not sarcastic, witty not arrogant, accessible not simple, bold not aggressive.",
        "Place the voice deliberately on each of the four spectrums (funny vs. serious, formal vs. casual, detached vs. enthusiastic, irreverent vs. respectful) rather than letting it drift based on whoever's writing that day.",
        "Check new content against the established position on these spectrums, not just against a general \"does this sound right\" instinct.",
        "If the voice is inconsistent across recent posts, diagnose which spectrum it's actually drifting on, rather than treating it as a vague overall tone problem.",
        "Remember the stakes of drift explicitly — a voice that changes every two days causes real \"brand whiplash\" and measurable unfollows, not just a vague sense of inconsistency."
      ],
      "trainerCue": "Run the 'This, Not That' exercise live as a group exercise on the whiteboard before trainees do it individually — the contrast pairs are more memorable out loud."
    },
    {
      "h": "Defining and Maintaining Brand Voice, Tone & Messaging",
      "section": "Brand Voice & Style",
      "layout": "COMPARE",
      "compareLeft": {
        "label": "Elias's Actual Voice",
        "items": [
          "Direct — leads with the answer, not the preamble",
          "Credible — backs claims with specifics, not adjectives",
          "Unhurried — doesn't chase trends just to stay visible"
        ]
      },
      "compareRight": {
        "label": "A Generic, Wrong Voice",
        "items": [
          "Hedges everything — 'we believe,' 'it's possible that'",
          "Leans on buzzwords instead of specifics",
          "Chases every trending format regardless of fit"
        ]
      },
      "b": [
        "Defining a voice is the easy part — a single workshop can produce a good voice guide. Maintaining it across months, multiple contributors, and dozens of posts is the actual discipline."
      ],
      "howTo": [
        "Write content that's direct, leading with the actual answer rather than a preamble — this matches Elias's real voice and is the fastest thing to check in a draft.",
        "Back every claim with a specific detail, not a vague adjective — credibility comes from specifics, not from words like \"amazing\" or \"innovative.\"",
        "Resist chasing every trending format just to stay visible — an unhurried, selective posting pattern is part of the actual voice, not a gap to fill.",
        "Catch hedging language (\"we believe,\" \"it's possible that\") in drafts and rewrite it into a direct statement before publishing.",
        "Compare any draft against a real example of the correct voice before finalizing it — this catches drift toward a generic tone faster than reviewing it in isolation."
      ],
      "trainerCue": "Ask the room to rewrite one generic-voice line from the right column into Elias's actual voice, live — this is a much faster way to internalize a voice than reading examples passively."
    },
    {
      "h": "Making a Voice Guide Actually Stick",
      "section": "Brand Voice & Style",
      "b": [
        "A written style guide should give concrete 'this, not that' examples like the ones above, not just adjectives — 'confident' means nothing to a new contributor without a real sentence showing what confident looks like versus what it doesn't.",
        "Messaging guidelines are a layer above tone: they define the specific claims and framing that are always used consistently — e.g., always describing the firm the same way, never contradicting a stated position from post to post.",
        "The maintenance mechanism matters as much as the guide itself: someone needs to actually review drafts against the guide before publishing, or the guide quietly stops being followed within a month."
      ],
      "howTo": [
        "Write the style guide with concrete \"this, not that\" examples, not just adjectives — a real sentence showing what \"confident\" looks like versus what it doesn't is what actually transfers to a new contributor.",
        "Define messaging guidelines as a separate layer above tone — the specific claims and framing that should always stay consistent post to post.",
        "Assign a specific person to review drafts against the guide before publishing — without a named owner, this step quietly stops happening within a month.",
        "Check new contributors' first few drafts especially closely against the guide, since this is where drift is most likely to start.",
        "Update the guide itself when a genuinely new, correct pattern emerges — a style guide that never evolves eventually stops reflecting how the voice actually needs to sound."
      ],
      "trainerCue": "Ask who, specifically, would review drafts against the guide in the room's own organization — if nobody has a clear answer, that's the actual gap this topic is pointing at."
    },
    {
      "h": "Visual Brand Assets — Sample Color Palette",
      "section": "Brand Voice & Style",
      "layout": "PALETTE",
      "palette": [
        {
          "name": "Deep Navy",
          "hex": "#1B2340",
          "use": "Primary — headers, dominant brand color, conveys authority and stability"
        },
        {
          "name": "Warm Gold",
          "hex": "#C9A24B",
          "use": "Accent — calls-to-action, highlights, used sparingly for emphasis"
        },
        {
          "name": "Charcoal",
          "hex": "#2E2E2E",
          "use": "Body text — high readability, pairs with either brand color"
        },
        {
          "name": "Warm Ivory",
          "hex": "#F5F1E8",
          "use": "Background — neutral canvas that doesn't compete with navy or gold"
        }
      ],
      "b": [
        "A brand's visual identity isn't just a logo — it's a small, deliberately limited set of colors, fonts, and imagery rules that make every piece of content instantly recognizable as the same brand, even without a name attached."
      ],
      "howTo": [
        "Limit the palette to one dominant color, one accent, one text color, and one background — resist adding a fifth color even when it feels like it would help a specific piece.",
        "Use the accent color sparingly, specifically for calls-to-action and highlights, not as a second dominant color.",
        "Apply the palette consistently across every piece of content, not just the ones a specific person happens to design.",
        "Check that the background color doesn't compete visually with the dominant or accent colors — it should function as a neutral canvas.",
        "When evaluating any real brand's palette, check it against this exact four-role structure to spot where restraint has slipped."
      ],
      "trainerCue": "If your organization already has a real brand palette, swap it in here and have the room evaluate whether it actually follows the 'one dominant, one accent, one text, one background' discipline — most real-world palettes don't, and spotting why is a useful exercise."
    },
    {
      "h": "Brand Consistency: Palette, Typography & Imagery",
      "section": "Brand Voice & Style",
      "b": [
        "The palette above follows a common, reliable pattern: one dominant color, one accent used sparingly, one text color, one background — resist the urge to add a fifth 'just in case' color, since restraint is what keeps a brand looking deliberate rather than random.",
        "Typography works the same way: pick one heading font and one body font, and use them everywhere — mixing fonts across posts is one of the fastest ways to make a brand look unmanaged.",
        "Imagery rules matter as much as color: decide up front what's off-limits (generic stock-photo clichés, overly casual snapshots) so every contributor is choosing images against the same standard, not their own personal taste."
      ],
      "howTo": [
        "Apply the palette's one dominant, one accent, one text, one background discipline consistently, resisting the urge to add a \"just in case\" fifth color.",
        "Pick exactly one heading font and one body font, and use them on every piece of content — never substitute a different font because it happened to be convenient.",
        "Set explicit imagery rules up front (no generic stock-photo clichés, no overly casual snapshots) so every contributor is choosing images against the same standard.",
        "Review recent content periodically for font or color drift — inconsistency tends to creep in gradually across multiple contributors, not all at once.",
        "When you spot a real brand mixing fonts or colors inconsistently, use it as a concrete example of what restraint prevents."
      ],
      "trainerCue": "Ask the room to spot a real brand (their own organization's, or one they follow) that mixes fonts or colors inconsistently across posts — noticing it in the wild makes the restraint principle land better than the abstract rule alone."
    },
    {
      "h": "Platform Proficiencies — Tool-Specific Best Practices",
      "section": "Platforms & Publishing",
      "layout": "THREEBOX",
      "boxes": [
        {
          "label": "Social Media Platforms",
          "desc": "Each platform has its own native format expectations — a LinkedIn post and an Instagram caption shouldn't be the same text copy-pasted twice"
        },
        {
          "label": "CMS Platforms",
          "desc": "WordPress, Webflow, Squarespace — knowing how to update a page, swap an image, or publish a post without breaking the site layout"
        },
        {
          "label": "Newsletter Platforms",
          "desc": "Mailchimp, ConvertKit, Substack — list segmentation, send-time optimization, and reading basic open/click-rate reports"
        }
      ],
      "b": [
        "Being 'good at social media' isn't one skill — it's platform literacy across several genuinely different tools, each with its own conventions, audience expectations, and technical quirks."
      ],
      "howTo": [
        "Adapt content to each social platform's native format rather than copy-pasting the same text across LinkedIn, Instagram, and others.",
        "Learn the specific CMS platform in use (WordPress, Webflow, Squarespace) well enough to update a page or swap an image without risking the site layout.",
        "Learn the newsletter platform's core functions — list segmentation, send-time optimization, and reading basic open/click-rate reports — rather than just hitting send.",
        "Treat each platform as genuinely different rather than assuming skill on one transfers automatically to another — the conventions and technical quirks differ meaningfully.",
        "When encountering a new tool for the first time, do a real walkthrough of its actual publishing flow before using it live, rather than guessing at the interface under time pressure."
      ],
      "trainerCue": "If your organization uses specific tools (a particular CMS, a particular email platform), do a 10-minute live screen-share of the actual publishing flow — abstract platform literacy is far less useful than seeing the real click-path once."
    },
    {
      "h": "Platform Details & the One Rule That Applies to All Three",
      "section": "Platforms & Publishing",
      "b": [
        "On social platforms: LinkedIn rewards professional, text-forward posts with a clear point in the first two lines; Instagram rewards visual-first content with captions that support rather than carry the post; X/Twitter rewards brevity and timeliness over polish.",
        "On CMS platforms, the core EA-relevant skill is making a routine content update (a new page, a swapped image, a corrected typo) without needing a developer — most platforms support this through a visual editor, but every platform's editor works slightly differently.",
        "On newsletter platforms, the most common EA-relevant tasks are: building a segmented list (not blasting everyone the same email), scheduling around actual audience time zones, and reading a basic performance report to see whether an email actually got opened and clicked, not just sent.",
        "A practical rule across all three categories: before touching a live/production account, always test in a draft or preview mode first — a typo in a draft is invisible; a typo already sent to a real list is not."
      ],
      "howTo": [
        "On LinkedIn, lead with a clear point in the first two lines — professional, text-forward posts perform best there.",
        "On Instagram, lead visually and let the caption support rather than carry the post.",
        "On X/Twitter, prioritize brevity and timeliness over polish.",
        "On a CMS, make routine updates (a new page, a swapped image, a typo fix) through the visual editor without needing a developer, learning each platform's specific editor.",
        "Across all three categories, always test in draft or preview mode before touching a live account — a typo in a draft is invisible, one already sent to a real list is not."
      ],
      "trainerCue": "Emphasize the draft-first rule explicitly — ask if anyone in the room has a story of something going out live that shouldn't have. Nearly everyone does, and it makes the rule concrete."
    },
    {
      "h": "The Content Calendar & Publishing Workflow",
      "section": "Platforms & Publishing",
      "layout": "PROCESS",
      "b": [
        "A professional calendar tracks platform, content pillar, asset type, the hook (first 3 seconds/words), SEO keywords, CTA, and status — not just a date and caption.",
        "Aim for consistency over perfect timing — algorithms prioritize user activity over exact posting time."
      ],
      "processSteps": [
        {
          "label": "Ideation (Week 1)",
          "desc": "Brainstorm 12–15 ideas based on your content pillars for the month ahead"
        },
        {
          "label": "Creation (Week 2)",
          "desc": "Film all videos and design all graphics in 1–2 focused days"
        },
        {
          "label": "Optimization (Week 3)",
          "desc": "Draft several caption/hook variations and select the best fit for the brand voice"
        },
        {
          "label": "Scheduling (Week 4)",
          "desc": "Load everything into the publishing tool of choice"
        }
      ],
      "trainerCue": "Walk the four-week Batch Method against a REAL upcoming month if anyone in the room manages content — hypothetical calendars land less than a real one."
    },
    {
      "h": "Video Content Basics for Executive Presence",
      "section": "Platforms & Publishing",
      "fourPart": {
        "corePrinciples": [
          "Video carries more of an executive's actual presence than text ever can — tone, pacing, and body language all read through, which raises both the opportunity and the risk.",
          "Short-form video doesn't require production value to work — clarity, a genuine tone, and a clear point matter far more than polish for executive thought-leadership content."
        ],
        "howTo": [
          "Before recording, confirm the specific point the video needs to make — a video without one clear takeaway tends to ramble and underperforms even with good production.",
          "Check the background and audio quality before hitting record — a compliance audit of the visible background (per the earlier security topic) applies to video exactly as it does to photos.",
          "Keep executive video content short (60-90 seconds for social) — a longer video needs a much stronger hook to hold attention past the first few seconds."
        ],
        "bestPractices": [
          "Pitfall: publishing video with no captions — a meaningful share of viewers watch with sound off, and captions are also a basic accessibility requirement.",
          "Never publish executive video without a full watch-through first — an off-hand comment or visible background detail is much harder to catch by skimming.",
          "Keep a consistent visual setup (lighting, background) across videos so the executive's content reads as a recognizable, consistent presence."
        ],
        "discussionCase": "Elias records a 90-second video answering a common client question, but during the recording, a notification with a client's name flashes across his visible monitor in the background. What's your actual process before this gets published?"
      }
    },
    {
      "h": "Accessibility in Digital Content",
      "section": "Platforms & Publishing",
      "fourPart": {
        "corePrinciples": [
          "Accessible content (alt text on images, captions on video, readable color contrast) isn't a niche add-on — it determines whether a meaningful share of the audience can actually engage with the content at all.",
          "Building accessibility in from the start costs very little extra effort; retrofitting it after a large body of content already exists is far more work."
        ],
        "howTo": [
          "Add descriptive alt text to every image posted — describe what's actually in the image and its relevant context, not just a generic label.",
          "Add captions to all video content, not just relying on platform auto-captions, which are frequently inaccurate enough to misrepresent what was said.",
          "Check color contrast on any graphics or text-on-image content — low-contrast text is unreadable for a meaningful portion of any audience."
        ],
        "bestPractices": [
          "Pitfall: treating alt text as a formality and writing something generic like \"image\" — this provides no real value and defeats the purpose entirely.",
          "Never rely solely on auto-generated captions without reviewing them — an inaccurate caption misrepresenting a quote can create real problems.",
          "Make accessibility review a standard step in the content approval process, not an afterthought applied only when someone happens to raise it."
        ],
        "discussionCase": "You're finalizing a graphic-heavy LinkedIn post with a data visualization and no alt text. What's your actual process for writing a description that's genuinely useful, not just a placeholder?"
      }
    },
    {
      "h": "Audience Psychology & Pain Points",
      "section": "Content, SEO & Copy",
      "layout": "QUADRANT",
      "b": [
        "Today's audiences are experiencing 'Digital Overload Fatigue' — they no longer trust polished ads and crave raw, real-world proof over produced content.",
        "High-impact psychological triggers to use ethically: the Bandwagon Effect ('300 people joined this week'), Reciprocity (give value for free), and Cognitive Dissonance (point out a conflict in current behavior)."
      ],
      "quadrants": [
        {
          "label": "Financial",
          "desc": "Hidden fees or rigid pricing — solve with radical transparency and milestone rewards"
        },
        {
          "label": "Convenience",
          "desc": "Information overload — be the curator, answer one specific question fast"
        },
        {
          "label": "Emotional",
          "desc": "Burnout and overstimulation — shift from 'hustle' to sustainable progress"
        },
        {
          "label": "Trust",
          "desc": "Fear of fake data or exploitation — show the real process, not staged content"
        }
      ],
      "howTo": [
        "For financial pain points (hidden fees, rigid pricing), address them with radical transparency rather than vague reassurance.",
        "For convenience pain points (information overload), position content as a curator answering one specific question quickly, not adding to the noise.",
        "For emotional pain points (burnout, overstimulation), shift the framing from \"hustle\" to sustainable progress, since audiences are actively fatigued by the former.",
        "For trust pain points (fear of fake data or exploitation), show the real process rather than staged or overly polished content.",
        "Apply psychological triggers (Bandwagon Effect, Reciprocity, Cognitive Dissonance) ethically and sparingly — as genuine value-adds, not manipulative tactics."
      ],
      "trainerCue": "Ask which of the four audience pain points (Financial, Convenience, Emotional, Trust) shows up most in the room's own industry — this varies a lot and is worth a real discussion."
    },
    {
      "h": "SEO, GEO & Funneling for Executives",
      "section": "Content, SEO & Copy",
      "layout": "ICONLIST",
      "icons": [
        {
          "icon": "🔍",
          "label": "SEO",
          "desc": "Making sure the right people find the executive on Google — natural keyword phrases, backlinks from podcast/guest-blog appearances"
        },
        {
          "icon": "🤖",
          "label": "GEO",
          "desc": "Getting AI tools like ChatGPT, Gemini, and Perplexity to actually recommend the executive when someone asks a relevant question"
        },
        {
          "icon": "🔽",
          "label": "Funneling",
          "desc": "Top of funnel is awareness (social, PR), middle is interest (newsletter, lead magnets), bottom is action (booking link, 24-hour follow-up)"
        },
        {
          "icon": "📊",
          "label": "Monthly Scorecard",
          "desc": "Domain Authority, AI citation mentions, funnel drop-off rate, and search volume for the executive's name"
        }
      ],
      "b": [
        "Run a monthly 'Google Yourself' audit in Incognito mode — if an outdated profile or old blog post is outranking the executive's current site, update the metadata to compete."
      ],
      "howTo": [
        "For SEO, use natural keyword phrases the executive's actual audience would search, and pursue backlinks from podcast or guest-blog appearances.",
        "For GEO, structure content so AI tools like ChatGPT or Perplexity can actually cite it when someone asks a relevant question — this is a distinct goal from ranking on Google.",
        "For funneling, match content to its stage: awareness content (social, PR) at the top, interest content (newsletter, lead magnets) in the middle, and a clear action step (booking link, prompt follow-up) at the bottom.",
        "Track the monthly scorecard metrics — Domain Authority, AI citation mentions, funnel drop-off rate, search volume for the executive's name — to see whether visibility is actually improving.",
        "Run a monthly \"Google Yourself\" audit in incognito mode, and if an outdated profile or old post is outranking the current site, update the metadata to compete."
      ],
      "trainerCue": "GEO is likely the newest concept in the room — pause here longer than the slide count suggests you should, and ask directly: 'Has anyone actually asked ChatGPT or Perplexity to recommend a business or person?' Most have, and don't realize it's the same mechanism."
    },
    {
      "h": "GEO Tactics & Consistency",
      "section": "Content, SEO & Copy",
      "b": [
        "GEO tactics include structured data/schema markup, FAQ-style 'direct answer' content, and consistent verbatim bio details across LinkedIn, website, and speaker pages (inconsistency hurts the AI 'trust score')."
      ],
      "howTo": [
        "Add structured data or schema markup where the platform supports it, making content more legible to AI systems, not just human readers.",
        "Write FAQ-style, direct-answer content for common questions the executive is positioned to answer — this format is exactly what AI tools tend to surface.",
        "Keep bio details verbatim-consistent across LinkedIn, the website, and any speaker pages — even small wording differences hurt the AI \"trust score.\"",
        "Audit these bio sources periodically for drift, since a bio updated in one place and not another is a common, easy-to-miss inconsistency.",
        "Treat consistency as an ongoing maintenance task, not a one-time setup — new speaker pages or profiles need to match the existing wording exactly when they're created."
      ],
      "trainerCue": "Ask the room to check whether their own executive's bio is worded identically across LinkedIn, the firm website, and any speaker pages — small wording differences are more common than people expect, and this is exactly what hurts GEO trust."
    },
    {
      "h": "Copywriting vs. Blog Writing",
      "section": "Content, SEO & Copy",
      "layout": "COMPARE",
      "b": [
        "Copywriting is the 'closer' — short, direct, urgent, built to convert. Blog writing is the 'friendly guide' — long, informative, built to educate and rank.",
        "The biggest mistake in blog writing today is regurgitating what the top 5 Google results already say — add a unique data point, a contrarian take, or a real example AI can't summarize away."
      ],
      "compareLeft": {
        "label": "Copywriting — The Sell",
        "items": [
          "Goal: conversion (buy, sign up, click) — usually short-form (ads, landing pages).",
          "Use the AIDA formula: Attention, Interest, Desire, Action.",
          "Strong CTAs use action words and urgency: 'Download your free guide now,' not 'Click here.'"
        ]
      },
      "compareRight": {
        "label": "Blog Writing — The Tell",
        "items": [
          "Goal: education, engagement, SEO — usually long-form (800+ words).",
          "Structure: a hook headline, a direct-answer intro (no fluff), a skimmable body with H2/H3s, and a clear next-step CTA.",
          "Add first-hand 'E-E-A-T' evidence — a pro-tip box or personal anecdote — to prove a human wrote it."
        ]
      },
      "howTo": [
        "For copywriting, identify the actual conversion goal first (buy, sign up, click) and apply the AIDA formula — Attention, Interest, Desire, Action — to structure it.",
        "Write CTAs with action words and real urgency (\"Download your free guide now\"), not passive phrasing like \"click here.\"",
        "For blog writing, open with a hook headline and a direct-answer intro with no fluff, then structure the body with skimmable H2/H3 sections.",
        "Add first-hand evidence — a specific example, a real anecdote, a unique data point — since the most common blog-writing mistake is regurgitating what the top search results already say.",
        "Match the format to the actual goal — don't use blog-length structure for something meant to convert quickly, or a hard sell for something meant to educate and rank."
      ],
      "trainerCue": "Have two trainees draft the SAME announcement live — one in copywriting mode, one in blog mode — and read both out loud back-to-back."
    },
    {
      "h": "Reading the Numbers — Engagement Rate",
      "section": "Metrics & Monitoring",
      "layout": "STAT",
      "statNumber": "(Likes + Comments + Shares) ÷ Followers × 100",
      "statLabel": "= Engagement Rate",
      "b": [
        "Worked example: 120 likes + 15 comments + 10 shares ÷ 4,000 followers × 100 = 3.6%."
      ],
      "howTo": [
        "Add up likes, comments, and shares for a given post or period as the numerator.",
        "Divide that total by the follower count, then multiply by 100 to get the engagement rate as a percentage.",
        "Use this rate to compare performance across posts of different reach, rather than relying on raw like or comment counts alone.",
        "Recalculate regularly (weekly or monthly) rather than checking once and assuming the rate stays static.",
        "Cross-check the calculated rate against platform-reported engagement figures where available, to confirm you're using the same underlying numbers."
      ],
      "trainerCue": "Do the engagement-rate calculation together as a group, live, with the room's own numbers if anyone has real social data handy — nothing beats real numbers for making a formula stick."
    },
    {
      "h": "Engagement Rate Benchmarks & Interpretation",
      "section": "Metrics & Monitoring",
      "singleSlide": true,
      "b": [
        "A smaller account with a higher rate can be the stronger performer — rate matters more than raw counts.",
        "On LinkedIn specifically, 2–5% organic engagement is healthy; above 7% means the post is going viral within its professional niche.",
        "Watch Reach vs. Engagement together: high reach with low engagement means the hook or audience is wrong; low reach with high engagement means a small, loyal following the algorithm will likely start pushing further."
      ],
      "howTo": [
        "Compare engagement rate, not just raw follower or like counts, when judging whether a post or account is actually performing well.",
        "Benchmark LinkedIn engagement specifically against the 2-5% healthy range, treating anything above 7% as a signal the post is going genuinely viral within its niche.",
        "Check reach and engagement together, not separately — high reach with low engagement suggests the hook or audience targeting is off.",
        "Treat low reach with high engagement as a positive signal (a small, loyal following), not a failure, since the algorithm tends to push this kind of content further over time.",
        "Revisit benchmarks periodically, since what counts as a healthy rate can shift as platforms and algorithms change."
      ],
      "trainerCue": "Ask the room to guess where their own organization's typical LinkedIn posts fall on the 2-5%/7%+ scale before revealing real numbers, if available — most people overestimate or have never actually checked."
    },
    {
      "h": "Basic Campaign Math",
      "section": "Metrics & Monitoring",
      "layout": "STAT",
      "statNumber": "Spend ÷ Leads = CPL",
      "statLabel": "ROI = (Revenue − Spend) ÷ Spend × 100",
      "b": [
        "Worked example: a $500 spend generating 50 leads at a $20 product price gives a Cost per Lead of $10, Revenue of $1,000, and an ROI of 100%.",
        "Know both numbers before calling any campaign a success — raw lead count alone can make a losing campaign look impressive."
      ],
      "howTo": [
        "Calculate Cost per Lead by dividing total spend by the number of leads generated.",
        "Calculate ROI as (Revenue minus Spend) divided by Spend, multiplied by 100 to get a percentage.",
        "Check both numbers together before calling any campaign a success — a high lead count alone can make a losing campaign look impressive.",
        "Compare CPL and ROI against the campaign's actual goals, not just against each other in isolation.",
        "Track these numbers consistently across campaigns so performance can be compared over time, not just assessed one campaign at a time."
      ],
      "trainerCue": "Do the campaign-math worked example live as a group — it's a fitting, concrete way to close out the analytics content before the program's final wrap-up topic."
    },
    {
      "h": "Social Listening & Monitoring",
      "section": "Metrics & Monitoring",
      "fourPart": {
        "corePrinciples": [
          "Social listening means actively tracking what's being said about the executive or firm across platforms — not just monitoring the firm's own posted content and its direct replies.",
          "Catching a mention or emerging conversation early gives far more options for response than discovering it only after it's already gained traction."
        ],
        "howTo": [
          "Set up alerts or a regular check for the executive's and firm's name across the platforms most relevant to their audience, not just the primary posting platform.",
          "Distinguish routine mentions from ones that need attention — most mentions need no action at all; a small number genuinely do.",
          "Log recurring themes in what's being said, not just individual mentions — a pattern across multiple mentions is often more informative than any single one."
        ],
        "bestPractices": [
          "Pitfall: only checking the firm's own account notifications — most relevant conversation happens in comments, shares, and posts that never directly tag the firm.",
          "Never treat social listening as a one-time setup — the tools and what's worth tracking evolve, and a periodic review keeps it actually useful.",
          "Flag any concerning trend early to the appropriate person rather than waiting until it's escalated into something that needs crisis response."
        ],
        "discussionCase": "While doing a routine listening check, you notice several posts in the last week referencing a specific complaint about the firm that hasn't been directly reported to anyone. What's your actual next step?"
      }
    },
    {
      "h": "Crisis Response on Social Media",
      "section": "Risk & Compliance",
      "fourPart": {
        "corePrinciples": [
          "A negative comment thread or review pile-on moves fast — the window to respond thoughtfully before it escalates is often measured in hours, not days.",
          "The instinct to delete or ignore negative feedback is usually the wrong one — visible, measured engagement almost always reads better than silence or a scrubbed comment section.",
          "Not every negative comment needs a public response — distinguishing a genuine complaint worth addressing from noise or bait is itself part of the skill."
        ],
        "howTo": [
          "When a negative comment or review surfaces, assess it before reacting: is this a legitimate complaint, a misunderstanding, or clearly bad-faith? Each calls for a different response.",
          "Respond publicly with a brief, calm acknowledgment and move detailed resolution to a private channel — a long public back-and-forth rarely helps.",
          "Loop in the executive or appropriate decision-maker immediately for anything beyond a routine complaint — crisis-level situations aren't a call to make alone."
        ],
        "bestPractices": [
          "Pitfall: responding defensively or emotionally in the heat of the moment — a hasty public reply is far harder to walk back than a delayed, considered one.",
          "Never delete a legitimate negative comment just because it's unflattering — this often escalates the situation and looks worse than the original comment.",
          "Document the situation and response as it unfolds — a clear record matters if the situation continues to develop or needs escalation."
        ],
        "discussionCase": "A former client posts a detailed, public complaint about the firm that's gaining traction in the comments. Some of what they say is accurate, some is exaggerated. What's your actual first move in the next 30 minutes, before anyone senior weighs in?"
      }
    },
    {
      "h": "Copyright, Image Rights & Permissions",
      "section": "Risk & Compliance",
      "fourPart": {
        "corePrinciples": [
          "Almost every image, video clip, song and article online is protected by copyright. Being able to download or screenshot it doesn't mean the firm can post it.",
          "Use content the firm owns, content with a license that covers the use (for example paid stock photos) or content you have written permission to use. 'Found it on Google' is none of these.",
          "Photos of people need their consent to be used in promotion, and photos involving clients need written permission. For a law firm, even showing that someone is a client can breach confidentiality."
        ],
        "howTo": [
          "Source images from the firm's own library, a licensed stock service or the firm's photographer, and check the license terms (commercial use, credit required, any restrictions).",
          "Keep a simple record for each asset: where it came from, the license or permission, the date and any credit line required.",
          "Get signed photo releases from staff and event guests who appear in marketing, and written client consent before any client appears or is named.",
          "For music on videos, use the platform's licensed library or royalty-free tracks licensed for business use.",
          "To share someone else's post, use the platform's share feature, or ask permission and credit them. Don't download and re-upload it."
        ],
        "bestPractices": [
          "When unsure, create your own image or choose a licensed one. It's quicker than dealing with a takedown or a claim.",
          "Other companies' logos and trademarks shouldn't appear in a way that suggests they endorse the firm.",
          "Pitfall: 'We credited the photographer, so it's fine.' Credit isn't permission.",
          "Pitfall: posting a photo from a client event without checking whether any client in it agreed to appear."
        ],
        "discussionCase": "A partner wants to post a great photo from last night's charity dinner. It shows Elias with two clients and a local news anchor, and it was taken by a guest who emailed it over. What do you need before it goes up?"
      },
      "trainerCue": "Show three images: a stock photo with a license, a screenshot from a news site and a staff photo from a firm event. Ask the room which can be posted today, and what each of the others would need."
    },
    {
      "h": "Endorsement & Disclosure Rules",
      "section": "Risk & Compliance",
      "fourPart": {
        "corePrinciples": [
          "When a third party (an influencer, a partner, an employee) promotes the firm or executive online, disclosure rules (like the FTC's endorsement guidelines) can apply — and non-compliance carries real regulatory risk.",
          "The core principle behind most disclosure rules is simple: an audience should be able to tell when a post exists because of a relationship or payment, not just organic enthusiasm.",
          "This is another area where the specific, current regulatory requirements should be confirmed with actual firm policy or counsel — the rules and enforcement details change and vary by context."
        ],
        "howTo": [
          "Before agreeing to any paid or reciprocal promotional arrangement, confirm what disclosure language is required and where it needs to appear (in the post itself, not just a linked page).",
          "Keep records of any compensated or reciprocal promotional relationship, since this is what would need to be shown if disclosure adequacy were ever questioned.",
          "When reviewing content from a partner or affiliate promoting the firm, check that required disclosure is actually present and clearly visible, not buried."
        ],
        "bestPractices": [
          "Pitfall: assuming a simple mention or tag doesn't require disclosure just because no direct payment changed hands — many reciprocal or in-kind relationships still qualify.",
          "Never draft or approve promotional content without checking the disclosure requirement first — retrofitting disclosure after the fact is far more visible and awkward.",
          "When genuinely uncertain whether a relationship requires disclosure, treat it as if it does — the downside of over-disclosing is minimal compared to the downside of not disclosing at all."
        ],
        "discussionCase": "A former client with a large social following offers to post about the firm in exchange for a discount on future services. What do you need to confirm before this arrangement moves forward?"
      }
    },
    {
      "h": "Legal Advertising & UPL Rules",
      "section": "Risk & Compliance",
      "fourPart": {
        "corePrinciples": [
          "A law firm's social media and digital presence isn't just marketing — it's regulated attorney advertising in most jurisdictions, with real professional-conduct rules attached that ordinary business marketing doesn't have to follow.",
          "The Unauthorized Practice of Law boundary applies online exactly as it does everywhere else in this program — a post or comment that reads as specific legal advice to a specific situation crosses a line that general educational content doesn't."
        ],
        "howTo": [
          "Before publishing any content that discusses legal topics, check whether it's genuinely general and educational versus something that could read as advice for a specific person's specific situation — the second category needs attorney review before it goes out.",
          "Know the firm's jurisdiction-specific advertising rules where they exist — some jurisdictions require specific disclaimers on attorney advertising content, including social media.",
          "Route anything ambiguous to the same UPL-boundary judgment covered in this program's Legal Operations content — when in doubt about whether content crosses the line, escalate rather than publish and see."
        ],
        "bestPractices": [
          "Pitfall: treating a firm's social media as ordinary marketing with no special rules attached, just because it's the same platforms and formats as any other business uses.",
          "A testimonial, case result, or client story needs particular care — many jurisdictions have specific rules about what can and can't be claimed or implied in attorney advertising."
        ],
        "discussionCase": "A draft social post shares a genuinely impressive case outcome and includes language like \"we can get you the same result.\" What's the actual concern with this specific phrasing, and how would you suggest revising it?"
      }
    },
    {
      "h": "Final Timed Evaluation & Capstone Checklist",
      "section": "Capstone",
      "fourPart": {
        "corePrinciples": [
          "This closes out all 10 days of the program — every lesson, Practice Lab tool, Knowledge Check, and Live Roleplay session across the full curriculum has been building toward this point.",
          "A capstone checklist exists to confirm genuine readiness, not just attendance — the goal is an honest, specific picture of what's solid and what still needs work, the same discipline covered in the Day 5 mid-point review, now applied to the whole program."
        ],
        "howTo": [
          "Review actual performance data across all 10 days — Knowledge Check scores, Practice Lab attempt history, and any Live Roleplay Dashboard sessions — rather than relying on a general sense of how the program went.",
          "Identify specific days or tools that are still genuinely shaky, the same honest self-assessment habit from the Day 5 mid-point review, now applied one final time before the program closes.",
          "Complete any final timed evaluation the trainer has set up, treating it with the same composure-under-pressure discipline covered across the crisis roleplay content throughout the program."
        ],
        "bestPractices": [
          "Pitfall: treating the capstone as a formality now that the program is nearly over, rather than the last real opportunity to close a specific, known gap before moving into the role for real.",
          "A finished program doesn't mean a finished skill set — the strongest close to this program is a specific plan for what to keep practicing after Day 10 ends, not just relief that it's over."
        ],
        "discussionCase": "Looking back across all 10 days: which single day or Practice Lab tool would you most want to revisit on your own before considering yourself genuinely ready, and what specifically would you do to close that gap?"
      }
    }
  ],
  "quickChecks": [
    {
      "afterIndex": 18,
      "q": "A post gets 200 likes, 20 comments, 30 shares on an account with 5,000 followers. What's the Engagement Rate?",
      "opts": [
        "50%",
        "5%",
        "2%",
        "10%"
      ],
      "a": 1,
      "r": "(200+20+30) ÷ 5,000 × 100 = 5%."
    },
    {
      "afterIndex": 20,
      "q": "A campaign spends $300 and generates 30 leads. What's the Cost per Lead?",
      "opts": [
        "$10",
        "$30",
        "$300",
        "$3"
      ],
      "a": 0,
      "r": "$300 ÷ 30 leads = $10 per lead."
    }
  ],
  "quiz": [
    {
      "q": "Engagement Rate is calculated as:",
      "opts": [
        "(Likes + Comments) ÷ Impressions × 100, averaged across the month",
        "(Likes + Comments + Shares) ÷ Followers × 100",
        "(New followers + Shares) ÷ Posts published",
        "Followers ÷ Posts × 100"
      ],
      "a": 1,
      "r": "This formula captures actual interaction relative to audience size, not raw counts."
    },
    {
      "q": "The same announcement posted on Instagram vs. LinkedIn should:",
      "opts": [
        "Go on LinkedIn only, since professional news doesn't belong on a visual platform",
        "Use identical wording and images on both, so the executive's message stays consistent everywhere",
        "Use a different tone and format suited to each platform's audience",
        "Go out at exactly the same time on both platforms"
      ],
      "a": 2,
      "r": "Same core message, different register — that's writing for the platform."
    },
    {
      "q": "Cost per Lead is calculated as:",
      "opts": [
        "Total spend ÷ number of leads generated",
        "Total spend ÷ number of people who saw the ad",
        "Number of leads ÷ total spend",
        "(Total revenue − total spend) ÷ number of leads"
      ],
      "a": 0,
      "r": "This tells you the actual acquisition cost per lead from the campaign spend."
    },
    {
      "q": "The purpose of a posting calendar is to:",
      "opts": [
        "Post at the exact times the platform's algorithm rewards, so reach is as high as possible",
        "Avoid having to write captions in advance",
        "Fill every day with a post, since posting daily matters more than what's posted",
        "Keep content consistent and coordinated across a campaign instead of improvised"
      ],
      "a": 3,
      "r": "It's a coordination tool, not a guarantee of performance."
    },
    {
      "q": "Identifying a few target keywords before writing content mainly helps with:",
      "opts": [
        "SEO — helping the intended audience actually find the content",
        "Writing a catchier headline that stands out in feeds",
        "Choosing hashtags, so the post appears in trending feeds",
        "Reducing the number of hashtags needed"
      ],
      "a": 0,
      "r": "Keywords connect the content to what people are actually searching for."
    },
    {
      "q": "What is the key distinction between social media 'management' and 'marketing' for an executive's presence?",
      "opts": [
        "Marketing is the EA's day-to-day job of posting and replying; management is the agency's job of setting the overall strategy",
        "Management covers ongoing operational upkeep (scheduling, monitoring, responses); marketing focuses on strategic growth and campaigns",
        "Management only applies to personal accounts, marketing only to business accounts",
        "Management covers paid ads and campaigns, while marketing covers the unpaid, organic posts the executive writes"
      ],
      "a": 1,
      "r": "Management is the operational day-to-day; marketing is the strategic layer built on top of it — related but distinct."
    },
    {
      "q": "How do EA and PA roles typically differ in social media support?",
      "opts": [
        "A PA handles all the professional platforms, while an EA only manages the executive's personal accounts",
        "There's no real difference here: whoever has more time that week manages all of the executive's accounts",
        "An EA might handle professional/business-related content and scheduling; a PA might manage more personal-brand or lifestyle content",
        "An EA writes all the posts, while a PA only schedules them and reports on the results each month"
      ],
      "a": 2,
      "r": "The professional/personal split that defines EA vs. PA generally carries through into how they'd support social media too."
    },
    {
      "q": "What is the purpose of an executive personal brand style guide?",
      "opts": [
        "It sets the posting schedule for every platform for the year ahead",
        "It means posts no longer need the executive's review, since the guide already covers everything they would say",
        "It's mainly for outside agencies, so they can bill for brand work at an agreed rate for each post",
        "It ensures consistency in tone, visuals, and messaging across everyone who touches the executive's public content"
      ],
      "a": 3,
      "r": "A style guide keeps multiple contributors consistent, so the public presence doesn't feel disjointed across posts or platforms."
    },
    {
      "q": "What are 'content pillars' in a social media strategy?",
      "opts": [
        "The platforms the executive posts on, like LinkedIn, Instagram and X",
        "A small number of core themes that recurring content is organized around, to keep messaging focused",
        "The few best-performing posts each month, which are reposted to keep engagement up",
        "The rules about which topics are off-limits and which words the executive never uses"
      ],
      "a": 1,
      "r": "Content pillars give structure and focus so content doesn't drift randomly across unrelated topics."
    },
    {
      "q": "Why is a content calendar useful for managing an executive's social presence?",
      "opts": [
        "It shows the executive how many followers each post gained",
        "It means posts can go out at the same time every day, which is what the algorithm rewards most",
        "It creates consistency and lead time, preventing last-minute scrambles or long unexplained gaps in posting",
        "It lets the executive approve a whole year of posts at once, so they never need to be consulted again"
      ],
      "a": 2,
      "r": "Planning ahead avoids both content gaps and rushed, lower-quality last-minute posts."
    },
    {
      "q": "What does 'engagement rate' measure, as opposed to raw follower count?",
      "opts": [
        "How many new followers an account gains each month, compared with how many it loses",
        "How many people saw a post, whether or not they reacted to it",
        "How often the account posts each week, compared with similar accounts in the same industry",
        "How actively the actual audience interacts with content (likes, comments, shares) relative to reach"
      ],
      "a": 3,
      "r": "Engagement rate reflects real audience interaction, which is often more meaningful than follower count alone."
    },
    {
      "q": "Why might a large follower count with a low engagement rate be a warning sign?",
      "opts": [
        "It can indicate the audience isn't genuinely interested or the followers aren't real/active accounts",
        "It means the account should post longer captions to hold attention",
        "It's a sign the platform is limiting the account's reach, which normally fixes itself after a month",
        "It usually means the account posts too often, so each post reaches fewer of the followers it has"
      ],
      "a": 0,
      "r": "Vanity metrics like raw follower count can mask a disengaged or low-quality audience — engagement rate is a more honest signal."
    },
    {
      "q": "What is the value of understanding 'audience psychology and pain points' before creating content?",
      "opts": [
        "Only paid advertising needs to consider the audience at all",
        "Content that addresses real audience needs or concerns performs and resonates better than generic content",
        "It lets the content promise the outcome the audience wants most, which is what gets the most clicks",
        "It helps choose the best time of day to post, based on when the audience is most likely online"
      ],
      "a": 1,
      "r": "Content that speaks to something the audience actually cares about consistently outperforms generic, audience-blind content."
    },
    {
      "q": "What does SEO/GEO stand for in the context of an executive's online presence?",
      "opts": [
        "Search Engine Optimization and Generative Engine Optimization — being findable in search engines and AI-generated answers",
        "Search Engine Optimization and Geographic Optimization — ranking higher in local search results near the office",
        "Social Engagement Optimization and Geographic Exposure Optimization — reaching local audiences on social platforms",
        "Search Engine Outreach and Global Executive Outreach — pitching the executive to journalists and podcasts"
      ],
      "a": 0,
      "r": "SEO/GEO covers being discoverable both through traditional search engines and newer generative-AI answer engines."
    },
    {
      "q": "What is a meaningful difference between copywriting and blog writing?",
      "opts": [
        "Copywriting is always written by an agency, while blog writing is done in-house by the executive's own team",
        "Blog writing is informal and personal, while copywriting must always use formal, legal language",
        "Copywriting is typically short and conversion-focused; blog writing is typically longer-form and value/education-focused",
        "Copywriting is for printed materials and brochures, while blog writing is for anything published online"
      ],
      "a": 2,
      "r": "Copywriting drives a specific action in limited space; blog writing builds authority and value over a longer format."
    },
    {
      "q": "In basic campaign math, what does a low conversion rate combined with high reach typically suggest?",
      "opts": [
        "Reach and conversion have no relationship to each other",
        "The campaign is doing well, because high reach matters more than conversions at this early stage",
        "The budget is too small, so doubling the spend should bring the conversion rate up on its own",
        "Content is reaching people but not compelling enough of them to take the desired action"
      ],
      "a": 3,
      "r": "High reach with low conversion points to a message or call-to-action problem, not a distribution problem."
    },
    {
      "q": "Why should an EA/PA managing social media understand basic campaign math, even without a marketing background?",
      "opts": [
        "So they can set the campaign budget themselves, without needing sign-off from marketing or the executive",
        "So they can show the executive that every post is profitable, which keeps the social media budget approved each year",
        "It allows them to recognize when a campaign is underperforming and flag it appropriately, rather than just executing blindly",
        "Because the platforms require someone on the account to report the numbers to them every month"
      ],
      "a": 2,
      "r": "Basic numeracy here lets an EA/PA spot problems and escalate appropriately, adding real value beyond just posting content."
    },
    {
      "q": "What's a practical reason to maintain a consistent publishing cadence rather than posting sporadically?",
      "opts": [
        "Consistency helps build audience expectation and habit, which supports steadier engagement over time",
        "Publishing cadence is only relevant for paid content",
        "Posting at random times keeps the audience guessing, which makes each post feel more exciting",
        "It lets the team schedule a whole quarter of posts at once and then stop checking the account"
      ],
      "a": 0,
      "r": "Predictable cadence helps train an audience's habit of checking in, supporting more consistent engagement over time."
    },
    {
      "q": "Why is monitoring brand mentions and tags part of 'management,' even when not actively posting new content?",
      "opts": [
        "Because platforms reduce an account's reach if tags go unanswered, so every mention needs a reply the same day",
        "Reputational and engagement opportunities (and risks) can arise from mentions regardless of posting activity",
        "Because every mention has to be logged for the annual marketing report to the board",
        "Because the platforms penalize accounts that don't reply to every tag within an hour"
      ],
      "a": 1,
      "r": "A brand's online presence is shaped by more than its own posts — mentions and tags need attention too, active posting or not."
    },
    {
      "q": "What is a reasonable approach when an executive's personal brand voice needs to flex slightly across different platforms (e.g., LinkedIn vs. a more casual platform)?",
      "opts": [
        "Give each platform its own personality and style, so followers get a different side of the executive on each one",
        "Platform differences should always be ignored entirely",
        "Post the same words everywhere, so the executive's message is never changed or diluted",
        "Core voice and values stay consistent, while tone can adapt appropriately to each platform's norms"
      ],
      "a": 3,
      "r": "Consistency of core identity with platform-appropriate tone adjustments is the practical balance — not rigid uniformity or total inconsistency."
    },
    {
      "q": "A photographer's image from a news website would be perfect for the firm's post. You plan to credit them in the caption. Is that enough?",
      "opts": [
        "Yes, crediting the photographer by name is all that copyright law requires",
        "Yes, as long as the post doesn't earn the firm any money directly",
        "No, but it's fine if the image is resized or cropped so it looks different",
        "No, the firm needs a license or written permission to use the image"
      ],
      "a": 3,
      "r": "Credit isn't permission. The firm needs a license or written permission. Being non-commercial or edited doesn't make an unlicensed use safe."
    }
  ],
  "discussionQuestion": "Pick a recent announcement from your organization. How would you rewrite it differently for Instagram versus LinkedIn?"
};

const DAY10_EXTRA_LEARNING = {
  "10::The Executive Personal Brand Style Guide": {
    "t": "What Goes in the Style Guide",
    "p": [
      "North Star and audience: the primary goal and who the content is for.",
      "Voice and tone rules, content pillars (3–5 topics), and a 'Never' list of banned topics, words, and formats.",
      "Visual rules: colors, fonts, photo style, and approved headshots — plus an approval workflow for who signs off before posting."
    ]
  },
  "10::Defining and Maintaining Brand Voice, Tone & Messaging": {
    "t": "Voice vs. Tone vs. Messaging",
    "p": [
      "Voice is the constant personality — e.g., direct, credible, unhurried. It doesn't change from post to post.",
      "Tone flexes with context — celebratory for a team win, measured for industry news, empathetic for a difficult topic.",
      "Messaging is the recurring core ideas the executive wants to be known for. Audit a sample of posts quarterly against all three."
    ]
  },
  "10::Visual Brand Assets — Sample Color Palette": {
    "t": "Using a Palette Correctly",
    "p": [
      "The 60-30-10 rule: roughly 60% background/neutral, 30% primary brand color, 10% accent for calls-to-action.",
      "Record exact color codes (HEX for web, CMYK for print) so every designer and tool reproduces the same shade.",
      "Check contrast for readability — text must stand out clearly against its background, especially on mobile."
    ]
  },
  "10::Platform Proficiencies — Tool-Specific Best Practices": {
    "t": "Platform Snapshot",
    "p": [
      "LinkedIn: professional insight and thought leadership; text posts, articles, and documents perform well.",
      "Instagram: visual storytelling — behind-the-scenes, events, and culture; strong images and short captions.",
      "X/Threads and newsletters: timely commentary and direct relationship-building; newsletters are the channel the executive owns outright."
    ]
  },
  "10::Reading the Numbers — Engagement Rate": {
    "t": "Interpreting the Result",
    "p": [
      "Compare against the account's own average first — a 3.6% post is strong if the usual rate is 2%, weak if it's 6%.",
      "Look at which interactions drove it: comments and shares signal deeper interest than likes alone.",
      "Use rates, not raw counts, to compare posts or platforms — a small, engaged audience often outperforms a large, passive one."
    ]
  },
  "10::SEO, GEO & Funneling for Executives": {
    "t": "The Content Funnel in Practice",
    "p": [
      "Top (awareness): social posts, podcasts, PR mentions — reach people who don't know the executive yet.",
      "Middle (consideration): articles, webinars, and newsletters that show expertise in depth.",
      "Bottom (decision): case studies, testimonials, and a clear contact path — each stage links naturally to the next."
    ]
  },
  "10::GEO Tactics & Consistency": {
    "t": "What Is GEO?",
    "p": [
      "Generative Engine Optimization (GEO) means making content easy for AI assistants to find, trust, and quote when people ask questions.",
      "AI tools favor clear, well-structured, factual content from consistent, authoritative sources — the same signals good SEO relies on.",
      "Practical test: ask an AI assistant 'Who is [executive] and what are they known for?' monthly and note what it gets wrong — that's your update list."
    ]
  }
};

(window.EA_DAY_FILES = window.EA_DAY_FILES || {})[10] = { day: DAY10, extraLearning: DAY10_EXTRA_LEARNING };
