/* Day 10 — trainer speaker notes for Presenter view and the Speaker Notes PDF (Admin → SOP Reference).
   Written by hand for each slide, keyed "<day>::<topic title>".
   p1 = the topic's first slide, p2 = its second slide (Best Practices & Pitfalls).
   Each has "on" (what is on this slide, 2–3 sentences) and the script: say / ask (p1) or say / wrap (p2),
   plus the scenario for the room on p2. A single-slide topic shows p1 with p2's wrap and scenario.
   s1…s4 = section scripts for ① Core Principles, ② Step-by-Step, ③ Best Practices, ④ Go Deeper:
   when a slide is split over pages, Presenter view shows only the sections on the current page.
   steps = the full Step-by-Step script (numbered lines, read aloud); Presenter view shows it whenever
   the Step-by-Step section is on screen, and the Speaker Notes PDF includes it.
   Nothing here is generated at run time. */
window.PRESENTER_NOTES = Object.assign(window.PRESENTER_NOTES || {}, {
"10::Social Media Management vs. Marketing": {
  "p1": {
    "on": "This slide separates two kinds of social media work, with a comparison table. Management keeps the account running (steady presence, timely DM replies, current bio and calendar) and is measured by consistency, follower growth and response time. Marketing is a campaign for growth, leads or conversions, measured by clicks and ROI. If a task spans both, split it.",
    "say": "Management keeps it running. Marketing brings new people in.",
    "ask": "In one sentence, what's the difference between managing and marketing an account?"
  },
  "p2": {
    "on": "This slide gives the analogy: Management is the restaurant's dining room, keeping guests happy and the menu updated; Marketing is the highway billboard bringing new people in. EAs usually own Management (consistency, scheduling, DM filtering), and PAs and marketing specialists lean into Marketing.",
    "say": "Measure each with its own metric, or good work looks like failure.",
    "wrap": "Name the task type, then use the right metric.",
    "scenario": "Elias asks you to \"handle his LinkedIn\" and also \"get more consultation leads from it this quarter.\" Split it: which parts are management, which are marketing, and how do you measure each?"
  },
  "s1": {
    "on": "This section's table compares Management (consistency, engagement, ongoing presence) with Marketing (growth, leads, campaigns that start and end), each with its own content and metrics.",
    "say": "Keeping the lights on vs. driving results."
  },
  "s2": {
    "on": "These steps apply it: name the type first, prioritize consistency for Management, target the goal for Marketing, match the metric, and split tasks that span both.",
    "say": "Wrong metric makes good work look bad.",
    "ask": "Is replying to DMs management or marketing?"
  },
  "s3": {
    "on": "This section's analogy: Management is the restaurant dining room, Marketing is the highway billboard. EAs usually own Management; PAs and marketers lean into Marketing.",
    "say": "Dining room vs. billboard."
  }
},
"10::EA vs. PA Roles in Social Media": {
  "p1": {
    "on": "This slide divides social media work between roles, with a diagram. The EA manages the content calendar and timing, filters DMs and comments for networking, media or urgent issues, and reviews every post against the executive's persona and policy. The PA creates content (capturing moments, editing in Canva or CapCut) and maintains bios, links and personal community replies.",
    "say": "The EA protects the brand. The PA produces the content.",
    "ask": "Have you seen strategy and content creation split between two people? How did it work?"
  },
  "p2": {
    "on": "This slide gives the role labels. The EA is the Gatekeeper & Moderator: the daily task is filtering DMs and updating bios, and in a crisis it's spotting negative PR early. The PA is the Ghostwriter & Promoter: the daily task is writing and sharing wins, and in a crisis it's distributing good news.",
    "say": "Gatekeeper and moderator versus ghostwriter and promoter.",
    "wrap": "Divide the work clearly so strategy and creation don't collide.",
    "scenario": "In one morning: a journalist DMs Elias, a client comments on his post, event photos need editing, and his bio still lists an old title. Who handles each, the EA or the PA?"
  },
  "s1": {
    "on": "This section contrasts the roles: the EA handles brand and strategy (calendar, DM filtering, tone review, first line on PR); the PA handles creation and execution (content, editing, bios, personal replies).",
    "say": "Strategy vs. creation."
  },
  "s2": {
    "on": "These steps split the work: the EA plans the calendar, filters DMs and reviews tone; the PA creates content and maintains platforms.",
    "say": "Review tone before it posts."
  },
  "s3": {
    "on": "This section sums it up: the EA is Gatekeeper & Moderator, the PA is Ghostwriter & Promoter, each with a crisis role.",
    "say": "Gatekeeper and ghostwriter."
  }
},
"10::Personal vs. Firm Brand Account Separation": {
  "p1": {
    "on": "This slide says the executive's personal brand and the firm's brand are related but distinct, and who controls the login to a \"personal\" account has real consequences. The steps: agree in writing which accounts are personal and which are firm-owned, manage credentials to match that ownership, and apply distinct voice guidelines to each.",
    "say": "Settle who owns each account before anyone leaves.",
    "ask": "Who controls the login to Elias's LinkedIn?"
  },
  "p2": {
    "on": "This slide warns against leaving ownership ambiguous until a departure or dispute forces the question, and against putting firm-confidential content on a personal account without firm review. It says to record credentials and ownership in the firm's standard systems.",
    "say": "Ambiguity always surfaces at the worst moment.",
    "wrap": "Put ownership in writing, match access to it and document it centrally.",
    "scenario": "An executive with a large personal following is leaving the firm, and their account has been used for both personal thought leadership and firm announcements. What questions should have been settled long before now?"
  },
  "s1": {
    "on": "This section says personal and firm brands are distinct, and account ownership matters in practice if someone leaves.",
    "say": "Who owns the login?"
  },
  "s2": {
    "on": "These steps separate them: written ownership, access matching ownership, and distinct voice guidelines for each.",
    "say": "Put ownership in writing."
  },
  "s3": {
    "on": "This section warns against ambiguous ownership and mixing firm content into personal accounts, and asks to document credentials in firm systems.",
    "say": "Decide before a departure forces it."
  }
},
"10::The Executive Personal Brand Style Guide": {
  "p1": {
    "on": "This slide lists the style guide's five parts, with a diagram. North Star: the primary goal and the three expert topics. Voice & Tone: point of view, emoji and punctuation rules. The Never List: banned topics, buzzwords and formats (such as no more than 5 hashtags). Engagement Protocol: who gets a reply, trolls and approvals. Visual Standard: about 70% candid, 30% polished.",
    "say": "Written down, not left to instinct.",
    "ask": "What's one item you'd put on an executive's Never List?"
  },
  "p2": {
    "on": "This slide says a style guide only works if it's written somewhere everyone drafting content can see it. It lists what goes in: the North Star and audience, voice and tone rules, 3–5 content pillars, a Never list, visual rules (colors, fonts, photo style, approved headshots) and an approval workflow.",
    "say": "An unwritten sense of the brand doesn't survive a second contributor.",
    "wrap": "Write down the goal, voice, Never list, engagement rules and visuals.",
    "scenario": "Draft the first version of Elias's Never List live: three banned topics, two banned buzzwords and one formatting rule."
  },
  "s1": {
    "on": "This section lays out five parts: North Star, Voice & Tone, the 'Never' List, Engagement Protocol and Visual Standard.",
    "say": "Five parts of the guide."
  },
  "s2": {
    "on": "These steps build it: define the goal and three topics, write voice rules, list banned items, set the engagement rules, and fix the 70/30 visual mix.",
    "say": "Written down, not left to instinct.",
    "ask": "What would go on your executive's 'Never' list?"
  },
  "s3": {
    "on": "This section's warning: a style guide only works if it's written where every contributor can see it.",
    "say": "An unwritten sense doesn't transfer."
  },
  "s4": {
    "on": "This section summarizes the guide: North Star and audience, voice and pillars with the Never list, and visual rules with an approval workflow.",
    "say": "Include the approval workflow."
  }
},
"10::Content Pillars & Finding the Brand Voice": {
  "p1": {
    "on": "This slide gives two tools, with a diagram. The \"This, Not That\" boundaries: confident not sarcastic, witty not arrogant, accessible not simple, bold not aggressive. The four voice spectrums: funny versus serious, formal versus casual, detached versus enthusiastic, irreverent versus respectful. The steps: place the voice on each spectrum, check content against it, and diagnose drift by spectrum.",
    "say": "Place the voice on each spectrum deliberately.",
    "ask": "Where does Elias sit between formal and casual?"
  },
  "p2": {
    "on": "This slide explains the \"This, Not That\" exercise as boundaries for writers. It says a consistent voice signals a real person is behind the account; if it changes every two days, the audience gets \"brand whiplash\" and unfollows.",
    "say": "Voice drift causes brand whiplash and unfollows.",
    "wrap": "Set the boundaries, place the spectrums and check every post against them.",
    "scenario": "Run \"This, Not That\" on the board for Elias: four pairs, then place him on each of the four spectrums."
  },
  "s1": {
    "on": "This section gives four voice spectrums: funny vs. serious, formal vs. casual, detached vs. enthusiastic, irreverent vs. respectful.",
    "say": "Place the voice on four spectrums."
  },
  "s2": {
    "on": "These steps apply them: 'This, Not That' checks, a deliberate position on each spectrum, checking drafts against it, finding where it drifts, and remembering the cost of drift.",
    "say": "Diagnose which spectrum is drifting."
  },
  "s3": {
    "on": "This section defines 'This, Not That' (confident not sarcastic, witty not arrogant, accessible not simple, bold not aggressive) and warns about brand whiplash.",
    "say": "Inconsistency causes unfollows."
  }
},
"10::Defining and Maintaining Brand Voice, Tone & Messaging": {
  "p1": {
    "on": "This slide describes Elias's voice, with a diagram: direct, leading with the answer; every claim backed by a specific detail, not \"amazing\" or \"innovative\"; unhurried and selective rather than chasing trends. The steps: cut hedging such as \"we believe\" or \"it's possible that,\" and compare every draft against a real example of the correct voice.",
    "say": "Direct, specific, unhurried.",
    "ask": "What hedging phrase shows up most in drafts?"
  },
  "p2": {
    "on": "This slide says defining a voice is easy and maintaining it across months and contributors is the hard part. It separates the three layers: voice is the constant personality, tone flexes with context (celebratory, measured, empathetic), and messaging is the recurring core ideas. Audit a sample of posts quarterly against all three.",
    "say": "Voice stays constant. Tone flexes. Messaging repeats.",
    "wrap": "Write direct and specific, cut hedging and audit quarterly.",
    "scenario": "Rewrite this line in Elias's voice live: \"We believe our innovative, client-first approach may potentially deliver amazing results for businesses navigating complex disputes.\""
  },
  "s1": {
    "on": "This section contrasts Elias's real voice (direct, credible, unhurried) with a generic wrong one (hedging, buzzwords, trend-chasing).",
    "say": "Direct, credible, unhurried."
  },
  "s2": {
    "on": "These steps keep it: lead with the answer, back claims with specifics, skip trends, rewrite hedges, and compare drafts to a real example.",
    "say": "Cut 'we believe'.",
    "ask": "How would you rewrite 'We believe this may help'?"
  },
  "s3": {
    "on": "This section says defining a voice is easy; keeping it across months and contributors is the discipline.",
    "say": "Maintenance is the work."
  },
  "s4": {
    "on": "This section separates voice (constant), tone (flexes with context) and messaging (recurring core ideas), with a quarterly audit.",
    "say": "Voice stays; tone flexes."
  }
},
"10::Making a Voice Guide Actually Stick": {
  "p1": {
    "on": "This slide says a style guide needs concrete \"this, not that\" example sentences, not just adjectives. The steps: add messaging guidelines as a layer above tone, name a reviewer who checks drafts before publishing, check new contributors' first drafts closely, and update the guide when a new correct pattern emerges.",
    "say": "Without a named reviewer, the guide stops being used within a month.",
    "ask": "Who would review drafts against the guide where you work?"
  },
  "p2": {
    "on": "This slide explains that messaging guidelines define specific claims and framing used consistently, such as always describing the firm the same way. The maintenance mechanism matters as much as the guide: someone has to review drafts, or the guide quietly stops being used.",
    "say": "The guide is only as good as the review behind it.",
    "wrap": "Concrete examples, a named reviewer and a guide that evolves.",
    "scenario": "A new marketing contractor's first three LinkedIn drafts for Elias are full of exclamation points and \"game-changing.\" What's your review process, and what do you add to the guide?"
  },
  "s1": {
    "on": "This section says a guide needs concrete 'this, not that' sentences, not just adjectives.",
    "say": "Show it in a sentence."
  },
  "s2": {
    "on": "These steps make it stick: real examples, a messaging layer, a named reviewer, close checks on new contributors, and updating the guide.",
    "say": "Name the reviewer."
  },
  "s3": {
    "on": "This section defines messaging as the consistent claims and framing, and says the review step is what keeps the guide alive.",
    "say": "Without review it fades in a month."
  }
},
"10::Visual Brand Assets — Sample Color Palette": {
  "p1": {
    "on": "This slide shows a four-role palette: Primary (headers and dominant brand color, conveying authority), Accent (calls to action and highlights, used sparingly), Body text (high readability, pairs with either brand color) and Background (a neutral canvas that doesn't compete with navy or gold). The steps: limit it to these four, use the accent sparingly and apply the palette everywhere.",
    "say": "One dominant, one accent, one text, one background.",
    "ask": "Does your organization's palette follow this structure?"
  },
  "p2": {
    "on": "This slide says visual identity isn't just a logo but a small, deliberately limited set of colors, fonts and imagery rules. It gives the 60-30-10 rule (60% neutral, 30% primary, 10% accent), says to record exact HEX and CMYK codes, and to check contrast for readability, especially on mobile.",
    "say": "60% neutral, 30% primary, 10% accent.",
    "wrap": "Keep the palette to four roles and record the exact codes.",
    "scenario": "Pull up the firm's recent social graphics. Do they follow one dominant, one accent, one text, one background? Where has a fifth color crept in?"
  },
  "s1": {
    "on": "This section shows a four-color palette: Deep Navy (primary), Warm Gold (accent), Charcoal (text) and Warm Ivory (background).",
    "say": "Four colors, four roles."
  },
  "s2": {
    "on": "These steps use it: four roles only, the accent sparingly, consistent use everywhere, a neutral background, and checking other brands against this structure.",
    "say": "No fifth color."
  },
  "s3": {
    "on": "This section says visual identity is a small, deliberate set of colors, fonts and imagery rules, not just a logo.",
    "say": "Recognizable without the name."
  },
  "s4": {
    "on": "This section gives the 60-30-10 rule, asks for exact HEX and CMYK codes, and a contrast check, especially on mobile.",
    "say": "60-30-10."
  }
},
"10::Brand Consistency: Palette, Typography & Imagery": {
  "p1": {
    "on": "This slide extends the discipline beyond color: keep the four-color palette, choose exactly one heading font and one body font, set imagery rules in advance (no stock-photo clichés, no overly casual snapshots), and review recent content periodically for drift.",
    "say": "One heading font, one body font, everywhere.",
    "ask": "Can you name a brand that mixes fonts or colors inconsistently?"
  },
  "p2": {
    "on": "This slide says mixing fonts across posts is one of the fastest ways to look unprofessional. Imagery rules matter as much as color: decide up front what's off-limits so every contributor chooses against the same standard.",
    "say": "Consistency comes from rules decided in advance.",
    "wrap": "Limit colors and fonts, set imagery rules and check for drift.",
    "scenario": "Three recent posts for the firm used three different fonts and a stock photo of a gavel. Write the three rules you'd add to stop it happening again."
  },
  "s1": {
    "on": "This section repeats the four-role palette pattern and says restraint keeps a brand deliberate.",
    "say": "Restraint looks deliberate."
  },
  "s2": {
    "on": "These steps keep it consistent: the four-color discipline, one heading and one body font, imagery rules up front, periodic drift reviews, and learning from others' mistakes.",
    "say": "Two fonts, everywhere."
  },
  "s3": {
    "on": "This section says mixed fonts make a brand look unmanaged, and imagery rules matter as much as color.",
    "say": "Decide what's off-limits."
  }
},
"10::Platform Proficiencies — Tool-Specific Best Practices": {
  "p1": {
    "on": "This slide says each platform is different, with a diagram. The steps: adapt content to each social platform's native format instead of copy-pasting, learn the site CMS (WordPress, Webflow, Squarespace) well enough to update a page safely, learn the newsletter platform's segmentation, send-time and reporting features, and walk through any new tool's publishing flow before using it live.",
    "say": "Being good at social media is really several skills.",
    "ask": "Which tools does your organization publish with?"
  },
  "p2": {
    "on": "This slide says \"good at social media\" means literacy across different tools, each with its own conventions and audience. The platform snapshot: LinkedIn for professional insight and thought leadership, Instagram for visual storytelling, and X/Threads and newsletters for timely commentary and direct relationships, with newsletters being the channel the executive owns outright.",
    "say": "The newsletter is the only channel the executive fully owns.",
    "wrap": "Adapt to each platform and learn each tool's publishing flow.",
    "scenario": "Elias wrote a 600-word article on a new employment law. How do you adapt it for LinkedIn, Instagram and the newsletter?"
  },
  "s1": {
    "on": "This section covers three tool types: social platforms with their own formats, CMS platforms, and newsletter platforms.",
    "say": "Social, CMS, newsletter."
  },
  "s2": {
    "on": "These steps build proficiency: adapt per platform, learn the CMS, learn newsletter basics, treat each as different, and walk through new tools first.",
    "say": "Never copy-paste across platforms."
  },
  "s3": {
    "on": "This section says 'good at social media' is really literacy across several different tools.",
    "say": "Several skills, not one."
  },
  "s4": {
    "on": "This section profiles each channel: LinkedIn for thought leadership, Instagram for visual stories, X/Threads and newsletters for timely commentary and owned relationships.",
    "say": "The newsletter is the channel you own."
  }
},
"10::Platform Details & the One Rule That Applies to All Three": {
  "p1": {
    "on": "This slide gives platform specifics. LinkedIn rewards text-forward posts with a clear point in the first two lines, Instagram leads visually with a supporting caption, and X/Twitter favors brevity and timeliness. On a CMS, routine updates happen in the visual editor without a developer. Across everything, test in draft or preview mode before touching a live account.",
    "say": "Draft or preview first, every time.",
    "ask": "Has something ever gone live that shouldn't have?"
  },
  "p2": {
    "on": "This slide details the EA-relevant skills: on a CMS, making a routine update (a new page, a swapped image, a typo fix) without a developer; on newsletter platforms, building segmented lists and scheduling around audience activity. The universal rule is to test in draft mode first.",
    "say": "A typo in a draft is invisible. One sent to a list isn't.",
    "wrap": "Respect each platform's format, and always preview before going live.",
    "scenario": "You need to fix a typo on the firm's live homepage and send the monthly newsletter to the Clients segment. Walk through the draft-first steps for each."
  },
  "s1": {
    "on": "This section gives platform specifics: LinkedIn wants the point in the first two lines, Instagram leads visually, X rewards brevity and timeliness.",
    "say": "Each platform rewards something different."
  },
  "s2": {
    "on": "These steps apply them per platform, cover routine CMS edits, and give the universal rule: test in draft or preview first.",
    "say": "Preview before live."
  },
  "s3": {
    "on": "This section details CMS and newsletter tasks and restates the rule: a typo in a draft is invisible; one sent to a list isn't.",
    "say": "Test first, always."
  }
},
"10::The Content Calendar & Publishing Workflow": {
  "p1": {
    "on": "This slide gives the four-week Batch Method: Ideation in week 1 (brainstorm 12–15 ideas from the content pillars), Creation in week 2 (film and design everything in 1–2 focused days), Optimization in week 3 (draft several caption and hook variations and pick the best) and Scheduling in week 4 (load everything into the publishing tool).",
    "say": "Ideate, create, optimize, schedule.",
    "ask": "Who manages content we could plan a real month for?"
  },
  "p2": {
    "on": "This slide says a professional calendar tracks platform, content pillar, asset type, hook (first 3 seconds or words), SEO keywords, CTA and status, not just a date and a caption. It also says consistency matters more than perfect timing, because algorithms prioritize user activity over exact posting time.",
    "say": "Consistency beats perfect timing.",
    "wrap": "Batch the month and track every field, not just the date.",
    "scenario": "Plan next month for Elias's LinkedIn using the Batch Method: three pillars, 12 ideas, and what happens in each week."
  },
  "s1": {
    "on": "This section says the publishing workflow is sequential: follow the steps in order.",
    "say": "Four weeks, four steps."
  },
  "s2": {
    "on": "These steps are the monthly cycle: Ideation (12–15 ideas), Creation in 1–2 focused days, Optimization of hooks and captions, and Scheduling.",
    "say": "Ideate, create, optimize, schedule."
  },
  "s3": {
    "on": "This section lists what a real calendar tracks (platform, pillar, asset, hook, keywords, CTA, status) and says consistency beats perfect timing.",
    "say": "Consistency over timing."
  }
},
"10::Video Content Basics for Executive Presence": {
  "p1": {
    "on": "This slide says video carries more of an executive's presence than text, and short-form video needs clarity and a genuine tone more than production value. The steps: confirm the one point the video makes before recording, check the background and audio (the same background audit from the security topic), and keep social videos to 60–90 seconds.",
    "say": "One clear point, a clean background, under 90 seconds.",
    "ask": "What would you check in the background before recording?"
  },
  "p2": {
    "on": "This slide warns against publishing without captions, since many viewers watch muted and captions are an accessibility basic, and against publishing without a full watch-through. It says to keep lighting and background consistent across videos.",
    "say": "Watch the whole thing before it goes out.",
    "wrap": "Plan the point, check the frame, caption and watch it through.",
    "scenario": "Elias records a 90-second video answering a common client question, but a notification showing a client's name flashes on his monitor in the background. What's your process before it's published?"
  },
  "s1": {
    "on": "This section says video carries presence that text can't, and clarity and genuine tone matter more than polish.",
    "say": "Clear beats polished."
  },
  "s2": {
    "on": "These steps prepare: one clear point, background and audio checks, and 60–90 seconds for social.",
    "say": "One takeaway per video."
  },
  "s3": {
    "on": "This section warns against uncaptioned video and publishing without a full watch-through, and asks for a consistent setup.",
    "say": "Captions, always."
  }
},
"10::Accessibility in Digital Content": {
  "p1": {
    "on": "This slide says accessible content (alt text, captions, readable contrast) decides whether a meaningful share of the audience can use it at all, and building it in costs little compared with retrofitting. The steps: write descriptive alt text for every image, add reviewed captions to every video rather than relying on auto-captions, and check color contrast on graphics.",
    "say": "Build it in from the start. Retrofitting costs far more.",
    "ask": "What makes alt text useful rather than a formality?"
  },
  "p2": {
    "on": "This slide warns that generic alt text like \"image\" defeats the purpose, and inaccurate auto-captions can misquote someone. It says to make accessibility review a standard step in the content approval process.",
    "say": "An auto-caption that misquotes the executive is a real problem.",
    "wrap": "Real alt text, reviewed captions, good contrast and a standard review step.",
    "scenario": "You're finalizing a LinkedIn post with a bar chart showing the firm's pro bono hours by year, and it has no alt text. Write the description live so it's actually useful."
  },
  "s1": {
    "on": "This section says alt text, captions and contrast decide whether part of the audience can engage at all, and building them in early is cheap.",
    "say": "Accessibility from the start."
  },
  "s2": {
    "on": "These steps apply it: descriptive alt text, reviewed captions, and a contrast check.",
    "say": "Describe what's actually there."
  },
  "s3": {
    "on": "This section warns against generic alt text and unreviewed auto-captions, and says accessibility belongs in the approval process.",
    "say": "Part of approval."
  }
},
"10::Audience Psychology & Pain Points": {
  "p1": {
    "on": "This slide maps four audience pain points to responses, with a diagram. Financial (hidden fees, rigid pricing): radical transparency. Convenience (information overload): be a curator answering one question quickly. Emotional (burnout, overstimulation): sustainable progress, not hustle. Trust (fear of fake data): show the real process. Use psychological triggers ethically and sparingly.",
    "say": "Name the pain point, then answer it honestly.",
    "ask": "Which pain point shows up most in your industry?"
  },
  "p2": {
    "on": "This slide says audiences have \"Digital Overload Fatigue\" and trust real-world proof over polished ads. It names three triggers to use ethically: the Bandwagon Effect (\"300 people joined this week\"), Reciprocity (give value for free) and Cognitive Dissonance.",
    "say": "Raw proof beats polished ads.",
    "wrap": "Answer real pain points, show the real process and use triggers ethically.",
    "scenario": "Potential clients of Thorne & Partners worry about surprise legal bills. Draft one post that answers that financial pain point with transparency, not reassurance."
  },
  "s1": {
    "on": "This section names four pain points (financial, convenience, emotional, trust) and a response for each.",
    "say": "Four pain points."
  },
  "s2": {
    "on": "These steps respond: transparency for financial, curation for convenience, sustainable progress for emotional, the real process for trust, and triggers used ethically.",
    "say": "Show the real process."
  },
  "s3": {
    "on": "This section describes Digital Overload Fatigue and lists ethical triggers: Bandwagon, Reciprocity and Cognitive Dissonance.",
    "say": "Raw proof over polish.",
    "ask": "Which pain point fits your firm's audience?"
  }
},
"10::SEO, GEO & Funneling for Executives": {
  "p1": {
    "on": "This slide covers three ideas, with a diagram. SEO: getting found on Google with natural keyword phrases and backlinks from podcasts and guest blogs. GEO: getting AI tools like ChatGPT, Gemini and Perplexity to recommend the executive. Funneling: awareness (social, PR), then interest (newsletter, lead magnets), then action (booking link, 24-hour follow-up). The monthly scorecard: Domain Authority, AI citations, funnel drop-off and name search volume.",
    "say": "Be found on Google, cited by AI, and move people down the funnel.",
    "ask": "Has anyone asked an AI tool to recommend a business or professional?"
  },
  "p2": {
    "on": "This slide recommends a monthly \"Google Yourself\" audit in Incognito mode: if an outdated profile or old post outranks the current site, update the metadata. The funnel in practice: top is social, podcasts and PR; middle is articles, webinars and newsletters; bottom is case studies, testimonials and a clear contact path.",
    "say": "Google the executive in Incognito every month.",
    "wrap": "Optimize for search and AI, match content to funnel stage and audit monthly.",
    "scenario": "Search Elias's name in Incognito mode together. What comes up first, what's outdated, and which funnel stage is weakest?"
  },
  "s1": {
    "on": "This section defines SEO (found on Google), GEO (recommended by AI tools), Funneling (awareness to action) and a Monthly Scorecard.",
    "say": "Found, recommended, converted."
  },
  "s2": {
    "on": "These steps apply each: natural keywords and backlinks, AI-citable content, stage-matched content, scorecard tracking, and a monthly incognito search.",
    "say": "Google yourself monthly."
  },
  "s3": {
    "on": "This section explains the 'Google Yourself' audit and updating metadata when old pages outrank the current site.",
    "say": "Outdated pages need to be outranked."
  },
  "s4": {
    "on": "This section lays out the funnel: top for awareness, middle for consideration, bottom for decision, each linking to the next.",
    "say": "Each stage leads to the next."
  }
},
"10::GEO Tactics & Consistency": {
  "p1": {
    "on": "This slide gives GEO tactics: add structured data or schema markup where the platform supports it, write FAQ-style direct-answer content for questions the executive is known for, keep bio details word-for-word identical across LinkedIn, the website and speaker pages (small differences hurt AI trust), and audit those sources for drift.",
    "say": "Identical bios everywhere. Small wording differences cost trust.",
    "ask": "Is Elias's bio worded the same on LinkedIn and the firm website?"
  },
  "p2": {
    "on": "This slide defines GEO (Generative Engine Optimization) as making content easy for AI assistants to find, trust and quote. AI tools favor clear, structured, factual content from consistent, authoritative sources. The practical test: ask an AI assistant each month who the executive is and note what it gets wrong.",
    "say": "What the AI gets wrong is your update list.",
    "wrap": "Structure the content, answer questions directly and keep the bios identical.",
    "scenario": "Ask an AI assistant \"Who is Elias Thorne and what is he known for?\" What would you do with each thing it gets wrong or leaves out?"
  },
  "s1": {
    "on": "This section introduces GEO tactics, covered in the steps that follow.",
    "say": "Here's how."
  },
  "s2": {
    "on": "These steps apply them: schema markup, FAQ-style direct answers, word-for-word consistent bios, drift audits, and ongoing maintenance.",
    "say": "Same bio wording everywhere."
  },
  "s3": {
    "on": "This section restates the tactics and says inconsistency hurts the AI 'trust score'.",
    "say": "Consistency builds trust."
  },
  "s4": {
    "on": "This section defines GEO, says AI favors clear authoritative content, and suggests asking an AI who the executive is each month.",
    "say": "Whatever the AI gets wrong is your update list.",
    "ask": "What do you think an AI would say about your executive?"
  }
},
"10::Copywriting vs. Blog Writing": {
  "p1": {
    "on": "This slide contrasts two formats, with a diagram. Copywriting: find the conversion goal and use AIDA (Attention, Interest, Desire, Action), with CTAs using action words and real urgency, not \"click here.\" Blog writing: a hook headline, a direct-answer intro, skimmable H2/H3 sections and first-hand evidence. Match the format to the goal.",
    "say": "Copy closes. Blogs educate.",
    "ask": "What's wrong with \"click here\" as a CTA?"
  },
  "p2": {
    "on": "This slide calls copywriting the closer (short, direct, urgent, built to convert) and blog writing the friendly guide (long, informative, built to educate and rank). The biggest blog mistake is repeating what the top five Google results say; add a unique data point, a contrarian take or first-hand experience.",
    "say": "Add something the top five results don't have.",
    "wrap": "Pick the format for the goal, and bring first-hand evidence.",
    "scenario": "Two volunteers write the same announcement, the firm's new free contract-review consultation: one as copy, one as a blog intro. Read both aloud back to back."
  },
  "s1": {
    "on": "This section contrasts copywriting (short, AIDA, strong CTAs, built to convert) with blog writing (long, structured, E-E-A-T evidence, built to educate and rank).",
    "say": "The sell vs. the tell."
  },
  "s2": {
    "on": "These steps write each: AIDA for the conversion goal, action CTAs, a hook and direct intro with H2/H3s, first-hand evidence, and the right format for the goal.",
    "say": "Not 'click here'."
  },
  "s3": {
    "on": "This section calls copy the closer and blogs the friendly guide, and warns against rehashing the top search results.",
    "say": "Add something AI can't summarize away."
  }
},
"10::Reading the Numbers — Engagement Rate": {
  "p1": {
    "on": "This slide teaches the engagement rate: add likes, comments and shares, divide by follower count, then multiply by 100. The steps: use the rate to compare posts of different reach, recalculate weekly or monthly, and cross-check against the platform's own reported figures.",
    "say": "(Likes + comments + shares) ÷ followers × 100.",
    "ask": "Why compare rates instead of raw likes?"
  },
  "p2": {
    "on": "This slide works an example: 120 likes + 15 comments + 10 shares = 145, ÷ 4,000 followers × 100 = 3.6%. Compare it with the account's own average, since 3.6% is strong if the usual rate is 2% and weak if it's 6%. Comments and shares signal deeper interest than likes.",
    "say": "Compare against the account's own average first.",
    "wrap": "Calculate the rate, compare it with the norm and look at what drove it.",
    "scenario": "Live: a post got 85 likes, 22 comments and 6 shares, and the account has 2,500 followers. What's the engagement rate, and is it good if the usual rate is 3%?"
  },
  "s1": {
    "on": "This section gives the formula: (Likes + Comments + Shares) ÷ Followers × 100.",
    "say": "One formula."
  },
  "s2": {
    "on": "These steps calculate it: sum interactions, divide by followers, times 100, compare posts by rate, recalculate regularly, and check against the platform.",
    "say": "Rates, not raw counts."
  },
  "s3": {
    "on": "This section works an example: 145 interactions on 4,000 followers is 3.6%.",
    "say": "3.6% in the example.",
    "ask": "Is 3.6% good?"
  },
  "s4": {
    "on": "This section interprets it: compare with the account's own average, value comments and shares, and remember a small engaged audience can beat a big passive one.",
    "say": "Compare with your own average."
  }
},
"10::Engagement Rate Benchmarks & Interpretation": {
  "p1": {
    "on": "This slide says a smaller account with a higher rate can be the stronger performer, with a diagram. On LinkedIn, 2–5% organic engagement is healthy and above 7% means the post is going viral in its niche. Read reach and engagement together: high reach with low engagement means the hook or audience is off, and low reach with high engagement means a small, loyal following the algorithm tends to push further.",
    "say": "Rate beats raw counts, and reach and engagement are read together.",
    "ask": "Where do you think the firm's LinkedIn posts land on this scale?",
    "wrap": "Judge performance by rate and by reach and engagement together, and revisit the benchmarks as platforms change.",
    "scenario": "Post A reached 12,000 people with a 0.8% engagement rate. Post B reached 900 people with 6.5%. What does each tell you, and what would you change?"
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Judge performance by rate and by reach and engagement together, and revisit the benchmarks as platforms change.",
    "scenario": "Post A reached 12,000 people with a 0.8% engagement rate. Post B reached 900 people with 6.5%. What does each tell you, and what would you change?"
  },
  "s1": {
    "on": "This section says a smaller account with a higher rate can be the stronger performer.",
    "say": "Rate beats raw counts."
  },
  "s2": {
    "on": "These steps interpret it: compare rates, benchmark LinkedIn at 2–5% (above 7% is viral), read reach and engagement together, value small loyal audiences, and revisit benchmarks.",
    "say": "High reach, low engagement: fix the hook."
  }
},
"10::Basic Campaign Math": {
  "p1": {
    "on": "This slide teaches two numbers: Cost per Lead is total spend ÷ leads, and ROI is (revenue − spend) ÷ spend × 100. The steps: check both before calling a campaign a success, compare them against the campaign's goals, and track them across campaigns over time.",
    "say": "Cost per Lead and ROI, always together.",
    "ask": "Why can a high lead count be misleading?"
  },
  "p2": {
    "on": "This slide works an example: $500 spend, 50 leads, $20 product price. Cost per Lead is $10, revenue is $1,000 and ROI is 100%. Know both numbers before calling a campaign a success, because raw lead count alone can make a losing campaign look good.",
    "say": "Lead count alone can hide a losing campaign.",
    "wrap": "Calculate CPL and ROI, compare with goals and track over time.",
    "scenario": "Live: a $1,200 LinkedIn campaign produced 40 leads, 3 became clients and each client is worth $900. What are the CPL and ROI, and was it a success?"
  },
  "s1": {
    "on": "This section gives two formulas: Cost per Lead = Spend ÷ Leads, and ROI = (Revenue − Spend) ÷ Spend × 100.",
    "say": "CPL and ROI."
  },
  "s2": {
    "on": "These steps calculate: CPL, ROI, both checked together, compared to goals, and tracked across campaigns.",
    "say": "Lead count alone can mislead."
  },
  "s3": {
    "on": "This section works an example ($500 spend, 50 leads, $20 product: $10 CPL, $1,000 revenue, 100% ROI) and says to know both numbers before calling success.",
    "say": "Know both numbers.",
    "ask": "What's the ROI if revenue were $400?"
  }
},
"10::Social Listening & Monitoring": {
  "p1": {
    "on": "This slide says social listening means tracking what's said about the executive or firm across platforms, not just monitoring your own posts, and catching it early gives more options. The steps: set up alerts for the executive's and firm's names on relevant platforms, separate routine mentions from those needing attention, and log recurring themes.",
    "say": "Most of the conversation never tags you.",
    "ask": "Where would people talk about the firm without tagging it?"
  },
  "p2": {
    "on": "This slide warns against checking only your own notifications, because most relevant conversation happens in comments, shares and untagged posts. It says to review listening setups periodically and flag concerning trends early rather than waiting for a crisis.",
    "say": "A pattern across mentions matters more than any single one.",
    "wrap": "Listen beyond your own account, log themes and flag trends early.",
    "scenario": "Your weekly listening check finds several posts referencing the same complaint about the firm's billing that nobody has reported directly. What's your next step?"
  },
  "s1": {
    "on": "This section defines social listening as tracking what's said everywhere, not just replies, so you catch things early.",
    "say": "Beyond your own notifications."
  },
  "s2": {
    "on": "These steps run it: set alerts across relevant platforms, separate routine mentions from ones needing action, and log recurring themes.",
    "say": "Patterns tell you more than single mentions."
  },
  "s3": {
    "on": "This section warns against checking only your own account or setting it up once, and says to flag concerning trends early.",
    "say": "Flag trends early."
  }
},
"10::Crisis Response on Social Media": {
  "p1": {
    "on": "This slide says a negative pile-on moves in hours, deleting or ignoring feedback is usually wrong, and not every negative comment needs a response. The steps: assess whether it's a legitimate complaint, a misunderstanding or bad faith, reply publicly with a brief, calm acknowledgment and move details to a private channel, and involve the executive for anything beyond routine.",
    "say": "Acknowledge publicly, resolve privately.",
    "ask": "How do you tell a real complaint from bait?"
  },
  "p2": {
    "on": "This slide warns against defensive or emotional replies, which are hard to walk back, and against deleting a legitimate negative comment, which usually escalates things. It says to document the situation and response as it unfolds.",
    "say": "Deleting a legitimate complaint usually makes it worse.",
    "wrap": "Assess, acknowledge calmly, take it private, escalate and document.",
    "scenario": "A former client posts a detailed public complaint that's gaining traction; some of it is accurate, some exaggerated. What do you do in the next 30 minutes, before anyone senior weighs in?"
  },
  "s1": {
    "on": "This section says pile-ons move in hours, deleting or ignoring is usually wrong, and not every comment needs a reply.",
    "say": "Hours, not days."
  },
  "s2": {
    "on": "These steps respond: assess legitimacy first, acknowledge publicly and move details private, and bring in the decision-maker for anything serious.",
    "say": "Brief public reply, details in private."
  },
  "s3": {
    "on": "This section warns against emotional replies and deleting legitimate criticism, and asks you to document the response.",
    "say": "Don't delete; it looks worse."
  }
},
"10::Copyright, Image Rights & Permissions": {
  "p1": {
    "on": "This slide says nearly all online content is copyrighted, the firm can use only owned, licensed or permitted content, and people and especially clients need consent. The steps: source from owned or licensed libraries and check the terms, keep an asset record, get photo releases and client consent, use licensed music, and share others' posts properly.",
    "say": "Being able to download it doesn't mean you can post it.",
    "ask": "Where do most of the firm's social images come from today?"
  },
  "p2": {
    "on": "This slide covers choosing licensed or original images when unsure, not implying endorsement with others' logos, and two pitfalls: treating credit as permission and posting event photos with clients without consent.",
    "say": "Credit isn't permission.",
    "wrap": "Owned, licensed or permitted, with a record, and client consent in writing.",
    "scenario": "A partner wants to post a great photo from last night's charity dinner. It shows Elias with two clients and a local news anchor, and it was taken by a guest who emailed it over. What do you need before it goes up?"
  },
  "s1": {
    "on": "This section explains copyright online, the three safe sources, and consent for people and clients.",
    "say": "Owned, licensed or permitted."
  },
  "s2": {
    "on": "These steps: licensed sources and terms, an asset record, photo releases and client consent, licensed music, proper sharing.",
    "say": "Keep a record for every image.",
    "ask": "What goes in an asset record?"
  },
  "s3": {
    "on": "This section covers choosing safe images, trademarks, and the two pitfalls.",
    "say": "Clients need written consent to appear."
  }
},
"10::Endorsement & Disclosure Rules": {
  "p1": {
    "on": "This slide says that when a third party (an influencer, partner or employee) promotes the firm, disclosure rules like the FTC's endorsement guidelines can apply. The principle: the audience should be able to tell when a post exists because of a relationship or payment. Confirm current rules with firm policy or counsel. The steps: confirm disclosure language before any arrangement, keep records, and check partner content for visible disclosure.",
    "say": "The audience should be able to tell there's a relationship.",
    "ask": "Does a discount count as compensation?"
  },
  "p2": {
    "on": "This slide warns that a mention without direct payment can still need disclosure, because reciprocal or in-kind relationships count. Never approve promotional content without checking disclosure first, and when unsure, treat it as requiring disclosure.",
    "say": "In-kind still counts. When in doubt, disclose.",
    "wrap": "Confirm the rules first, keep records and check disclosure is visible.",
    "scenario": "A former client with a large following offers to post about the firm in exchange for a discount on future services. What do you need to confirm before this goes any further?"
  },
  "s1": {
    "on": "This section says third-party promotion can trigger disclosure rules like the FTC's, the principle is transparency about relationships, and counsel confirms specifics.",
    "say": "Disclose the relationship."
  },
  "s2": {
    "on": "These steps comply: confirm disclosure language and placement, keep relationship records, and check partner posts for visible disclosure.",
    "say": "In the post itself."
  },
  "s3": {
    "on": "This section warns that unpaid reciprocal deals may still need disclosure, says to check before drafting, and when unsure, disclose.",
    "say": "When unsure, disclose."
  }
},
"10::Legal Advertising & UPL Rules": {
  "p1": {
    "on": "This slide says a law firm's social presence is regulated attorney advertising in most jurisdictions, and the Unauthorized Practice of Law boundary applies online too: a post that reads as specific legal advice is a problem. The steps: check that legal content is general and educational, know the jurisdiction's advertising rules and required disclaimers, and route anything ambiguous through the UPL judgment.",
    "say": "General education, yes. Specific advice, no.",
    "ask": "When does a helpful post cross into legal advice?"
  },
  "p2": {
    "on": "This slide warns against treating a firm's social media as ordinary marketing just because it's on the same platforms. It says testimonials, case results and client stories need particular care, because many jurisdictions restrict what can be claimed or implied.",
    "say": "Case results and testimonials have their own rules.",
    "wrap": "Keep it educational, follow the advertising rules and escalate the ambiguous.",
    "scenario": "A draft post shares an impressive case outcome and says \"we can get you the same result.\" What's the concern with that phrasing, and how would you revise it?"
  },
  "s1": {
    "on": "This section says a law firm's online presence is regulated attorney advertising, and UPL applies online: specific advice to a specific situation crosses the line.",
    "say": "Regulated, not ordinary marketing."
  },
  "s2": {
    "on": "These steps comply: check general vs. specific content, know jurisdiction rules and disclaimers, and escalate anything ambiguous.",
    "say": "Specific advice needs attorney review."
  },
  "s3": {
    "on": "This section warns against treating firm social media as ordinary marketing, and says testimonials and case results need special care.",
    "say": "Case results need extra care."
  }
},
"10::Final Timed Evaluation & Capstone Checklist": {
  "p1": {
    "on": "This slide closes all 10 days: the capstone confirms real readiness, not attendance. The steps: review actual performance data across the program (Knowledge Check scores, Practice Lab history and any roleplay sessions), name the days or tools still shaky, as in the Day 5 mid-point review, and complete the final timed evaluation with the same composure practiced in the crisis roleplays.",
    "say": "An honest, specific picture of what's solid and what isn't.",
    "ask": "Which day's material do you feel least ready to use on the job?"
  },
  "p2": {
    "on": "This slide warns against treating the capstone as a formality now that the program is ending; it's the last chance to close a known gap. A finished program isn't a finished skill set, so the strongest close is a specific plan for what to keep practicing after Day 10.",
    "say": "Leave with a practice plan, not just a certificate.",
    "wrap": "Use the data, name the gaps and commit to a specific plan.",
    "scenario": "Looking back across all 10 days: which single day or Practice Lab tool would you most want to revisit before calling yourself ready, and what specifically will you do to close that gap?"
  },
  "s1": {
    "on": "This section closes the 10-day program and says the capstone checks real readiness, like the Day 5 review, now for the whole program.",
    "say": "Readiness, not attendance."
  },
  "s2": {
    "on": "These steps finish: review all 10 days of data, name shaky areas honestly, and take the timed evaluation with composure.",
    "say": "Be honest about the gaps.",
    "ask": "What will you keep practicing after today?"
  },
  "s3": {
    "on": "This section warns against treating the capstone as a formality, and says the best close is a specific plan for continued practice.",
    "say": "Leave with a practice plan."
  }
}
});
