/* Day 1 — hand-written spoken scripts, one per slide (see slideScript() in index.html).
   p1 = the topic's first slide, p2 = its second slide. Each follows four beats:
   why (the punchline) · talk (plain spoken explanation) · walk (the points in order: first, next, then, finally) · ask (an action or question) · scenario (a short situation for the room to work through).
   Topics rewritten in the trainer's style add: icebreaker (a quick game to open) · teaser (the curiosity gap
   before the reveal) · jargon ([{term, hint}] for the trainer to explain) · story (a war story from the field) ·
   contrast ({lazy, excellent}) · outcome (where it lands: deadlines, the case, the settlement) ·
   ask (calls on trainees by name, "[Name]") · mystery (the closing challenge, in place of scenario). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "1::EA vs. PA: Two Mindsets": {
  "p1": {
   "icebreaker": "Game: 'Boss or Person?' I'll read out five quick tasks. If it protects the business, stand up. If it protects the person's life, stay seated. Ready? Board deck edits. Dry cleaning. Flowers for his wife. Rescheduling a client call. Booking a dentist appointment. Fastest one to stand up wrong buys the coffee.",
   "teaser": "One of those five tasks fooled most of you, and by the end of this topic you'll know which one and why. Hold that thought.",
   "why": "Before you touch any request, you need to know which hat you're wearing. The same request gets handled two very different ways.",
   "talk": "Here's the simple version. As an EA, you look after the business: your boss's time, his decisions and the firm's results. As a PA, you look after the person: his family, his errands, the life that keeps him able to work. Both jobs matter. Trouble starts when we answer a business problem like an errand, or treat a family matter like a board meeting.",
   "walk": [
    "First, when something lands, ask one quiet question: am I protecting the business here, or the person?",
    "Next, check what's already written down about this client before you guess. If the answer is in the dossier, use it.",
    "Then, if it's honestly unclear, treat it as business work until you can confirm. Treating something important like a small errand is the more expensive mistake.",
    "Once you've picked, commit. Business work gets a careful, by-the-book reply; personal work gets a warm, flexible one.",
    "And finally, if you got it wrong, say so, fix it and remember the example. That's how this instinct gets sharper."
   ],
   "jargon": [
    {
     "term": "EA (Executive Assistant)",
     "hint": "supports the business side of one senior person"
    },
    {
     "term": "PA (Personal Assistant)",
     "hint": "supports the person's private life and logistics"
    },
    {
     "term": "Dossier",
     "hint": "the written profile we keep on the client: preferences, people, rules"
    }
   ],
   "story": "A real pattern from the field: an assistant was asked to 'put the hospital appointment in the calendar.' She added it to the firm calendar, where the partners and the case team could see it, titled with the procedure. The boss found out when a colleague asked if he was all right. Nothing illegal, nobody fired, but trust took a knock. One quiet question, business or person, would have put it in his private calendar as 'Personal, 9–11 a.m.'",
   "ask": "[Name], think about your own work so far. Have you ever answered something in the wrong mode? What happened? Then, [Name], same question to you."
  },
  "p2": {
   "why": "Neither role outranks the other. The real mistake is blending them.",
   "talk": "People sometimes assume EA work is the serious job and PA work is the easy one. It isn't. A PA who keeps a family's life running is doing skilled work too. What makes the EA side bigger is that we're managing someone's capacity: how many hours, how much attention and how much good judgment they have left in a day. Every meeting we allow and every email we let through spends some of that.",
   "walk": [
    "First, EA work lives in the calendar, the inbox, board papers and anything touching legal, money or HR.",
    "Next, PA work lives in personal plans, travel, the household and family events.",
    "Then, the trap for new assistants is keeping them as one pile of tasks. That's the most common early mistake.",
    "Finally, when you're unsure, come back to the same question: am I protecting the business or the person?"
   ],
   "contrast": {
    "lazy": "One long to-do list, done in the order things arrived. The dry cleaning gets done because it's easy; the board deck waits.",
    "excellent": "Two lists, sorted by stakes. Business items carry a deadline and an owner; personal items carry the person's preference. Nothing from one list ever leaks into the other."
   },
   "outcome": "Why does this matter in a law firm? Because the 'easy' item you did first was paid for with the hour the board deck or the filing needed. In litigation, a missed business task can mean a missed deadline, a weaker position at the table and, at the end, a smaller settlement for the client. It all starts with which list you picked up first.",
   "ask": "[Name], name three things in Elias's world that look like personal errands but are really business work once you think about his reputation or legal exposure. [Name], do you agree with all three?",
   "mystery": "The case of the missing deck. A new assistant's Wednesday list for Elias: 'Board deck edits, dry cleaning, Meridian call notes, flowers for Sarah, expense report.' By 5 p.m. the dry cleaning, flowers and expenses are done. The board deck and the Meridian notes are not, and the board meets at 8 a.m. Your job, in pairs: find the moment the day went wrong, re-sort the list, and tell me what you'd say to Elias at 5:01 p.m."
  }
 },
 "1::EA vs. PA: Side-by-Side Work Context": {
  "p1": {
   "icebreaker": "Game: 'Who's calling?' I'll do two voices. You shout 'Office!' or 'Home!' as fast as you can. 'Hi, it's Partner Davies, has the Harlow filing gone?' 'Hi love, it's Sarah, can you check the school play time?' 'It's Dr. Lee's office about Mr. Thorne's results.' Careful with that last one.",
   "teaser": "That last call was a trick. It sounds personal, but where you write it down can turn it into a business problem. We'll come back to it.",
   "why": "Both roles earn the same trust. What changes is the setting, and what it costs when we misread it.",
   "talk": "Picture two phone calls. One is a firm partner about a filing; the other is Elias's wife about a school event. You'd sound different on each, and you should. The office runs on structure, policy and formality. Home runs on relationships and the person's own preferences. Reading which one you're in, before you reply, keeps you from sounding stiff with family or too casual with a client.",
   "walk": [
    "First, before you reply to anything, work out which setting you're in: the office, or the person's private life.",
    "Next, match your tone to it. The office wants structure; home wants warmth and flexibility.",
    "Then, remember each side has its own secrets. Office secrets are contracts, money and HR; home secrets are family, health and lifestyle. Guarding one doesn't cover the other.",
    "After that, stay inside your role. As an EA you filter and prioritize for the executive; as a PA you handle day-to-day things directly.",
    "And finally, when the two overlap, like a family matter with real business risk, say so out loud instead of slipping into whichever mode feels comfortable."
   ],
   "jargon": [
    {
     "term": "Confidentiality scope",
     "hint": "what you must keep private, and from whom, in each setting"
    },
    {
     "term": "Firm calendar vs. personal calendar",
     "hint": "who else can see each one"
    }
   ],
   "story": "This happens more than you'd think: an assistant handling both roles replied to a client email and attached the wrong file. Instead of the signed engagement letter, the client received the boss's family holiday itinerary, hotel booking and passport scans included. The client was gracious about it. The firm still had to report it as a data incident. Two separate folders and two separate tones exist for exactly this reason.",
   "ask": "[Name], which is harder to spot from the outside: how formal to be, or who actually gets to make the decision? [Name], do you see it the same way?"
  },
  "p2": {
   "why": "Most of the time, the way a request reaches you already tells you which role you're in.",
   "talk": "You don't have to guess. Look at how the message arrived and who's going to see the result. Firm email, the case system or a matter number almost always means business. A text about a dinner booking or a school pickup is usually personal. And if clients, partners or a court will see what you produce, even a tiny task gets full professional care.",
   "walk": [
    "First, look at the channel. Firm systems mean business; personal texts usually mean personal.",
    "Next, look at the audience. If anyone outside the family will see it, treat it formally and keep it confidential.",
    "Finally, in small firms one person often does both jobs. If that's you, keep two task lists and two tones, so a family detail never ends up in a client email."
   ],
   "contrast": {
    "lazy": "Treats every request the same way and puts everything in one calendar because 'it's easier.'",
    "excellent": "Reads the channel and the audience first, keeps business and private records apart, and asks 'who else can see this?' before saving anything."
   },
   "outcome": "One private detail in the wrong system can become something the other side finds, a client hears about, or a partner has to explain. In a dispute, anything that embarrasses our side or leaks how we think weakens our hand when it's time to settle.",
   "ask": "[Name], Elias texts late at night: 'Book the usual table for Friday, and send the Meridian team the updated timeline.' Which half is which? [Name], how do you handle each half?",
   "mystery": "The case of the dinner with a matter number. A request arrives through the firm's case system, tagged to the Meridian matter: 'Please book dinner for the Meridian team Thursday.' It looks like an errand. Detectives: what do the channel and the matter number tell you? Who pays, who is invited, what must you check first, and where do you record it? Bring me your three clues."
  }
 },
 "1::EA vs. PA Decision Principles": {
  "p1": {
   "icebreaker": "Game: 'Move it or protect it?' Thumbs up means move the meeting, thumbs down means protect it. Elias wants to move: a coffee with an old friend. A call with the other side's lawyer about settlement terms. His own dentist appointment. A team lunch. Look around: where did the room split?",
   "teaser": "The room split on one of those, and there's a rule that settles it every single time. It isn't 'do what the boss says.' Let's find it.",
   "why": "The same kind of request can deserve two different answers, depending on which set of rules we're following.",
   "talk": "Take a request to move a meeting. On the business side, we ask whether the meeting matters to money, deadlines or legal risk, and we protect it if it does. On the personal side, we start from what the person prefers and try to make it work. Neither answer is wrong. What goes wrong is using the wrong set of rules without noticing.",
   "walk": [
    "First, before deciding anything, name which track you're on.",
    "Next, on the business track, important work goes first, you narrow things down before bothering the executive, and you know which calls are yours to make.",
    "Then, on the personal track, the person's wishes lead. Offer options instead of saying no, and keep private matters private.",
    "After that, if a decision doesn't fit either set of rules, escalate. That's not the moment to trust your gut.",
    "Finally, every so often look back at your own calls. It's the quickest way to notice you've slipped into one habit for everything."
   ],
   "jargon": [
    {
     "term": "Escalate",
     "hint": "pass it up to the person who has the authority to decide"
    },
    {
     "term": "Settlement terms",
     "hint": "the details of the deal that ends a dispute without a trial"
    }
   ],
   "story": "Real scenario: an attorney asked his assistant to 'clear my afternoon' for a family emergency. She cancelled everything, including a call with the other side's lawyer about a settlement offer that expired that day. The other side didn't extend it. A better offer did come later, but the client waited three extra months for it. If she'd come back with 'Everything's cleared except the 4 p.m. settlement call. Can that move to a 10-minute call from the car?' it would have been a 10-second decision.",
   "ask": "[Name], be honest: which set of rules comes more naturally to you, business or personal? [Name], what does that tell you about where you'll need to be careful?"
  },
  "p2": {
   "why": "On the personal side, our default is yes, just maybe a different yes. On the business side, three habits carry the weight.",
   "talk": "When family asks for something we can't do exactly, we don't shut it down. We find another way. The business side works differently, and it has three habits. Anything tied to money, deadlines or legal risk beats convenience, even the boss's own convenience. We never forward a raw problem up; we bring options and a recommendation. And we jot down what was decided and why, so anyone can pick up the thread later.",
   "walk": [
    "First, important work always comes before convenient work.",
    "Next, do the thinking before you escalate, so the executive only has to choose.",
    "Finally, leave a one-line note of the decision and the reason behind it."
   ],
   "contrast": {
    "lazy": "'Elias, the Meridian GC can't do 3 p.m., what do you want to do?' The problem is just forwarded, and now he has to do your thinking.",
    "excellent": "'Meridian GC can't do 3 p.m. Two options: 4:30 today or 9 a.m. tomorrow. I recommend 4:30 because the settlement draft is due tomorrow at noon. Shall I confirm?' He decides in five seconds."
   },
   "outcome": "Settlement windows open and close. If a key call slides because we treated it as movable, the other side may change its mind, its offer or its deadline. Options plus a recommendation keep the case moving toward the best outcome instead of drifting.",
   "ask": "[Name], Elias wants to move a client call to attend his daughter's recital, but that client is mid-negotiation. Which rules apply? [Name], what do you actually say to him?",
   "mystery": "The case of the fully-booked anniversary. Sarah Thorne asks you to book a restaurant for her anniversary on Saturday. It's fully booked. Your mission: come back with three 'different yes' options that don't involve the word 'no,' and tell me the one line you'd write in the file afterwards. Best three options win."
  }
 },
 "1::Typical Work Environment": {
  "p1": {
   "icebreaker": "Quick show of hands: who has worked in a big corporate office? A law firm? A tiny start-up? A private home? Now the game: I'll name a tool, you shout where you'd find it. Clio. Slack. A paper diary on the kitchen counter. Outlook. A WhatsApp group called 'Family Admin.'",
   "teaser": "Here's a secret: the tools barely matter. There's one thing that matters far more in your first week, and most new assistants skip it. You'll see it in a minute.",
   "why": "The job looks different depending on where you land, so learn the place before you assume anything.",
   "talk": "An assistant in a corporate office, a law firm, a remote start-up or a family home does similar tasks with very different expectations. Something as simple as which email system they use can slow down your whole first week if you guess wrong. So in any new role, spend the first days learning how this particular place works.",
   "walk": [
    "First, figure out what kind of setting you're really in, because the unwritten rules change with it.",
    "Next, check which tools this place actually uses, instead of assuming it's like your last job.",
    "Then, fit your response to the setting. When a vendor lets you down, an EA pushes back or escalates professionally; a PA just gets it fixed.",
    "After that, treat clashing meetings the same way. An EA moves things by business priority; a PA checks what the person prefers.",
    "Finally, watch for requests that quietly grow beyond your job. An EA points out when something crosses a contract line; a PA asks permission before going further."
   ],
   "jargon": [
    {
     "term": "Clio",
     "hint": "a practice-management system law firms use for matters, time and billing"
    },
    {
     "term": "Matter files",
     "hint": "everything the firm keeps on one case or deal"
    },
    {
     "term": "Scope creep",
     "hint": "a task that quietly grows bigger than what was agreed"
    }
   ],
   "story": "A common first-week story: a new assistant joined a small firm and assumed, like her last job, that everything lived in the shared drive. A partner asked for 'last year's Harlow agreement' and she spent two hours searching folders. It was in the practice-management system, under the matter number, where every document at that firm lived. Ten minutes asking 'where do documents live here?' on day one would have saved the two hours and the awkward 'still looking.'",
   "ask": "[Name], have you ever worked somewhere with barely any systems at all? How did that change your days? [Name], what would you have done differently in week one?"
  },
  "p2": {
   "why": "Same problem, two different responses, and part of the skill is knowing which one is yours to give.",
   "talk": "Wherever you work, you'll be expected to be professional, think a step ahead and make sound calls under pressure, often outside normal hours. The tools will feel familiar: email and calendar, a chat tool, a video tool, somewhere documents live and a task list. What really sets you apart is how you respond when things go wrong.",
   "walk": [
    "First, when a vendor lets you down, the EA side negotiates or escalates; the PA side just gets the service back on track.",
    "Next, when two meetings clash, the EA side weighs business priority; the PA side asks what the person wants.",
    "Finally, when a request starts to grow, the EA side points to the contract limit; the PA side asks for approval first."
   ],
   "contrast": {
    "lazy": "Assumes it's the same setup as the last job, waits to be shown everything, and learns where files live when something goes missing.",
    "excellent": "Spends day one mapping the place: tools, where files live, who approves what, and the unwritten rules. By Friday they're the person others ask."
   },
   "outcome": "In a law firm, not knowing where the matter files live isn't an inconvenience; it's a document that can't be found the night before a deadline or a hearing. Knowing the place early is what lets you move fast when the case suddenly speeds up.",
   "ask": "[Name], a vendor misses a delivery that affects a client meeting and a family dinner on the same evening. How does your EA side handle it? [Name], and your PA side?",
   "mystery": "The case of the double-booked caterer. The caterer sends the wrong order to a client lunch at the office, and the same caterer is booked for the Thornes' dinner party on Saturday. Solve it in two moves: what does your EA side do about the lunch in the next 30 minutes, and what does your PA side do to protect Saturday? I want the exact first sentence of each call."
  }
 },
 "1::Who's Who in a Law Firm": {
  "p1": {
   "icebreaker": "Game: 'Guess the title.' I'll describe the person, you shout the job. 'Owns part of the firm and the client relationship.' 'A lawyer doing a lot of the day-to-day legal work.' 'Does real legal work but isn't a lawyer.' 'Runs the judge's calendar and can make your week easy or hard.'",
   "teaser": "One of those four people controls your diary more than the most senior person in the building. Keep an eye out for who it is.",
   "why": "Before you can route a single request well, you need to know who's who, inside the firm and outside it.",
   "talk": "A law firm has a clear ladder. Partners own the firm and the client relationships. Associates are lawyers doing much of the day-to-day legal work. Of counsel are experienced lawyers with a looser tie to the firm. Paralegals do real legal work under a lawyer's supervision, and we, the assistants, keep everyone's time, communication and logistics running. Then there's the outside world: clients, opposing counsel, court clerks, judges' chambers, court reporters and experts.",
   "walk": [
    "First, in week one, get the org chart and learn who works on what.",
    "Next, for each of Elias's matters, write down the team: partner, associate, paralegal and client contact.",
    "Then learn the outside names: opposing counsel, the judge and the vendors you book.",
    "After that, before passing anything on, ask who owns that decision. Legal judgment goes to a lawyer.",
    "Finally, address people properly: 'Judge Rivera' in writing, 'Your Honor' in court, and opposing counsel politely, in writing, with your attorney copied."
   ],
   "jargon": [
    {
     "term": "Partner / Associate / Of counsel",
     "hint": "the lawyer ladder, from owner to employee to senior adviser"
    },
    {
     "term": "Paralegal",
     "hint": "a trained legal professional who works under a lawyer"
    },
    {
     "term": "Opposing counsel",
     "hint": "the lawyer for the other side"
    },
    {
     "term": "Chambers / court clerk",
     "hint": "the judge's office and the staff who run the court's paperwork and calendar"
    },
    {
     "term": "Court reporter",
     "hint": "the person who types up everything said at a deposition or hearing"
    }
   ],
   "story": "A situation that happens in real firms: a new assistant was very attentive to the partners and a bit short with 'the person from the court' who kept phoning about scheduling. That person was the judge's clerk. When the firm later needed a hearing moved urgently, the clerk did everything by the book and nothing faster. The assistant who'd always been courteous to that office got the call returned the same day.",
   "ask": "[Name], if a filing deadline suddenly moved on a matter you support, who would you call first? [Name], who would you call second, and why?"
  },
  "p2": {
   "why": "The people who look least senior often have the most control over your day.",
   "talk": "Court clerks and judges' staff run the calendar, so courtesy there pays off every week. There's also one hard rule: we never contact the other side's client directly. If someone has a lawyer, everything goes through that lawyer, and only when our attorney says so. And watch two traps: thinking the most senior person decides everything, and treating paralegals as errand-runners. They're specialists, and we work side by side.",
   "walk": [
    "First, treat clerks and chambers with real courtesy.",
    "Next, never contact a represented party directly.",
    "Then, don't assume the most senior person owns every decision.",
    "Finally, treat paralegals as colleagues, not helpers."
   ],
   "contrast": {
    "lazy": "Polite upwards, short downwards. Learns names only when they need something. Calls the other side's client because 'it was quicker.'",
    "excellent": "Knows every name on every matter, inside and out. Treats the clerk like a VIP. Sends anything for the other side through their lawyer, with our attorney's OK, every time."
   },
   "outcome": "Contacting a represented party directly can get our lawyer reported and damage the case. A good relationship with the clerk can win you the hearing date you need. Both of those land, eventually, on how strong our position is when the case settles.",
   "ask": "[Name], have you ever been helped out of a jam by someone 'junior'? What did they control? [Name], how will you build that relationship here?",
   "mystery": "The case of 'Mark from Harlow's side.' A voicemail: 'This is Mark from Harlow's side, about the deposition. Call me back.' Before you dial, solve it: is Mark a lawyer, a client, a witness or a vendor? Where would you look to find out, who at the firm should call him back, and what's the one thing you must not do? Three clues, then your answer."
  }
 },
 "1::The Life of a Legal Matter": {
  "p1": {
   "icebreaker": "Game: 'Line it up.' I'm handing out cards: Intake, Pleadings, Discovery, Motions, Settlement or Trial, Closing. Six volunteers: get in the right order, no talking, 30 seconds. Everyone else: you're the judges.",
   "teaser": "Most cases never reach the end of that line the way TV shows it. Where most of them actually finish is the stage that matters most to us, and it isn't trial.",
   "why": "If you know which stage a matter is in, you can see the next deadline coming before anyone asks.",
   "talk": "Everything a law firm works on is called a matter, and most follow the same life. A lawsuit starts with intake and a conflict check, then an engagement letter and a retainer. Then investigation, then pleadings, which are the complaint and the answer. Then discovery, where both sides swap documents and take depositions. Then motions, then settlement or trial, then judgment and maybe an appeal, and finally closing the file. Deals, like a contract or a company sale, run a shorter path: intake, engagement, drafting and negotiating, signing, then follow-up.",
   "walk": [
    "First, when a matter opens, note whether it's a lawsuit or a deal, and which stage it's in.",
    "Next, at intake, collect every party's name and every key date.",
    "Then, during pleadings and discovery, put each deadline in the calendar the moment it's triggered.",
    "After that, before any hearing, trial or signing, build the checklist early.",
    "Finally, at closing: the final bill, any trust money returned, a closing letter and the file archived."
   ],
   "jargon": [
    {
     "term": "Matter",
     "hint": "one case or one deal the firm works on"
    },
    {
     "term": "Engagement letter / retainer",
     "hint": "the signed agreement to work for the client, and the money paid up front"
    },
    {
     "term": "Pleadings",
     "hint": "the first formal documents: the complaint and the answer"
    },
    {
     "term": "Discovery",
     "hint": "the stage where both sides must share documents and evidence"
    },
    {
     "term": "Deposition",
     "hint": "sworn questioning of a witness, outside court, typed up word for word"
    },
    {
     "term": "Motion",
     "hint": "a formal request asking the judge to do something"
    }
   ],
   "story": "A real-life pattern: a case was 'basically settled,' so the team stopped watching the discovery deadlines. The settlement talks stalled, the deadline passed, and the other side asked the court for penalties. Our client went back to the table with less leverage than before, and the final number reflected it. Deadlines keep running until a court order says they don't.",
   "ask": "[Name], which stage do you think creates the most deadlines for an assistant? [Name], do you agree, or would you pick a different one?"
  },
  "p2": {
   "why": "The mistakes in a matter's life happen at the edges: the words we use and the very end.",
   "talk": "Keep the stage current in the tracker, so anyone covering for you knows where things stand. Most cases settle, but we prepare as if every one is going to trial, because deadlines keep running during settlement talks unless the court pauses them. Two traps: thinking 'closed' means finished, when unreturned trust money and loose files cause trouble months later; and using the words loosely. Filed means the court has it. Served means the other side has formally received it. Sent just means it left us.",
   "walk": [
    "First, update the stage whenever it changes.",
    "Next, prepare for trial even when settlement looks likely.",
    "Then, treat closing as its own checklist.",
    "Finally, use filed, served and sent precisely."
   ],
   "contrast": {
    "lazy": "'We're settling, so I've stopped tracking the discovery deadlines.' 'I sent it, so it's filed.'",
    "excellent": "Every deadline stays live until a court order says otherwise. The words filed, served and sent are used exactly, and the tracker shows the stage today, not last month."
   },
   "outcome": "This is the big one. Most cases end in settlement, and the side that's fully ready for trial gets the better deal, because the other side knows it. Every deadline you kept and every document you had ready is quiet pressure at the negotiating table. A missed one is a gift to the other side.",
   "ask": "[Name], why might a lawyer be alarmed if you said a document was 'filed' when it was only 'sent'? [Name], what could happen next if nobody noticed?",
   "mystery": "The case of the brand-new lawsuit. Harlow Industries has just been sued. You have the complaint on your desk. Map the whole journey: what you do today, what goes in the calendar this week, what you watch for during discovery, and the four things that must happen before the file can truly close. Teams of two, five minutes, and the most complete map wins."
  }
 },
 "1::Legal Terms You'll Hear Every Day": {
  "p1": {
   "icebreaker": "Game: 'Real or made up?' I'll say a legal term. Thumbs up if it's real, down if I invented it. Interrogatory. Subpoena. Affidavit. Flibbertigibbet motion. Stipulation. Pro se. Okay, one of those was fake. I hope.",
   "teaser": "There's one pair of words on this slide that sound almost the same, and mixing them up has sent assistants running to a notary for no reason. Spot it as we go.",
   "why": "One misunderstood word can send the wrong document to the wrong place, so the vocabulary is part of the job.",
   "talk": "Let's build the basic vocabulary. The plaintiff brings the case and the defendant answers it. A complaint starts a lawsuit, an answer responds, a motion asks the court to do something, and a brief argues why. Discovery is the swapping of information between the sides. There are a handful of words here I'll explain properly as we go, so don't worry if some are new.",
   "walk": [
    "First, keep a one-page glossary in your own words and add to it every week.",
    "Next, when you hear a term you don't know, write it down and look it up, or ask at a good moment.",
    "Then use each document's exact name when you save, file or send it.",
    "After that, learn the firm's own words, like matter number and retainer.",
    "Finally, notice which side the firm is on in each matter."
   ],
   "jargon": [
    {
     "term": "Plaintiff / Defendant",
     "hint": "who brings the case / who answers it"
    },
    {
     "term": "Pro se",
     "hint": "someone representing themselves, without a lawyer"
    },
    {
     "term": "Complaint / Answer / Motion / Brief",
     "hint": "starts the case / responds / asks the judge / argues why"
    },
    {
     "term": "Affidavit vs. Declaration",
     "hint": "both sworn statements; only the affidavit needs a notary"
    },
    {
     "term": "Interrogatories",
     "hint": "written questions one side must answer under oath"
    },
    {
     "term": "Subpoena",
     "hint": "an order to show up or hand over documents"
    },
    {
     "term": "Stipulation",
     "hint": "something both sides formally agree on"
    }
   ],
   "story": "This happens in real offices: an attorney asked an assistant to 'get the affidavit signed today.' She emailed it to the client for an e-signature. But an affidavit has to be signed in front of a notary, so the signed copy couldn't be filed, and the filing slipped by a day while they arranged a notary appointment. Knowing the difference between an affidavit and a declaration is not trivia; it's a deadline.",
   "ask": "[Name], which legal term have you heard and never been quite sure about? [Name], pick one from the slide you'd struggle to explain to a friend."
  },
  "p2": {
   "why": "Knowing the words gives you confidence. It doesn't give you permission to interpret them for clients.",
   "talk": "We match the lawyer's exact words: a deposition isn't a hearing, and a subpoena isn't a summons. With clients, we can define a word the way the attorney explained it, but the moment we say what it means for their case, that's legal advice, and it isn't ours to give. Two traps: nodding along when we didn't understand, and using jargon with clients to sound expert. Plain language is more professional, not less.",
   "walk": [
    "First, match the lawyer's exact words.",
    "Next, define terms for clients only as the attorney has explained them.",
    "Then, ask instead of nodding along.",
    "Finally, keep it plain with clients."
   ],
   "contrast": {
    "lazy": "Nods along, guesses later. Saves files as 'response,' 'questions' and 'final.' Explains a subpoena to a worried client in their own words.",
    "excellent": "Asks the moment a word is unclear, names every file by its exact document type and date, and with clients says, 'I'll ask Elias to walk you through what that means for you.'"
   },
   "outcome": "If the wrong document goes out under the wrong name, or a client acts on something we 'explained,' the lawyer has to clean it up, sometimes in front of a judge. Precise words protect deadlines, and protecting deadlines protects the case's value when it's time to settle.",
   "ask": "[Name], a client asks, 'What does it mean that we've been subpoenaed?' What can you say? [Name], what do you hand to the attorney?",
   "mystery": "The case of the cryptic voice note. Elias, at speed: 'Opposing counsel served interrogatories and noticed Harlow's CFO for deposition; calendar the responses and get a court reporter.' Decode it. Write the plain-English task list, name the deadlines you need to find, and tell me the one question you'd ask Elias before you start. First team to crack it reads it out."
  }
 },
 "1::Client Intake & Conflict Checks": {
  "p1": {
   "icebreaker": "Game: 'Can we take them?' I'm the firm. I already act for a big supermarket chain. Hands up if we can take each new caller: a bakery suing its landlord. A supplier suing the supermarket. The supermarket's former CEO in a divorce. A man whose dog bit a supermarket delivery driver.",
   "teaser": "Two of those look harmless and aren't. The danger is usually hiding in the name you didn't think to check. Let's find out where.",
   "why": "Taking on the wrong client can force a firm off a case, so the first job with any new inquiry is the conflict check.",
   "talk": "Before the firm agrees to act for anyone, it has to make sure that won't clash with a current or former client. That's an ethics rule. The check searches everyone involved: the client, the other side, related companies, key people and even opposing counsel. Until it clears and an engagement letter is signed, the caller is only a prospective client, so we take only what we need and we don't give advice. And intake is where deadlines first appear, so a date mentioned in passing matters.",
   "walk": [
    "First, use the intake form every time: all parties, related businesses, opposing counsel, a short description and any dates.",
    "Next, search every name, including former names and parent companies.",
    "Then any match goes to the attorney. You don't decide whether it's a real conflict.",
    "After that, any deadline mentioned goes to the attorney the same day.",
    "Finally, once cleared, prepare the engagement letter and open the matter only after it's signed."
   ],
   "jargon": [
    {
     "term": "Conflict check",
     "hint": "making sure a new client doesn't clash with a current or past one"
    },
    {
     "term": "Prospective client",
     "hint": "someone asking for help who isn't a client yet"
    },
    {
     "term": "Parent company / related entity",
     "hint": "the bigger company that owns, or is linked to, the one named"
    },
    {
     "term": "Limitation period",
     "hint": "the deadline to bring a claim at all; miss it and the case is gone"
    }
   ],
   "story": "A real intake risk: a friendly caller described her whole dispute in detail, strategy included, before anyone took names. The conflict check afterwards showed the firm already acted for the company she wanted to sue. The firm had to decline her and put a screen around everyone who'd heard the call. Now the rule at that firm is simple: 'Before you tell me more, may I take the names of everyone involved?'",
   "ask": "[Name], why do you think the conflict often hides in the other party's name rather than the client's? [Name], can you think of an example?"
  },
  "p2": {
   "why": "The check protects the firm only if it's thorough and written down.",
   "talk": "Where we can, we run the check before a long call, so the firm hears as little confidential detail as possible before clearing conflicts. We record what we searched, when, the result and who cleared it. The two traps: searching only the client's name, when the conflict is usually in the other party or a related company; and saying 'we can definitely help' before the check clears. Only the attorney accepts a matter.",
   "walk": [
    "First, run the check early.",
    "Next, record the search and the result.",
    "Then, search every related name, not just the client.",
    "Finally, never promise representation. That's the attorney's call."
   ],
   "contrast": {
    "lazy": "Searches the caller's name, sees nothing, tells them 'I'm sure we can help,' and lets them talk for half an hour.",
    "excellent": "Takes names first, searches every party, parent company and former name, logs the result with the date, and tells the caller 'The attorney will confirm whether we can act for you.'"
   },
   "outcome": "Miss a conflict and the firm can be forced off the case halfway through, after the client has paid and shared everything. That throws away months of work and leverage just when a settlement might be close. And a missed limitation date at intake can mean there's no case left to settle at all.",
   "ask": "[Name], a caller asks, 'So will you take my case?' What do you say? [Name], say it in a way that doesn't sound like a brush-off.",
   "mystery": "The case of Northgate Logistics. A caller wants the firm to sue 'Northgate Logistics' over a warehouse contract and mentions it ended 'almost six years ago.' Something about that sentence should make you sit up. Investigators: list every name you'd search, find the hidden time bomb in what the caller said, and tell me who hears about it and how fast. Bonus point for the thing you must not say on the call."
  }
 },
 "1::Basic Communication Principles for Legal EAs": {
  "p1": {
   "why": "In legal work, a message that can be read two ways is a risk, not just a style problem.",
   "talk": "Think about who reads what we write: a busy attorney, a nervous client, a court clerk. Each needs something different from us. The attorney wants the facts fast. The client wants to understand and feel reassured. The court wants it formal and by the book. If our wording is vague, any one of them can take it the wrong way, and in law that can cost money or a deadline.",
   "walk": [
    "First, before we write a word, we decide who's reading it.",
    "Next, we write it so there's only one way to understand it, and we cut any phrase that could be taken two ways.",
    "Then, we set the tone for that reader: short and technical for the attorney, plain and calm for the client, formal for the court.",
    "After that, we remember that confidentiality covers conversations too, even a casual chat in the hallway.",
    "Finally, when we have to say 'not now', we use tried-and-tested phrases, so we sound professional instead of flustered."
   ],
   "ask": "Who do you find hardest to write for: the attorney, the client or the court? Why?",
   "scenario": "You need to tell three people that a hearing moved from Tuesday to Thursday: Elias, the client, and the court clerk (to confirm the new date). Draft the first line of each message. What changes between them, and what stays exactly the same?"
  },
  "p2": {
   "why": "The facts stay the same for every audience. What changes is how we say them.",
   "talk": "Imagine the same update going to three people: a motion was filed asking the court for more time. To the attorney, that's one line: filed, confirmation attached, nothing needed from you. To the client, it's reassurance: we've asked for more time so we can prepare your case properly. To the court clerk, it's a formal request to confirm receipt. None of those versions is more honest than the others; each one simply suits who's reading it.",
   "walk": [
    "First, we shape every update for its reader.",
    "Next, we keep matters private in how we talk about them, not just in the documents we send.",
    "Then, when an EA has to hold someone off, a line like 'His schedule is fully committed; I'll follow up on your request' keeps it professional.",
    "Finally, a PA's version is warmer: 'He's not available right now. Can I pass on a message, or find a better time?'"
   ],
   "ask": "Let's hear it. Three volunteers: read the attorney, client and court versions aloud, each in its own tone.",
   "scenario": "In the lift, a colleague from another team asks, 'Did the Meridian thing settle? I heard it was big money.' The settlement is confidential. What do you say, in a way that doesn't sound rude or confirm anything?"
  }
 },
 "1::Gatekeeping Is Not 'No'": {
  "p1": {
   "why": "Good gatekeeping never slams the door. It says 'not right now, but here's what we can do.'",
   "talk": "When someone wants the boss's time and can't have it, how we say no decides whether they walk away respected or resentful. A flat no makes people go around you. A calm, confident 'not now, here's a better option' keeps the relationship and still protects the executive's time. And remember, when you speak for him, you carry his authority, so there's no need to sound apologetic.",
   "walk": [
    "First, we start from 'not now' or 'here's another way', never a flat no with no explanation.",
    "Next, we keep our voice calm and sure of itself, because we're speaking with the executive's authority.",
    "Then, we never make the person feel wrong for asking or tell them they should have planned better. That wins us nothing.",
    "After that, we always hand them something real: a specific time, a named colleague or a clear timeline.",
    "Finally, if they push back, we listen, explain the real constraint honestly and appeal to what we both want, instead of repeating the same no louder."
   ],
   "ask": "What's the difference between a gatekeeper people respect and one people try to get around?",
   "scenario": "A long-standing client calls, upset, demanding to speak to Elias right now about a bill. Elias is in a deposition until 4 p.m. Script your response: what do you say first, and what real next step do you offer?"
  },
  "p2": {
   "why": "People remember how you made them feel when the answer was 'not now.'",
   "talk": "Two rules carry most of the weight. Never make the caller feel foolish for asking, and never leave them without a next step. Behind those rules sits a small toolkit for persuading without pulling rank. You listen properly first. You explain the situation in a way that makes sense to them. You point to a goal you both share, and you ask what they think instead of telling them what to do.",
   "walk": [
    "First, we filter who gets through, while keeping our tone steady and confident.",
    "Next, we never blame the person for their timing, and we always leave them with a real next step.",
    "Finally, when we need to persuade, we listen, frame the situation, appeal to shared goals and ask for their view."
   ],
   "ask": "Let's practise. I'll play a pushy caller who wants Elias right now. First, a volunteer caves; then another holds the line politely. What made the difference?",
   "scenario": "A junior partner has asked for time with Elias three times this week and is getting frustrated. Elias has said he can't meet until next week. How do you respond so the partner feels heard and still leaves with a real next step?"
  }
 },
 "1::The Filtering Matrix": {
  "p1": {
   "why": "Not every request deserves the same speed, and four quick questions tell us which ones do.",
   "talk": "When requests pile up, it's tempting to answer them in the order they arrived. That's how the important one gets buried under five easy ones. Instead, we run each request through four questions. Does it affect money? Does it carry legal risk? Does it need the executive himself? Is there a relationship on the line? Those answers tell us whether to act now, hand it off, park it or offer an alternative.",
   "walk": [
    "First, we ask all four questions in order: money, legal risk, the executive's authority and the relationship.",
    "Next, if any single answer is high, it's urgent. One serious reason is enough.",
    "Then, if everything scores low, we decide whether to hand it to someone else, schedule it for later or offer another option.",
    "After that, we jot down how we sorted it, especially anything we parked, so our thinking can be checked later.",
    "Finally, we come back to parked items exactly when we said we would, because a forgotten item is as bad as a mishandled one."
   ],
   "ask": "Quick check: if a request scores high on just one of the four questions, what should happen to it?",
   "scenario": "Before 9 a.m., four items reach you: a vendor invoice due Friday, a court notice moving a hearing, a client's assistant asking for a coffee catch-up, and a partner wanting Elias's view on a new hire. Run each one through money, legal risk, authority and relationship. Which one goes to Elias first?"
  },
  "p2": {
   "why": "One high-stakes answer is enough to make something urgent.",
   "talk": "Let's make those four questions practical. For money, ask whether we gain or lose something if it waits a day. For legal risk, ask whether there's a deadline, privileged information or liability involved; either of those usually means now. For authority, ask whether only the attorney can decide or sign; if not, maybe we or someone else can handle it. And the relationship question catches what the others miss: a small request from a long-time client can still deserve to go first.",
   "walk": [
    "First, money or legal risk on their own usually means we act now.",
    "Next, if the attorney doesn't personally need to decide, we look at handing it off or handling it ourselves within our limits.",
    "Finally, sometimes who is asking matters more than what they're asking for."
   ],
   "ask": "Four requests land at once: a loyal client with a small billing question, a vendor wanting a signature today, opposing counsel proposing a deposition date and a colleague inviting Elias to speak at a lunch. Let's sort them together.",
   "scenario": "A small request comes in from Elias's oldest client: 'Can he sign a birthday card for our CEO today?' It scores low on money, legal risk and authority. Why might it still go near the top of the list?"
  }
 },
 "1::Scripts That Redirect Without Alienating": {
  "p1": {
   "why": "Having a few ready-made ways to redirect people means we never have to improvise a clumsy no.",
   "talk": "There are really three situations. Sometimes the request is fine, just badly timed, so we defer it. Sometimes it belongs to someone else, so we re-route it. And sometimes the honest answer is that there's simply no room, so we say that plainly and offer something else. We call that last one Drastic Contrast. Picking the right one is half the work.",
   "walk": [
    "First, we choose the script: defer if the timing's wrong, re-route if it's someone else's job, or be plainly honest if there's truly no room.",
    "Next, when we defer, we acknowledge the request properly and give a real timeline, not a vague 'soon'.",
    "Then, when we re-route, we name the right person and make sure the handoff actually happens.",
    "After that, when we're being plainly honest, we tell the truth about the constraint and immediately offer a specific alternative.",
    "Finally, whichever we use, we try to get a small yes first, like confirming what they need. It makes the redirect go down easier."
   ],
   "ask": "When would you re-route a request instead of simply deferring it?",
   "scenario": "Three people want Elias today: a vendor selling software, a paralegal with a billing question and a client who wants a meeting this week. Which script do you use for each (defer, re-route or Drastic Contrast), and what exactly do you say?"
  },
  "p2": {
   "why": "A redirect isn't finished until the request actually lands somewhere.",
   "talk": "Pointing someone to another team and walking away isn't re-routing; it's abandonment. We stay responsible until we know it's been picked up. And when we're blunt about a real constraint, we're honest, never misleading, and we follow straight away with a specific slot. There's some good psychology behind this too. People are more open once they've already said a small yes, and they accept a process more easily than a personal preference.",
   "walk": [
    "First, when we re-route, we stay accountable for the outcome.",
    "Next, when we give a hard answer, it comes with a real alternative time.",
    "Finally, we lean on a small early agreement and on the firm's process, never 'because I said so.'"
   ],
   "ask": "Let's try all three. A senior partner wants 30 minutes with Elias this afternoon and his calendar is full. Three volunteers, three scripts, same request.",
   "scenario": "You re-routed a client's billing question to the finance team a week ago. Today the client emails Elias directly, annoyed that nobody replied. What went wrong with your redirect, and what do you do now?"
  }
 },
 "1::Phone & Voicemail Etiquette": {
  "p1": {
   "why": "For a lot of clients, your voice on the phone is their first impression of the whole firm.",
   "talk": "Answering the phone well is a real skill. We answer with the firm's name and our own. A good message has everything the attorney needs to act without calling us back: who called, from where, their number, which matter, what they need, how urgent it is and when to reach them. And confidentiality applies on the phone too. We don't confirm that someone is a client until we know who we're talking to.",
   "walk": [
    "First, answer with the firm's name and your name.",
    "Next, take the full message and read the number back, and ask which matter and whether there's a deadline.",
    "Then transfer warmly: tell the attorney who it is and why before connecting.",
    "After that, when you leave a voicemail, say your number slowly at the start and the end, keep it short and leave out anything confidential.",
    "Finally, log important calls and return them within one business day."
   ],
   "ask": "What's the most useless phone message you've ever been handed?",
   "scenario": "Elias is in a meeting. A client calls, upset, saying he got a letter from the court and 'needs to talk to Elias right now.' Take the message: what do you ask, and what do you tell Elias?"
  },
  "p2": {
   "why": "Small phone habits either protect the firm or quietly leak information.",
   "talk": "Tone matters, and it's worth smiling when you answer because people can hear it. Keep your voicemail greeting current, especially when you're away, with who to call instead. And two traps: telling an unknown caller that someone is a client, which can itself be a breach, and taking a message like 'John called,' which nobody can act on.",
   "walk": [
    "First, mind your tone.",
    "Next, keep your greeting current.",
    "Then, never confirm a client relationship to an unknown caller.",
    "Finally, make every message complete."
   ],
   "ask": "How would you politely decline to confirm whether someone is a client?",
   "scenario": "A caller says, 'I'm a reporter. Is Harlow Industries one of your clients? I just need a yes or no.' What exactly do you say, and what do you do after the call?"
  }
 },
 "1::Executive Presence in Action": {
  "p1": {
   "why": "Whether you're speaking as an EA or a PA, the instinct underneath is the same: protect first, sort it out second.",
   "talk": "Imagine someone calls asking for confidential information. As an EA, we're firm, brief and procedural: we can't release that, and we'll escalate it internally. As a PA, we're warm but just as protective: that's private, but we're happy to help with logistics. Both answers keep the door closed on what matters. They sound different because they're protecting different things, the business in one case and the person in the other.",
   "walk": [
    "First, when something sensitive comes in, we decide in that moment whether we're answering as an EA or a PA.",
    "Next, as an EA, we protect the business: short, firm, by the book.",
    "Then, as a PA, we protect the person: kind and accommodating, but still closed on anything private.",
    "After that, when someone keeps pushing, we hold the same line. The EA asks for it in writing; the PA takes a message and promises a follow-up.",
    "Finally, in both roles, we protect before we try to resolve anything."
   ],
   "ask": "A journalist calls asking whether Elias is handling a well-known client's divorce. Two volunteers, back to back: answer once as an EA and once as a PA.",
   "scenario": "A caller says she's from a national newspaper and asks whether Thorne & Partners is representing a well-known CEO in a fraud case. Two minutes later, Sarah Thorne's friend calls asking whether Elias and Sarah are 'going through a rough patch.' Answer the first as an EA and the second as a PA."
  }
 },
 "1::Virtual Meetings & Transcription Accuracy": {
  "p1": {
   "why": "The record of a meeting can't depend on technology alone.",
   "talk": "We've all been in a meeting where the recording failed, or everyone walked out remembering a different decision. Afterwards, the assistant is the one people ask what was actually agreed. So we treat the meeting record as our job, not the software's. We check the tools beforehand, keep a person taking notes just in case, and turn whatever we capture into something short and useful.",
   "walk": [
    "First, we test the recording before the meeting starts. Finding out it's broken halfway through is too late.",
    "Next, we always have a person taking notes as a backup, whatever tool is running.",
    "Then, during the meeting, we capture what was decided and who's doing what, and we leave out the side chatter and off-the-record comments.",
    "After that, if an AI tool made a transcript, we read it and clean it up before anyone else sees it.",
    "Finally, we give the executive what he actually needs: a short briefing memo, not forty pages of transcript."
   ],
   "ask": "Has a meeting ever ended with nobody agreeing on what was decided? What would have saved it?",
   "scenario": "Elias's 2 p.m. partners' call is on Zoom, and you're told the AI transcription will 'handle the notes.' Five minutes before, the recording button is greyed out. What do you do before the call starts, and what's your backup?"
  },
  "p2": {
   "why": "A raw transcript isn't a record. Our job is to turn it into one.",
   "talk": "It's worth knowing the difference between informal notes, which stay inside the team, and formal minutes, which are a structured record that gets sent around. AI tools like Zoom, Teams and Otter save a lot of typing, but they mishear names, miss context and happily record things that should never be written down. And if our minutes ever come back confusing, we don't quietly stop sending them. We apologise, fix them and tighten up the template.",
   "walk": [
    "First, a human backup note-taker, every time.",
    "Next, only decisions and action items go in the record, never side conversations.",
    "Then, we review and clean every AI transcript before it's shared.",
    "Finally, after big meetings, we send a short executive brief headed with the meeting topic, instead of the whole transcript."
   ],
   "ask": "Here's the situation: the partners' meeting ran long, the transcript is 40 pages, and two people remember the key decision differently. What do you send, to whom, and how do you settle what was decided?",
   "scenario": "The AI transcript of a client call spells the client's company wrong, records a side comment about opposing counsel and lists an action item nobody agreed to. What do you fix before anything is shared, and what goes to Elias?"
  }
 },
 "1::Professional Standards & Confidentiality": {
  "p1": {
   "why": "Everything we see is protected, but business secrets and personal privacy are protected in slightly different ways.",
   "talk": "On the business side, we're guarding things like contracts, financial numbers and ideas the firm owns, and there are real laws and HR rules behind that. On the personal side, we're guarding a family's privacy, and what holds that together is trust more than rules. Either way, the working assumption is simple: if we're not sure whether something is confidential, it is.",
   "walk": [
    "First, before we talk about any matter, we work out whether it's business-confidential or personally private.",
    "Next, on the business side, we know the legal, HR and privacy rules ahead of time instead of waiting to be told something is sensitive.",
    "Then, on the personal side, discretion is the default, because the family is trusting us, not just a policy.",
    "After that, we treat every channel as risky. A chat in the lift can do as much damage as a misdirected email.",
    "Finally, when in doubt, we protect it. Over-protecting costs almost nothing; a leak can cost everything."
   ],
   "ask": "Without naming anyone, has a small slip ever turned into something bigger than you expected? Just a nod is fine.",
   "scenario": "You're booking a medical appointment for Elias's mother and a board meeting for the firm on the same afternoon. Both calendars are open on your screen when a visitor sits down at your desk. Which information is business-confidential, which is personally private, and what do you do right now?"
  },
  "p2": {
   "why": "There's no such thing as a small leak.",
   "talk": "People tend to think a real breach is a stolen file or a wrong attachment. But a throwaway comment to a friendly face in the lobby can do just as much harm, because once it's out, we can't pull it back. And on the personal side, the family is trusting us personally with things they'd never put in a contract. Protecting that trust is the job.",
   "walk": [
    "First, personal privacy rests on trust, and we earn it by being discreet every single time.",
    "Next, a casual comment carries the same risk as a misdirected email.",
    "Finally, the safest habit is to never discuss a matter anywhere it doesn't belong."
   ],
   "ask": "In the lobby, a friendly paralegal from another firm says, 'Is Elias on the Meridian matter? I heard it's getting messy.' What do you say, and what do you avoid saying?",
   "scenario": "At a family barbecue, your cousin asks what it's like working for 'that famous lawyer' and whether he's as tough as people say. What's safe to say, and what's off limits, even among family?"
  }
 },
 "1::Boundaries & Authorization Protocols": {
  "p1": {
   "why": "Knowing exactly how far our authority goes is what lets us act quickly without getting into trouble.",
   "talk": "Every assistant has limits on money, access and commitments. Some are written down; many are just assumed. The assumed ones cause problems. When our limits are written down, we can act confidently inside them and we know exactly when to stop and ask. For example: an invoice under 500 dollars, we can approve; over that, we escalate first, every time.",
   "walk": [
    "First, before we act on anything involving money, access or a commitment, we check it against our written limits, not our memory.",
    "Next, if it's within our limit, we handle it and make a note that we did.",
    "Then, if it's over our limit, we escalate before we act. 'It'll probably be approved' isn't approval.",
    "After that, we keep business and personal systems completely separate: different calendars, storage and devices. That separation is what stops the lines from blurring.",
    "Finally, when something's unclear, we ask ourselves three things: is it within policy, is it legal, and would the executive trust us doing it? If any answer is no or unsure, we escalate."
   ],
   "ask": "What's the real risk in going ahead with something because it will 'probably be approved anyway'?",
   "scenario": "A vendor sends a $480 invoice and a $520 invoice for the same event on the same day. Your approval limit is $500 per invoice. What do you approve, what do you escalate, and what might be going on here?"
  },
  "p2": {
   "why": "Clear limits make us faster, not slower.",
   "talk": "Let's make it concrete. An EA might be allowed to approve vendor bills under 500 dollars and send anything bigger up the line. A PA might book personal travel within a set budget and tell the executive if it goes over. Both of them also know where to stop completely: an EA doesn't sign a contract that needs the boss's approval, and a PA never gives a vendor access to the family's bank accounts without checking first.",
   "walk": [
    "First, our limits are specific numbers and actions, not a general feeling.",
    "Next, we keep business and personal systems physically apart.",
    "Then, we stop and escalate before anything that needs the executive's own sign-off.",
    "Finally, for grey areas, the quick check is policy, law and trust. If any of them is shaky, we escalate."
   ],
   "ask": "Here's a real-life slip: you just approved a 600-dollar invoice by mistake, and your limit is 500. What do you do in the next ten minutes?",
   "scenario": "Sarah Thorne asks you to book a family flight upgrade that goes $300 over the travel budget Elias set. She says, 'He won't mind.' What do you do, and how do you say it to her?"
  }
 },
 "1::What an Assistant Can and Can't Do (Unauthorized Practice of Law)": {
  "p1": {
   "why": "Clients will ask you for legal advice, kindly and often, and saying yes even once can put the firm at risk.",
   "talk": "Only a licensed lawyer can give legal advice, set fees, take on a case, sign court papers or appear in court. Doing those without a license is called the unauthorized practice of law, and it's illegal. The lawyer is responsible for supervising us, so our slip becomes the firm's problem. The line is interpretation. Facts, scheduling and passing on the attorney's own words are fine. Telling someone what the law means for them, or what they should do, is advice.",
   "walk": [
    "First, what we can do: schedule, gather documents, share public facts like a court's hours, and relay the attorney's advice word for word.",
    "Next, what we can't do: say whether someone has a case, what a document means for them or which option to choose.",
    "Then, when asked, we use a bridge line: 'That's a great question for Elias. I'll make sure he gets it today.'",
    "After that, we quote the attorney exactly, or have them put it in writing.",
    "Finally, when in doubt, we treat it as advice and route it."
   ],
   "ask": "Where do you think the line is hardest to see in day-to-day calls?",
   "scenario": "A client emails a photo of a letter from the other side and asks, 'Is this bad? Do I need to do anything?' Elias won't see email for three hours. What do you reply now?"
  },
  "p2": {
   "why": "Most UPL slips come from kindness, not arrogance, so the habits matter.",
   "talk": "Clients often ask us because they feel awkward asking the lawyer, so we redirect warmly and never make them feel silly. We write their question down exactly as asked, so the attorney answers the real question. Two traps: 'In my experience, cases like yours usually settle,' which is still advice, even said kindly; and filling in the answers on a legal form for a client. We collect the information. The attorney decides what goes in.",
   "walk": [
    "First, redirect warmly.",
    "Next, write down the exact question.",
    "Then, no reassurance based on your own experience.",
    "Finally, collect information for forms; don't decide the answers."
   ],
   "ask": "What's a warm way to say 'I can't answer that' without sounding like a brush-off?",
   "scenario": "A client calls: 'The other side offered $40,000. Elias is in trial all week. Just between us, should I take it?' Write exactly what you say."
  }
 },
 "1::NDAs & Non-Disclosure Discipline": {
  "p1": {
   "why": "A non-disclosure agreement is a real legal promise, and we need to know what's actually in it before we rely on it.",
   "talk": "An NDA spells out what information is protected, who has to keep quiet, for how long, and what happens if they don't. The mistake assistants make is treating the phrase 'they signed an NDA' as a magic shield. Some NDAs have expired. Some only cover certain kinds of information. And sometimes nobody actually signed one at all. So before we share anything sensitive, we check.",
   "walk": [
    "First, before sharing anything sensitive with a vendor, contractor or temp, we check there's an NDA on file for that exact person or company.",
    "Next, if there is one, we check what it covers and whether it's still in date.",
    "Then, if we can't confirm it covers this request, we pause and verify. We don't go ahead on 'it's probably fine'.",
    "After that, we keep a simple list of who's signed, what it covers and when it ends, so this check takes two minutes, not an afternoon.",
    "Finally, if someone we haven't cleared asks for sensitive information, we treat that as a flag to check, not a request to fulfil."
   ],
   "ask": "If I asked you right now whether a particular vendor has a signed NDA, could you find out in under two minutes?",
   "scenario": "A temp starts on Monday to help digitize client files. Your NDA tracker shows her agency signed an NDA two years ago, but it expired last month. The files include settlement agreements. What do you do before she opens any file?"
  },
  "p2": {
   "why": "Our job isn't to write NDAs; it's to keep track of them.",
   "talk": "Lawyers draft the agreements. We make sure they actually protect the firm day to day, by knowing who's covered and noticing when someone asks for something they shouldn't have. A very common mistake is treating every NDA as covering everything, forever. They don't. And 'they already work with us' doesn't mean they're cleared for this particular information.",
   "walk": [
    "First, we track who has an NDA on file, and we flag access requests from anyone who doesn't.",
    "Next, we remember that NDAs expire and have limits on what they cover.",
    "Finally, if we can't confirm coverage for a specific request, we pause and verify before sharing anything."
   ],
   "ask": "A new IT contractor asks for the client list to 'set up the new CRM' and says legal already has their paperwork. You can't find an NDA in the tracker. What do you do?",
   "scenario": "A long-time vendor asks for the Meridian board contact list to send them 'a courtesy update.' Their NDA covers IT services only. What do you tell them, and what do you check?"
  }
 },
 "1::Command Hierarchy": {
  "p1": {
   "why": "When something looks wrong, we don't fix it quietly on our own. We follow a clear order of steps.",
   "talk": "Picture spotting a problem before anyone else does, like a document that went out without the right review. The instinct is either to ignore it or to fix it ourselves. Both are risky. The better habit is four steps, always in the same order: notice it, size it up, raise it through the right channel, and make sure our executive hears it from us first.",
   "walk": [
    "First, we notice. We catch the issue while it's still small.",
    "Next, we assess. How big is it, how urgent is it, and who else does it touch?",
    "Then, we escalate. We take it to the right person through the proper channel, not around them.",
    "Finally, we inform. The executive should hear about it from us before he hears it from anyone else."
   ],
   "ask": "In your own words, what does 'escalating instead of deciding alone' actually look like in a normal week?",
   "scenario": "You notice a partner's assistant has scheduled a client meeting in Elias's name, using his calendar, without asking him. It's the second time this month. Walk through notice, assess, escalate and inform. What do you do first?"
  },
  "p2": {
   "why": "The worst way for Elias to learn about a problem is from someone else.",
   "talk": "Raising a problem isn't passing the buck. It's how a well-run office protects everyone, including us. A classic red flag is a confidential document that skipped legal review and went straight to a client. That's exactly the kind of thing that needs escalating straight away, and the executive needs to hear it from us, calmly and with the facts, before the client calls him.",
   "walk": [
    "First, we escalate potential problems rather than deciding alone.",
    "Next, we watch for red flags like a confidential document skipping legal review.",
    "Finally, we make sure critical news reaches the executive from us first."
   ],
   "ask": "You notice a draft settlement letter was emailed to the client before the supervising partner reviewed it. Walk it through: notice, assess, escalate, inform. Who do you tell, in what order, and what do you say?",
   "scenario": "At 4:30 p.m., you learn that a filing deadline for a Harlow matter document was missed at noon. Elias is in a meeting with the managing partner until 5:30. How do you make sure he hears it from you, and what do you say?"
  }
 },
 "1::Command Hierarchy Across Different Tracks": {
  "p1": {
   "why": "Who we report a problem to depends on which world it lives in: the office, the law firm or the household.",
   "talk": "Each setting has its own ladder. In a company, it runs from the CEO down through the senior EA and the EA to the admin assistant. In a law firm, it runs from the managing partner through the senior legal assistant and the legal EA to the paralegal, and that ladder is the strictest, because an unauthorised decision there can become a legal problem. At home, it runs from the head of the family through the estate manager and the PA to the household staff.",
   "walk": [
    "First, before escalating anything, we work out which of the three worlds we're in.",
    "Next, in a company, we go up through the business ladder, starting with our own executive.",
    "Then, in a law firm, we follow the stricter legal ladder, and we treat any decision outside our authority as a genuine risk.",
    "After that, at home, we go through the family's own ladder, from the household staff up to the family head.",
    "Finally, if a problem sits in two worlds at once, like a household matter with legal risk, we raise it in both."
   ],
   "ask": "Elias's housekeeper tells you a process server came to the house with papers for him. That's a household matter with legal risk. Which ladders do you use, and who hears first?",
   "scenario": "The Thornes' nanny tells you a man came to the door asking questions about Elias's work and took photos of the house. It's a household matter, but it might involve a case. Who do you tell, in which order, and through which chains?"
  }
 },
 "1::Serving as Liaison & Point of Contact": {
  "p1": {
   "why": "Gatekeeping decides who reaches the executive. Being a liaison is about connecting people who need each other.",
   "talk": "As a gatekeeper, we're protecting access. As a liaison, we're more like a bridge: a client needs something from Elias, a vendor needs something from staff, and it all flows through us. That only works if what comes out the other end is exactly what went in, and if people know we're the one to call. When a message gets garbled in the middle, that's usually where things went wrong.",
   "walk": [
    "First, we make sure we really understand what each side needs before we pass anything on.",
    "Next, we carry the message accurately both ways, putting it in words that make sense to the person receiving it.",
    "Then, we make it clear we're the one point of contact for this matter, so nobody's guessing who to ask.",
    "After that, we keep in mind which job we're doing at each moment: filtering access, or connecting two people.",
    "Finally, after the handoff, we check back with both sides to make sure it landed as intended."
   ],
   "ask": "Think of a time information got garbled passing through someone in the middle. What would have prevented it?",
   "scenario": "The Meridian client's CFO and Elias's paralegal both keep emailing you different versions of the same deal document. Each thinks the other has the latest. How do you act as liaison so both sides end up with one correct version?"
  },
  "p2": {
   "why": "Most liaison failures aren't wrong answers. They're silence after the handoff.",
   "talk": "Being the one clear contact saves everyone a surprising amount of time and confusion. The liaison habit is a loop. First, we take in the request in the sender's own words, including the deadline and who else is involved. Then we translate it for whoever receives it: a partner needs the decision, a vendor needs the details and timing, a family member needs it in plain English. And we always close the loop by telling the sender it's done.",
   "walk": [
    "First, we receive: we capture the request exactly, deadline included.",
    "Next, we translate: we restate it in the language the receiver needs.",
    "Finally, we close the loop: we confirm back to the sender once it's done."
   ],
   "ask": "Let's try it. A client's finance director needs Elias's sign-off on revised deal terms by Thursday, and the other side's paralegal needs the same document for a filing. Walk through the loop for both.",
   "scenario": "You passed a vendor's question to Elias on Monday, and he answered on Tuesday. On Friday, the vendor calls asking why they never heard back. What part of the liaison loop was missed, and how do you fix it?"
  }
 },
 "1::The Liaison Skill in Practice": {
  "p1": {
   "why": "A good liaison carries the message exactly as it was sent, in both directions, and does it quickly.",
   "talk": "Here's where it gets subtle. When we pass a request up to the executive, it's tempting to soften it or add our own spin. When we pass his answer back, it's tempting to dress up a short reply so it sounds friendlier or fuller. Both change the message. And there's a quieter risk too: a liaison who's so careful that everything slows down has failed just as much as one who lets everything straight through.",
   "walk": [
    "First, when we pass a request up, we keep it accurate: no softening, no exaggerating, no opinions added.",
    "Next, when we pass the answer back, we keep it just as honest and don't turn a short reply into a long one.",
    "Then, we quietly work out which world the request belongs to, office, legal or household, before we route it. That's often the real job.",
    "After that, we watch our own speed, because a slow liaison becomes a bottleneck.",
    "Finally, if we're not sure the message landed the way it was meant, we check back instead of assuming."
   ],
   "ask": "Here's a tough one: Elias's reply to a partner's long request is one word: 'No.' How do you relay that accurately, without softening it into a maybe or making it sound harsher than he meant?",
   "scenario": "A partner sends Elias a long, polite email asking him to co-author a conference paper. Elias's reply to you is: 'Not this year. Too much on.' Write the message you'd send back to the partner, accurate but professional."
  }
 },
 "1::Bulletproof Basics": {
  "p1": {
   "why": "Three everyday basics decide whether an executive trusts us: the inbox, the travel backup plan and the full life of a meeting.",
   "talk": "None of this is glamorous, and that's the point. An executive judges us on whether the ordinary things always go right. The inbox gets sorted on the first read, so nothing sits waiting. Travel comes with a plan B already in place, so a cancelled flight is an inconvenience, not a crisis. And meetings don't end when everyone leaves the room; we set them up beforehand and chase the follow-ups afterwards.",
   "walk": [
    "First, as each email arrives, we decide straight away whether it needs action, is just for information, or should go to someone else.",
    "Next, where it makes sense, we draft the reply in the executive's own voice, so all he has to do is press send.",
    "Then, when we book travel, we line up the backup too. If the 2 p.m. flight is cancelled, the 4 p.m. is already on hold.",
    "After that, we set the meeting agenda before the meeting, which is how we go from taking notes to shaping the result.",
    "Finally, after the meeting, we follow every action item through until it's actually done, not just written down."
   ],
   "ask": "Of these three, which do you already do well, and which is still more of an intention?",
   "scenario": "Elias flies to D.C. at 2 p.m. for a 9 a.m. hearing tomorrow, and the airline just posted a two-hour delay warning. His inbox has 40 unread emails, and there's a 4 p.m. client call nobody has set an agenda for. Which basic do you deal with first, and what do you do on each one before 11 a.m.?"
  },
  "p2": {
   "why": "Doing the basics on a calm Friday is easy. Doing them the same way on a chaotic Tuesday is what earns trust.",
   "talk": "Anyone can keep a tidy inbox when the day is quiet. The difference shows when three things go wrong at once and we still sort every email, still line up the backup flight and still send the meeting follow-ups. That kind of consistency is what makes an executive stop double-checking our work. And the fix for a weak area is almost never a good intention. It's a small, specific habit we actually do every day.",
   "walk": [
    "First, the aim is consistency under pressure, not perfection on quiet days.",
    "Finally, we improve by picking one real habit, not a resolution."
   ],
   "ask": "Pick the basic you're weakest on today. What's one real habit, not an intention, that would fix it this week?",
   "scenario": "It's a chaotic Tuesday: two court changes, a sick colleague and a vendor mix-up. By 6 p.m. you realise you skipped the meeting follow-ups from this morning's partners' meeting. What habit would have stopped that from slipping, and what do you do right now?"
  }
 },
 "1::The Three C's of Managing Up": {
  "p1": {
   "why": "Every update we send gets judged on three things: is it clear, is it consistent, and can he rely on it?",
   "talk": "Managing up sounds like a fancy phrase, but it mostly comes down to how we communicate with the person we support. Clarity means he never has to guess what we're telling him or what we need. Consistency means we do things the same way every time, so he knows what to expect. And credibility means that when we say something, it's true. That one matters most.",
   "walk": [
    "First, before sending an update, we check it's clear: does it say exactly what's happening and what we need?",
    "Next, we check it's consistent: are we using our usual approach, not something improvised because today's busy?",
    "Then, if speed and reliability pull against each other, reliability wins. A quick answer that's wrong is worse than a slightly slower one that's right.",
    "After that, when we're under pressure and clarity starts slipping, we slow down and restate the main point before we hit send.",
    "Finally, every so often we reread our own recent messages, because these habits fade quietly when we're busy."
   ],
   "ask": "When you're overwhelmed, which of the three slips first for you?",
   "scenario": "At 7 p.m. you send Elias: 'Meridian stuff mostly sorted, a couple of things pending, will explain tomorrow.' He replies, 'What's pending and do I need to do anything?' Rewrite the original message so it passes clarity, consistency and credibility."
  },
  "p2": {
   "why": "One wrong 'it's done' costs more trust than ten honest 'confirming by noon's.",
   "talk": "Here's what the three C's sound like in real life. Clarity is opening with the status and the ask: 'The filing is ready; I need your signature by 3.' Consistency is sending the daily brief in the same format every day, so he always knows where to look. And credibility is admitting when we're not sure: 'I believe it's done, and I'll confirm by noon.' That honesty is what makes him believe us when we say something is finished.",
   "walk": [
    "First, clarity means the status and the ask come first, with the background after.",
    "Next, consistency means regular updates always look the same.",
    "Finally, credibility means saying 'I'll confirm by' when we're not certain."
   ],
   "ask": "Try this one: Elias asks, 'Is the Meridian binder at the courthouse?' You think the courier picked it up, but you haven't confirmed. What's the reply that protects your credibility?",
   "scenario": "Elias asks at 8 a.m. whether the signed Harlow engagement letter came back. You think the client said they'd send it last night, but it isn't in the inbox yet. Write the reply that protects your credibility."
  }
 },
 "1::Credibility Is Earned, Not Claimed": {
  "p1": {
   "why": "We can't announce that we're credible. The executive gives us credibility, one reliable week at a time.",
   "talk": "Credibility comes from a few things done over and over. We're accurate, we follow through and we're on time. We never let the boss be surprised by something we already knew. We treat small decisions carefully, because some of them quietly carry money, legal or reputation risk. And we're discreet, especially around investors, legal matters, family life and deals.",
   "walk": [
    "First, we build it through reliability: accurate, finished and on time, every time.",
    "Next, we live by the no-surprises rule. If we know about something, he knows about it too, even if it seems minor.",
    "Then, we treat small decisions as if they might matter, because we can't always tell which ones will.",
    "After that, discretion is our default, especially around investors, legal matters, family and deals.",
    "Finally, if we ever damage that trust, we rebuild it steadily over time. One good week doesn't undo a bad one."
   ],
   "ask": "In practice, what does the no-surprises rule actually look like on a normal day?",
   "scenario": "On Friday you noticed that a client's retainer check bounced, but you meant to mention it Monday. Over the weekend, the client emails Elias directly about 'the check problem.' What rule did you break, and how do you handle Monday morning?"
  },
  "p2": {
   "why": "Lost credibility comes back slowly, roughly in proportion to how much was lost.",
   "talk": "Credibility is what lets us speak up to the executive with confidence. It comes only from doing the work well and showing good judgment, never from telling people how good we are. It also works a bit like a bank balance. Small mistakes take a small withdrawal; a big one can empty the account, and then it takes months of steady deposits to build it back.",
   "walk": [
    "First, credibility is earned through consistent work, never self-promotion.",
    "Next, rebuilding it takes a track record, not an apology.",
    "Finally, the small, quiet decisions are often the ones that carry the most weight."
   ],
   "ask": "Think of a real moment, from any job and kept anonymous, when a small decision turned out to carry real risk. What told you it mattered?",
   "scenario": "Last month you sent a partner the wrong version of a contract, and now Elias double-checks everything you send. What does rebuilding his trust look like over the next few weeks, specifically?"
  }
 },
 "1::Client Profiling": {
  "p1": {
   "why": "A client profile is something we build once, so we never have to ask the same question twice.",
   "talk": "Think about how it feels when a new assistant asks you, for the third time, whether you like morning or afternoon meetings. It wears down trust fast. A profile avoids that. It's a short reference that captures who this person is, how they like to communicate and the rules they live by, so every interaction starts from what we already know.",
   "walk": [
    "First, we start with the basics: their role, their organisation and how far their authority reaches.",
    "Next, we note how they like to communicate. Blunt or detailed? Written or spoken?",
    "Then, we write down their meeting rules, like breaks between meetings and times that are off-limits, because those are the rules new people break most.",
    "After that, we capture travel preferences in enough detail to book without asking.",
    "Finally, we note any quirks, in plain, respectful language."
   ],
   "ask": "Without looking, can you name Elias's firm, one family member and one of his standing rules?",
   "scenario": "It's your first week supporting Elias. You have his name, title and email, and not much else. What five things do you most need to find out, and who (other than Elias himself) could you ask?"
  },
  "p2": {
   "why": "This is the first topic that builds on itself. Everything later in the program assumes you know Elias.",
   "talk": "Let's meet him properly. Elias Thorne is CEO of Thorne & Partners, a large law firm specialising in corporate litigation, white-collar defence and international arbitration. He's blunt and direct, he travels constantly between D.C., London and Singapore, and he expects us to anticipate what he needs rather than wait to be told. Those few facts already tell us a lot about how to write to him and how to plan his week.",
   "walk": [
    "First, the profile has five parts: role, communication style, meeting rules, travel preferences and quirks.",
    "Next, for Elias, direct and brief communication is the rule.",
    "Finally, heavy travel and 'anticipate, don't wait' shape almost everything we'll do for him."
   ],
   "ask": "Using what you now know about Elias, what's one question you'd never need to ask him again?",
   "scenario": "A new colleague books Elias an early-morning red-eye before a court day and schedules three back-to-back meetings after it. Which parts of his profile would have stopped both mistakes?"
  }
 },
 "1::Creating a Comprehensive Client Dossier": {
  "p1": {
   "why": "A dossier goes deeper than a profile. Someone who has never met Elias should be able to run his account from it.",
   "talk": "If the profile is a quick reference card, the dossier is the full handbook. It has four parts. The professional picture comes first: the firm, the industry, the culture and his authority. Then only the personal and family details that actually help us support him. Then his standing instructions, the rules that don't change. And finally his quirks, written kindly and factually. The test is simple: could a stranger run his day from it?",
   "walk": [
    "First, we start with the firm and his role, so the reader understands the professional setting.",
    "Next, we add family and personal details, but only what genuinely helps us support him.",
    "Then, we write his standing instructions as clear rules that anyone could follow without interpreting.",
    "After that, we describe his quirks in plain words, never judgment.",
    "Finally, we test it by asking: could someone who's never met him run the account from this alone?"
   ],
   "ask": "Which of the four sections would be hardest to fill in accurately without meeting him?",
   "scenario": "You're writing Elias's dossier and have these notes: 'likes quiet restaurants,' 'wife Sarah,' 'no calls before 7 a.m.,' 'hates being cc'd on long threads,' and 'daughter's school pickup Tuesdays.' Put each one in the right section, and say which needs rewriting to be usable."
  },
  "p2": {
   "why": "A vague entry is almost as useless as no entry at all.",
   "talk": "Here's the difference in practice. 'Likes comfortable flights' tells a new assistant nothing. 'Aisle seat, rows one to ten, never a red-eye before a court day' tells them exactly what to book. Good entries also say where the information came from and when, like 'confirmed by Elias, March', so the next person knows how far to trust it. And sensitive details, such as health, family or money, live in a restricted section that never gets copied into shared calendars or emails.",
   "walk": [
    "First, we're specific, because specific entries can be acted on.",
    "Next, every entry has a source and a date.",
    "Finally, sensitive details are locked away and shared only with those who truly need them."
   ],
   "ask": "You're handing Elias's account to a substitute for two weeks. Which three entries would they be most likely to get wrong, and how would you write each one so they can't?",
   "scenario": "A substitute assistant covers for you and books Elias a window seat in row 22 for a London flight, because the dossier said 'prefers comfortable seats.' Rewrite that entry so it can't be misread."
  }
 },
 "1::Dossier Excerpt — Elias Thorne": {
  "p1": {
   "why": "Every fact in a dossier needs its reason attached, because a rule without a reason is the one that gets broken.",
   "talk": "Let's look at real entries for Elias. He needs a fifteen-minute debrief after key sessions. He follows a strict Paleo diet. He sends voice notes at 5:30 in the morning and expects an agenda by 8. He only flies in aisle seats. If we just list those, a new assistant might see the fifteen minutes as optional. If we explain that he needs that time to process a court session before his next call, they won't touch it.",
   "walk": [
    "First, we put each fact under the right heading: firm and role, family, standing instructions or quirks.",
    "Next, we write why it matters, not just what it is.",
    "Then, we ask what would go wrong if someone got this entry wrong. That tells us how carefully to word it.",
    "After that, we write for someone who's never met him, with no inside shorthand.",
    "Finally, we compare our entries with the Elias examples to make sure ours are just as specific."
   ],
   "ask": "Why does that fifteen-minute debrief matter enough to be a standing rule?",
   "scenario": "A new paralegal books a client call for Elias straight after a court session, with no gap. His dossier lists the 15-minute debrief buffer as a rule, but with no explanation. How would you rewrite the entry so nobody breaks it again?"
  },
  "p2": {
   "why": "Anyone can paste facts under headings. A good dossier explains why each fact matters.",
   "talk": "Each of the four sections protects us from a different kind of mistake. Get the professional context wrong and we misjudge what's important. Miss a family sensitivity and we cause real hurt. Break a standing rule and we lose trust. Misread a quirk as something we can negotiate and we clash with him. Writing the reason next to each fact is what stops the next assistant from making those mistakes.",
   "walk": [
    "First, each section prevents a different kind of failure.",
    "Next, a fact without its reason is just trivia.",
    "Finally, we write every entry for the person who inherits the account without warning."
   ],
   "ask": "Let's build one section together from two raw facts: a fifteen-minute debrief after every key client or court session, and a strict Paleo diet with no dairy, with every client dinner checked in advance. What's the reason behind each?",
   "scenario": "Elias sends his 5:30 a.m. voice notes and expects an agenda by 8. A dossier entry says only: 'Voice notes early.' What would a new assistant get wrong, and what should the entry say?"
  }
 },
 "1::Setting Up Client Trackers": {
  "p1": {
   "why": "The dossier is the reference book. Trackers are the tools we use every day to put it into practice.",
   "talk": "A dossier tells us who Elias is. A tracker tells us what to do right now, and we update it as things happen. We start small, with just three: how he likes to travel, how he likes his emails, and how his meetings should be spaced. Starting with three we'll actually keep up beats ten we'll let go stale.",
   "walk": [
    "First, we build the three basic trackers: travel, inbox and meeting rhythms.",
    "Next, the travel tracker holds the details that change a booking: seat, connections and whether we rebook without asking.",
    "Then, the inbox tracker records the exact format he expects, like one-line summaries with the details attached.",
    "After that, the meetings tracker holds hard rules, such as no back-to-back sessions and the breaks he needs.",
    "Finally, we update every tracker the moment we learn something new."
   ],
   "ask": "If you only had time to build one tracker for Elias, which would it be, and why?",
   "scenario": "You've built Elias's dossier. Now choose what goes into each of the three trackers from this list: aisle seat, no back-to-back sessions, one-line summaries at the top of emails, no connecting flights, weekly partners' meeting on Monday at 9. Which tracker does each belong in?"
  },
  "p2": {
   "why": "An out-of-date tracker is worse than no tracker at all, because it makes us confident about the wrong thing.",
   "talk": "The trick is to give each tracker a moment when it always gets updated. The travel tracker after every trip. The inbox tracker whenever he reacts to an email's format. The meetings tracker whenever a regular meeting changes. We also put a 'last checked' date at the top, so a colleague knows how far to trust it. And we only add a new tracker when a need keeps coming up, not just in case.",
   "walk": [
    "First, each tracker gets a clear moment when it's updated.",
    "Next, each one shows the date it was last reviewed, and we check them monthly.",
    "Finally, we add new trackers only when a real need repeats."
   ],
   "ask": "Here's a test: Elias's London flight is delayed three hours. His travel tracker says aisle seat near the front, no connections, and rebook without being asked. What do you do before he even notices?",
   "scenario": "Your travel tracker says Elias prefers a certain hotel in London. After his last trip, he told you the hotel is under renovation and was noisy. It's now three weeks later and you're booking his next London trip. What should have happened after the last trip?"
  }
 },
 "1::Why One Client, All Ten Days": {
  "p1": {
   "why": "We use the same client for all ten days on purpose, because in a real job, what you learn keeps building.",
   "talk": "In most training, every exercise brings a brand-new person. Real life isn't like that. You work for the same executive for months, and everything you learn about him makes the next task easier. So what we learn about Elias today, his rules, his family, how he likes to communicate, will come back in the calendar work, the inbox work and the travel planning later on.",
   "walk": [
    "First, we treat every fact about Elias as something we'll need again.",
    "Next, when a later exercise leans on something from before, we try to remember it before looking it up. That recall is part of the training.",
    "Then, if something later seems to contradict what we know about him, we raise it with the trainer instead of quietly working around it.",
    "After that, we let the repetition help us, because seeing the same family and rules again and again is what makes them stick.",
    "Finally, by the last day, we should be able to describe his rules, family and communication style from memory."
   ],
   "ask": "What's one thing about Elias you're worried you'll forget by Day 5?",
   "scenario": "On Day 3, an exercise asks you to plan Elias's week. Without checking the dossier, list three standing rules from Day 1 that the plan must follow. Which one would be easiest to forget?"
  },
  "p2": {
   "why": "If something contradicts the dossier, flag it. Don't reinvent Elias.",
   "talk": "Think of an inconsistency as a small bug worth reporting. In a real job, catching that kind of mismatch is exactly what a sharp assistant does, like noticing that a booking contradicts a standing rule. That's also what makes this feel like a real job rather than a series of exercises: the same instructions, the same family and the same quirks, and you're expected to remember them.",
   "walk": [
    "First, we flag contradictions to the trainer rather than making up a new version of Elias.",
    "Finally, we treat these ten days like a real placement, where what we learned on day one still counts on day ten."
   ],
   "ask": "Let's write your answers on the board now, and we'll come back to this list on Day 5 to see what stuck.",
   "scenario": "On Day 3, a travel scenario says Elias prefers window seats. Your Day 1 dossier says aisle seats only. What do you do, and why does it matter to raise it?"
  }
 },
 "1::The ACT Email Framework": {
  "p1": {
   "why": "When an executive sends a messy request, a clear reply turns it into something both of you can act on.",
   "talk": "Elias thinks fast and talks in fragments. A 5:30 a.m. voice note might have three different tasks tangled together. If we just reply 'Got it!', we find out three days later that we misunderstood. ACT fixes that. Acknowledge what we heard in our own words. Clarify only what's genuinely missing. Then give a Timeline: what happens, by when, and who's doing it.",
   "walk": [
    "First, we acknowledge: we restate the request in our own words, so any misunderstanding shows up right away.",
    "Next, we clarify: we ask only what we can't work out ourselves, and we check the dossier before asking.",
    "Then, we give a timeline: what will happen, by when and who owns it.",
    "After that, we keep it short, with the answer first, the way a busy executive reads.",
    "Finally, we send it quickly, right after the request arrives, not as a summary hours later."
   ],
   "ask": "Why isn't 'Got it, thanks!' a real acknowledgement?",
   "scenario": "Elias sends a text: 'Need the Harlow numbers and move Thursday.' There are two Thursday meetings, and 'the Harlow numbers' could mean the settlement figures or the billing summary. Write your ACT reply: acknowledge, clarify and give a timeline."
  },
  "p2": {
   "why": "A timeline with no owner or date is where requests quietly die.",
   "talk": "Let's look at each step more closely. Acknowledging means showing we understood, not just that we received it. Clarifying means not asking things we could have found ourselves; asking something that's already in the dossier tells him we didn't do our homework. And the timeline is what actually closes the loop. Most dropped requests had a vague 'I'll look into it' instead of a name and a date.",
   "walk": [
    "First, acknowledge by restating the actual request.",
    "Next, clarify only what's missing, after checking the dossier.",
    "Finally, close with what happens, when, and who owns it."
   ],
   "ask": "Let's draft one. Elias's voice note says: 'Move the Meridian call, get me something on the Singapore thing, and find out why the retainer invoice hasn't gone out.' What's your ACT reply?",
   "scenario": "A colleague's reply to Elias's request reads: 'Got it, will look into it!' Two days later nothing has happened and Elias is annoyed. Rewrite the reply using ACT, so the owner and deadline are clear."
  }
 },
 "1::BLUF: Bottom Line Up Front": {
  "p1": {
   "why": "If Elias reads only your first line, he should already know what you need and by when.",
   "talk": "BLUF stands for Bottom Line Up Front. We put the point, whether that's the decision, the answer or the action, in the very first sentence. Everything after it is extra detail he can stop reading at any time. It feels backwards at first, because most of us were taught to explain first and ask at the end. But busy people often only read the first line.",
   "walk": [
    "First, before we write, we finish this sentence: 'The one thing Elias needs to know or decide is...'. That becomes our first line.",
    "Next, we label the ask, with something like 'Decision needed', 'FYI, no action', or 'Approval by 3 p.m.'.",
    "Then, we add only the details he needs to act: dates, amounts, names and options, in a few short lines.",
    "After that, we move the background below a clear break or into an attachment.",
    "Finally, we finish with the exact next step and deadline, then reread just the first line the way he would."
   ],
   "ask": "When you write an update, do you usually lead with the decision, or with the background?",
   "scenario": "You need Elias to approve an $8,000 expert fee by noon, because the expert won't hold the date otherwise. You also want to tell him the expert came highly recommended and why. Write the first line and the three lines after it."
  },
  "p2": {
   "why": "BLUF isn't rude. It's respecting the reader's time.",
   "talk": "Picture Elias between meetings, reading on his phone, seeing only the preview. If our question is buried in the third paragraph, as far as he's concerned, it doesn't exist. That doesn't mean dropping the courtesy. A friendly one-line greeting is fine; three paragraphs of warm-up is not. The most common slip is telling the story in the order it happened, instead of the order he needs it.",
   "walk": [
    "First, remember he's often reading only the preview line.",
    "Next, keep the courtesy short: one line, not a paragraph.",
    "Finally, write in the order the reader needs, not the order things happened."
   ],
   "ask": "Here's a rambling update: three paragraphs about a courier delay before the question 'Should we refile tomorrow?' You've got sixty seconds. Rewrite just the first sentence.",
   "scenario": "An update to Elias begins: 'Hi Elias, hope your trip was good! So yesterday I spoke to the courier, then the clerk…' The question he needs to answer is in the fourth paragraph. Rewrite just the first line."
  }
 },
 "1::BLUF in Practice: Emails, Updates & Voice Notes": {
  "p1": {
   "why": "Bottom line first works everywhere: emails, chat messages, status updates, voice notes and phone calls.",
   "talk": "It isn't just an email trick. On a call, it sounds like 'Quick one: I need a yes or no on the retainer.' In a chat message, it's the first line. In a subject line, it's a label and the topic. A good rule of thumb: on a phone screen, the first eighty characters should tell the whole story.",
   "walk": [
    "First, the subject or first line carries the bottom line, with a label like Decision, FYI, Action Taken or At Risk.",
    "Next, we add one line on why it matters today, usually the deadline or the consequence.",
    "Then, we give only the details needed to act, in short points.",
    "After that, we close with the next step and who owns it, and we attach the background instead of pasting it in.",
    "Finally, we check the preview: would the first line alone make sense on a phone?"
   ],
   "ask": "What's a subject line you've seen recently that told you absolutely nothing?",
   "scenario": "Elias sends a voice note asking whether the Meridian brief was filed. It was, at 3:40 p.m., and the confirmation is in your inbox. Reply by voice note in one sentence, bottom line first."
  },
  "p2": {
   "why": "Lead with where things stand, not with the story of how they got there.",
   "talk": "Compare two subject lines: 'Following up' versus 'Decision by 3 p.m.: expert retainer, 6,200 dollars.' Only one of them gets answered. Status updates work the same way. 'On track: filed today, confirmation attached.' Or 'At risk: courier delayed, new arrival 4 p.m., backup ready.' This also fits with ACT: when we acknowledge a request, the restated ask goes first.",
   "walk": [
    "First, subject lines carry the bottom line too.",
    "Next, status updates start with the status: on track, or at risk.",
    "Finally, BLUF and ACT work together, with the restated request right at the top."
   ],
   "ask": "Pair up. Take a real message you sent recently and rewrite its subject and first line with the bottom line first. Then compare before and after out loud.",
   "scenario": "It's 2 p.m., and a filing due at 5 p.m. is at risk because the courier is delayed; your backup is e-filing. Write the subject line and first line of the status update to Elias."
  }
 }
});
