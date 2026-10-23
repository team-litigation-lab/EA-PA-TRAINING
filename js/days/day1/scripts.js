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
   "icebreaker": "Game: 'Who's reading?' I'll read one line. You shout 'Attorney!', 'Client!' or 'Court!' for who it was written for. 'Filed. Confirmation attached. Nothing needed from you.' 'We've asked for a little more time so we can prepare your case properly.' 'We respectfully request confirmation of receipt.' Loudest correct answer wins.",
   "teaser": "All three lines said exactly the same thing. One of them, sent to the wrong reader, would cause real trouble. Keep guessing which one while we go.",
   "why": "In legal work, a message that can be read two ways is a risk, not just a style problem.",
   "talk": "Think about who reads what we write: a busy attorney, a nervous client, a court clerk. Each needs something different from us. The attorney wants the facts fast. The client wants to understand and feel reassured. The court wants it formal and by the book. If our wording is vague, any one of them can take it the wrong way, and in law that can cost money or a deadline.",
   "walk": [
    "First, before you write a word, decide who's reading it.",
    "Next, write it so there's only one way to understand it, and cut any phrase that could be taken two ways.",
    "Then, set the tone for that reader: short and technical for the attorney, plain and calm for the client, formal for the court.",
    "After that, remember that confidentiality covers conversations too, even a casual chat in the hallway.",
    "Finally, when you have to say 'not now', use tried-and-tested phrases, so you sound professional instead of flustered."
   ],
   "jargon": [
    {
     "term": "Court clerk",
     "hint": "the court official who handles filings and schedules"
    },
    {
     "term": "Hearing",
     "hint": "a scheduled session in front of a judge"
    },
    {
     "term": "Confidentiality",
     "hint": "the duty to keep client matters private"
    }
   ],
   "story": "A common first-week story: an assistant told a client by email that a hearing had been 'pushed back a bit.' The client read that as weeks and booked a holiday. It had moved two days. He nearly missed it, and the attorney spent an afternoon on damage control. Writing 'moved from Tuesday 10 a.m. to Thursday 10 a.m.' would have left only one way to read it.",
   "ask": "[Name], who do you find hardest to write for: the attorney, the client or the court? Why? [Name], is yours the same, or different?"
  },
  "p2": {
   "why": "The facts stay the same for every audience. What changes is how we say them.",
   "talk": "Imagine the same update going to three people: a motion was filed asking the court for more time. To the attorney, that's one line: filed, confirmation attached, nothing needed from you. To the client, it's reassurance: we've asked for more time so we can prepare your case properly. To the court clerk, it's a formal request to confirm receipt. None of those versions is more honest than the others; each one simply suits who's reading it.",
   "walk": [
    "First, shape every update for its reader.",
    "Next, keep matters private in how you talk about them, not just in the documents you send.",
    "Then, when you have to hold someone off as an EA, a line like 'His schedule is fully committed; I'll follow up on your request' keeps it professional.",
    "Finally, a PA's version is warmer: 'He's not available right now. Can I pass on a message, or find a better time?'"
   ],
   "contrast": {
    "lazy": "One email, copied to everyone: 'FYI, the motion for extension went in, let me know if questions.' The client panics at 'motion', the clerk gets no clear request.",
    "excellent": "Three versions of the same fact. Elias gets 'Filed, confirmation attached, nothing needed from you.' The client gets 'We've asked for more time so we can prepare properly.' The clerk gets a formal request to confirm receipt."
   },
   "outcome": "A vague line to a client becomes a panicked phone call; a vague line to a court can become a missed date or a rejected filing. And a careless word in the lift about a confidential settlement can breach its terms. Clear, reader-shaped messages protect deadlines, the client's trust and the deal itself.",
   "ask": "[Name], read me the attorney version of 'the motion was filed', in the right tone. [Name], now give me the client version of the same fact.",
   "mystery": "The case of the lift conversation. In the lift, a colleague from another team asks, 'Did the Meridian thing settle? I heard it was big money.' The settlement is confidential. In pairs, you have two minutes: find the two traps in that question, and bring back the exact sentence you'd say that doesn't sound rude and doesn't confirm anything."
  }
 },
 "1::Gatekeeping Is Not 'No'": {
  "p1": {
   "icebreaker": "Game: 'Door open or door slammed?' Thumbs up if the line keeps the door open, thumbs down if it slams it. 'He's busy.' 'He's in a deposition until 4; I can book you 15 minutes at 4:30.' 'You should have called earlier.' 'Can I take the details so he has them the moment he's out?' Fast thumbs, please.",
   "teaser": "Two of those lines said no. Only one of them made an enemy. There's a rule hiding in the difference, and it's the whole topic.",
   "why": "Good gatekeeping never slams the door. It says 'not right now, but here's what we can do.'",
   "talk": "When someone wants the boss's time and can't have it, how we say no decides whether they walk away respected or resentful. A flat no makes people go around you. A calm, confident 'not now, here's a better option' keeps the relationship and still protects the executive's time. And remember, when you speak for him, you carry his authority, so there's no need to sound apologetic.",
   "walk": [
    "First, start from 'not now' or 'here's another way', never a flat no with no explanation.",
    "Next, keep your voice calm and sure of itself, because you're speaking with the executive's authority.",
    "Then, never make the person feel wrong for asking or tell them they should have planned better. That wins you nothing.",
    "After that, always hand them something real: a specific time, a named colleague or a clear timeline.",
    "Finally, if they push back, listen, explain the real constraint honestly and appeal to what you both want, instead of repeating the same no louder."
   ],
   "jargon": [
    {
     "term": "Gatekeeping",
     "hint": "deciding who gets the executive's time and attention"
    },
    {
     "term": "Deposition",
     "hint": "sworn questioning of a witness outside court, recorded for the case"
    }
   ],
   "story": "This happens in real offices: an assistant told a long-standing client 'He's not available' three days in a row, with nothing else. On day four the client called the managing partner instead and complained that the firm was ignoring him. The matter was fine; the relationship took months to repair. A specific slot and a promise to call back on day one would have kept it with Elias.",
   "ask": "[Name], what's the difference between a gatekeeper people respect and one people try to get around? [Name], which one have you met more often?"
  },
  "p2": {
   "why": "People remember how you made them feel when the answer was 'not now.'",
   "talk": "Two rules carry most of the weight. Never make the caller feel foolish for asking, and never leave them without a next step. Behind those rules sits a small toolkit for persuading without pulling rank. You listen properly first. You explain the situation in a way that makes sense to them. You point to a goal you both share, and you ask what they think instead of telling them what to do.",
   "walk": [
    "First, filter who gets through, while keeping your tone steady and confident.",
    "Next, never blame the person for their timing, and always leave them with a real next step.",
    "Finally, when you need to persuade, listen, frame the situation, appeal to shared goals and ask for their view."
   ],
   "contrast": {
    "lazy": "'Sorry, he's in a deposition, you'll have to call back.' The caller hangs up angrier than before and with nothing to hold on to.",
    "excellent": "'I can hear this matters. He's in a deposition until 4. I'll put a note in front of him at the break, and I've held 4:15 for a call. What's the best number?' Calm, specific, and the caller leaves with a time."
   },
   "outcome": "An upset client who feels shut out goes around you, to a partner, or to another firm. A frustrated colleague stops sharing what Elias needs to know. Keeping the relationship while protecting his time keeps clients loyal and information flowing, and both matter when a case gets hard.",
   "ask": "[Name], I'm a pushy caller who wants Elias right now. Cave in for me. [Name], now hold the line politely. Room, what made the difference?",
   "mystery": "The case of the third request. A junior partner has asked for time with Elias three times this week and is getting frustrated. Elias has said he can't meet until next week. In pairs, three minutes: find the clue in why the partner keeps asking, and bring back your exact reply, including the real next step you'll offer."
  }
 },
 "1::The Filtering Matrix": {
  "p1": {
   "icebreaker": "Game: 'Show me the number.' Four questions, four fingers: one for money, two for legal risk, three for 'only the boss can decide', four for relationship. I'll read a request; hold up the finger that fires first. 'Court notice moving a hearing.' 'Invoice due Friday.' 'Partner wants Elias's view on a new hire.' 'Old client's assistant wants coffee.'",
   "teaser": "One of those requests looked like the smallest on the list, yet it might deserve to go near the top. By the end you'll be able to say exactly why.",
   "why": "Not every request deserves the same speed, and four quick questions tell us which ones do.",
   "talk": "When requests pile up, it's tempting to answer them in the order they arrived. That's how the important one gets buried under five easy ones. Instead, we run each request through four questions. Does it affect money? Does it carry legal risk? Does it need the executive himself? Is there a relationship on the line? Those answers tell us whether to act now, hand it off, park it or offer an alternative.",
   "walk": [
    "First, ask all four questions in order: money, legal risk, the executive's authority and the relationship.",
    "Next, if any single answer is high, it's urgent. One serious reason is enough.",
    "Then, if everything scores low, decide whether to hand it to someone else, schedule it for later or offer another option.",
    "After that, jot down how you sorted it, especially anything you parked, so your thinking can be checked later.",
    "Finally, come back to parked items exactly when you said you would, because a forgotten item is as bad as a mishandled one."
   ],
   "jargon": [
    {
     "term": "Filtering matrix",
     "hint": "the four questions we run every request through"
    },
    {
     "term": "Liability",
     "hint": "legal responsibility for harm or loss"
    },
    {
     "term": "Park",
     "hint": "deliberately schedule an item for later, with a date"
    }
   ],
   "story": "A real pattern from the field: an assistant cleared her inbox top to bottom every morning, oldest first. A court notice moving a hearing forward sat under a stack of meeting requests until the afternoon. The attorney found out with one day to prepare instead of five. Asking 'is there legal risk?' on each item would have put that notice first in thirty seconds.",
   "ask": "[Name], quick check: if a request scores high on just one of the four questions, what should happen to it? [Name], can you give me an example of that?"
  },
  "p2": {
   "why": "One high-stakes answer is enough to make something urgent.",
   "talk": "Let's make those four questions practical. For money, ask whether we gain or lose something if it waits a day. For legal risk, ask whether there's a deadline, privileged information or liability involved; either of those usually means now. For authority, ask whether only the attorney can decide or sign; if not, maybe you or someone else can handle it. And the relationship question catches what the others miss: a small request from a long-time client can still deserve to go first.",
   "walk": [
    "First, money or legal risk on their own usually means you act now.",
    "Next, if the attorney doesn't personally need to decide, look at handing it off or handling it yourself within your limits.",
    "Finally, remember that sometimes who is asking matters more than what they're asking for."
   ],
   "contrast": {
    "lazy": "Works the inbox in arrival order and sends Elias everything with 'FYI' so he can decide.",
    "excellent": "Runs each item through money, legal risk, authority and relationship, sends Elias only what needs him, with a note: 'Court moved the hearing to Monday, needs you today. Invoice handled. Coffee parked till Thursday.'"
   },
   "outcome": "The item that waited is often the one with the deadline. A buried court notice means less preparation time, a buried signature means a lost deal, and a neglected long-time client means a relationship that cools. Sorting by stakes keeps the case and the client on track.",
   "ask": "[Name], four requests land at once: a loyal client with a small billing question, a vendor wanting a signature today, opposing counsel proposing a deposition date and a colleague inviting Elias to speak at a lunch. Sort them for me. [Name], would you change the order?",
   "mystery": "The case of the birthday card. A small request comes in from Elias's oldest client: 'Can he sign a birthday card for our CEO today?' It scores low on money, legal risk and authority. In teams of three, two minutes: find the clue that lifts it up the list, and bring back where it goes in today's order and the one line you'd say to Elias about it."
  }
 },
 "1::Scripts That Redirect Without Alienating": {
  "p1": {
   "icebreaker": "Game: 'Pick a corner.' Left side of the room means defer, right side means re-route, stay in the middle for 'plainly honest, no room.' I'll read a request, you lean or point to your side. 'Software vendor wants a demo with Elias.' 'Paralegal has a billing question.' 'Client wants a meeting this week, calendar is full.' Go.",
   "teaser": "Most of you got the vendor right. But one of these has a trap: the redirect looks finished and isn't. We'll find it.",
   "why": "Having a few ready-made ways to redirect people means we never have to improvise a clumsy no.",
   "talk": "There are really three situations. Sometimes the request is fine, just badly timed, so we defer it. Sometimes it belongs to someone else, so we re-route it. And sometimes the honest answer is that there's simply no room, so we say that plainly and offer something else. We call that last one Drastic Contrast. Picking the right one is half the work.",
   "walk": [
    "First, choose the script: defer if the timing's wrong, re-route if it's someone else's job, or be plainly honest if there's truly no room.",
    "Next, when you defer, acknowledge the request properly and give a real timeline, not a vague 'soon'.",
    "Then, when you re-route, name the right person and make sure the handoff actually happens.",
    "After that, when you're being plainly honest, tell the truth about the constraint and immediately offer a specific alternative.",
    "Finally, whichever you use, try to get a small yes first, like confirming what they need. It makes the redirect go down easier."
   ],
   "jargon": [
    {
     "term": "Defer",
     "hint": "push it to a later, specific time"
    },
    {
     "term": "Re-route",
     "hint": "pass it to the person whose job it really is"
    },
    {
     "term": "Drastic Contrast",
     "hint": "our name for the honest 'there's no room, here's an alternative' script"
    },
    {
     "term": "Paralegal",
     "hint": "trained legal support staff who work on cases under an attorney"
    }
   ],
   "story": "This happens in real offices: an assistant told a client, 'That's a billing question, finance will help you,' and forwarded the email. Finance thought it was an FYI and filed it. Ten days later the client wrote to the attorney directly, irritated, and the attorney had to apologise for his own team. A two-line handoff with a name and a 'can you confirm you've got this?' would have closed the loop.",
   "ask": "[Name], when would you re-route a request instead of simply deferring it? [Name], give me one example from Elias's week."
  },
  "p2": {
   "why": "A redirect isn't finished until the request actually lands somewhere.",
   "talk": "Pointing someone to another team and walking away isn't re-routing; it's abandonment. We stay responsible until we know it's been picked up. And when we're blunt about a real constraint, we're honest, never misleading, and we follow straight away with a specific slot. There's some good psychology behind this too. People are more open once they've already said a small yes, and they accept a process more easily than a personal preference.",
   "walk": [
    "First, when you re-route, stay accountable for the outcome.",
    "Next, when you give a hard answer, it comes with a real alternative time.",
    "Finally, lean on a small early agreement and on the firm's process, never 'because I said so.'"
   ],
   "contrast": {
    "lazy": "'That's not me, try finance.' Email forwarded, job considered done, nobody checks.",
    "excellent": "'You need the invoice corrected, is that right? Priya in finance owns this. I've sent her the details and she'll reply by Thursday. I'll check in Wednesday to make sure it's moving.'"
   },
   "outcome": "A dropped handoff doesn't stay small. The client escalates to the attorney, the attorney looks like he doesn't run his own team, and the client starts to wonder what else is being dropped. Redirects that actually land protect the firm's reputation and the client's confidence through a long matter.",
   "ask": "[Name], a senior partner wants 30 minutes with Elias this afternoon and his calendar is full. Give me the defer script. [Name], now give me Drastic Contrast for the same request.",
   "mystery": "The case of the unanswered billing question. You re-routed a client's billing question to the finance team a week ago. Today the client emails Elias directly, annoyed that nobody replied. In pairs, three minutes: find the exact moment your redirect broke, and bring back two things: your reply to the client today and the one habit that stops it happening again."
  }
 },
 "1::Phone & Voicemail Etiquette": {
  "p1": {
   "icebreaker": "Game: 'Usable or useless?' I'll read a phone message. Stand up if Elias could act on it without calling you back. Stay seated if not. 'John called.' 'Call the court.' 'Maria Lopez, Harlow Industries, 555-0142, Harlow contract, needs signature by Friday, best before 3.' 'Someone about the case, said it's urgent.'",
   "teaser": "Only one of those was usable. But here's the twist: there's one thing you could say while taking that perfect message that would be a bigger problem than any useless note.",
   "why": "For a lot of clients, your voice on the phone is their first impression of the whole firm.",
   "talk": "Answering the phone well is a real skill. We answer with the firm's name and our own. A good message has everything the attorney needs to act without calling us back: who called, from where, their number, which matter, what they need, how urgent it is and when to reach them. And confidentiality applies on the phone too. We don't confirm that someone is a client until we know who we're talking to.",
   "walk": [
    "First, answer with the firm's name and your name.",
    "Next, take the full message and read the number back, and ask which matter and whether there's a deadline.",
    "Then, transfer warmly: tell the attorney who it is and why before connecting.",
    "After that, when you leave a voicemail, say your number slowly at the start and the end, keep it short and leave out anything confidential.",
    "Finally, log important calls and return them within one business day."
   ],
   "jargon": [
    {
     "term": "Warm transfer",
     "hint": "telling the person who's calling and why before you connect them"
    },
    {
     "term": "Matter",
     "hint": "a case or piece of legal work for a client"
    },
    {
     "term": "Business day",
     "hint": "a working day, not counting weekends or holidays"
    }
   ],
   "story": "A common first-week story: a new assistant left a message on a client's home voicemail mentioning 'your divorce consultation on Thursday.' The client's spouse heard it first. The firm wasn't sued, but the client left, and the partner had a very uncomfortable call. 'This is Thorne & Partners, please call me back on this number' would have said enough.",
   "ask": "[Name], what's the most useless phone message you've ever been handed? [Name], what one detail would have fixed it?"
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
   "contrast": {
    "lazy": "'Yeah, Harlow's one of ours, but he's out. I'll tell him someone called.'",
    "excellent": "'I'm not able to confirm who we work with. If you leave your name, outlet and number, I'll pass it to the right person.' Then the call is logged and Elias is told who, when and what was asked."
   },
   "outcome": "Confirming a client to the wrong caller can be a confidentiality breach on its own, and to a reporter it can become a headline before the client has decided what to say. A useless message means a missed call back and a missed deadline. Phone habits decide whether the firm controls the story or reads about it.",
   "ask": "[Name], how would you politely decline to confirm whether someone is a client? Say it out loud. [Name], how would you make it sound warmer without giving anything away?",
   "mystery": "The case of the yes-or-no reporter. A caller says, 'I'm a reporter. Is Harlow Industries one of your clients? I just need a yes or no.' In pairs, two minutes: spot the pressure tactic in that question, and bring back the exact words you say on the call plus the three things you do after you hang up."
  }
 },
 "1::Executive Presence in Action": {
  "p1": {
   "icebreaker": "Game: 'Spot the leak.' I'll read three replies to a nosy caller. Clap once the moment you hear something that gives information away. 'I can't comment on that.' 'Oh, he's been so busy with that case, I really can't say.' 'That's private, but I'm happy to help with anything practical.' Who clapped on the second one, and where exactly?",
   "teaser": "Two of those were safe, and they sounded nothing alike. Today you'll find out why both are right, and when using the wrong one is its own kind of leak.",
   "why": "Whether you're speaking as an EA or a PA, the instinct underneath is the same: protect first, sort it out second.",
   "talk": "Imagine someone calls asking for confidential information. As an EA, we're firm, brief and procedural: we can't release that, and we'll escalate it internally. As a PA, we're warm but just as protective: that's private, but we're happy to help with logistics. Both answers keep the door closed on what matters. They sound different because they're protecting different things, the business in one case and the person in the other.",
   "walk": [
    "First, when something sensitive comes in, decide in that moment whether you're answering as an EA or a PA.",
    "Next, as an EA, protect the business: short, firm, by the book.",
    "Then, as a PA, protect the person: kind and accommodating, but still closed on anything private.",
    "After that, when someone keeps pushing, hold the same line. The EA asks for it in writing; the PA takes a message and promises a follow-up.",
    "Finally, in both roles, protect before you try to resolve anything."
   ],
   "jargon": [
    {
     "term": "Executive presence",
     "hint": "calm, confident behaviour that makes people trust you speak for the boss"
    },
    {
     "term": "Escalate internally",
     "hint": "pass it to the right person inside the firm"
    },
    {
     "term": "Procedural",
     "hint": "following the firm's set process, not personal judgment"
    }
   ],
   "story": "A real pattern from the field: a friendly assistant took a call from someone who said she was 'a friend of the family' asking how the boss was 'holding up with everything.' Trying to be kind, the assistant said he was 'coping, it's been a hard few months.' The caller was a journalist. The quote appeared in a piece about the case. A warm 'That's private, but I'll pass on that you called' would have been kind and closed.",
   "contrast": {
    "lazy": "'Um, I don't think I'm supposed to say, but yes, he's working on something like that.' Flustered, half-confirming, and no record of the call.",
    "excellent": "EA: 'We don't comment on client matters. Please send your request in writing and I'll pass it on.' PA: 'That's private, I'm afraid, but I'll let Sarah know you called.' Both calm, both closed, both logged."
   },
   "outcome": "A half-confirmation to a journalist can put a client's case in the news and hand the other side information for free. A careless word about the Thornes' private life damages the trust that the whole PA role rests on. Protecting first keeps the firm in control of what is said, and when.",
   "ask": "[Name], a journalist calls asking whether Elias is handling a well-known client's divorce. Answer as an EA. [Name], same question, now answer as a PA.",
   "mystery": "The case of the two calls. A caller says she's from a national newspaper and asks whether Thorne & Partners is representing a well-known CEO in a fraud case. Two minutes later, Sarah Thorne's friend calls asking whether Elias and Sarah are 'going through a rough patch.' In pairs, three minutes: decide which hat each call needs, find the hook in each question, and bring back your two exact answers plus what you write in the log."
  }
 },
 "1::Virtual Meetings & Transcription Accuracy": {
  "p1": {
   "icebreaker": "Game: 'What did they really say?' Here are three lines from an AI transcript. Shout what the speaker actually said. 'Let's settle with Harlot Industries.' 'The deposition is moved to the fifth teen.' 'Meridian's council will call back.' Fastest correct shout gets the point.",
   "teaser": "Those were the easy errors. There's a worse kind a transcript makes that no spell-check will ever catch, and we'll get to it on the next slide.",
   "why": "The record of a meeting can't depend on technology alone.",
   "talk": "We've all been in a meeting where the recording failed, or everyone walked out remembering a different decision. Afterwards, the assistant is the one people ask what was actually agreed. So we treat the meeting record as our job, not the software's. We check the tools beforehand, keep a person taking notes just in case, and turn whatever we capture into something short and useful.",
   "walk": [
    "First, test the recording before the meeting starts. Finding out it's broken halfway through is too late.",
    "Next, always have a person taking notes as a backup, whatever tool is running.",
    "Then, during the meeting, capture what was decided and who's doing what, and leave out the side chatter and off-the-record comments.",
    "After that, if an AI tool made a transcript, read it and clean it up before anyone else sees it.",
    "Finally, give the executive what he actually needs: a short briefing memo, not forty pages of transcript."
   ],
   "jargon": [
    {
     "term": "Transcript",
     "hint": "a word-for-word written version of what was said"
    },
    {
     "term": "Action item",
     "hint": "a task someone agreed to do, with an owner"
    },
    {
     "term": "Off the record",
     "hint": "said on the understanding it won't be written down"
    }
   ],
   "story": "This happens in real offices: a team relied on the meeting software to record a client call. The recording silently failed. Two days later, the attorney and the client remembered the agreed fee arrangement differently, and there was nothing to check. The firm honoured the client's version to keep the peace. A five-minute pre-call test and one person typing notes would have settled it.",
   "ask": "[Name], has a meeting ever ended with nobody agreeing on what was decided? [Name], what would have saved it?"
  },
  "p2": {
   "why": "A raw transcript isn't a record. Our job is to turn it into one.",
   "talk": "It's worth knowing the difference between informal notes, which stay inside the team, and formal minutes, which are a structured record that gets sent around. AI tools like Zoom, Teams and Otter save a lot of typing, but they mishear names, miss context and happily record things that should never be written down. And if our minutes ever come back confusing, we don't quietly stop sending them. We apologise, fix them and tighten up the template.",
   "walk": [
    "First, have a human backup note-taker, every time.",
    "Next, put only decisions and action items in the record, never side conversations.",
    "Then, review and clean every AI transcript before it's shared.",
    "Finally, after big meetings, send a short executive brief headed with the meeting topic, instead of the whole transcript."
   ],
   "contrast": {
    "lazy": "Forwards the raw 40-page AI transcript to everyone with 'Notes attached,' typos, side comments and all.",
    "excellent": "Sends Elias a half-page brief headed 'Partners' call, 14 May: decisions and actions,' with names spelled right, owners and dates on each action, and the side chatter gone."
   },
   "outcome": "Meeting records get forwarded, and in a dispute they can be asked for. A transcript with a rude side comment about opposing counsel, or an action nobody agreed to, can embarrass the firm or be used against it. A clean, accurate record protects what was really decided when it counts.",
   "ask": "[Name], the partners' meeting ran long, the transcript is 40 pages, and two people remember the key decision differently. What do you send, and to whom? [Name], how do you settle what was actually decided?",
   "mystery": "The case of the misheard client. The AI transcript of a client call spells the client's company wrong, records a side comment about opposing counsel and lists an action item nobody agreed to. In teams of three, three minutes: find all three problems, decide what you fix before anything is shared, and bring back the first three lines of the brief that goes to Elias."
  }
 },
 "1::Professional Standards & Confidentiality": {
  "p1": {
   "icebreaker": "Game: 'Business or private?' Right hand up for business-confidential, left hand up for personally private. 'The Meridian settlement figure.' 'Elias's mother's medical appointment.' 'The firm's billing rates.' 'The Thornes' holiday address.' 'A partner's HR review.' Watch your neighbour's hands.",
   "teaser": "Every one of those was protected. But there's one place where all of them leak just as easily, and it isn't your inbox. Keep your eyes open for it.",
   "why": "Everything we see is protected, but business secrets and personal privacy are protected in slightly different ways.",
   "talk": "On the business side, we're guarding things like contracts, financial numbers and ideas the firm owns, and there are real laws and HR rules behind that. On the personal side, we're guarding a family's privacy, and what holds that together is trust more than rules. Either way, the working assumption is simple: if you're not sure whether something is confidential, it is.",
   "walk": [
    "First, before you talk about any matter, work out whether it's business-confidential or personally private.",
    "Next, on the business side, know the legal, HR and privacy rules ahead of time instead of waiting to be told something is sensitive.",
    "Then, on the personal side, make discretion the default, because the family is trusting you, not just a policy.",
    "After that, treat every channel as risky. A chat in the lift can do as much damage as a misdirected email.",
    "Finally, when in doubt, protect it. Over-protecting costs almost nothing; a leak can cost everything."
   ],
   "jargon": [
    {
     "term": "Business-confidential",
     "hint": "the firm's and clients' protected information: contracts, numbers, strategy"
    },
    {
     "term": "Personally private",
     "hint": "the family's own life: health, home, relationships"
    },
    {
     "term": "Breach",
     "hint": "when protected information reaches someone it shouldn't"
    }
   ],
   "story": "A real pattern from the field: an assistant had a client's settlement letter open on her screen when a visiting contractor came to her desk for a signature. A week later, the figure was being repeated around the building where the contractor also worked. Nobody could prove the source, but the client heard about it and asked some hard questions. Locking the screen before anyone reaches your desk costs one keystroke.",
   "ask": "[Name], without naming anyone, has a small slip ever turned into something bigger than you expected? Just a nod is fine. [Name], what would have stopped it?"
  },
  "p2": {
   "why": "There's no such thing as a small leak.",
   "talk": "People tend to think a real breach is a stolen file or a wrong attachment. But a throwaway comment to a friendly face in the lobby can do just as much harm, because once it's out, we can't pull it back. And on the personal side, the family is trusting us personally with things they'd never put in a contract. Protecting that trust is the job.",
   "walk": [
    "First, remember personal privacy rests on trust, and you earn it by being discreet every single time.",
    "Next, treat a casual comment as carrying the same risk as a misdirected email.",
    "Finally, make it a habit never to discuss a matter anywhere it doesn't belong."
   ],
   "contrast": {
    "lazy": "'I can't really say, but let's just say it's been a long few weeks on Meridian.' Friendly, and it's already said too much.",
    "excellent": "'I don't talk about our matters, but how's your week been?' Same smile, nothing confirmed, conversation moved on."
   },
   "outcome": "A hint in the lobby can tell the other side a case is under strain, which weakens our position when terms are being negotiated. A leak about the family can end the trust the PA role depends on. Discretion everywhere keeps both the case strategy and the relationship intact.",
   "ask": "[Name], a friendly paralegal from another firm says in the lobby, 'Is Elias on the Meridian matter? I heard it's getting messy.' What do you say? [Name], what's the one thing you'd avoid saying?",
   "mystery": "The case of the open screens. You're booking a medical appointment for Elias's mother and a board meeting for the firm on the same afternoon. Both calendars are open on your screen when a visitor sits down at your desk. In pairs, two minutes: find every piece of protected information in view, sort it into business or private, and bring back what you do in the next ten seconds. Bonus: what's safe to tell your cousin at a barbecue about 'that famous lawyer'?"
  }
 },
 "1::Boundaries & Authorization Protocols": {
  "p1": {
   "icebreaker": "Game: 'Go or stop?' Your limit is 500 dollars. Stand for 'go, I can approve it,' sit for 'stop, escalate first.' A 120-dollar courier bill. A 499-dollar catering invoice. A 650-dollar software renewal. Two invoices of 300 each from the same vendor for the same event. Who stayed standing on that last one?",
   "teaser": "That last one is a classic trap, and by the end of the slide you'll know why it's worth more than one quick look.",
   "why": "Knowing exactly how far your authority goes is what lets you act quickly without getting into trouble.",
   "talk": "Every assistant has limits on money, access and commitments. Some are written down; many are just assumed. The assumed ones cause problems. When our limits are written down, we can act confidently inside them and we know exactly when to stop and ask. For example: an invoice under 500 dollars, you can approve; over that, you escalate first, every time.",
   "walk": [
    "First, before you act on anything involving money, access or a commitment, check it against your written limits, not your memory.",
    "Next, if it's within your limit, handle it and make a note that you did.",
    "Then, if it's over your limit, escalate before you act. 'It'll probably be approved' isn't approval.",
    "After that, keep business and personal systems completely separate: different calendars, storage and devices. That separation is what stops the lines from blurring.",
    "Finally, when something's unclear, ask yourself three things: is it within policy, is it legal, and would the executive trust me doing it? If any answer is no or unsure, escalate."
   ],
   "jargon": [
    {
     "term": "Approval limit",
     "hint": "the most you're allowed to sign off on alone"
    },
    {
     "term": "Invoice splitting",
     "hint": "breaking one bill into smaller ones to slip under a limit"
    },
    {
     "term": "Sign-off",
     "hint": "formal approval from the person with authority"
    }
   ],
   "story": "This happens in real offices: an assistant approved a 'probably fine' 800-dollar catering upgrade because the event was that evening and the partner was unreachable. The partner had already agreed a fixed price with the client. The firm absorbed the cost, and the assistant's approval rights were reduced for six months. One text, 'Over my limit, OK to approve?', would have settled it in a minute.",
   "ask": "[Name], what's the real risk in going ahead with something because it will 'probably be approved anyway'? [Name], who carries that risk if it goes wrong?"
  },
  "p2": {
   "why": "Clear limits make us faster, not slower.",
   "talk": "Let's make it concrete. An EA might be allowed to approve vendor bills under 500 dollars and send anything bigger up the line. A PA might book personal travel within a set budget and tell the executive if it goes over. Both of them also know where to stop completely: an EA doesn't sign a contract that needs the boss's approval, and a PA never gives a vendor access to the family's bank accounts without checking first.",
   "walk": [
    "First, know your limits as specific numbers and actions, not a general feeling.",
    "Next, keep business and personal systems physically apart.",
    "Then, stop and escalate before anything that needs the executive's own sign-off.",
    "Finally, for grey areas, run the quick check: policy, law and trust. If any of them is shaky, escalate."
   ],
   "contrast": {
    "lazy": "'She said he won't mind, so I booked it.' Over budget, no record, and Elias finds out from the credit card statement.",
    "excellent": "'Happy to sort the upgrade. It's 300 over the budget Elias set, so I'll just confirm with him first. I'll have an answer for you by 3.' Then a one-line note to Elias with the cost and the choice."
   },
   "outcome": "An approval outside your limit can bind the firm to costs a client won't pay, or hide a vendor billing problem that grows. In a dispute, unclear authority can be argued about by the other side. Clear limits, followed every time, keep the money clean and the executive's trust in you high.",
   "ask": "[Name], you just approved a 600-dollar invoice by mistake, and your limit is 500. What do you do in the next ten minutes? [Name], what do you say to Elias?",
   "mystery": "The case of the twin invoices. A vendor sends a 480-dollar invoice and a 520-dollar invoice for the same event on the same day. Your approval limit is 500 dollars per invoice. In pairs, two minutes: decide what you approve and what you escalate, find the clue that something may be off, and bring back the exact note you'd send to Elias."
  }
 },
 "1::What an Assistant Can and Can't Do (Unauthorized Practice of Law)": {
  "p1": {
   "icebreaker": "Game: 'Fact or advice?' I'll read something an assistant might say. Shout 'Fact!' if it's safe, 'Advice!' if it crosses the line. 'The court closes at 4:30.' 'I'd sign that if I were you.' 'Elias said, and I quote, please don't reply to them yet.' 'That letter doesn't look too serious.' 'Your hearing is on the 12th.'",
   "teaser": "One of those sounded completely harmless, and it's the one that gets assistants into the most trouble. It comes from kindness, not arrogance.",
   "why": "Clients will ask you for legal advice, kindly and often, and saying yes even once can put the firm at risk.",
   "talk": "Only a licensed lawyer can give legal advice, set fees, take on a case, sign court papers or appear in court. Doing those without a license is called the unauthorized practice of law, and it's illegal. The lawyer is responsible for supervising us, so our slip becomes the firm's problem. The line is interpretation. Facts, scheduling and passing on the attorney's own words are fine. Telling someone what the law means for them, or what they should do, is advice.",
   "walk": [
    "First, know what you can do: schedule, gather documents, share public facts like a court's hours, and relay the attorney's advice word for word.",
    "Next, know what you can't do: say whether someone has a case, what a document means for them or which option to choose.",
    "Then, when asked, use a bridge line: 'That's a great question for Elias. I'll make sure he gets it today.'",
    "After that, quote the attorney exactly, or have them put it in writing.",
    "Finally, when in doubt, treat it as advice and route it."
   ],
   "jargon": [
    {
     "term": "UPL (Unauthorized Practice of Law)",
     "hint": "doing a lawyer's work without a license; illegal"
    },
    {
     "term": "Legal advice",
     "hint": "telling someone what the law means for them or what to do"
    },
    {
     "term": "Bridge line",
     "hint": "a ready phrase that hands the question to the attorney"
    }
   ],
   "story": "A common first-week story: a kind assistant told a worried client, 'That letter's standard, they send those to everyone.' The client relaxed and didn't send it on. It had a 14-day response deadline. The attorney caught it on day 12. A bridge line and a same-day note to the attorney would have taken thirty seconds.",
   "ask": "[Name], where do you think the line is hardest to see in day-to-day calls? [Name], give me a sentence that sits right on that line."
  },
  "p2": {
   "why": "Most UPL slips come from kindness, not arrogance, so the habits matter.",
   "talk": "Clients often ask us because they feel awkward asking the lawyer, so we redirect warmly and never make them feel silly. We write their question down exactly as asked, so the attorney answers the real question. Two traps: 'In my experience, cases like yours usually settle,' which is still advice, even said kindly; and filling in the answers on a legal form for a client. We collect the information. The attorney decides what goes in.",
   "walk": [
    "First, redirect warmly.",
    "Next, write down the exact question.",
    "Then, give no reassurance based on your own experience.",
    "Finally, collect information for forms; don't decide the answers."
   ],
   "contrast": {
    "lazy": "'Honestly? Forty thousand sounds fair, most people take it.' Kind, confident, and legal advice.",
    "excellent": "'I completely understand wanting an answer. That's a decision Elias needs to make with you. I'm sending him your exact question now and I'll get you a call time today, even from court.'"
   },
   "outcome": "An assistant's casual opinion can push a client into accepting or rejecting a settlement without proper advice. That can leave the client with a worse result and the firm with a complaint or claim against it. Routing every advice question protects the client's outcome and the firm's license.",
   "ask": "[Name], what's a warm way to say 'I can't answer that' without sounding like a brush-off? [Name], say it again, warmer.",
   "mystery": "The case of the 40,000-dollar question. A client calls: 'The other side offered 40,000 dollars. Elias is in trial all week. Just between us, should I take it?' Earlier that day the same client emailed a photo of a letter asking 'Is this bad?' In pairs, three minutes: find the two advice traps, and bring back the exact words you say on the phone and the note you send Elias."
  }
 },
 "1::NDAs & Non-Disclosure Discipline": {
  "p1": {
   "icebreaker": "Game: 'Real or fake?' I'll say something people believe about NDAs. Thumbs up if it's real, thumbs down if it's fake. 'Once signed, an NDA covers everything forever.' 'An NDA can expire.' 'If they already work with us, they're covered.' 'An NDA can cover only certain kinds of information.' Count the thumbs.",
   "teaser": "Most rooms get at least one of those wrong, and it's the one assistants use as a magic shield. Let's take the shield apart.",
   "why": "A non-disclosure agreement is a real legal promise, and we need to know what's actually in it before we rely on it.",
   "talk": "An NDA spells out what information is protected, who has to keep quiet, for how long, and what happens if they don't. The mistake assistants make is treating the phrase 'they signed an NDA' as a magic shield. Some NDAs have expired. Some only cover certain kinds of information. And sometimes nobody actually signed one at all. So before we share anything sensitive, we check.",
   "walk": [
    "First, before sharing anything sensitive with a vendor, contractor or temp, check there's an NDA on file for that exact person or company.",
    "Next, if there is one, check what it covers and whether it's still in date.",
    "Then, if you can't confirm it covers this request, pause and verify. Don't go ahead on 'it's probably fine'.",
    "After that, keep a simple list of who's signed, what it covers and when it ends, so this check takes two minutes, not an afternoon.",
    "Finally, if someone you haven't cleared asks for sensitive information, treat that as a flag to check, not a request to fulfil."
   ],
   "jargon": [
    {
     "term": "NDA (Non-Disclosure Agreement)",
     "hint": "a signed promise to keep certain information secret"
    },
    {
     "term": "Scope",
     "hint": "exactly what information the NDA covers"
    },
    {
     "term": "Term",
     "hint": "how long the NDA lasts"
    },
    {
     "term": "NDA tracker",
     "hint": "our list of who signed, what it covers and when it ends"
    }
   ],
   "story": "This happens in real offices: a firm brought in a temp to scan old files. Everyone assumed the agency's NDA covered her. It had lapsed the month before. She was perfectly honest, but when a client asked for proof that everyone who'd seen their settlement was under an NDA, the firm couldn't give it. A two-minute check of the tracker on day one would have caught the gap.",
   "ask": "[Name], if I asked you right now whether a particular vendor has a signed NDA, could you find out in under two minutes? [Name], where would you look first?"
  },
  "p2": {
   "why": "Our job isn't to write NDAs; it's to keep track of them.",
   "talk": "Lawyers draft the agreements. We make sure they actually protect the firm day to day, by knowing who's covered and noticing when someone asks for something they shouldn't have. A very common mistake is treating every NDA as covering everything, forever. They don't. And 'they already work with us' doesn't mean they're cleared for this particular information.",
   "walk": [
    "First, track who has an NDA on file, and flag access requests from anyone who doesn't.",
    "Next, remember that NDAs expire and have limits on what they cover.",
    "Finally, if you can't confirm coverage for a specific request, pause and verify before sharing anything."
   ],
   "contrast": {
    "lazy": "'Legal already has their paperwork, apparently.' Sends the client list to the IT contractor and moves on.",
    "excellent": "'I can't find your NDA in our tracker, so I'll hold the list until legal confirms. I'll come back to you by end of day.' Then a note to legal asking for the signed copy and its scope."
   },
   "outcome": "Information shared without valid NDA cover can't be clawed back, and the firm may have no legal remedy if it spreads. A leaked client list or board contacts can cost the client in a negotiation and cost the firm the client. Two minutes of checking protects both.",
   "ask": "[Name], a new IT contractor asks for the client list to 'set up the new CRM' and says legal already has their paperwork. You can't find an NDA in the tracker. What do you do? [Name], what do you say to the contractor?",
   "mystery": "The case of the courtesy update. A long-time vendor asks for the Meridian board contact list to send them 'a courtesy update.' Their NDA covers IT services only. Meanwhile, a temp starts Monday on settlement files, under an agency NDA that expired last month. In teams of three, three minutes: find the gap in each case, and bring back what you tell each person and what you check before Monday."
  }
 },
 "1::Command Hierarchy": {
  "p1": {
   "icebreaker": "Game: 'Line them up.' I need four volunteers. Each gets a card: Notice, Assess, Escalate, Inform. Without talking, put yourselves in the right order. Room, you have ten seconds to shout 'Swap!' if they're wrong.",
   "teaser": "Most groups get the order right. The bit people get wrong is the last card: who should hear it first, and from whom. That's where careers are made or dented.",
   "why": "When something looks wrong, we don't fix it quietly on our own. We follow a clear order of steps.",
   "talk": "Picture spotting a problem before anyone else does, like a document that went out without the right review. The instinct is either to ignore it or to fix it ourselves. Both are risky. The better habit is four steps, always in the same order: notice it, size it up, raise it through the right channel, and make sure our executive hears it from us first.",
   "walk": [
    "First, notice. Catch the issue while it's still small.",
    "Next, assess. How big is it, how urgent is it, and who else does it touch?",
    "Then, escalate. Take it to the right person through the proper channel, not around them.",
    "Finally, inform. The executive should hear about it from you before he hears it from anyone else."
   ],
   "jargon": [
    {
     "term": "Command hierarchy",
     "hint": "the order of who reports to whom"
    },
    {
     "term": "Proper channel",
     "hint": "the agreed route for raising an issue, not a shortcut around someone"
    },
    {
     "term": "Supervising partner",
     "hint": "the senior lawyer responsible for checking the work on a matter"
    }
   ],
   "story": "A real pattern from the field: an assistant noticed a partner's assistant kept booking meetings into her boss's calendar without asking. She quietly deleted them each time. Eventually a client turned up for a meeting that had been 'deleted,' and her boss had no idea why. Raising it once, calmly, with dates, would have fixed it at the source.",
   "ask": "[Name], in your own words, what does 'escalating instead of deciding alone' actually look like in a normal week? [Name], what's the hardest part of that for you?"
  },
  "p2": {
   "why": "The worst way for Elias to learn about a problem is from someone else.",
   "talk": "Raising a problem isn't passing the buck. It's how a well-run office protects everyone, including us. A classic red flag is a confidential document that skipped legal review and went straight to a client. That's exactly the kind of thing that needs escalating straight away, and the executive needs to hear it from us, calmly and with the facts, before the client calls him.",
   "walk": [
    "First, escalate potential problems rather than deciding alone.",
    "Next, watch for red flags like a confidential document skipping legal review.",
    "Finally, make sure critical news reaches the executive from you first."
   ],
   "contrast": {
    "lazy": "Spots the unreviewed settlement letter, hopes nobody notices, and says nothing until the client rings Elias.",
    "excellent": "'Elias, quick one: the draft Meridian settlement letter went to the client at 11 before the supervising partner reviewed it. I've told the partner. Here's the version that went. Do you want to call the client, or shall I set it up?'"
   },
   "outcome": "An unreviewed document in a client's hands can commit the firm to terms nobody approved, and a missed filing deadline can lose a client their claim. The damage is always worse when the executive is surprised. Escalating fast, in the right order, gives him time to fix it before it shapes the result.",
   "ask": "[Name], a draft settlement letter was emailed to the client before the supervising partner reviewed it. Who do you tell, in what order? [Name], give me the first sentence you say.",
   "mystery": "The case of the noon deadline. At 4:30 p.m., you learn that a filing deadline for a Harlow matter document was missed at noon. Elias is in a meeting with the managing partner until 5:30. In pairs, three minutes: walk it through notice, assess, escalate and inform, find out who else needs to know, and bring back the exact note you get into Elias's hands before 5:30."
  }
 },
 "1::Command Hierarchy Across Different Tracks": {
  "p1": {
   "icebreaker": "Game: 'Guess the world.' I'll say a job title. Shout 'Company!', 'Firm!' or 'Home!' Senior EA. Estate manager. Paralegal. Managing partner. Household staff. Admin assistant. Senior legal assistant. Ready, fast as you can.",
   "teaser": "Easy when each job sits in one world. The tricky problems are the ones that live in two worlds at once, and there's one sitting on your next slide.",
   "why": "Who we report a problem to depends on which world it lives in: the office, the law firm or the household.",
   "talk": "Each setting has its own ladder. In a company, it runs from the CEO down through the senior EA and the EA to the admin assistant. In a law firm, it runs from the managing partner through the senior legal assistant and the legal EA to the paralegal, and that ladder is the strictest, because an unauthorised decision there can become a legal problem. At home, it runs from the head of the family through the estate manager and the PA to the household staff.",
   "walk": [
    "First, before escalating anything, work out which of the three worlds you're in.",
    "Next, in a company, go up through the business ladder, starting with your own executive.",
    "Then, in a law firm, follow the stricter legal ladder, and treat any decision outside your authority as a genuine risk.",
    "After that, at home, go through the family's own ladder, from the household staff up to the family head.",
    "Finally, if a problem sits in two worlds at once, like a household matter with legal risk, raise it in both."
   ],
   "jargon": [
    {
     "term": "Managing partner",
     "hint": "the lawyer who runs the firm day to day"
    },
    {
     "term": "Estate manager",
     "hint": "runs a household's staff, property and services"
    },
    {
     "term": "Process server",
     "hint": "the person who formally delivers court papers"
    }
   ],
   "story": "This happens in real offices: a housekeeper accepted court papers at the door and put them on the hall table with the post. The PA heard about it two days later, in passing. By the time the attorney saw them, a week of his response time was gone. If the household knew that 'papers at the door' goes straight to the PA and the legal team, the same day, nothing would have been lost.",
   "contrast": {
    "lazy": "'The nanny mentioned a man at the door. I'll tell Elias when he's back next week.' One ladder, slow, no record.",
    "excellent": "Calls Elias the same hour with the facts, tells the firm's senior legal assistant in case it's tied to a case, and asks the estate manager to brief the household on what to do if he returns. Writes down time, description and photos taken."
   },
   "outcome": "A household matter with legal risk handled on one ladder only can mean papers ignored, deadlines lost or evidence missed. A stranger photographing the house might be connected to a case, or to the family's safety. Raising it in both worlds, quickly, protects the case and the people.",
   "ask": "[Name], Elias's housekeeper tells you a process server came to the house with papers for him. Which ladders do you use? [Name], who hears first, and why?",
   "mystery": "The case of the man at the door. The Thornes' nanny tells you a man came to the door asking questions about Elias's work and took photos of the house. It's a household matter, but it might involve a case. In teams of three, three minutes: find the clues that make this a two-world problem, and bring back who you tell, in which order, through which ladders, and the three facts you write down first."
  }
 },
 "1::Serving as Liaison & Point of Contact": {
  "p1": {
   "icebreaker": "Game: 'Whisper chain.' Row one, I'll whisper a message to the first person: 'Elias needs the revised Meridian terms signed by Thursday noon, not Friday.' Pass it along, one whisper each. Last person, stand up and say it out loud.",
   "teaser": "Something always changes on the way down the row. The question for this topic is which bit changed, because that's exactly the bit that costs money in real life.",
   "why": "Gatekeeping decides who reaches the executive. Being a liaison is about connecting people who need each other.",
   "talk": "As a gatekeeper, we're protecting access. As a liaison, we're more like a bridge: a client needs something from Elias, a vendor needs something from staff, and it all flows through us. That only works if what comes out the other end is exactly what went in, and if people know we're the one to call. When a message gets garbled in the middle, that's usually where things went wrong.",
   "walk": [
    "First, make sure you really understand what each side needs before you pass anything on.",
    "Next, carry the message accurately both ways, putting it in words that make sense to the person receiving it.",
    "Then, make it clear you're the one point of contact for this matter, so nobody's guessing who to ask.",
    "After that, keep in mind which job you're doing at each moment: filtering access, or connecting two people.",
    "Finally, after the handoff, check back with both sides to make sure it landed as intended."
   ],
   "jargon": [
    {
     "term": "Liaison",
     "hint": "the go-between who connects two sides and carries messages accurately"
    },
    {
     "term": "Point of contact",
     "hint": "the one named person everyone goes to on a matter"
    },
    {
     "term": "CFO",
     "hint": "Chief Financial Officer, in charge of a company's money"
    }
   ],
   "story": "A real pattern from the field: on a deal, the client's finance team and the firm's paralegal each worked from a different draft for three days, both copied the assistant, and nobody said 'which one is final?' The wrong version reached signing. It was caught at the table, but the closing slipped a week. One email from the assistant naming the single current version would have kept both sides on the same page.",
   "ask": "[Name], think of a time information got garbled passing through someone in the middle. [Name], what would have prevented it?"
  },
  "p2": {
   "why": "Most liaison failures aren't wrong answers. They're silence after the handoff.",
   "talk": "Being the one clear contact saves everyone a surprising amount of time and confusion. The liaison habit is a loop. First, we take in the request in the sender's own words, including the deadline and who else is involved. Then we translate it for whoever receives it: a partner needs the decision, a vendor needs the details and timing, a family member needs it in plain English. And we always close the loop by telling the sender it's done.",
   "walk": [
    "First, receive: capture the request exactly, deadline included.",
    "Next, translate: restate it in the language the receiver needs.",
    "Finally, close the loop: confirm back to the sender once it's done."
   ],
   "contrast": {
    "lazy": "Passes the vendor's question to Elias, gets his answer, files it, and never tells the vendor.",
    "excellent": "'Elias has answered: yes to the Tuesday install, no to weekend access. I've put it in writing below. Can you confirm you've got this?' Sent the same day, with a note in the tracker that the loop is closed."
   },
   "outcome": "An answer nobody passes on is the same as no answer. Vendors miss dates, clients think they're being ignored, and on a deal, two sides working from different versions can mean a delayed closing or terms nobody meant to agree. A closed loop keeps the matter moving and everyone working from the same facts.",
   "ask": "[Name], a client's finance director needs Elias's sign-off on revised deal terms by Thursday, and the other side's paralegal needs the same document for a filing. Walk the loop for the client. [Name], now walk it for the paralegal.",
   "mystery": "The case of the vendor who never heard back. You passed a vendor's question to Elias on Monday, and he answered on Tuesday. On Friday, the vendor calls asking why they never heard back. Meanwhile, the Meridian CFO and Elias's paralegal are emailing you different versions of the same deal document. In pairs, three minutes: find the missing step in each case, and bring back your fix for both, including the exact email that gets everyone onto one version."
  }
 },
 "1::The Liaison Skill in Practice": {
  "p1": {
   "icebreaker": "Game: 'Softer, harsher or exact?' Elias's reply was: 'Not this year. Too much on.' I'll read three relays. One finger for softer, two for harsher, three for exact. 'He'd love to, maybe next month!' 'He said no, he hasn't got time for this.' 'Elias won't be able to take this on this year because of his current workload.' Fingers up.",
   "teaser": "Only one relay was exact, and it wasn't the friendliest one. There's also a fourth way a liaison fails that has nothing to do with words. See if you can guess it before I tell you.",
   "why": "A good liaison carries the message exactly as it was sent, in both directions, and does it quickly.",
   "talk": "Here's where it gets subtle. When we pass a request up to the executive, it's tempting to soften it or add our own spin. When we pass his answer back, it's tempting to dress up a short reply so it sounds friendlier or fuller. Both change the message. And there's a quieter risk too: a liaison who's so careful that everything slows down has failed just as much as one who lets everything straight through.",
   "walk": [
    "First, when you pass a request up, keep it accurate: no softening, no exaggerating, no opinions added.",
    "Next, when you pass the answer back, keep it just as honest and don't turn a short reply into a long one.",
    "Then, quietly work out which world the request belongs to, office, legal or household, before you route it. That's often the real job.",
    "After that, watch your own speed, because a slow liaison becomes a bottleneck.",
    "Finally, if you're not sure the message landed the way it was meant, check back instead of assuming."
   ],
   "jargon": [
    {
     "term": "Relay",
     "hint": "passing a message on from one person to another"
    },
    {
     "term": "Bottleneck",
     "hint": "the narrow point where everything gets stuck waiting"
    },
    {
     "term": "Co-author",
     "hint": "write something jointly with someone else"
    }
   ],
   "story": "A common first-week story: an attorney replied 'No' to a junior lawyer's request to take a client to lunch. The assistant, wanting to be kind, relayed it as 'He's not sure, maybe later in the month.' The junior lawyer booked a date for later in the month. The attorney was annoyed, the junior lawyer was embarrassed, and both blamed the assistant. 'He's said no for now' would have been kind enough and true.",
   "contrast": {
    "lazy": "'He said he'd love to but it's tricky right now, maybe next year?' Softened into a maybe, and sent two days late.",
    "excellent": "'Thank you for thinking of Elias. He won't be able to co-author this year given his current commitments.' Same day, true to his answer, professional in tone."
   },
   "outcome": "A softened no becomes a false yes, and people plan around it. A harsh relay damages a relationship Elias may need later, inside the firm or with a client. And a slow liaison lets offers, deadlines and goodwill expire. Accurate and fast keeps everyone acting on what Elias actually decided.",
   "ask": "[Name], Elias's reply to a partner's long request is one word: 'No.' How do you relay that accurately? [Name], how do you keep it from sounding harsher than he meant?",
   "mystery": "The case of the conference paper. A partner sends Elias a long, polite email asking him to co-author a conference paper. Elias's reply to you is: 'Not this year. Too much on.' In pairs, two minutes: find the words in your first draft that change his meaning, and bring back the exact message you'd send to the partner, accurate but professional. Best version gets read to the room."
  }
 },
 "1::Bulletproof Basics": {
  "p1": {
   "icebreaker": "Game: 'Would you rather?' Stand up for A, stay seated for B. Would you rather: A, a perfectly sorted inbox, or B, a backup flight already on hold? Would you rather: A, a great agenda before the meeting, or B, every action item chased after it? Look around: the room is split, and that's the point.",
   "teaser": "Trick question. You don't get to choose. Elias judges us on all three basics, and there's one he notices only when it's missing.",
   "why": "Three everyday basics decide whether an executive trusts us: the inbox, the travel backup plan and the full life of a meeting.",
   "talk": "None of this is glamorous, and that's the point. An executive judges us on whether the ordinary things always go right. The inbox gets sorted on the first read, so nothing sits waiting. Travel comes with a plan B already in place, so a cancelled flight is an inconvenience, not a crisis. And meetings don't end when everyone leaves the room; we set them up beforehand and chase the follow-ups afterwards.",
   "walk": [
    "First, as each email arrives, decide straight away whether it needs action, is just for information, or should go to someone else.",
    "Next, where it makes sense, draft the reply in the executive's own voice, so all he has to do is press send.",
    "Then, when you book travel, line up the backup too. If the 2 p.m. flight is cancelled, the 4 p.m. is already on hold.",
    "After that, set the meeting agenda before the meeting, which is how you go from taking notes to shaping the result.",
    "Finally, after the meeting, follow every action item through until it's actually done, not just written down."
   ],
   "jargon": [
    {
     "term": "Triage",
     "hint": "sorting items by what needs doing first"
    },
    {
     "term": "Plan B / backup booking",
     "hint": "an alternative already held in case the first falls through"
    },
    {
     "term": "Agenda",
     "hint": "the list of what a meeting will cover, in order"
    }
   ],
   "story": "This happens in real offices: an attorney's flight to an out-of-town hearing was cancelled at 6 p.m. The assistant had booked the flight and nothing else. By the time she found a seat, the only one left landed at 8:40 for a 9 a.m. hearing. He made it, out of breath, with no time to meet the client first. A held seat on the earlier backup flight would have cost nothing.",
   "ask": "[Name], of these three, which do you already do well, and which is still more of an intention? [Name], same question, and be honest."
  },
  "p2": {
   "why": "Doing the basics on a calm Friday is easy. Doing them the same way on a chaotic Tuesday is what earns trust.",
   "talk": "Anyone can keep a tidy inbox when the day is quiet. The difference shows when three things go wrong at once and we still sort every email, still line up the backup flight and still send the meeting follow-ups. That kind of consistency is what makes an executive stop double-checking our work. And the fix for a weak area is almost never a good intention. It's a small, specific habit we actually do every day.",
   "walk": [
    "First, aim for consistency under pressure, not perfection on quiet days.",
    "Finally, improve by picking one real habit, not a resolution."
   ],
   "contrast": {
    "lazy": "'I'll try to be better at follow-ups.' A resolution that lasts until the next busy day.",
    "excellent": "'Every day at 5 p.m., I open the day's meeting notes and send every follow-up before I log off. It's a 15-minute block in my calendar.' A habit that survives a chaotic Tuesday."
   },
   "outcome": "The basic that slips on a bad day is usually the one that matters. A missed follow-up becomes a missed deadline; a flight with no backup becomes a missed hearing; an unsorted inbox hides the court notice. Basics done the same way every day are what keep a case on schedule.",
   "ask": "[Name], pick the basic you're weakest on today. What's one real habit, not an intention, that would fix it this week? [Name], is that a habit or a resolution?",
   "mystery": "The case of the D.C. delay. Elias flies to D.C. at 2 p.m. for a 9 a.m. hearing tomorrow, and the airline just posted a two-hour delay warning. His inbox has 40 unread emails, and there's a 4 p.m. client call nobody has set an agenda for. Oh, and you've just realised this morning's partners' meeting follow-ups never went out. In teams of three, four minutes: decide which basic you deal with first, and bring back your plan for each one before 11 a.m."
  }
 },
 "1::The Three C's of Managing Up": {
  "p1": {
   "icebreaker": "Game: 'Rate my update.' I'll read a message to Elias. Show me one to five fingers: one is useless, five is perfect. 'Meridian stuff mostly sorted, a couple of things pending, will explain tomorrow.' Now: 'Meridian: two items pending. I need your signature on the NDA by 3. The filing goes at 5, no action from you.' Fingers up.",
   "teaser": "The first one feels fine when you write it at 7 p.m. There's one word in it that quietly costs you trust, and by the end you'll be able to spot it.",
   "why": "Every update we send gets judged on three things: is it clear, is it consistent, and can he rely on it?",
   "talk": "Managing up sounds like a fancy phrase, but it mostly comes down to how we communicate with the person we support. Clarity means he never has to guess what we're telling him or what we need. Consistency means we do things the same way every time, so he knows what to expect. And credibility means that when we say something, it's true. That one matters most.",
   "walk": [
    "First, before sending an update, check it's clear: does it say exactly what's happening and what you need?",
    "Next, check it's consistent: are you using your usual approach, not something improvised because today's busy?",
    "Then, if speed and reliability pull against each other, reliability wins. A quick answer that's wrong is worse than a slightly slower one that's right.",
    "After that, when you're under pressure and clarity starts slipping, slow down and restate the main point before you hit send.",
    "Finally, every so often reread your own recent messages, because these habits fade quietly when you're busy."
   ],
   "jargon": [
    {
     "term": "Managing up",
     "hint": "working well with the person you support, not just for them"
    },
    {
     "term": "Daily brief",
     "hint": "a short regular update in the same format every day"
    }
   ],
   "story": "A real pattern from the field: an assistant told her attorney a signed contract had 'definitely gone back' to the other side. It was sitting in her outbox, unsent, because the attachment was too big. The other side said the offer had lapsed. It was put right, but from then on he checked every 'done' she sent. 'I've sent it and I'll confirm receipt by noon' would have caught the bounce.",
   "ask": "[Name], when you're overwhelmed, which of the three slips first for you? [Name], is yours the same one?"
  },
  "p2": {
   "why": "One wrong 'it's done' costs more trust than ten honest 'confirming by noon's.",
   "talk": "Here's what the three C's sound like in real life. Clarity is opening with the status and the ask: 'The filing is ready; I need your signature by 3.' Consistency is sending the daily brief in the same format every day, so he always knows where to look. And credibility is admitting when we're not sure: 'I believe it's done, and I'll confirm by noon.' That honesty is what makes him believe us when we say something is finished.",
   "walk": [
    "First, clarity means the status and the ask come first, with the background after.",
    "Next, consistency means regular updates always look the same.",
    "Finally, credibility means saying 'I'll confirm by' when you're not certain."
   ],
   "contrast": {
    "lazy": "'Yes, the binder's at the courthouse.' Said because the courier probably picked it up.",
    "excellent": "'The courier was booked for 10 a.m. I'm confirming delivery now and will message you by 10:30 either way.'"
   },
   "outcome": "If Elias walks into court believing the binder is there and it isn't, he's unprepared in front of a judge. If he tells a client the engagement letter is signed and it isn't, the firm may be working without cover. Honest status updates keep his decisions, and the case, built on facts.",
   "ask": "[Name], Elias asks, 'Is the Meridian binder at the courthouse?' You think the courier picked it up, but you haven't confirmed. What's your reply? [Name], is that reply clear, consistent and credible?",
   "mystery": "The case of the missing engagement letter. Elias asks at 8 a.m. whether the signed Harlow engagement letter came back. You think the client said they'd send it last night, but it isn't in the inbox yet. In pairs, two minutes: find the places it could be, decide what you actually know, and bring back the exact reply that passes all three C's."
  }
 },
 "1::Credibility Is Earned, Not Claimed": {
  "p1": {
   "icebreaker": "Game: 'True or false?' Thumbs up for true, thumbs down for false. 'If you tell your boss you're reliable, he'll trust you more.' 'A small mistake costs a small amount of trust.' 'It's fine to hold minor news until Monday.' 'One good week fixes one bad week.' Count your downs.",
   "teaser": "If you gave a thumbs down to all four, well done. One of them is the rule assistants break most, usually on a Friday afternoon. You'll see it in a moment.",
   "why": "We can't announce that we're credible. The executive gives us credibility, one reliable week at a time.",
   "talk": "Credibility comes from a few things done over and over. We're accurate, we follow through and we're on time. We never let the boss be surprised by something we already knew. We treat small decisions carefully, because some of them quietly carry money, legal or reputation risk. And we're discreet, especially around investors, legal matters, family life and deals.",
   "walk": [
    "First, build it through reliability: accurate, finished and on time, every time.",
    "Next, live by the no-surprises rule. If you know about something, he knows about it too, even if it seems minor.",
    "Then, treat small decisions as if they might matter, because you can't always tell which ones will.",
    "After that, make discretion your default, especially around investors, legal matters, family and deals.",
    "Finally, if you ever damage that trust, rebuild it steadily over time. One good week doesn't undo a bad one."
   ],
   "jargon": [
    {
     "term": "Retainer",
     "hint": "money a client pays upfront so the firm starts work"
    },
    {
     "term": "No-surprises rule",
     "hint": "if you know it, your executive knows it"
    }
   ],
   "story": "A common first-week story: on a Friday, an assistant saw that a client's retainer payment had bounced and planned to mention it Monday. Over the weekend, the client emailed the attorney directly, embarrassed and apologetic. The attorney had no idea what he meant. A two-line message on Friday would have let him reply in control.",
   "ask": "[Name], in practice, what does the no-surprises rule look like on a normal day? [Name], what's something small you'd still tell him the same day?"
  },
  "p2": {
   "why": "Lost credibility comes back slowly, roughly in proportion to how much was lost.",
   "talk": "Credibility is what lets us speak up to the executive with confidence. It comes only from doing the work well and showing good judgment, never from telling people how good we are. It also works a bit like a bank balance. Small mistakes take a small withdrawal; a big one can empty the account, and then it takes months of steady deposits to build it back.",
   "walk": [
    "First, earn credibility through consistent work, never self-promotion.",
    "Next, remember that rebuilding it takes a track record, not an apology.",
    "Finally, watch the small, quiet decisions, because they're often the ones that carry the most weight."
   ],
   "contrast": {
    "lazy": "'I'm really sorry about the contract, it won't happen again, you can trust me.' Then carries on exactly as before.",
    "excellent": "Says sorry once, then builds a visible routine: version number in every file name, a 'final' check before sending, and a note to Elias: 'Sent v4, signed version, checked against your mark-up.' Week after week."
   },
   "outcome": "When the executive trusts us, he acts on what we tell him quickly, and that speed matters in deadlines and negotiations. When he doesn't, he double-checks everything, and his time, which is the client's money, goes on checking us. Credibility is what lets us protect the case instead of slowing it down.",
   "ask": "[Name], think of a real moment, from any job and kept anonymous, when a small decision turned out to carry real risk. What told you it mattered? [Name], have you had one like that?",
   "mystery": "The case of the wrong contract. Last month you sent a partner the wrong version of a contract, and now Elias double-checks everything you send. In pairs, three minutes: find the habits that let it happen, and bring back a specific four-week plan of deposits, what you'll do each week that Elias can actually see."
  }
 },
 "1::Client Profiling": {
  "p1": {
   "icebreaker": "Game: 'Quick quiz.' Shout the answer, no notes. What's Elias's surname? His wife's name? The name of his firm? Which three cities does he travel between? One rule he never lets anyone break? Silence on that last one is allowed.",
   "teaser": "The silence on the last question is exactly why this topic exists. By the end, you'll have a place where that answer lives, so nobody ever has to ask him.",
   "why": "A client profile is something we build once, so we never have to ask the same question twice.",
   "talk": "Think about how it feels when a new assistant asks you, for the third time, whether you like morning or afternoon meetings. It wears down trust fast. A profile avoids that. It's a short reference that captures who this person is, how they like to communicate and the rules they live by, so every interaction starts from what we already know.",
   "walk": [
    "First, start with the basics: their role, their organisation and how far their authority reaches.",
    "Next, note how they like to communicate. Blunt or detailed? Written or spoken?",
    "Then, write down their meeting rules, like breaks between meetings and times that are off-limits, because those are the rules new people break most.",
    "After that, capture travel preferences in enough detail to book without asking.",
    "Finally, note any quirks, in plain, respectful language."
   ],
   "jargon": [
    {
     "term": "Client profile",
     "hint": "a short reference card on how someone works and what they prefer"
    },
    {
     "term": "Standing rule",
     "hint": "a preference that always applies unless he says otherwise"
    }
   ],
   "story": "This happens in real offices: a new assistant asked her attorney three times in a week whether he wanted window or aisle. On the third time he said, 'Does nobody write anything down?' The previous assistant had known for years; it just lived in her head. A one-page profile on day one would have answered it.",
   "ask": "[Name], without looking, can you name Elias's firm, one family member and one of his standing rules? [Name], can you add one more fact?"
  },
  "p2": {
   "why": "This is the first topic that builds on itself. Everything later in the program assumes you know Elias.",
   "talk": "Let's meet him properly. Elias Thorne is CEO of Thorne & Partners, a large law firm specialising in corporate litigation, white-collar defence and international arbitration. He's blunt and direct, he travels constantly between D.C., London and Singapore, and he expects us to anticipate what he needs rather than wait to be told. Those few facts already tell us a lot about how to write to him and how to plan his week.",
   "walk": [
    "First, build the profile in five parts: role, communication style, meeting rules, travel preferences and quirks.",
    "Next, for Elias, keep communication direct and brief.",
    "Finally, remember heavy travel and 'anticipate, don't wait' shape almost everything you'll do for him."
   ],
   "contrast": {
    "lazy": "Asks Elias each time: 'Do you want a morning or afternoon flight? Aisle or window? Is 8 a.m. too early?'",
    "excellent": "Checks the profile, books the aisle seat and the right flight, and sends one line: 'London booked: Tues 10 a.m., aisle, back in time for Thursday's hearing.'"
   },
   "outcome": "Every repeat question spends a little of Elias's attention, which is the most expensive thing in the firm. Getting his rules wrong, like a red-eye before a court day, can mean a tired attorney in front of a judge. A good profile protects his time and his performance where it counts.",
   "ask": "[Name], using what you now know about Elias, what's one question you'd never need to ask him again? [Name], give me another.",
   "mystery": "The case of the red-eye. A new colleague books Elias an early-morning red-eye before a court day and schedules three back-to-back meetings after it. In pairs, two minutes: find the two profile entries that would have prevented this, and bring back the five things you'd most need to find out in week one and who, other than Elias, you could ask."
  }
 },
 "1::Creating a Comprehensive Client Dossier": {
  "p1": {
   "icebreaker": "Game: 'Which drawer?' Four drawers: one finger for firm and role, two for family and personal, three for standing instructions, four for quirks. 'Wife Sarah.' 'No calls before 7 a.m.' 'Hates being cc'd on long threads.' 'CEO of Thorne & Partners.' 'Daughter's school pickup Tuesdays.' Fingers up on each.",
   "teaser": "You'll have disagreed on at least one. That's a clue: an entry people can't place is usually an entry that needs rewriting.",
   "why": "A dossier goes deeper than a profile. Someone who has never met Elias should be able to run his account from it.",
   "talk": "If the profile is a quick reference card, the dossier is the full handbook. It has four parts. The professional picture comes first: the firm, the industry, the culture and his authority. Then only the personal and family details that actually help us support him. Then his standing instructions, the rules that don't change. And finally his quirks, written kindly and factually. The test is simple: could a stranger run his day from it?",
   "walk": [
    "First, start with the firm and his role, so the reader understands the professional setting.",
    "Next, add family and personal details, but only what genuinely helps you support him.",
    "Then, write his standing instructions as clear rules that anyone could follow without interpreting.",
    "After that, describe his quirks in plain words, never judgment.",
    "Finally, test it by asking: could someone who's never met him run the account from this alone?"
   ],
   "jargon": [
    {
     "term": "Dossier",
     "hint": "the full written handbook on a client"
    },
    {
     "term": "Standing instructions",
     "hint": "rules that always apply without being repeated"
    },
    {
     "term": "Restricted section",
     "hint": "the part of the file only named people can see"
    }
   ],
   "story": "A real pattern from the field: an assistant went on sick leave suddenly, and a temp took over with a dossier that said 'Partner is particular about lunch.' The temp ordered a sandwich platter for a client meeting. The partner had a serious food allergy, which the regular assistant knew and the dossier didn't say. Nobody was hurt, but it was close. 'Severe nut allergy: check every menu' would have been enough.",
   "ask": "[Name], which of the four sections would be hardest to fill in accurately without meeting him? [Name], how would you fill it anyway?"
  },
  "p2": {
   "why": "A vague entry is almost as useless as no entry at all.",
   "talk": "Here's the difference in practice. 'Likes comfortable flights' tells a new assistant nothing. 'Aisle seat, rows one to ten, never a red-eye before a court day' tells them exactly what to book. Good entries also say where the information came from and when, like 'confirmed by Elias, March', so the next person knows how far to trust it. And sensitive details, such as health, family or money, live in a restricted section that never gets copied into shared calendars or emails.",
   "walk": [
    "First, be specific, because specific entries can be acted on.",
    "Next, give every entry a source and a date.",
    "Finally, lock sensitive details away and share them only with those who truly need them."
   ],
   "contrast": {
    "lazy": "'Prefers comfortable seats.' 'Family stuff on Tuesdays.' 'Doesn't like long emails.'",
    "excellent": "'Aisle seat, rows 1 to 10, never a red-eye before a court day (confirmed by Elias, March).' 'Tuesdays 3 p.m.: daughter's school pickup, no meetings after 2:30 (restricted).'"
   },
   "outcome": "A vague dossier fails exactly when you're not there to explain it: sick leave, holidays, a sudden handover. That's when a court-day red-eye gets booked or a private family detail ends up in a shared calendar. A specific, sourced dossier keeps Elias at his best and his family's privacy intact, whoever is covering.",
   "ask": "[Name], you're handing Elias's account to a substitute for two weeks. Which three entries would they be most likely to get wrong? [Name], rewrite one of them so they can't.",
   "mystery": "The case of seat 22A. A substitute assistant covers for you and books Elias a window seat in row 22 for a London flight, because the dossier said 'prefers comfortable seats.' In pairs, three minutes: find the vague word that caused it, and bring back the rewritten entry, plus where each of these belongs: 'likes quiet restaurants,' 'wife Sarah,' 'no calls before 7 a.m.,' 'hates being cc'd on long threads,' 'daughter's school pickup Tuesdays.'"
  }
 },
 "1::Dossier Excerpt — Elias Thorne": {
  "p1": {
   "icebreaker": "Game: 'Guess the reason.' I'll read one of Elias's real rules. You shout why you think he has it. 'Fifteen-minute debrief after key sessions.' 'Strict Paleo diet.' 'Voice notes at 5:30 a.m., agenda by 8.' 'Aisle seats only.' Wildest sensible guess wins.",
   "teaser": "You had good guesses, and some were different. That's the problem. If the room can't agree why a rule exists, the next assistant will decide it's optional. One of these is the rule most likely to be broken first.",
   "why": "Every fact in a dossier needs its reason attached, because a rule without a reason is the one that gets broken.",
   "talk": "Let's look at real entries for Elias. He needs a fifteen-minute debrief after key sessions. He follows a strict Paleo diet. He sends voice notes at 5:30 in the morning and expects an agenda by 8. He only flies in aisle seats. If we just list those, a new assistant might see the fifteen minutes as optional. If we explain that he needs that time to process a court session before his next call, they won't touch it.",
   "walk": [
    "First, put each fact under the right heading: firm and role, family, standing instructions or quirks.",
    "Next, write why it matters, not just what it is.",
    "Then, ask what would go wrong if someone got this entry wrong. That tells you how carefully to word it.",
    "After that, write for someone who's never met him, with no inside shorthand.",
    "Finally, compare your entries with the Elias examples to make sure yours are just as specific."
   ],
   "jargon": [
    {
     "term": "Debrief",
     "hint": "a short review straight after an important session"
    },
    {
     "term": "Buffer",
     "hint": "protected time between commitments"
    },
    {
     "term": "Paleo diet",
     "hint": "an eating plan with no dairy, grains or processed food"
    }
   ],
   "story": "This happens in real offices: an attorney's dossier said 'Buffer after court.' A new paralegal saw an empty fifteen minutes and booked a client call into it. The attorney took the call straight from a difficult hearing, distracted, and agreed to a deadline he couldn't meet. Adding 'he uses it to process the session before speaking to anyone' would have protected it.",
   "ask": "[Name], why does that fifteen-minute debrief matter enough to be a standing rule? [Name], what would you write next to it in the dossier?"
  },
  "p2": {
   "why": "Anyone can paste facts under headings. A good dossier explains why each fact matters.",
   "talk": "Each of the four sections protects us from a different kind of mistake. Get the professional context wrong and we misjudge what's important. Miss a family sensitivity and we cause real hurt. Break a standing rule and we lose trust. Misread a quirk as something we can negotiate and we clash with him. Writing the reason next to each fact is what stops the next assistant from making those mistakes.",
   "walk": [
    "First, remember each section prevents a different kind of failure.",
    "Next, treat a fact without its reason as just trivia.",
    "Finally, write every entry for the person who inherits the account without warning."
   ],
   "contrast": {
    "lazy": "'Paleo. Debrief after court. Voice notes early.'",
    "excellent": "'Strict Paleo, no dairy: check every client dinner menu in advance, because he won't eat and it shows. 15-minute debrief after every key client or court session: he processes the session before speaking to anyone, so never book into it.'"
   },
   "outcome": "A rule without a reason gets broken under pressure, and the moments of pressure are court days and client dinners. A distracted attorney straight out of a hearing makes worse decisions on the next call. Reasons in the dossier protect his thinking at the moments the case depends on it.",
   "ask": "[Name], let's build one section from two raw facts: a fifteen-minute debrief after every key client or court session, and a strict Paleo diet with no dairy, with every client dinner checked in advance. What's the reason behind the first? [Name], and the second?",
   "mystery": "The case of the early voice note. Elias sends his 5:30 a.m. voice notes and expects an agenda by 8. A dossier entry says only: 'Voice notes early.' In pairs, two minutes: work out what a new assistant would get wrong, find the missing reason, and bring back the full entry. Then rewrite the debrief entry so the paralegal who booked a call into it never does it again."
  }
 },
 "1::Setting Up Client Trackers": {
  "p1": {
   "icebreaker": "Game: 'Three boxes.' Front row is the travel tracker, middle row is the inbox tracker, back row is the meetings tracker. I'll call out an item; the row it belongs to stands up. 'Aisle seat.' 'No back-to-back sessions.' 'One-line summary at the top of emails.' 'No connecting flights.' 'Partners' meeting Monday at 9.' Stand fast.",
   "teaser": "Every row got to stand. But one of those items will be wrong in three weeks' time, and nobody in this room will notice unless we build in one small habit. Watch for it.",
   "why": "The dossier is the reference book. Trackers are the tools we use every day to put it into practice.",
   "talk": "A dossier tells us who Elias is. A tracker tells us what to do right now, and we update it as things happen. We start small, with just three: how he likes to travel, how he likes his emails, and how his meetings should be spaced. Starting with three we'll actually keep up beats ten we'll let go stale.",
   "walk": [
    "First, build the three basic trackers: travel, inbox and meeting rhythms.",
    "Next, put the details that change a booking in the travel tracker: seat, connections and whether you rebook without asking.",
    "Then, record in the inbox tracker the exact format he expects, like one-line summaries with the details attached.",
    "After that, keep the hard rules in the meetings tracker, such as no back-to-back sessions and the breaks he needs.",
    "Finally, update every tracker the moment you learn something new."
   ],
   "jargon": [
    {
     "term": "Tracker",
     "hint": "a working list you update as things happen"
    },
    {
     "term": "Meeting rhythm",
     "hint": "the regular pattern and spacing of someone's meetings"
    }
   ],
   "story": "A common first-week story: a new assistant inherited a beautiful tracker spreadsheet with fifteen tabs. Half of them hadn't been touched in a year. She trusted the 'preferred car service' tab and booked a company that had closed. The attorney waited 40 minutes at the airport. Three trackers kept up to date would have beaten fifteen that weren't.",
   "ask": "[Name], if you only had time to build one tracker for Elias, which would it be, and why? [Name], would you pick the same one?"
  },
  "p2": {
   "why": "An out-of-date tracker is worse than no tracker at all, because it makes us confident about the wrong thing.",
   "talk": "The trick is to give each tracker a moment when it always gets updated. The travel tracker after every trip. The inbox tracker whenever he reacts to an email's format. The meetings tracker whenever a regular meeting changes. We also put a 'last checked' date at the top, so a colleague knows how far to trust it. And we only add a new tracker when a need keeps coming up, not just in case.",
   "walk": [
    "First, give each tracker a clear moment when it's updated.",
    "Next, show the date each one was last reviewed, and check them monthly.",
    "Finally, add new trackers only when a real need repeats."
   ],
   "contrast": {
    "lazy": "'I'll update the tracker when I get a minute.' Three weeks later, the noisy hotel is booked again.",
    "excellent": "Updates the travel tracker the evening he lands: 'London hotel under renovation, noisy, do not book until further notice (Elias, 12 May). Last checked: 12 May.'"
   },
   "outcome": "A stale tracker makes you confidently wrong, and the cost lands on Elias: a bad night before a hearing, a missed connection, an email format he's asked you to drop. A tired, distracted attorney performs worse when the case needs him sharp. Trackers that are updated on time keep his preparation intact.",
   "ask": "[Name], Elias's London flight is delayed three hours. His travel tracker says aisle seat near the front, no connections, and rebook without being asked. What do you do before he even notices? [Name], what do you tell him, and when?",
   "mystery": "The case of the noisy hotel. Your travel tracker says Elias prefers a certain hotel in London. After his last trip, he told you the hotel is under renovation and was noisy. It's now three weeks later and you're booking his next London trip. In pairs, two minutes: find the moment the tracker should have changed, and bring back the exact updated entry plus the update habit for each of the three trackers."
  }
 },
 "1::Why One Client, All Ten Days": {
  "p1": {
   "icebreaker": "Game: 'Memory hands.' Hands up if you can tell me, without looking: Elias's seat preference. Keep it up if you also know his wife's name. Keep it up if you know when his voice notes arrive. Keep it up if you know how long his debrief is. Whoever's still up, stand and say all four.",
   "teaser": "Count the hands now, then remember that number. On Day 5 we'll play this again, and there's one trick that decides whether the number goes up or down.",
   "why": "We use the same client for all ten days on purpose, because in a real job, what you learn keeps building.",
   "talk": "In most training, every exercise brings a brand-new person. Real life isn't like that. You work for the same executive for months, and everything you learn about him makes the next task easier. So what we learn about Elias today, his rules, his family, how he likes to communicate, will come back in the calendar work, the inbox work and the travel planning later on.",
   "walk": [
    "First, treat every fact about Elias as something you'll need again.",
    "Next, when a later exercise leans on something from before, try to remember it before looking it up. That recall is part of the training.",
    "Then, if something later seems to contradict what you know about him, raise it with the trainer instead of quietly working around it.",
    "After that, let the repetition help you, because seeing the same family and rules again and again is what makes them stick.",
    "Finally, by the last day, you should be able to describe his rules, family and communication style from memory."
   ],
   "jargon": [
    {
     "term": "Recall",
     "hint": "remembering something before you look it up"
    },
    {
     "term": "Placement",
     "hint": "a real job with one employer over time"
    }
   ],
   "story": "This happens in real offices: an assistant in her third month booked her attorney into a dinner at a steakhouse with a client, forgetting a dietary rule she'd been told in week one. She'd written it down but never looked again. The client noticed he barely ate. Nothing terrible happened, but it was the kind of slip that makes a boss wonder what else has been forgotten. Regular recall, not just a note, is what makes rules stick.",
   "ask": "[Name], what's one thing about Elias you're worried you'll forget by Day 5? [Name], what's yours?"
  },
  "p2": {
   "why": "If something contradicts the dossier, flag it. Don't reinvent Elias.",
   "talk": "Think of an inconsistency as a small bug worth reporting. In a real job, catching that kind of mismatch is exactly what a sharp assistant does, like noticing that a booking contradicts a standing rule. That's also what makes this feel like a real job rather than a series of exercises: the same instructions, the same family and the same quirks, and you're expected to remember them.",
   "walk": [
    "First, flag contradictions to the trainer rather than making up a new version of Elias.",
    "Finally, treat these ten days like a real placement, where what you learned on day one still counts on day ten."
   ],
   "contrast": {
    "lazy": "Sees 'window seat' in a Day 3 exercise, shrugs, and books the window, or quietly switches it to aisle without saying anything.",
    "excellent": "'The Day 3 brief says window, but his Day 1 dossier says aisle only. Which is current? If he's changed his preference, I'll update the dossier.'"
   },
   "outcome": "In a real job, silently working around a contradiction means the wrong version spreads: into bookings, into the dossier, into the next assistant's habits. Flagging it once keeps the record true. When a client relationship or a court day depends on getting his rules right, a true record is what protects him.",
   "ask": "[Name], let's write your answers on the board now, and we'll come back to this list on Day 5. What goes up first? [Name], what do you add?",
   "mystery": "The case of the window seat. On Day 3, a travel scenario says Elias prefers window seats. Your Day 1 dossier says aisle seats only. In pairs, two minutes: decide which is the clue and which is the error, and bring back exactly what you'd say to the trainer, plus three standing rules from Day 1 that any plan for his week must follow."
  }
 },
 "1::The ACT Email Framework": {
  "p1": {
   "icebreaker": "Game: 'Decode the voice note.' I'll read one of Elias's 5:30 a.m. messages. Shout how many separate tasks you hear. 'Need the Harlow numbers and move Thursday.' How many? Now: 'Move the Meridian call, get me something on the Singapore thing, and find out why the retainer invoice hasn't gone out.' How many?",
   "teaser": "You heard the tasks. But hidden in that first message are two questions you'd have to ask, and one you shouldn't, because the answer's already in the dossier. Let's find out which.",
   "why": "When an executive sends a messy request, a clear reply turns it into something both of you can act on.",
   "talk": "Elias thinks fast and talks in fragments. A 5:30 a.m. voice note might have three different tasks tangled together. If we just reply 'Got it!', we find out three days later that we misunderstood. ACT fixes that. Acknowledge what we heard in our own words. Clarify only what's genuinely missing. Then give a Timeline: what happens, by when, and who's doing it.",
   "walk": [
    "First, acknowledge: restate the request in your own words, so any misunderstanding shows up right away.",
    "Next, clarify: ask only what you can't work out yourself, and check the dossier before asking.",
    "Then, give a timeline: what will happen, by when and who owns it.",
    "After that, keep it short, with the answer first, the way a busy executive reads.",
    "Finally, send it quickly, right after the request arrives, not as a summary hours later."
   ],
   "jargon": [
    {
     "term": "ACT",
     "hint": "Acknowledge, Clarify, Timeline"
    },
    {
     "term": "Settlement figures",
     "hint": "the money amounts being discussed to end a dispute"
    },
    {
     "term": "Billing summary",
     "hint": "an overview of what's been charged to a client"
    }
   ],
   "story": "A real pattern from the field: an attorney texted 'Send them the numbers.' His assistant replied 'Got it!' and sent the client the billing summary. He'd meant the settlement figures, for the other side's lawyer. The billing summary was harmless; the delay wasn't, because the other side's deadline passed that evening. 'Settlement figures to opposing counsel, or billing to the client?' would have taken ten seconds.",
   "ask": "[Name], why isn't 'Got it, thanks!' a real acknowledgement? [Name], what would a real one sound like?"
  },
  "p2": {
   "why": "A timeline with no owner or date is where requests quietly die.",
   "talk": "Let's look at each step more closely. Acknowledging means showing we understood, not just that we received it. Clarifying means not asking things we could have found ourselves; asking something that's already in the dossier tells him we didn't do our homework. And the timeline is what actually closes the loop. Most dropped requests had a vague 'I'll look into it' instead of a name and a date.",
   "walk": [
    "First, acknowledge by restating the actual request.",
    "Next, clarify only what's missing, after checking the dossier.",
    "Finally, close with what happens, when, and who owns it."
   ],
   "contrast": {
    "lazy": "'Got it, will look into it!' No owner, no date, and two days later nothing has happened.",
    "excellent": "'Three things: move the Meridian call, a Singapore update, and the retainer invoice. Quick check: is Singapore the arbitration hearing date? Meridian call moved by 10 today (me). Invoice reason by noon (me, with finance). Singapore note by 3 once you confirm.'"
   },
   "outcome": "A misread request wastes a day; a request with no owner can sit until a deadline passes. In litigation that might be a filing window, a settlement offer or a client's patience. ACT makes sure what Elias asked for is what actually happens, on time.",
   "ask": "[Name], Elias's voice note says: 'Move the Meridian call, get me something on the Singapore thing, and find out why the retainer invoice hasn't gone out.' Give me the acknowledge line. [Name], now give me the timeline.",
   "mystery": "The case of the two Thursdays. Elias sends a text: 'Need the Harlow numbers and move Thursday.' There are two Thursday meetings, and 'the Harlow numbers' could mean the settlement figures or the billing summary. In pairs, three minutes: find both gaps, check what the dossier could tell you first, and bring back your full ACT reply, short enough to read on a phone."
  }
 },
 "1::BLUF: Bottom Line Up Front": {
  "p1": {
   "icebreaker": "Game: 'One line only.' I'll read you just the first line of three emails. Thumbs up if you know what's needed and by when, thumbs down if you don't. 'Hi Elias, hope your trip was good!' 'Decision needed by noon: approve the 8,000-dollar expert fee?' 'So yesterday I spoke to the courier, then the clerk...' Thumbs.",
   "teaser": "Only one first line worked. Here's the uncomfortable bit: most of us were taught to write like the other two. One habit from school is about to be turned upside down.",
   "why": "If Elias reads only your first line, he should already know what you need and by when.",
   "talk": "BLUF stands for Bottom Line Up Front. We put the point, whether that's the decision, the answer or the action, in the very first sentence. Everything after it is extra detail he can stop reading at any time. It feels backwards at first, because most of us were taught to explain first and ask at the end. But busy people often only read the first line.",
   "walk": [
    "First, before you write, finish this sentence: 'The one thing Elias needs to know or decide is...'. That becomes your first line.",
    "Next, label the ask, with something like 'Decision needed', 'FYI, no action', or 'Approval by 3 p.m.'.",
    "Then, add only the details he needs to act: dates, amounts, names and options, in a few short lines.",
    "After that, move the background below a clear break or into an attachment.",
    "Finally, finish with the exact next step and deadline, then reread just the first line the way he would."
   ],
   "jargon": [
    {
     "term": "BLUF",
     "hint": "Bottom Line Up Front: the point goes in the first sentence"
    },
    {
     "term": "Expert fee",
     "hint": "payment to a specialist witness who gives an opinion in the case"
    },
    {
     "term": "Refile",
     "hint": "submit a court document again"
    }
   ],
   "story": "This happens in real offices: an assistant sent her attorney a long, polite email explaining an expert's background, availability and fees, with the actual question, 'Can I confirm by noon?', at the bottom. He read the first two lines between meetings and assumed it was background. The expert gave the date to another firm. Putting the question in line one would have kept the expert.",
   "ask": "[Name], when you write an update, do you usually lead with the decision, or with the background? [Name], and you?"
  },
  "p2": {
   "why": "BLUF isn't rude. It's respecting the reader's time.",
   "talk": "Picture Elias between meetings, reading on his phone, seeing only the preview. If our question is buried in the third paragraph, as far as he's concerned, it doesn't exist. That doesn't mean dropping the courtesy. A friendly one-line greeting is fine; three paragraphs of warm-up is not. The most common slip is telling the story in the order it happened, instead of the order he needs it.",
   "walk": [
    "First, remember he's often reading only the preview line.",
    "Next, keep the courtesy short: one line, not a paragraph.",
    "Finally, write in the order the reader needs, not the order things happened."
   ],
   "contrast": {
    "lazy": "'Hi Elias, hope your trip was good! So yesterday I spoke to the courier, then the clerk...' The question is in paragraph four.",
    "excellent": "'Decision needed today: should we refile tomorrow? Courier lost the original; clerk will accept a refile by 10 a.m. Details below.'"
   },
   "outcome": "A question he never sees is a decision he never makes, and the deadline makes it for him. Experts book other cases, filing windows close, offers lapse. BLUF gets the decision made while it still changes the outcome.",
   "ask": "[Name], here's a rambling update: three paragraphs about a courier delay before the question 'Should we refile tomorrow?' You've got sixty seconds. Rewrite just the first sentence. [Name], does it pass the preview test?",
   "mystery": "The case of the 8,000-dollar expert. You need Elias to approve an 8,000-dollar expert fee by noon, because the expert won't hold the date otherwise. You also want to tell him the expert came highly recommended and why. In pairs, two minutes: find what the bottom line really is, and bring back the first line and the three lines after it. We'll read them on a phone-sized screen."
  }
 },
 "1::BLUF in Practice: Emails, Updates & Voice Notes": {
  "p1": {
   "icebreaker": "Game: 'Would you open it?' I'll read a subject line. Stand up if Elias would open it right now, stay seated if it waits. 'Following up.' 'Decision by 3 p.m.: expert retainer, 6,200 dollars.' 'Quick question.' 'At risk: Meridian filing, courier delayed.' 'Re: Re: Fwd: Re: Thursday.'",
   "teaser": "Two of those get opened. But this isn't only about email. There's one place you use BLUF that most people never think of, and you'll use it before lunch.",
   "why": "Bottom line first works everywhere: emails, chat messages, status updates, voice notes and phone calls.",
   "talk": "It isn't just an email trick. On a call, it sounds like 'Quick one: I need a yes or no on the retainer.' In a chat message, it's the first line. In a subject line, it's a label and the topic. A good rule of thumb: on a phone screen, the first eighty characters should tell the whole story.",
   "walk": [
    "First, put the bottom line in the subject or first line, with a label like Decision, FYI, Action Taken or At Risk.",
    "Next, add one line on why it matters today, usually the deadline or the consequence.",
    "Then, give only the details needed to act, in short points.",
    "After that, close with the next step and who owns it, and attach the background instead of pasting it in.",
    "Finally, check the preview: would the first line alone make sense on a phone?"
   ],
   "jargon": [
    {
     "term": "Brief (legal)",
     "hint": "a written argument filed with the court"
    },
    {
     "term": "Status label",
     "hint": "a tag like On track, At risk, FYI or Decision"
    },
    {
     "term": "E-filing",
     "hint": "submitting court documents online"
    }
   ],
   "story": "A common first-week story: an attorney sent a voice note from an airport asking whether a brief was filed. His assistant sent back a two-minute voice note explaining the whole afternoon. He was boarding and stopped listening after twenty seconds, then spent the flight worrying. 'Yes, filed at 3:40, confirmation in your inbox' would have taken four seconds.",
   "ask": "[Name], what's a subject line you've seen recently that told you absolutely nothing? [Name], how would you rewrite it?"
  },
  "p2": {
   "why": "Lead with where things stand, not with the story of how they got there.",
   "talk": "Compare two subject lines: 'Following up' versus 'Decision by 3 p.m.: expert retainer, 6,200 dollars.' Only one of them gets answered. Status updates work the same way. 'On track: filed today, confirmation attached.' Or 'At risk: courier delayed, new arrival 4 p.m., backup ready.' This also fits with ACT: when we acknowledge a request, the restated ask goes first.",
   "walk": [
    "First, make subject lines carry the bottom line too.",
    "Next, start status updates with the status: on track, or at risk.",
    "Finally, use BLUF and ACT together, with the restated request right at the top."
   ],
   "contrast": {
    "lazy": "Subject: 'Update.' Body: 'So the courier called and there's been a bit of a delay, I'm looking into it...'",
    "excellent": "Subject: 'At risk: filing due 5 p.m., courier delayed.' First line: 'Backup ready: I'll e-file at 4 if the courier isn't at court by 3:30. No action from you.'"
   },
   "outcome": "A filing at risk is exactly when the executive needs to know fast and decide nothing, or decide quickly. A buried status means he finds out at 5:01 that it's missed. Bottom line first, with the backup named, keeps the deadline met and the case intact.",
   "ask": "[Name], pair up with [Name]. Take a real message you sent recently and rewrite its subject and first line with the bottom line first. Then read me before and after out loud.",
   "mystery": "The case of the 5 p.m. filing. It's 2 p.m., and a filing due at 5 p.m. is at risk because the courier is delayed; your backup is e-filing. At 4 p.m., Elias also sends a voice note asking whether the Meridian brief was filed (it was, at 3:40). In pairs, three minutes: bring back the subject line and first line of the status update, and say your voice-note reply out loud in under ten seconds."
  }
 }
});
