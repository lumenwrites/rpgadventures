// Note: Text that comes after "//" is ignored, which allows you to write notes (like the one you're reading now!)

type = Characters
num = 1


title
  Pitchstorm

output
  [Characters.selectMany(num).joinItems("<br><br>")] ^[type == "Characters"]
  [Plots.selectMany(num).joinItems("<br><br>")] ^[type == "Plots"]
  [Notes.selectMany(num).joinItems("<br><br>")] ^[type == "Notes"]
  [Awards.selectMany(num).joinItems("<br><br>")] ^[type == "Awards"]
  [Characters] [Plots]<br><br>[Notes] ^[type == "CPN"]

Awards
  [Profession.titleCase] Choice Awards
  [ML] [Obv] Wish Fulfillment
  [ML] [PlotAdj] [Genre.titleCase] Setting^25
  [ML] Merchandise Potential
  [ML] {Unexpected|Expected} Twist
  [BW] Movie to Show to Your [Animal.titleCase]
  [ML] [PlotAdj] Storyline
  [HL] Grossing in [Country]
  [ML] Abrupt [Point]
  [ML] [Obv] {Religious|Political|Environmental} Message
  [ML] [PlotAdj] [SceneType] Scene^10
  [ML] Product Placement
  [ML] {[PlotAdj]|[Obv]} [Point]^25
  [BW] Use of [PubFig] Voice Over
  [ML] Believable Premise
  [HL] Rated by the {NRA|ACLU}
  [BW] Use of [PubFig] in a Film
  [BW] Movie to Launch Into Space and Show to Aliens
  [ML] [PlotAdj] Reimagining of [Creature.titleCase]s^10
  [BW] {Substitute|Replacement|Competition} for [Show]^25
  [HL] Rated by {Frat Bros|[Profession.titleCase]s}^25
  [ML] Likely to Make {Men|Women}'s Rights Activists {Happy|Angry}
  [ML] [PlotAdj] Character Deaths^10
  [ML] [PlotAdj] Soundtrack^10
  {Biggest|Smallest} Opening Weekend
  {Longest|Shortest} [SceneType] Scene
  [ML] [Emote] Movie of the Year
  [BW] Movie to Watch Alone at Night
  [HL] Rated by the Society of American [Profession.titleCase]s
  [ML] [PlotAdj] {Lead|Supporting} Actor^10
  [BW] Use of the Slender Man in a Film
  [ML] [PlotAdj] Use of the Word 'Belgium' in a Serious Screenplay^10
  [ML] [PlotAdj] Shots of Food^10
  [ML] Diverse
  [ML] [CharAdj.titleCase] [Role.titleCase]^25
  [ML] [PlotAdj] Lighting^10
  [ML] Gratuitous {Violence|Kissing}
  Teen Choice Awards
  [ML] [PlotAdj] Special Effects^10
  [BW] Use of [Fruit.titleCase]s
  [ML] [CharAdj.titleCase] {{Lead|Supporting} Character|[Role.titleCase]}^25
  [ML] [PlotAdj] Opening Scene^10
  [ML] [PlotAdj] Depiction of {Tax|Marriage|Copyright} Law in a Film^10
  [ML] [PlotAdj] [SceneType] Scenes^10
  [HL] Grossing in [State]
  [ML] Educational
  Tween Choice Award: [HL] Rated by Audiences Ages Ten to Twelve
  [BW] {Video Game|Book} Adaptation
  [ML] Toys Sold at McDonald's
  [BW] Movie to Base a New Religion On
  [HL] Budget
  [ML] Patriotic
  [ML] Vomit Inducing
  Your [Relative]'s Next Favorite Movie
  [BW] Date Night Movie
  [BW] Movie to Watch on an Airplane
  [ML] Likely to Have a Sing-Along Cult Following
  [ML] [Emote] Villain or Monster
  [BW] Movie to Show in Bible School
  [BW] Use of Explosions
  [BW] Use of Puppets
  [BW] Use of a {Boat|Train|Helicopter|Airplane|Bulldozer|Zamboni Machine} in a Movie
  [ML] Scientifically Accurate
  [ML] [PlotAdj] Monster^10
  [ML] [PlotAdj] Movie of the Year^10
  [BW] Movie to Watch With Your [Relative.titleCase]
  [ML] Historically Accurate
  [ML] Likely to Anger the Gods
  [BW] Use of Cheese in a Film
  [BW] Original Score
  [BW] Movie to Show in [Subject.titleCase] Class
  [BW] Creature Design
  [ML] Hidden Easter Eggs
  [ML] Fashionable Costumes
  Grandparent's Choice Award: [HL] Rated by Audiences Over Sixty-Five
  [a=Animal.evaluateItem.titleCase]'s Choice Award: [HL] Rated by [a]s
  [BW] Use of a Talking [Animal]
  [ML] Cute Animated {Lead|Supporting} Characters
  [ML] [PlotAdj] Star Cameos^10
  [BW] Use of a Falling Anvil
  [BW] Use of Adorable Animals
  [BW] Character Catchphrases
  [BW] Movie to Watch {Drunk|High|Sober}
  [ML] "{Millenial|Boomer|Generation Y}" Movie of the Year
  [BW] Use of Hats in a Film
  The [PubFig] Choice Award
  [BW] Character Development
  [BW] Movie to See on {Halloween|Christmas|Easter|Thanksgiving|{Father|Mother}'s Day|Saint Patrick's Day|April Fool's Day}
  [ML] [Profession]s in One Scene
  

Emote
  Sad
  Happy
  Scary
  Lonely
  Angry
  Stupid
  Dumb
  Smart

Point
  Beginning
  Ending
  Middle
  High Point
  Low Point
  {First|Second|Third} Act

SceneType
  Action
  Chase
  Death
  Dramatic
  Romantic
  Fight
  Battle
  Kissing
  

PlotAdj
  Ambitious
  Artistic
  Beautiful
  Bloody
  Clichéd
  Compelling
  Confusing
  Crazy
  Creative
  Eclectic
  Epic
  Exciting
  Funny
  Innovative
  Inoffensive
  Memorable
  Offensive
  Quirky
  Unexpected
  Unique
  
  
ML
  Most
  Least

BW
  Best
  Worst

HL
  Highest
  Lowest

Obv
  Obvious
  Subtle
  Blatant
  Understated
  Overstated
  Satisfying

Show
  48 Hours
  60 Minutes
  Alfred Hitchcock Presents
  America's Funniest Home Videos
  American Idol
  Are You Smarter than a 5th Grader?
  Batman
  Bewitched
  Bonanza
  Candid Camera
  Cheers
  CSI: Crime Scene Investigation
  Dancing with the Stars
  Dave's World
  Deal or No Deal
  Dennis the Menace
  Designing Women
  Doogie Howser, M.D.
  Dr. Quinn, Medicine Woman
  Dragnet
  Flipper
  Friends
  Family Matters
  Fear Factor
  Full House
  Game of Thrones
  Get Smart
  Gilligan's Island
  Green Acres
  Grey's Anatomy
  Gunsmoke
  Happy Days
  Hell's Kitchen
  Home Improvement
  House
  I Dream of Jeannie
  I Love Lucy
  JAG
  Lassie
  Law & Order
  Law & Order: Special Victims Unit
  Little House on the Prairie
  Lost
  M*A*S*H
  MacGyver
  Major Dad
  Malcolm in the Middle
  Matlock
  Mission: Impossible
  Monday Night Football
  Mork & Mindy
  Murder, She Wrote
  Murphy Brown
  My Three Sons
  Name That Tune
  Newhart
  Northern Exposure
  NUMB3RS
  Once Upon a Time
  Perry Mason
  Petticoat Junction
  Rawhide
  Rescue 911
  Scrubs
  Seinfeld
  Sunday Night Football
  Survivor
  Tarzan
  The $64,000 Question
  The Addams Family
  The Amazing Race
  The Andy Griffith Show
  The Apprentice
  The Bachelor
  The Bachelorette
  The Beverly Hillbillies
  The Big Bang Theory
  The Bionic Woman
  The Cosby Show
  The Dick Van Dyke Show
  The Ed Sullivan Show
  The Flintstones
  The Fugitive
  The Golden Girls
  The Incredible Hulk
  The Lawrence Welk Show
  The Lone Ranger
  The Munsters
  The Nanny
  The Price is Right
  The Roy Rogers Show
  The Simpsons
  The Six Million Dollar Man
  The Waltons
  The West Wing
  The Wonder Years
  The X-Files
  Thursday Night Football
  Touched by an Angel
  Walker, Texas Ranger
  Who Wants to Be a Millionaire


Notes
  But what if the [Role] was slowly turning into {a} [Animal]?
  Look, we don't really care about the plot. Just add a bunch of sweet hip-hop dance-offs.
  What if the [Role] got eaten by {a} [Animal]...in the middle of a big speech!
  Can we give the [Role] a split personality? That never gets old!
  We need to get those Twilight fans. Let's add a supernatural love triangle! Use {a} [Creature].
  What if the [Role]'s {right|left} {hand|foot|eye|brain} was possessed by {the Devil|[PubFig]}? Also, make them {a} {stoner|[Profession]}.
  What if the main characters were all school {boys|girls} from [Country] on a class trip?
  Maybe this needs a bunch of [Align] [Creature]s?
  What if the [Role.selectUnique(2).joinItems(" and the ")] both have moms named Martha?
  What if every character died by the end of the movie... Every character.
  Needs to be more "woke." Which is either something to do with social justice or insomnia awareness; we aren't sure, so let's do both.
  [Idea] But what if we actually split this movie into three movies. What would part {one|two|three|four} look like?
  [Idea] But can we add one more human [Animal]?
  Do you think we can replace every conflict with a dance-off?
  Soooo... We only have a ${10-500} special effects budget. How can you make that work?
  Needs more woodland critters.
  Can we make the [Role] more endearingly clumsy?
  Can we do {half|{1-2}/3|{1|3}/4|{1-4}/5|{1|5}/6|{1-6}/7|{1|3|5|7}/8|{1|2|4|5|7|8}/9|{1|3|7|9}/10|{1-10}/11|{1|5|7|11}/12|{1-99}%} of this movie in {claymation|animation|computer animation|black and white|[Country]}?
  We don't just want a happy ending. We want a sappy ending. Make it happen! Or should I say, make it sappen!
  What if this were {a} [Genre] film? Those are hip now, right?
  What if this whole story took place at {a} [Business]?
  I've got to be honest with you. I don't think there are enough {[Animal]s|[Creature]s|[Profession]s} in this movie.
  Let's try setting this in {a} [Business] from the future.
  Honestly, we're making this for late-night tv. We just want this movie to put people to sleep.
  What if the monster was played by a hand puppet? There is a monster, right?
  How can we make a {tank|box|cage|house|trailer|swimming pool|[Business]} full of [Animal]s central to the final fight?
  What if the [Role] was a robot that could transform into a car?
  What if all the characters are lost in a dangerous {cave|jungle|forest}?
  Good news: [PubFig] is willing to play themselves in this film.
  What if the main characters have to rescue a kidnapped {prince|princess|king|queen|[Creature]}?
  What if all the characters worked in the circus?
  What if all of the characters were trapped by a blizzard?
  No time for drama. Get straight to the [Scene]s!
  What if all the characters were secretly {worshipping |consorting with |turning into |}[Creature]s?
  But how can we make this appeal to {Trump|Obama|Clinton|Bush|Reagan|marijuana|assisted suicide|{First|Second|Third|Fourth|Fifth|Sixth|Seventh|Eighth|Ninth|Tenth} Amendment} supporters?
  What if this was actually a kid-friendly spin-off to ___? (Choose another previously pitched movie.)
  Let's make all of the characters {grade school-aged|teenaged|young adult|middle aged|senior citizen} {white|black|Hispanic|Canadian|Latino|Caucasian|African-American|Chinese|Japanese|Korean|Mexican|Russian|German|French|British|Scottish|Welsh|American} {males|females}. That's an underserved demographic.
  Let's make this a hip-hop musical just like Hamilton! Everyone loves Hamilton!
  [Idea] Let's set this whole thing on the international space station.
  What if this was the secret true story of {the Loch Ness monster|Bigfoot|chupacabra|[PubFig]}?
  What if the [Role] is literally a fish out of water? Like in those Nemo movies.
  We need to keep this movie rated {G|PG|PG-13|R|NC-17}. Is that going to be a problem?
  Who would you have voice the talking [a=Animal.selectOne.evaluateItem]? Also, add a talking [a].
  What if the [Role] was {a} [c=Creature.selectOne.evaluateItem]... But they didn't know they were {a} [c]!
  Love it. But what if we add some crazy slapstick comedy?
  The [Role]'s backstory needs some work. Can we blame it on {science|magic|technology|the {Republicans|Democrats}|[PubFig]}?
  Let's set this on {the moon|Mars|Mercury|Pluto|Neptune|Uranus|Jupiter|Saturn|Venus}!
  What if the whole plot were centered around {a} [Sport] competition?
  How can we change the theme of the movie to be "love {heals|causes} all wounds?"
  Can this be a retelling of {Romeo and Juliet|Hamlet|Macbeth|A Midsummer Night's Dream}? People love those!
  This really needs to end with a wedding. Everyone loves weddings!
  You know what's hot right now? Teen pregnancy. Can we work one of those in somehow?
  Add some [Creature.selectUnique(2).joinItems("s and {fire|ice|lightning|water|earth|air|acid|poison} ")]s. People go crazy for that stuff!
  What if the [Role] dressed up like {a} [Animal] to fight crime?
  Let's add some [Creature]s.
  What if all the characters were in {{grade|middle|high} school|college|prison|the hospital|[City]|[Country]|[State]}?
  The writers are on strike. So we're going to need to make this a low-budget sing-along. Cool?
  I think this could really use {a} [Creature] invasion in Act Three.
  How can we make this the next big {pirate|robot|zombie|vampire|wizard} franchise?
  What if the [Role] had a nuclear bomb strapped to them? That would be more exciting, right?
  Can we make this whole story take place in one room? We don't have any money to spend on locations.
  Great, but what if the whole thing was set on {a} {airplane|blimp|zeppelin|submarine|train|space ship|elevator}?
  Add more dads; we want this to be the perfect Father's Day movie.
  Add more moms; we want this to be the perfect Mother's Day movie.
  The characters need more superpowers. Also, let's make the superpowers more realistic.
  What if we set this during the [Time] instead?
  What if the [Role] could talk to {animals|[Animal]s}? But has to keep it a secret!
  Let's add some {happy|angry|sad|annoying|singing|{red|orange|yellow|green|blue|indigo|violet|pink|sparkly}} [a=Animal.selectOne.evaluateItem]s. Kids love [a]s!
  Let's add some cancer, but don't make it a big deal. We don't want this to be a downer.
  We want to stay with the trends, so can you make this movie be sort of a cross between ___ and ___ ? (Choose two previously pitched movies.)
  But what if the [Role] was actually a very {sorry|happy|angry|confused} [PubFig]?
  The [Role] needs to be an all-American hero. {He|She} has good looks, makes friends, and also maybe is {a} [Creature].
  What if the [Role] was obsessed with {[Sport]|(choose a hobby)}? That would be quirky, right?
  Can we make all the characters do the time warp again? But in a way that won't get us sued.
  I think we need to start with a more {tragic|epic|upbeat|complicated|confusing|simple|realistic} origin story.
  Can you add {a} [Align] {bed|chair|couch|microwave|kitchen|bathroom|toilet|bathtub} that eats people? No one expects that!
  [Idea] But what if the monster lays eggs in Madison Square Garden. How do the heroes deal with that?
  But what if this were set in a dystopian future where kids fight to the death on a reality tv show?
  This doesn't feel "dope" enough. How can we add more "urban culture?"
  Let's make this a WW{I|II|III|IV} movie.
  Add {a} [Animal] and have it get killed. People love that!
  What if the whole movie was one giant [Scene] scene?
  I think it needs about {2-7} more {car|train|helicopter|airplane} chases.
  You know what everyone loves? [a=Animal.selectOne.titleCase]s. How can we get [a]s in this movie?
  Let's do this whole movie with puppets!
  Let's have the characters adopt {a} [a=Animal.selectOne] together! Everyone loves [a]s!
  How many [Scene]s scenes can we cram into this movie?
  What if the [Role] was just in one of those "viral videos?" How could you work that into the plot?
  What if all the characters are played by animated fruits and vegetables? You could have Bob the [Fruit.selectUnique(2).joinItems(" and Larry the ")]. But obviously change the names so we don't get sued by Veggie Tales.
  Honestly, I think it's too funny. Can you try a more serious take?
  What's the coolest thing in this movie that we could sell as a toy? Great! Now put that in every scene.
  Can we add one more [Animal] swarm?
  We think this could use a giant mechanical [Animal] at the end of the movie.
  What if the [Role] were the captain of an interstellar space ship?
  How can we make [Animal] repellant central to the plot?
  What if the opening scene was the invasion on D-Day? But also with {a} [Scene].
  Can you work in a talking [Animal] as the mentor?
  We want some really cool 3D scenes for this. What can we make pop out at the crowd?
  Cool, but what if they were all {babies|teenagers|retirees|[Animal]s|[Creature]s}?
  But what's the lesson from the movie?
  Cool, but we want this to be the perfect {New Year's Day|Martin Luther King Jr. Day|Memorial Day|Independence Day|Labor Day|Veterans Day|Thanksgiving|Christmas|Father's Day|Mother's Day|St. Patrick's Day} movie.
  Can we set the whole thing on a derelict space station?
  Good news! I have a friend in [c=Country.selectOne] who wants to be an actor. So we're going to be filming on location there. What [c]-related things can we add to make it relevant? Also, my friend needs to play the [Role] and {he|she} doesn't speak English.
  What if we replace the climax of the movie with {a} [Scene]?
  We really don't like your actor's teeth. Can you just film them from the nose up?
  [Idea] Let's set this on the Titanic.
  What if the [Role] uses a Samsung Galaxy to save the day? We have a deal with Samsung.
  How can we make fidget spinners central to the plot?
  We need more {60|70|80|90|2000|2010}'s pop culture references. Nostalgia is super hot right now.
  What if we set this story in Wonderland?
  Let's replace all of the characters with action figures from the '{80|90}s!
  [Idea] What if the [Role.selectUnique(2).joinItems(" was really the ")] all along?
  We're going to need to use up these {3-100000} gallons of fake blood.
  [Idea] Let's add [character] as the [Role].
  Let's give the [Role] a {chainsaw|axe|sword|knife|hook|bottle opener|screwdriver|hammer|blender} for a hand!
  [Idea] Let's replace the [Role]'s leg with a {machine gun|rifle|laser gun|phaser rifle|lightsaber}!
  What if we add a killer turkey? And set the story on Thanksgiving.
  We're going to need to see a lot more male nudity in this movie. #feminism, am I right?
  What if we set this at a high school for super{heroes|villains|spies}?
  Can we add a bunch of alternate reality versions of the [Role]?
  [PubFig] wants to play the [Role]. Can you make that work?
  What if we added a monster trying to kill the main characters in their dreams! But totally different from Friday the 13th of course.
  I have a ceremonial dagger from an old movie that I really want to be the "point" of the script. Get it? Haha! But seriously.
  We need to cast [PubFig] as the [Role]. Sorry.
  We have a deal with {Pizza Hut|Dominos|Little Caesar's|Pizza Pie Cafe}. So how can we make this about pizza saving the day?
  Can you give all the characters superpowers?
  I think it needs more [a=Creature.selectOne.evaluateItem]s. But not dumb [a]s... Cool [a]s... You know?
  What if all this was taking place in a {dream|simulation}?
  What if the [Role] was a kid whose parents just died? People love that.
  We just signed [PubFig] to play the [Role]. Make sure it's a good part for them.
  [Idea] I think we should add a demon [Animal] that barfs blood on everyone.
  This is great... But where's the [Scene]?
  What if exactly {half|{1-2}/3|{1|3}/4|{1-4}/5|{1|5}/6|{1-6}/7|{1|3|5|7}/8|{1|2|4|5|7|8}/9|{1|3|7|9}/10|{1-10}/11|{1|5|7|11}/12|{1-99}%} of the characters all die at the end?
  What if all the characters were {freshmen|sophomores|juniors|seniors} in {high school|college}?
  Our foreign market loves [Genre.selectUnique(2).joinItems(" and ")]. How can you add more of both?
  Let's make the [Role] a baby version of what you're talking about. Babies are creepy!
  Let's switch things up and make ___ the main character. (Choose a minor character the player has mentioned.)
  What if the [Role] had {2-12} kids?
  [Idea] But we need this movie to have a {positive|negative} message about cyberbullying.
  What if the [Role]'s superpower was talking to [Animal]s?
  Let's set this at a crazy bachelor{ette|} party!
  [Idea] But it needs more (choose an activity).
  How can we turn this into a line of Happy Meal toys?
  Let's add exploding popcorn to every romantic scene. Let's also add some more romance.
  It needs more [Genre]. Just, not in a stereotypical way.
  [Idea] But what if the [Role] was actually working for soviet Russia?
  Gotta be honest. This sounds really bad. So we want to make a documentary about you making your movie. Who do you think should play you?
  [Idea] I think we need more memes. {Kids|Teens|Millenials} love memes.
  Can we make this based off of true events?
  What if we set this story on the first human colony on {Mars|the moon|Jupiter|Neptune|Uranus|Pluto|Mercury|Saturn|Venus|a distant planet|a Dyson sphere}?
  Let's add {a} [Creature] invasion in Act {One|Two|Three}.
  We only have enough money in the budget for one actor. Is that going to be a problem?
  This movie needs more roller skating and kung fu.
  What if we add an invisible talking [Animal] that only the [Role] can see?
  Can we add at least one dinosaur? Maybe {a} [Dinosaur]?
  Let's {try|set} this during {the Cold War|the Iraq War|WWI|WWII|WWIII|WWIV|the Vietnam War|the Revolutionary War|the Civil War}. Cool?
  What if we replace the [Role] with [PubFig]? We hear they're looking to act.
  Can we give the [Role] a pet [Animal]?
  Let's set this story in [Animal] heaven.
  What if every character was {a} [Profession]?
  Let's add an affair between {a} {teenage|young adult|middle aged|old} {male|female} and a hot [Profession].
  Let's add [character] (who is super [Align]) as {a} [Role].
  What if they tried to bond with their estranged [Relative] through {{arm|Greco-Roman|freestyle|jello} wrestling|[Sport]}?
  Let's add {a} [Scene] somewhere in Act {One|Two|Three}.
  Let's break with the traditional three act structure. This movie should have {4-6} acts!
  Can we make this a sequel to ___ ? (Choose another previously pitched movie.)
  [Idea] We want to cast a hologram of [PubFig] as the [Role].
  How can we turn this into the next {Godzilla|Spiderman|Fantastic Four|Hulk|Reboot} reboot?
  What if the [Role] got their superpowers from ___ ? (Choose a corporate sponsor.)
  What if the main character was a dashing and handsome studio executive?
  How can we change the theme of this movie to be: "You need to buy more things to be happy."
  We need at least {two|three|four|five} more makeovers in this movie.
  [Idea] But it needs to end with a big declaration of love speech. How would that go? Recite it. Now.
  Can we add a creepy {man|woman|boy|girl} who wants to replace your eyes with buttons?
  What if the [Role] was actually {a} [Animal]? Crazy twist, right?
  What if we make the [Role] a racist {grandma|grandpa|uncle|aunt|mom|dad}? Those are "in" right now.
  Can we add some edgy racial tension? That's in the zeitgeist right now.
  We'd like this movie to feature some native culture from [Country]. Not sure what that entails, but add some in, okay?
  But what if we add {a} [Scene] on page {1-120}?
  But what if we cast [PubFig] as the [Role]?
  Can we do this whole movie with puppets? Actors make me nervous.
  I think we need more {tornadoes|floods|hurricaines|earthquakes|wildfires|cyclones|[Creature] invasions} in this movie.
  What if the whole plot was centered around a huge {chess|checkers|poker|blackjack|Monopoly|Scrabble|video game} tournament?
  Too mature. We're aiming at the "under 3" crowd.
  What if the [Role] had a secret pet {dragon|gryphon|pegasus|unicorn}?
  My {4-10}-year-old {niece|nephew} would be perfect for the [Role].
  Let's set this in Jane Austen times. Ladies (18-35) love those dresses!
  How can we tie this into the Lego Movie franchise?
  What if the main character got super buff by eating [Fruit]s?
  [Idea] But it seems a little unrealistic, how can we keep it grounded?
  What if they were both secret agents... But they didn't know they were both secret agents!
  How can we work in a dangerous [Creature] disguised as {a} [Animal]?
  What if the [Role.selectUnique(2).joinItems(" and the ")] were related somehow, but didn't know it?
  Let's set this in cancun. I need a vacation.
  What if the [Role] was actually a [CharAdj] {[Animal]|[Creature]}?
  Let's make this the next Smurf movie.
  How can we make this the next movie in the (choose a franchise)?
  How can we tie this in with the Harry Potter franchise?
  Can the [Role] be an old [Profession] obsessed with kidnapping {princes|princesses}?
  Can we make this story an allegory for {gun control|drug addiction|unemployment|the health care crisis|illiteracy|government corruption|religious conflicts|poverty|income inequality|racism|bigotry|discrimination|war|climate change|first world problems}?
  What if the [Role] needed to overcome their fear of [Animal]s to save the day?
  Let's try adding {helmets|headbands|gloves|glitter|fancy boots|cowboy hats|technology|stripes|polka dots} to all of the costumes.
  Let's cast a star and have them die in the first act!
  It needs more {Instagram|Facebook|Twitter|MySpace|TikTok}. My assistant tells me that's in with the kids.
  We definitely need to set the big massacre at the prom. Also, add a big massacre.
  Let's give this story an antihero. The goths love that stuff.
  I think this [Role] needs to be {more|less} {sympathetic|realistic|stereotypical}.
  Can we make this an adaptation of a board game?
  Let's set the whole story in a hot tub.
  What if the story was actually about repopulating the world after the apocalypse? Hot, right?
  Can we make this movie about a giant [Animal] invasion from another dimension?
  Not enough kissing. We need kissing in every scene!
  [Idea] But we really want this to appeal to families with young kids.
  If we make this a franchise, what will the next movie be about?
  What if this was all in the [Role]'s head? Or was it?
  [Idea] Let's try swapping the [Role.selectUnique(2).joinItems(" and the ")].
  Let's add a genocidal A.I. Those are hot right now!
  [Idea] But what if everything you've said so far was just a flashback before the main story?
  What if the [Role] was addicted to catnip?
  What if all the characters were [p=Profession.selectOne.evaluateItem]s? [p.titleCase]s are cool!
  How can we make this into an Incredible Hulk reboot?
  We want to film this in smell-o-vision. What sort of smells can we add?
  How about we add a giant swarm of [Animal]s?
  What if we set this back in Biblical times?
  [Idea] Every character is going to be played by [PubFig].
  Werewolves have been done before. But what if we added a were[Animal]?
  What if we add a creepy [Creature] hunting our main characters?
  Can the [Role] get dumped in the first scene?
  We think this needs to have more [c=Creature.selectOne.evaluateItem]s. Add more [c]s please.
  We loved that Avengers movie so we want to turn this into a big crossover with ___. (Choose a popular franchise.)
  Can we give every character a secret identity?
  We want this movie to be super smart. So like... Add some {math|science|nerds|gadgets} or something.
  We need at least one thing to explode out of someone's chest.
  What if the [Role] started killing people and cooking them into pies?
  Let's set this during the purge.
  What if we make this a horror movie about minorities taking our jobs?
  What if everything you just said was actually the setup to an elaborate heist?
  What if the [Role] only had {3-40} days to live?
  Can this whole story be centered around a creepy circus?
  Let's make the main character {a} [Animal]-person diguised as a human.
  Girls love princesses. Can we make every character a princess?
  What if they were on a superhero team with [character.selectMany(2).joinItems(" and ")]?
  Let's add a sassy best friend!
  Two words: Black Dracula.
  Can you add a bunch of super adorable side-kicks? Like those little yellow minion guys.
  Can we kill off the main characters in a really surprising twist? It worked on Game of Thrones!
  How can you make this about 9/11? We want middle America to watch this movie.
  Let's set this on Coney Island... And make it an opera!
  What if the main character's best friend is secretly... {God|[God]}.
  What if the main character was allergic to bees? And the villain kills people by putting cages of bees on their victims' heads!
  What if the main character was in love with a [Creature]?
  We need a steamy romance scene every {5-15} minutes. Keep it rated {G|PG|PG-13|R|NC-17}, though.
  I think it's missing something. How about: [Plots]
  What if we make the villains a bunch of child soldiers?
  What if the [Role] was actually trying to escape a blood-thirsty cult?
  What if we set this whole thing on a camping trip gone wrong?
  Hold on, I have so many ideas for this one!<br>1. [Plots]<br>2. [Plots]
  What if we add a whole bunch of evil ghosts like that kid from The Grudge?
  We love what ___ did in that movie, can you make this movie more like theirs? (Choose a player's previously pitched movie.)
  What if the [Role] was trapped in a {tower|dungeon} by their overbearing [Relative]?
  What if every scene took place in a [Business]? That would keep things interesting!
  What if the [Role] died and came back to life as a snowman?
  I don't get it... Can we add a scene where the [Role] explains the whole plot?
  This movie needs {more|less} cannibalism.
  We think this needs more jump scares. Like at least one every {5-15} minutes.
  What if the [Role] has a talking [Animal] that gives them advice on their love life?
  Add a love interest and have them die. We want this to win an Oscar.
  What if the [Role]'s best friend was a mysterious [CharAdj] [Profession]?
  I think it's missing something. How about we add: [Plots]
  Can we add {a} {piano|oven|lawnmower|television} that eats people?
  You know what's hot right now? Heroine addiction.
  Let's add redneck Jesus as a supporting character.
  [Idea] Let's make this a rock opera!
  Can we add a giant man-eating [Creature] at the end?
  Every object needs a face and a personality.
  Kill the parents.
  What if the [Role] gave {his|her} {voice|sense of humor|sight|hearing|memories|{left|right} {arm|hand|ear}|fortune|health|soul} to {a} [Creature] in exchange for a nice pair of legs?
  What if the [Role] was trying to flood the earth to create more beachfront property?
  What if the [Role] was actually under Russian hypnosis? Cool twist, right?
  What if the [Role] was a sleeper agent for [Country], but didn't know it?
  What if we set this in a future where ___ is the world's most valueable resource? We have a deal with them. (Choose a type of candy.)
  We really want this [Role] to appeal to moms. How can you make that happen?
  What if the [Role] was just adopted by a sinister millionaire?
  Let's add a {wicked|[Align]} step{mother|father}. They make great [Role]s!
  Can we make this the next movie in the "Speed" franchise?
  Add a really hot love interest for the [Role]. We want this to be the perfect date-night movie.
  What if this whole story was set in an escape room?
  Let's make sure we cast {a} {handsome|beautiful|hot|attractive} {white|black|Asian|Hispanic|Caucasian|European|Indian} {man|woman} in every role.
  People love Shark Week! Let's add more sharks!
  Let's add one of those "race to the {airport|{train|bus} station|[Business]}" scenes. You know what I'm talking about!
  Let's add a giant [CharAdj] [Animal]. It makes sense if you've read the comics.
  Let's add at least one explosion in every scene.
  Can this whole story take place on a {plane|train|bus|cruise ship} full of [Animal]s?
  What if we tell the story backwards? We want this to win at Sundance.
  We really want more plot twists here... Like one every {2-20} minutes at least.
  Two words: {Laser|Nuclear|Shadow|Fire|Water|Lightning|Acid|Poison|Ninja|Pirate|Zombie} {[Animal]s|[Creature]s|[Profession]s|[PubFig]}
  New pitch: Everyone is a hot [Creature]!
  Set it in space. Add a bunch of laser {swords|pistols}. What would that look like?
  Too much blood! Let's replace all the villains with robots.
  Great news! We have a grant to film this whole movie {at the {North|South} Pole|in [Country]}.
  [Idea] But I want to be in it. Make me the [Role].
  Let's add some scary [Animal]s!
  [Idea] Only make it a musical where everyone is pregnant.
  You know what's hot right now? [Genre.titleCase]! Let's do that.
  [Idea] I think we could turn this into a sort of [Genre.selectUnique(2).joinItems("/")] hybrid.
  What if the [Role] was actually Dracula?
  We're aiming for the NC-17 audience with this one.
  People love {Pokémon|Legos|Transformers|Marvel}. How do we make this more like that without getting sued?
  Can you cast my two creepy [Relative]s as the [Role]s? They really need this.
  We want this movie to appeal to [Profession]s. How will you make that happen?
  Two notes: Let's make this a romance. And add {a} {swarm|herd|pod|flock|school|murder|parliament} (is that the right word?) of [Animal]s attacking and killing people.
  What if all the main characters were black people wearing "white face?" #equality
  Can this whole movie take place at {sunrise|sunset|noon|midnight|{1-12} {am|pm}}?
  [Idea] But we want this to be a crossover event with ___ . (Choose a previously pitched movie.)
  Add some trippy [a=Animal.selectOne.evaluateItem]s to scare the kids. We love [a]s!
  What if the [Role] was actually a killer doll?
  So I had this dream: The [Role] kills {a} [Animal], hides in its carcass, and then gets hit by a car. How can you make that work?
  Let's add {2-7} more [Role]s. That way there's something for everyone!
  Can we make {the Holocaust|9/11|Vietnam|covid-19} {more|less} central to the plot?
  [Idea] But what if the villain was actually just [character] in disguise?
  This isn't working... Let's replace the [Role] with [character].
  What if this took place in a post-apocalyptic wasteland?
  Can you add a bunch of teens that get killed off throughout the movie?
  We're going to do all of the special effects with cardboard and fishing line. Also set it in space.
  [Idea] But what if we set this whole story on a dormant volcano that's about to explode!
  Let's add a crazy {helicoptor|boat|train|car|bicycle|motorcycle|horseback} chase right at the start of the movie!
  Can we replace all the villains with cows? We have a deal with Chick-Fil-A.
  We want to make this a musical. All the characters need to sing.
  I think we need more [Genre.selectUnique(2).joinItems(" elements and fewer ")] elements.
  But can we add some more time travel?
  Let's set this on a spaceship in the future, where the only entertainment is watching terrible old movies.
  What if we set this in the torture dungeons beneath {Disney World|the White House|the Kremlin|Microsoft|Google headquarters|[City]|the [State] capital building|Disney Land|Seaworld|Six Flags|a [Business]}?
  Just got some real bad news. Our star is probably going to {die|quit|move to [Country]} halfway through filming. How can we work around that?
  What if our [Role] dresses up like {a} [Animal] and punches women and children in the climax of the movie?
  What if the lovers were from rival gangs?
  What if we add {3-500} assassins trying to {kill|recruit} our main characters?
  Love it. Now let's work on the sequel.
  What if the whole {city|village|town|country of [Country]|state of [State]|universe|solar system|galaxy|multiverse} were in danger? Can you add that to the [Role]'s plan?
  Can we replace all of the dialogue with the word "dude?"
  What if the [Role] was actually a [Creature] the whole time!
  What if the [Role]s had giant animal-shaped robots they can summon.
  What if the [Role] gets poisoned and goes into a coma?
  What if we set this in Neverland instead?
  Can we destroy an entire {city|country|planet|galaxy|[Business]} during the finale?
  But what if this all took place during a giant [Creature] attack?
  The protagonist needs to have {3-25} [a=Animal.evaluateItem]s. [a.titleCase]s are hot right now.
  [Idea] What if the whole cast was a bunch of talking housepets? The [Role] could be {a} [Animal], for instance.
  [Idea] But I think we need a really catchy song to round this out.
  Let's do this whole thing without {dialogue|actors|visuals|music|sound|a script}. That'd be artsy!
  Let's add [Sport]. It is classic all-American sport.
  What if we set this whole movie in an elevator?
  What if this were actually the true story behind ___ ? (Choose a historical event.)
  What if they've been a [Creature] the whole time!
  Can we set this in the [Time]?
  What if the [Role] became addicted to human flesh? Creepy, right?
  Let's make this a musical set to the music of ___ . (Name an artist.)
  Let's set this whole story in a haunted {hospital|hotel|[Business]}!
  Great, but we want kids to walk away from this movie thinking "smoking is cool." How can we add that?
  What if this was a gritty reboot of ___ ? (Choose another player's movie.)
  Obesity is huge these days. Can we make healthy eating central to the plot?
  Can you make the [Role] a super creepy [Creature]? Those play well in October.
  Let's add like {3-7} more super{heroes|villains|spies}.
  Let's give them an all-powerful genie as a best friend.
  But what if this was a love story, and only one of them was immortal?
  This is fine, but we really need to bring out the leading {man|woman}'s {sensitive|masculine|feminine|compassionate|caring} side. How can you highlight that?
  We don't want to get too political... So can you just make {the Nazis|al-qaeda|the Republicans|the Democrats|the Libertarians|the Bull Moose Party|the Whigs} look good? We don't want to offend anyone.
  How do we make organ theft central to the plot? Could be livers and kidneys and such, or pipe organs, or even both if you want.
  What if the main character had a creepy imaginary [Animal] friend?
  

Scene
  prison break
  {car|truck|airplane|helicopter|train|go-cart} chase
  explosion
  musical number
  identity crisis
  big reveal
  death
  targeted ad
  [Creature]
  {emo|hip-hop|} dance number
  pregnancy
  [Instrument] solo
  fight
  [Animal]
  hospital
  bomb defusing
  first contact
  training montage
  inspirational speech
  

Role
  main character
  protagonist
  sidekick
  love interest
  mentor
  villain
  hero
  lead

Idea
  Crazy idea!
  Crazy idea...
  Oh! I know!
  Great!
  {I|We} love it!
  I'm on board so far.
  Cool.
  Here's a thought.
  I like where you're going with this.
  Oh, I know!
  Hear me out...
  Oh, hey, you're going to love this:
  New idea!
  This is good...
  Love it!
  This is cool.
  Hold on.
  This is great!
  We want to try something crazy.
  Great idea!
  I like this idea.
  Perfect!
  Sounds good.
  Great.

Genre
  action
  adventure
  animation
  biography
  comedy
  crime
  documentary
  drama
  erotic
  experimental
  fantasy
  film noir
  found footage
  historical
  horror
  live action
  musical
  mystery
  post-apocalyptic
  romance
  romantic comedy
  science fiction
  silent
  sports
  thriller
  war
  western

Plots
  hunting for the {killer that murdered|robber that stole from|cult leader that brainwashed} their family.
  leads a slave rebellion in ancient Rome.
  goes from ugly duckling to beautiful swan.
  goes from ugly baby [Animal.selectUnique(2).joinItems(" to beautiful ")].
  fights a gang of bullies at {school|work|summer camp}.
  is held hostage at {a} [Business] run by {mobsters^3|[Profession]s}.
  falls for a {prince|princess} who's really a {[Animal]|[Creature]}.
  races to stop the detonation of a {biological weapon|nuclear bomb} in [City].
  is determined to seduce "the one that got away" at their high school reunion.
  competes in a deadly underground martial arts tournament.
  kidnaps a famous actor from [Country] and forces them to act in their low-budget movie.
  tries to unite all the world's superheroes by becoming a supervillain.
  fights to take down a dangerous cult.
  joins a dangerous cult.
  becomes {a} [Profession] to impress their [Relative].
  falls in love with a merperson.
  accidentally becomes {the Pope|president of [Country]|a god|a superhero}.
  {stranded on a {lifeboat|uninhabited island}|trapped in an elevator} with [character.lowerCase].
  is on a superhero team with [character.selectMany(2).joinItems(" and ")].
  searches for {peace|hope|love|meaning|food} in a dangerous radioactive wasteland.
  struggles to impress their crush without revealing their secret identity.
  raises a child while searching for true love.
  falls in love with a cancer patient.
  discovers the secret world of modern {wizards|witches|warlocks|sorcerers|[Creature]s}.
  battles a swarm of radioactive {mutants^3|[Creature]s}.
  fights to save their family from {demonic possession|[Creature]s}.
  owes money to a drug dealer... swears they just need {{2-45} minutes|{2-12} days|{2-48} hours} to get it.
  accidentally joined a cult on their first day of college.
  (Choose a plot previously pitched by another player. Your movie is a {hilarious spoof of|broadway adaptation of|gritty reboot of|{prequel|sequel} to} their idea.)
  goes on a quest for the {Holy Grail|Ark of the Covenant|Golden Fleece}.
  must protect their small village from a horde of {bandits|[Creature]s|[Animal]s}.
  must defeat a circus full of {cannabalistic|[CharAdj]} [Creature] {clowns|acrobats|stage magicians|[Animal] trainers|[Profession]s}.
  tries to escape from {hell|heaven|purgatory}.
  must defend their family and farmhouse from {a} {child|adult|teenager|[Animal]}-eating {witch|[Creature]}.
  searches for the cure for a deadly plague.
  (Choose the plot to your favorite movie: {Your movie is a gritty reboot of that idea.|This is another sequel to that movie.|This is a prequel to that movie.|This is a remake of that movie with modern special effects.})
  falls in love with a much {older|younger|prettier|richer} {man|woman|[Creature]|small furry creature from Alpha Centauri}.
  (Choose the plot to your favorite {book|video game}. Your movie is an adaptation of that plot.)
  goes undercover in the world of {hip-hop|jazz|heavy metal|blues|pop} culture.
  fights a bitter battle against their former {mentor|student|apprentice|coworker}.
  must team up with their nemesis to fight a greater {evil|good|threat}.
  fights a horde of {cannibal|[CharAdj]} {[Creature]s|[Animal]s} and still finds time to go to the mall.
  seeks shelter from the apocalypse in the dungeons beneath the {White House|Kremlin}.
  goes undercover to infiltrate their favorite boyband.
  accepts an invitation to the world's most {awkward|violent|illegal|prestigious} [Animal] fight.
  fights for their life against a swarm of man-eating [Animal]s.
  fights in bloody gladiator death matches.
  {accidentally |intentionally |}angers a group of [Align] [Creature]s in the wilds of [Country].
  is trapped in {a} [Business] after a deadly mist covers their town.
  falls in love with the {daughter|son} of the leader of [Country].
  struggles to marry off their {2-8} strong-willed daughters.
  competes on a {cooking|baking|trivia|animal training} game show to pay for their {mom's|dad's|sister's|brother's|son's|daughter's} medical bills.
  tries to {scam|bribe|extort} their way to fame in {Hollywood|Bollywood|the BBC}.
  discovers a map leading to a legendary treasure hoard.
  steals a {magical|cursed|worthless} treasure from a {dangerous|friendly} [Creature].
  fights a terrifying [Creature] that lives {under their bed|in their closet|in their basement|under the stairs|in their dreams}.
  falls in love with [character] far {below|above} their station.
  tries to survive the zombie apocalypse by hiding in {a} [Business].
  goes {back|forward} in time to {kill|save|replace} [PubFig].
  goes on the run to escape deadly assassins.
  is haunted by the ghosts of all their exes.
  battles a mysterious monster that can take the form of anything it kills.
  goes on the adventure of a lifetime after the death of their {wife|husband|children|parents}.
  enters a pact to {fall in love|go {skydiving|hangliding|bungee jumping|to outer space|to [Country]}|climb Mount Everest|get in a fistfight|eat a worm} before they turn {12-100}.
  joins a team of [CharAdj] [Profession]s.
  gets pregnant after hooking up with their ex.
  goes on a quest to {slay|befriend|aid} {a} [Creature].
  fights to stop {a} [Align] {AI|[Creature]} from destroying {the prom|[Country]|the economy|the world|the universe|the multiverse|humanity}.
  tries to take down the top [Instrument] player in the band.
  tames a dangerous [Animal] by playing the [Instrument].
  becomes a ninja to rid their city of crime.
  pilots a giant robot to save the world from [Creature]s.
  participates in an athletic event in [Country].
  gets sent {back|forward} in time to the [Time] and {saves the {timeline|world|multiverse}|fights an army of [Creature]s|{meets|kills|teams up with} [PubFig]|nearly dies|never returns home|must find their way home}.
  {leads|joins} the rescue mission for a {missing|runaway|kidnapped} {teen|grandmother|grandfather|pet [Animal]}.
  fights to save {a rare and mysterious animal|[Animal]s} from poachers.
  is abducted by [Creature]s!
  must take down a secret Nazi base {on the moon|in the Arctic|in the Antarctic|deep underground|on {Mars|Pluto|Mercury|Neptune}|in the asteroid belt|in [Country]|in the {forest|jungle|desert|{Pacific|Atlantic} ocean}}.
  struggles to {raise a family|stay alive|run a business|find true love} in the Wild West.
  on a quest for a treasure that will save the {kingdom|city|planet|galaxy|universe|multiverse|village|school dance|economy}.
  fights for their life against a horde of [Creature]s.
  falls in love with a handsome but homeless [Animal].
  gets trapped in the body of {a} [Animal].
  attempts a desperate escape from {Seaworld|Disneyworld|Disneyland|Six Flags|[City]|[Country]|reality}.
  flees from natural disaster in a near-future apocalypse.
  turns to the dark arts to get revenge against the [Sport] team.
  is cursed to turn into {a} [CharAdj] were[Animal] every {full|new} moon.
  plans a heist to steal the {King's|Queen's|prince's|princess's} diamond (choose an item).
  struggles to hold down a food service job at the bottom of the sea.
  seeks vengeance against the criminals that destroyed their life.
  kidnaps Santa Clause in order to understand the joy of Christmas.
  does whatever it takes to get into the world's most exclusive club.
  fights to save their brainwashed {family|parents|children|siblings} from a deadly cult.
  races against [Align] martial artists to collect {3-12} legendary artifacts.
  is stuck in [Time] and needs to get back to the {future|past}.
  competes against the rich kid in a heartwarming underdog story.
  fights in a {boxing|karate|kung fu|ju jitsu|mixed martial arts|martial arts} match against their ultimate rival: [character]
  must stop {a} {child|teenage|incompetent} mayor from bankrupting their hometown.
  wins big at {a} {casino|horse race|[Animal] race|dog fight|[Animal] fight} and becomes a target of the mafia.
  fights to thwart an ancient and unstoppable evil.
  hunts {a} {killer^3|[Profession]} with the help of a {devious|[CharAdj]} {cannibal^3|[Profession]}.
  navigates the secret world of modern [Creature]s.
  must work with their amoral {brother|sister|cousin|uncle|aunt} to save their {kingdom|planet|marriage}.
  is trapped by {a} [Creature] in {a} {{burning|flooding|collapsing} building|elevator|drive-through|closet}.
  borrows money from the mob to fund the {film|vacation} of their dreams.
  fights a gang of super-[Creature]s.
  battles {a} [Align] possessed book in a bookstore.
  battles {a} [Align] [Creature] in {a} [Business].
  outwits gangsters and cops in a series of death-defying car chases.
  discovers the {fountain of youth|holy grail|ark of the covenant}.
  fights against the vengeful ghosts of euthanized shelter pets.
  has a steamy affair with [character].
  falls in love with their {figure skating|ballet|debate|[Sport]} coach.
  tries to save as many people as possible from Nazis during WWII.
  wakes up from a coma in a post-apocalyptic hellscape.
  resorts to cannibalism to survive being stranded in the wilderness.
  fights against a giant {alien^3|[Creature]} literally trying to {eat|disintegrate|enslave} the {world|solar system|galaxy|universe}.
  fights against an {alien^3|[Creature]} warlord trying to {dominate|enslave|subjugate} {the Earth|[Country]|[City]}.
  wages a misguided war against a rival super{hero|villain}.
  is lost in the catacombs beneath Paris with a {killer^3|[CharAdj]} {mime^3|[Profession]}.
  must stop {a} [Align] {wizard|[Creature]} from summoning an army of {the dead|[Creature]s}.
  inherits {a} [Align] {doll|board game|statue|mask}.
  must transport a dangerous criminal across a war-torn city.
  is trapped in a {dark|parody|stupid} version of our own reality.
  falls madly in love with [character].
  must fight [character], who has been transformed into {a} [Creature].
  fights to save their town, [City], from an undead [character].
  discovers a {terrible|wonderful|deadly|spooky|confusing} secret about their own family.
  becomes worshipped as gods by a primitive culture.
  {struggles to make a living|makes a killing|wants to quit their job} as {a} [Profession] to the stars.
  searches in [Country] for a stolen nuclear bomb.
  leads a deadly rescue mission {on Mt. Everest|in the Amazon jungle|in the Sahara desert}.
  tries to escape from the sinking city of Atlantis.
  invents a gadget that will {change|save|destroy} the world.
  must win {a} [Sport] competition to save the world from [Creature]s.
  struggles with the bleak reality of life in the big city.
  tries to capture a giant [Animal] on a mysterious island.
  fights a deadly [Creature] while lost at sea.
  tries to stop {a} [Align] [Animal]-{man|woman} from becoming the mayor.
  is hunted by a murderous [Animal].
  only has one {decade|year|month|week|day} to complete their bucket list.
  discovers a conspiracy of {[Animal] people|[Creature]s} in the government.
  explores a cursed mummy's tomb.
  struggles to woo the love of their life: [Characters].
  embarks on the first human colonization mission to another galaxy.
  learns the true meaning of {life|[Sport]|sudoku|love|the universe|everything|42}.
  hosts a super awkward (choose an event).
  switches {bodies|jobs} with their crush.
  receives an unexpected message from {God|[God]}.
  struggles to plan a huge {wedding|funeral|family reunion} and keep their entire extended family happy.
  is kidnapped by terrorists!
  competes in fast and furious illegal street races.
  fights to survive during an apocalyptic {tornado|hurricane|earthquake|volcanic eruption|typhoon|thunderstorm} filled with [Animal]s.
  embarks on an epic journey to destroy {a} [Align] magical artifact.
  leads a rebellion against a totalitarian regime.
  fights a criminal [Profession] to save their city.
  struggles to adjust to civilian life after returning from the war.
  must protect the world from [Align] transforming robots.
  protecting the world's last [Creature] from {a} [Align] cosmetics company.
  hosts the world's {best|worst} houseguest.
  on a deadly {white-water rafting trip|mountain climbing expedition|cross-country ski trip}.
  fights a huge angry [Animal].
  struggles to rebuild their community after a devastating {hurricane|tornado|earthquake|pandemic|volcano}.
  must save the marching band from a swarm of African bees.
  must impress their fiance's family on a weekend trip.
  trapped in an undersea lab with a mysterious [Creature].
  steals from the rich and gives to the poor and becomes a local legend.
  must win the love of a {prince|princess} before the clock strikes {1-12}!
  attempts to make things right after ruining their best friend's wedding.
  must go back in time to stop their crush from {dating|marrying} the wrong person.
  tries to {disrupt|perform} an occult ritual that will {end|destroy|ruin|explode} the {world|planet|solar system|galaxy|universe|multiverse}.
  must save their {[Relative]|best friend} from the {shadow|fire|water|dream|dark} realm.
  must claim their rightful place as {king|queen} of {Atlantis|Wakanda|[Country]|Mars|Jupiter|Venus|Uranas|Pluto|Neptune|Saturn|Mercury|[City]|the jungle|the forest|the desert|rock and roll}.
  hides from a jealous {king|queen} with {2-15} {elderly|young} {elves|dwarves|satyrs|fauns|nymphs|dryads|ents}.
  trying to {hunt and kill|befriend|prove the existence of} Frankenstein's monster.
  realizes their {{boy|girl|best |only |}friend|[Relative]} is a serial killer.
  abducts unsuspecting {farmers|[Profession]s} for their experiments.
  accidentally summons a {demon|[Creature]} with their {Ouija board|tarot cards|polyhedral dice}.
  tries to save the world from an epidemic that turns people into {zombies|[Creature]s}.
  moves into the house of their dreams.. only to find that they aren't alone!
  makes {contact|a contract} with dangerous {aliens|[Creature]s}.
  crashes their plane in the wilderness of {Canada|[Country]}.
  discovers a {dangerous|wonderful} secret at a popular new theme park.
  meets the love of their life at a {funeral|wedding|[Sport] event}.
  goes on {a} {dangerous|magical|unplanned} ocean voyage.
  hunts for {Bigfoot|the Loch Ness Monster|[Creature]s}.
  discovers the mythical city of El Dorado.
  proves that {[Country]|[City]|[State]} is secretly controlled by [Creature]s, but no one believes them.
  learns that the Earth is flat.
  must choose between saving their {love|[Relative]} or the city they've sworn to protect.
  is stranded on a {desert|jungle} island.
  attempts to rescue hostages from a skyscraper.
  loses a bet and can eat nothing but [Fruit]s for a {month|week|year}.
  attempts to live a normal life while fighting crime in [City].
  involved in a complicated love {triangle|quadrilateral}.
  tries to escape an island full of hungry {[Creature]s|[Animal]s}.
  tries to rescue their [Relative] from {a} [Profession] in [Country].
  seeks their fortune during the Alaskan Gold Rush.
  battles against their greatest nemesis: [character].
  teams up with [character.selectMany(2).joinItems(" to defeat ")].
  accidentally starts WW{I|II|III|IV|V}.
  goes for {gold|silver|bronze} in Olympic [Olympic].
  in a series of romantic misadventures.
  struggles to earn a living collecting "{scream|laugh|terror|joy|hyperactivity}" energy from {small children|teenagers}.
  is laid off from their job as {a} [Profession.selectUnique(2).joinItems(", but gets hired as a ")].
  leads a ragtag crew of pirates against the British Navy.
  gets conscripted into the military of [Country].
  discovers a hidden island full of mythical creatures.
  discovers a magical doorway to a land called {[Consonant.titleCase]^19|Qu}[Vowel][Consonant.selectMany(2)]{land|ia}.
  incites rebellion in an oppressed insane asylum.
  must escape from the dungeon of [character], who is a cannibal.
  discovers a magical (choose an item) from the court of King Arthur.
  throws the greatest house party ever!
  falls for a dangerous femme fatale.
  conducts a séance in an extremely haunted house.
  is torn between marrying to please their family or joining the army to save all of [Country].
  makes a deal with {a} [Creature].
  has a saucy affair with [character].
  gets an exciting new job working for [character].
  falls in love with a dangerous [Creature].
  accidentally connects their satellite TV to an alien dimension.
  fighting against [Align] [Creature]s that look like people.
  takes a shortcut through a forest full of murderous hobos.
  has a broken time machine that will only travel back and forth between the [Time.selectUnique(2).joinItems(" and the ")].
  gets a makeover that changes their life forever.
  receives an unwanted proposal from a smug {bachelor|bachelorette}.
  teaches an urchin to be a sophisticated {lady|gentleman}, and falls in love with them along the way.
  hunts and is hunted by a deadly serial killer.
  on a quest to seduce the {Pope|{king|queen} of [Country]|neighborhood [Profession]}.
  must seduce the prince before they turn into a {pumpkin|[Fruit]} at midnight.
  searches for enlightenment in the far corners of the earth.
  chases their crush with the help of the {girl|boy} next door.
  is haunted by the jealous ghost of their unborn twin.
  attempts to steal a possessed trophy from a bowling alley.
  tries to fix their public image after failing to thwart a super{hero|villain}.
  struggles to survive after a deadly {shipwreck|plane crash}.
  treks across a dangerous {desert|forest|jungle|tundra|ocean} to save their {friends|[Relative]}.
  teaches poor kids to {read|write|play [Sport]|sing|dance}.
  must save the city from {a} [Align] genius [Animal].
  will do whatever it takes to save the local library.
  must save the world from Y2K.
  travels through time to save the world.
  on a quest to discover Atlantis.
  struggles to write the next great American novel.
  wants to be the next great novelist from [Country].
  will do whatever it takes to become a world-famous [Profession].
  faces a difficult choice between love and {fame|money|success}.
  attempts to escape from a remote island asylum.
  accidentally awakens an ancient and powerful [Creature].
  races to stop a supernatural killer before they strike again.
  hunts and is hunted by {a} [Creature].
  tries to disarm a series of devilish traps.
  haunted by the {angry|happy|friendly|overeager} ghost of [character].
  goes on a terrible drug trip during a family reunion.
  tries to escape a graveyard full of dancing skeletons.
  fights to save the [Profession] industry from {a} [Align] government conspiracy.
  tries to {escape from|befriend} a supernatural killer in the woods.
  teams up with a {socio|psycho}path to {kill|frighten|intimidate|punish} the most popular kid at school.
  battles [Creature]s in a fight for their life.
  delves into forbidden magic and pays a terrible price.
  falls in love with their [Subject] teacher.
  learns that their [Relative] is {a} [Align] god bent on galactic domination.
  learns that {their [Relative] is|they are} really the god [God].
  tries to save their villainous best friend from law enforcement.
  is secretly a superhero, and is roommates and best friends with [character], who is secretly a supervillain.
  fights to save their kingdom from their violent half-{brother|sister}.
  is captured and forced to fight in an alien coliseum.
  fights their own government to protect freedom everywhere.
  is wanted for {murder|embezzlement|identity theft|tax evasion} in [Country.selectUnique(2).joinItems(", ")] and {2-12} other countries.
  flees from a tribe of cannibals.
  learned that [Creature]s are real, but can't tell anyone.
  fights crime and prejudice in a society that fears them.
  fights {a} [Align] race of {shapeshifting|telepathic|telekinetic|ugly|carnivorous|non-humanoid|silicon-based} aliens.
  makes friends with {a} [Creature] and has to convince everyone their new friend isn't [Align].
  travels through time to undo a terrible cliffhanger that wiped out {half|{1-2}/3|{1|3}/4|{1-4}/5|{1|5}/6|{1-6}/7|{1|3|5|7}/8|{1|2|4|5|7|8}/9|{1|3|7|9}/10|{1-10}/11|{1|5|7|11}/12|{1-99}%} of {the universe|the world|[State]|[City]|the city|the village}.
  travels through time to {4-20}th century [Country].
  makes a deal with {a} [Creature] and pays an unexpected price.
  must stop their [Align] twin from ruining their life!
  fights an invasion of alien [Animal]s that mind-control people.
  learns that several important government officials are secretly [Animal] people.
  accidentally summons the ghost of [PubFig] with a {Ouiji board|tarot deck|set of polyhedral dice}.
  battles against a {dark|[Align]} version of themself.
  changes alignment from [Align.selectMany(2).joinItems(" to ")].
  goes undercover as {a} [Profession] to hide from the mob.
  uses a time machine exclusively for {parlor tricks|tax evasion}.
  tries to save the world from the [Creature] apocalypse.
  struggles to exorcise a demon from a {small child|teenager}.
  is mistakenly sent to {heaven|hell}.
  struggles to impress [God]... who also happens to be their [Relative].
  uses their Muay Thai boxing skills to rescue their village's sacred [Animal].
  trapped in a hell made of infinite [Business]s.
  trapped in an elevator.
  fights Nazi [Creature]s in [Country].
  struggles to close a gate to {Hell|Heaven|Purgatory}.
  gets kidnapped by malevolent sock puppets.
  must fight their way out of a {prison|dungeon|castle|labyrinth} full of deadly {martial arts masters|[Creature]s|[Profession]s|[Animal]s}.
  has been a {bridesmaid|groomsman} {6-75} times and is about to lose it!
  struggles to fight for "right" in the trenches of WWI.
  must (choose an activity) every {minute|{2-45} minutes|hour|{2-72} hours|day|{2-20} days|week|{2-60} weeks|month|{2-11} months|year|{2-20} years|decade} or they {explode|die|turn into {a} [Creature]}.
  smokes "the reefer," then goes mad and kills everyone they love.
  struggles to pay for all the damage that their last adventure caused the city.
  battles dementia and bad guys to protect a helpless {child|[Animal]}.
  is hunted by {a} [CharAdj] [Profession] from [Country] and {a} [CharAdj] [Animal].
  is in love with [character.selectMany(2).joinItems(" and ")] and just can't choose!
  must survive the {day|night|week|month|year} in a creepy {town|city|village|forest|[Business]} full of {[Animal] people|[Creature]s}.
  gets in big trouble with the mafia.
  investigates a deadly ghost ship.
  competes in a deadly reality tv competition.
  battles endless hordes of {angry|starving|indifferent|bored} [Creature]s.
  struggles to bring their {best friend|[Relative]} back from {the dead|Heaven|Hell|purgatory|[Country]|[City]|[State]}.
  tries to free their family from an ancient curse.
  is mysteriously turned into a {3-22}-year-old again.
  fights a supernatural killer [Profession].
  tries to save their classmates from a super{hero|villain} on a class trip.
  struggles to raise a superpowered kid with a violent temper.
  battles an ancient and dangerous [Creature].
  fights an unstoppable assassin from {the future|the past|the [Time]}.
  discovers a deadly scandal in the [Profession] industry.
  in an awkward teenage romance.
  goes undercover in the dangerous world of professional (choose an activity).
  is the only witness to a mafia killing.
  fights for the ultimate {[Sport]|Olympic} title.
  tries to steal the world's largest {diamond|ruby|emerald|sapphire|[Animal]}.
  tries to save their small beach town from a monstrous [Animal].
  gets lost in the Amazon jungle.
  goes on a mad quest to kill the [Animal] that ate their {right|left} {leg|arm|hand|foot|thumb|{pointer|ring|index|middle} finger|pinkie|big toe|little toe|ear|eye}.
  robs a bank to get themselves out of debt.
  struggles to prove themselves in a cut-throat kitchen in [City].
  becomes a vigilante to rid their city of crime.
  was frighted by [a=Animal.selectOne.evaluateItem]s after seeing their {parents|[Relative]|best friend} get murdered, and now dresses up as the [a.titleCase]{man|woman|dude}, to strike that same fear into the hearts of criminals.
  hunts for [Creature]s in a mysterious forest.
  runs into their {high|middle} school sweetheart on a couples retreat.
  throws a bachelor{ette|} party that goes terribly wrong.
  joins the army to save their aging {father|mother} in medieval [Country].
  makes a selfish wish in a demonic wishing well.
  fights to stop an evil cult from bringing their god to Earth.
  must finish a dangerous supernatural board game to survive.
  must survive the night in a town overrun by feral children.
  gets stranded on a {desert|jungle} island full of {[Profession]s|[Creature]s|[Animal]s}.
  discovers a global invasion of bodysnatching aliens!
  discovers the true origin of {Santa Claus|the Easter Bunny|the Tooth Fairy|the Great Pumpkin}.
  tries to save a family of [Creature]s from a deadly wildfire.
  will do anything to make sure their {daughter|son} wins the {beauty pageant|[Sport] event|spelling bee}.
  tries to break the record for the world's {largest|smallest|unhealthiest|healthiest} {pizza|sandwich|casserole|bowl of spaghetti|lasagna|salad|hamburger|hot dog|bowl of chili|ice cream Sundae|milkshake|burrito|taco}.
  tries to stop a ferry boat from sinking.
  tries to solve a mystery deep under the {Pacific|Atlantic|Indian|Arctic} Ocean.
  explores a {dangerous|wondrous|mysterious|deadly} alien {planet|space craft}.
  learns that they are the heir to the throne of an ancient kingdom, located in modern-day [Country].
  travels the country solving supernatural hoaxes with their talking [Animal].
  matches wits against a wily [Creature].
  tries to save their family from kidnappers.
  must build {a} {airplane|blimp|train|car|truck|tank|bulldozer} out of spare parts in order to get home.
  trapped on Mt. Everest during a deadly storm.
  takes physics lessons from {Merlin|Einstein|Newton} himself!
  fights to prevent a world-changing technology from being used for [Align] purposes.
  building a rocketship to escape a dying planet.
  struggles to reclaim their old life after being transformed into {a} [Animal].
  must leave the royal ball before their magical carriage turns back into {a} [Fruit].
  must win enough money at the {talent show|race track|casino} to pay for their [Relative]'s surgery.
  tries to steal the {Declaration of Independence|Constitution|Magna Carta|Dead Sea Scrolls|Emancipation Proclamation|Gettysburg Address}.
  races around the world in a {hot air balloon|blimp|zeppelin}.
  struggles to lift the curse that turned their [Relative] into {a} [Animal].
  tries to marry their true love against their parents wishes.
  is trapped at a lakehouse by a horde of zombie [Animal]s.
  is pressured into going on a supernatural {field trip|adventure|quest} with no safety precautions.
  defends their home from a group of murderous strangers.
  will do anything for fame on a reality TV show.
  gets trapped {overnight|forever} in a haunted asylum.
  battles corruption in the {greeting card|toy making|Christmas ornament|snow globe|lava lamp|lightbulb|lawn ornament|knick knack|jigsaw puzzle} industry.
  discovers a genie in a lamp.
  plots to escape a retirement home in [State].
  has just {one hour|{2-48} hours|one day|{2-20} days|one week|{2-6} weeks|one month|{2-6} months} to find ${500-50000} for a dangerous mobster.
  becomes trapped in a dangerous {video|computer|board} game.
  battles addiction to {prescription drugs|alcohol|illegal drugs|caffeine|video games|World of Warcraft}.
  tries to keep their [Animal] safe while being hunted by [Creature]s.
  falls in love with a dangerous "bad {boy|girl}."
  must transport a group of colonists to their new home.
  must negotiate peace between the [Alien.selectUnique(2).joinItems("s and the ")]s.
  is attacked by [Alien]s.
  makes first contact with the [Alien] race.
  saves the ship from blowing up, at the last possible second.
  wears a red shirt and then dies.
  falls in love, then finds out that {he|she} is {a} [Creature].
  believes that {[Creature]s|[Profession]s} are urging them to {kill|set things on fire|start a revolution|write a novel|obsessively clean things|dig a hole to [Country]|break things|cultivate the world's largest garden|make {cheese|bread|cake|cheesecake|soup|lasagna}|tell lies|sing and dance|pray to [God]|summon {a} [Creature]|learn to {knit|sew|crochette}|learn to fly}.
  discovers what the acronym [Letter.selectMany(3,4).upperCase.joinItems()] really stands for.
  literally jumps over {a} [Animal].
  

Letter
  [Consonant]^21
  [Vowel]^6

Consonant
  b
  c
  d
  f
  g
  h
  j
  k
  l
  m
  n
  p
  r
  s
  t
  v
  w
  x
  y
  
Vowel
  a
  e
  i
  o
  u
  y


Olympic
  archery
  artistic swimming
  athletics
  badminton
  basketball
  beach volleyball
  boxing
  canoe slalom
  canoe sprint
  cycling bmx
  cycling mountain bike
  cycling road
  cycling track
  diving
  equestrian
  equestrian eventing
  equestrian jumping
  fencing
  football
  golf
  gymnastics artistic
  gymnastics rythmic
  handball
  hockey
  judo
  karate
  marathon swimming
  modern pentathlon
  rowing
  rugby
  sailing
  shooting
  skateboarding
  sport climbing
  surfing
  swimming
  table tennis
  taekwondo
  tennis
  trampoline
  triathlon
  volleyball
  water polo
  weightlifting
  wrestling freestyle
  wrestling Greco-Roman
  Alpine skiing
  biathlon
  bobsledding
  cross country skiing
  curling
  figure skating
  freestyle skiing
  ice hockey
  luge
  Nordic combined
  short track
  skeleton
  ski jumping
  snowboard
  speed skating
  
Relative
  {first|second|third|fourth|fifth} cousin
  {first|second|third|fourth|fifth} cousin {one|twice|three times} removed
  ancestor
  aunt
  child
  cousin
  daughter
  descendant
  distant cousin
  father
  grandchild
  granddaughter
  grandfather
  grandmother
  grandparent
  grandson
  great aunt
  great uncle
  mother
  nephew
  niece
  parent
  son
  uncle
  

City
  Acequia
  Albuquerque
  American Falls
  Anaheim
  Arlington
  Atlanta
  Atlantas
  Aurora
  Austin
  Bakersfield
  Baltimore
  Berlin
  Boise
  Boston
  Burley
  Charlotte
  Chicago
  Chubbuck
  Cleveland
  Colorado Springs
  Columbus
  Dallas
  Denver
  Detroit
  El Dorado
  El Paso
  Fort Worth
  Fresno
  Honolulu
  Houston
  Idaho City
  Idaho Falls
  Indianapolis
  Jacksonville
  Kansas City
  London
  Long Beach
  Los Angeles
  Los Vegas
  Louisville
  Memphis
  Meridian
  Mesa
  Miami
  Milwaukee
  Minneapolis
  Moscow
  Nampa
  Nashville
  New Orleans
  New York City
  Oakland
  Oklahoma City
  Omaha
  Paris
  Philadelphia
  Phoenix
  Pocatello
  Portland
  Raleigh
  Riverside
  Rupert
  Sacramento
  San Antonio
  San Diego
  San Francisco
  San Jose
  Santa Ana
  Seattle
  Tampa
  Tucson
  Tulsa
  Twin Falls
  Virginia Beach
  Washington D.C.
  Wichita

xN=23

NCharacter //23
  [TextNum] secret agents deep undercover
  two {dalmations|beagles|sheep dogs|poodles|labradors|golden retrievers} and their {{2-6}|99} out-of-control puppies
  two best friends, in love with the same person
  [TextNum] {geriatric^3|[CharAdj]} heroes forced out of retirement
  Zeus, king of the gods
  (Choose a character from another player's previously pitched movie. Your movie {stars a younger version of that character|features them as a grizzled veteran|is an off-brand knock off of that character|is an origin story for that character|is the third movie in that trilogy}.)
  (Pick a historical figure)
  [PubFig] playing themselves
  (Choose a {villain|hero|character|love interest|minor character} from another player's previously pitched movie.)
  {Miss Universe|Miss America}, {2-12} years running
  sentient {toys|appliances} trying to get home
  (Choose a character from another player's previously pitched movie. Your movie is about that character's {children|grandchildren|parents|grandparents})
  friendly woodland creatures forced to flee their home because of {pollution|logging}
  [TextNum] kids earning money for candy
  [TextNum] kids struggling to impress their super{hero|villain} parents
  [TextNum] little homeless [Animal]s
  confused ghosts that don't know they're dead
  crime-fighting robots
  [TextNum] [Profession]s out to make a fortune
  [TextNum] warrior [Animal]s living {in the sewers|on the rooftops|in the jungle}
  [PubFig]^10
  [PubFig], the {most|least} [CharAdj] person on the planet
  [TextNum] kids lost in the woods

TextNum
  two
  three
  four
  five

xT=45

TCharacter //45
  {world's|country's|city's|village's} {most|least} [CharAdj] [Profession]^50
  {headmaster of|headmistress of|janitor at|most popular student at|most unpopular student at|groundskeeper for} a strict boarding school
  {world's|nation's|town's|zoo's|farm's} {most|least} [CharAdj] [Animal]
  leader of a powerful mob family
  {king|queen|prime minister|president|dictator|leader} of a secret {African|Central American|Outback Australian|Russian|Arctic|Antarctic} techno-utopia
  people of a remote village surrounded by haunted woods
  {great|great great|great great great|}{grandson|granddaughter|grandniece|grandnephew} of {Victor Frankenstein|Vlad the Impaler}
  {Norse god [NorseG]|Sumerian god [SumerianG]|Greek god [GreekG]|D&D god [DnDG]}
  {Norse god [NorseG]|Sumerian god [SumerianG]|Greek god [GreekG]}, trapped on Earth and stripped of their powers 
  only guy at his best friend's bachelorette party
  world's first sentient AI
  {best|worst} [Profession] in the {world|country|city|galaxy|universe|multiverse}
  {most|least} [CharAdj] maiden in the kingdom
  lone survivor of a gruesome and mysterious accident
  most popular {girl|boy} in school
  world's meanest {5-16}-year-old bully
  {most|least} popular kid in school hiding a {wonderful|terrible} secret
  new apprentice to the world's most [CharAdj] [Profession]
  only girl in a male-dominated sport
  only boy in a female-dominated sport
  [Animal.titleCase]{man|woman}
  {brothers|sisters} obsessed with death
  world's {best|worst} [Profession]
  old widow that {everyone thinks|thinks everyone else} is a witch
  current U.S. president
  passengers of an ill-fated luxury cruise
  {world's|nation's|town's} {most|least} {adorable|cute|cuddly} baby [Animal]
  mayor of {Halloween|Christmas|Easter|Hannukah|Kwanza}town
  Founding Fathers
  producer of a trashy reality TV show
  last [Creature]
  Knights of the {Round|Square|Hexagonal|Triangular|Pentagonal|Octagonal|Periodic} Table
  {first|only|best|worst|most [CharAdj]} [Profession] in [Country]
  ghost of [PubFig]
  {captain|first officer|science officer|ship's counselor|engineer|chief medical officer} of a starship
  only {alien|[Alien]} serving on a human starship
  only human serving on {a} {alien|[Alien]} starship
  last living [Alien]
  first {alien|[Alien]} to encounter humans
  first human to encounter {alien|[Alien]}s
  high school's {most|least} [CharAdj] {[Sport] {player|coach}|nerd|student|mathlete}
  {world's|nation's|city's} greatest [Profession]
  {world's|nation's|city's} {most|least} [CharAdj] [Profession]
  {world's|nation's|farm's|zoo's} {most|least} [CharAdj] [Animal]
  first human colonists on {Mars|the moons of Jupiter|Pluto|Uranus|Neptune|the moons of Saturn|Mercury|Venus}
  chieftain's rebellious {daughter|son}

xA=242

ACharacter //242
  ensemble cast of [CharAdj] [Profession]s
  sheltered {20-100}-year-old just learning about {computers|cell phones|movies|theme parks|girls|boys|[Profession]s}
  {half|{1-2}/3|{1|3}/4|{1-4}/5|{1|5}/6|{1-6}/7|{1|3|5|7}/8|{1|2|4|5|7|8}/9|{1|3|7|9}/10|{1-10}/11|{1|5|7|11}/12|{1-99}%}-[Animal] {man|woman|boy|girl} {desperate|eager} to please their {master|mistress|creator}
  [CharAdj] {man|woman|boy|girl} {grown|enlarged} to {giant|improbable|massive} proportions
  pair of stoners who just ran out of weed
  group of [CharAdj] [Profession]s trying to impress a {man|woman|girl|boy}
  group of amateur [Profession]s
  [CharAdj] [Business] janitor
  [Fruit] with a heart of gold
  {handsome|beautiful} and eligible [Profession] on a blind date
  {young|old} couple on the verge of breaking up
  bunch of intelligent, reasonable {9/11|holocaust|Barack Obama's birth certificate|covid-19} truthers
  [CharAdj] [Profession]^50
  clumsy but lovable [Profession]
  [CharAdj.selectUnique(2).joinItems(" {but|and|yet} ")] [Profession]^25
  {doctor|surgeon|gynecologist|orthopedic surgeon|heart surgeon|pediatrician} with a fake medical degree
  intergalactic team of thrill-seekers
  [CharAdj] kid that becomes a supersoldier
  [CharAdj] superhero struggling to fight crime and pay rent
  inseparable young fox and hound
  {bride|groom} with cold feet
  secret government agency protecting the world from {aliens|gods|other secret agencies|[Creature]s}
  {[CharAdj]|bookish^3} librarian who just wants to be left alone
  [CharAdj] {alien^3|[Animal]|[Creature]} with superpowers raised in {rural|urban|east-coast|west-coast} America
  [CharAdj] young {man|woman} afraid to chase their dreams
  {dog^3|[Animal]} just trying to rescue their {boy|girl}
  {young^3|[CharAdj]} {samurai|Arthurian knight|adventurer} on a quest to prove themselves
  {ruthless^3|[CharAdj]} {politician^3|[Profession]} hungry for power
  bunch of {kids|college kids} looking for adventure during {summer vacation|spring break|Christmas break|Thanksgiving break}
  {sad, sad^3|[CharAdj]} orphan looking for a new family
  bunch of meddling kids investigating a mystery
  {politician|[Profession]} with an illegal secret
  group of friends on their last night before they leave for college
  {magical^3|[CharAdj]} {nanny^3|[Profession]} working for a wealthy family
  {friendly^3|[CharAdj]} {clown^3|[Profession]} on a mission to {make people {happy|sad|angry}|kill people}
  group of {scrappy^3|[CharAdj]} {chickens|turkeys|cows|sheep|goats} trapped on a farm
  toy [Profession] that thinks it's real
  {old^3|[CharAdj]} fisherman alone at sea
  [Animal] with a human brain
  {child|teenage|middle aged|geriatric} beauty pageant {queen|king}
  lifelong {bachelor^3|[Profession]}
  child that befriends a giant alien war machine
  {ragtag^3|[CharAdj]} group of wannabe {heroes|villains}
  bullied {young kid|teenager} out for revenge
  competitive {figure skater|[Sport] player} training to win
  merperson in love with [character]
  {charismatic^3|[CharAdj]} slacker just out for a good time
  {grizzled^3|[CharAdj]} {cop^3|[Profession]} with a {katana|scimitar|lightsaber|laser sword|ceremonial dagger} and awful hair
  homemaking {grandmother|grandfather} that {secretly|openly} consorts with {demons|djinni|leprachauns|[Align] spirits}
  young [Profession] that moves away from home to {start their own business|get away from their family|pursue their dreams}
  {mad^3|[CharAdj]} {scientist^3|[Profession]} conducting a world-changing experiment
  {cop^3|[Profession]} that plays by the book
  {lonely^3|[CharAdj]} {trash-compacting robot|[Profession]} on a dying earth
  single {father|mother|grandfather|grandmother} raising {2-5} superpowered {boys|girls|children|[Animal]s}
  dangerous [Creature] on the run with a small {boy|girl} from {[State]|[Country]}
  [Profession] fighting for {justice|equal pay|better working conditions}
  [CharAdj] child at a boarding school
  genie that only grants {unique|unusual|two|unambiguous} wishes
  [CharAdj] baby
  {happy|dysfunctional} family on a road trip
  single mother haunted by {the death of her husband|her husband's ghost}
  tribe of cavemen hunting for food
  grizzled veteran returning home
  recently-widowed {father|mother} of {2-12}
  canary living with a dangerous house cat
  pop band out for a night on the town
  group of kids at {boot|summer|computer|sports|military|band} camp
  professional hitman on their last job
  kid with the power to transform into an adult superhero
  supervillain trying to turn their life around
  videogame villain that just wants to be a good guy
  {30-95}-year-old {man|woman} who has never left their house
  childhood toy come to life
  {blind|deaf|mute|handicapped} crime-fighting [Profession]
  {ragtag^3|[CharAdj]} group of rebels
  [CharAdj] young {man|woman} trapped in a {backwater town|dungeon|castle|forced marriage}
  [CharAdj] writer searching for inspiration
  videogame character come to life
  {prince|princess} transformed into {a} [Animal]
  journalist on the trail of a huge story
  [CharAdj] troll living under a bridge
  murderously {paranoid^3|[CharAdj]} suburbanite
  friendly gorilla that can talk through sign language
  [CharAdj] [Animal]^25
  {witch^3|[Profession]} living on the edge of town
  young super{hero|villain} just discovering their powers
  [Sport] mom determined to help her kids win the big sporting event
  singing troup of [Creature]s from [Country]
  kid with {a} [CharAdj] imaginary friend
  group of {kids|teens|grandparents|[Profession]s} charged with protecting the world
  {man|woman|boy|girl} possessed by an alien symbiote
  aging couple looking to reignite the spark in their marriage
  [Animal] that will do anything to get fed
  [Animal] hunter who knows nothing about the big city
  fed up [Profession] with nothing to lose
  aging [Profession] reminiscing about their glory days
  fellowship of [CharAdj] heroes
  crew of scientists at an {Arctic|Antarctic} research station
  group of kids solving a mystery at summer camp
  [Profession.selectUnique(2).joinItems(" turned ")]
  [Profession.selectUnique(4).joinItems("-")]
  child raised by [Animal]s
  princess determined to rescue herself
  satanic cult that can't find a virgin to sacrifice
  cult of new-age druids
  {fraternity|sorority} planning a prank at the {Valentine's Day|Homecoming|Spring|Fall} Dance
  group of {girls|boys} out for the BEST SPRING BREAK EVER
  priest of [God]
  [CharAdj] [Profession] [Activity]^100
  unlikely team-up of [PubFig.selectUnique(2).joinItems(" and ")]
  {cowboy^3|[Profession]} left for dead and out for revenge
  priest of [God] suffering a crisis of faith
  ensemble cast that gets into car crashes
  old [Profession] in need of an apprentice
  orphaned [Animal] destined to be {king|queen}
  married couple going through {a} {nasty|amicable} divorce
  ancient and powerful [Creature]
  amateur {metal|jazz|country|pop|rock|blues|reggae|hip-hop} band struggling to find a gig
  [Creature] trying to learn about human culture
  {supersoldier^3|super-[Profession]} from the past, searching for new purpose
  bunch of kids in an iPhone sweatshop
  hot young [PubFig]
  {European|African|Russian|South American|Asian|Nigerian} {prince|princess} with a secret {prison|library|agenda}
  {prince|princess} with dangerous {frost|fire|earth|air|lightning|ice|wind|illusion|summoning|dark|elemental|acid|animal|telekinetic} magic
  group of awkward teenagers
  time-traveling samurai stuck in the future
  cowardly [Animal] trying to protect their family
  [Animal] disguised as a person
  noble barbarian from a distant land
  {prince|princess} transformed into a {[Creature]|[Animal]}
  [Creature.selectUnique(2).joinItems(" working for ")]s
  sentient {tire|hammer|wrench|hubcap|couch|baseball|fork|spoon|knife} with telekinetic powers
  depressed {[Creature]|[Animal]}
  family of rich hillbillies
  simple [Animal] who gives no bothers
  desperate [Profession] struggling to feed their family
  ensemble cast of celebrities playing themselves
  bunch of kids tripping on acid
  lovable and charismatic school shooter
  creepy old [Profession]
  [CharAdj.selectUnique(2).joinItems(" {but|and} ")] [Profession]
  magical young {boy|girl} who refuses to grow up
  [Animal.selectUnique(2).joinItems(" in love with {a} ")]
  shy [Profession] with a talent for diguises
  shy nerd hiding a carnivorous plant in their apartment
  washed-up {star|superhero|supervillain|[Profession]} longing for their glory days
  huge jock that just wants to be a ballerina
  [Profession.selectUnique(2).joinItems(" that just wants to be {a} ")]
  {nice|mean} {guy|gal} who always finishes {last|first}
  trigger-happy police officer
  [Creature] disguised as {a} [Profession]
  [Animal] trained to be a musical [Profession]
  {medical student|necromancer|cannibal} in desperate need of fresh cadavers
  divorced dad trying to reconnect with his kids
  group of scientists on the brink of resurrecting dinosaurs
  troubled kid with supernatural abilities
  group of sentient toys separated from their child
  overeager sponge that lives on the bottom of the sea
  {fraternity|sorority} on the verge of suspension
  daredevil with a deathwish
  mad scientist creating a creature from all the hottest corpses
  homicidal puppet and his homicidal puppet wife
  ten-year-old kid who wants to be the very best, like no one ever was
  puppet trying to become a real person
  foul-mouthed mercenary with healing powers
  lonely [Creature] searching for love
  teenage [Creature] slayer who just wants a normal life
  family of aristocratic [Animal]s stranded in the countryside
  grumpy old {man|woman} who just wants privacy
  miserly [Animal] from [Country] and {his|her} {3-5} eccentric {nephews|nieces}
  [CharAdj] [Profession] with absolutely no talent
  overworked assistant in the world of {high fashion|global news reporting|[Profession]s}
  private detective following a dangerous trail of clues
  friendly [Creature] living in the {forest|jungle|desert|swamp|tundra|Arctic}
  friendly talking [Animal]
  lifelong {bachelor|bachelorette} not looking for anything serious
  {girl|boy} who dreams of escaping their abusive step{mother|father}
  bunch of teens at summer camp
  {Amazonian|Atlantean|alien|mythical|magical|[Creature]} {prince|princess} just learning about the human world
  controversial smalltown [Sport] coach
  desperate {father|mother} searching for their missing children
  [Animal] with anger issues
  young [Animal], recently orphaned
  super{hero|villain} that has {mysteriously|suddenly|unexpectedly|recently} lost their powers
  {astronomer^3|[Profession]} who thinks they've made contact with {aliens^3|[Creature]s}
  family of cannibal hillbillies
  {overweight|awkward} [Creature] that just wants to fit in
  lost tribe
  senior citizen swim team
  [Profession.selectUnique(3).joinItems("/")]^10
  {woman|man|boy|girl} that can speak to ghosts
  child and their {[Creature]|[Animal]|[Profession]} friend that no one else can see
  {grandma|grandpa} who dreams of becoming {a} [Profession]
  {dysfunctional|happy} family of super{heroes|villains}
  super-powered mom fighting bad guys and gender norms
  [CharAdj] {man|woman} who doesn't believe in true love
  teenager struggling to master their new superpowers
  edgy and dark version of (pick a light-hearted super{hero|villain})
  dysfunctional super{hero|villain|spy} team
  aging version of (pick a superhero)
  innocent person framed for {murder|theft|embezzlement|tax evasion|draft dodging|insurance fraud}
  hunchback and {a} [Profession] on the run
  troubled priest with a talent for exorcisms
  young team of mutant {heroes|villains}
  {man|woman|boy|girl} with a talking [Animal]
  {fraternity|sorority|boy scout troop} on a weekend retreat deep in the woods
  teenager bitten by a radioactive [Animal]
  [Creature] that just wants their privacy
  mean [Animal] addicted to food from [Country]
  crew of pirates on the hunt for treasure
  little {girl|boy} and their [Animal]
  blind {man|woman} living alone
  {man|woman|boy|girl|kid|teenager|senior citizen} that can run at supersonic speed
  professor delving into dangerous science
  super{hero|villain} that {fights|causes} pollution
  [Animal] who never had a home
  small [Animal] with a big heart
  misunderstood old {man|woman}
  stoic family of pioneers
  country singer determined to make it big in Nashville
  secret agent whose cover has just been blown
  {prince|princess|king|queen} transformed into {a} [Animal]
  feral child raised by [Animal]s
  gang of ruthless girl scouts
  cave{man|woman} recently brought back to life
  {dysfunctional^3|happy^3|[CharAdj]} family [Activity]
  {arrogant^3|[CharAdj]} {prince|princess|king|queen} transformed into {a} [Creature]
  group of dwarves [Activity]
  genie trapped in a magic lamp
  sentient robot trying to start the robot uprising
  group of soldiers {on a suicide mission^3|[Activity]}
  {fraternity|sorority} conducting a dangerous initiation ritual
  hip rapping youth pastor
  child who can speak to {ghosts^3|[Creature]s}
  {telepathic|telekinetic|empathic|psychic} {alien|[Alien]}
  orphaned {boy|girl} raised by [Animal]s
  [Alien]/human hybrid
  {alien|[Alien]} ambassador on an important diplomatic mission
  scientist on the verge of a huge discovery
  [Alien] {commander|scientist|doctor|explorer|[Profession]}
  {over-eager|wide-eyed|brilliant} young ensign
  [Creature.selectUnique(3).joinItems(" and a ")], each exiled by their native people

Characters
  {A} [ACharacter] ^[xA]
  The [TCharacter] ^[xT]
  [NCharacter.sentenceCase] ^[xN]

character
  {a} [ACharacter] ^[xA]
  the [TCharacter] ^[xT]
  [NCharacter] ^[xN]

Alien
  AI
  Andorian
  Android
  Bajoran
  Bandi
  Betazoid
  Benzite
  Bolian
  Borg
  Breen
  Bug-Eyed Monster
  Bynar
  Carbosilicate Amorph
  Cardassian
  Cathar
  Changeling
  Denobulan
  Droid
  Esspererin
  Falleen
  Ferengi
  Fobott'r
  Frellenti
  Givin
  Goa'uld
  Gorn
  Gungan
  God-like Being
  Hirogen
  Horta
  Hutt
  Jem'Hadar
  Kazon
  Kelpien
  Klingon
  Kreelie
  Kss'thrata
  Mandalorian
  Neophant
  Ob'enn
  Ocampa
  Orion
  Pakled
  Polyflorian
  Purp
  Q
  Queltro
  Reman
  Rilla
  Romulan
  Shapeshifter
  Species 8472
  Talaxian
  Tellerite
  Tholian
  Toydarian
  Trill
  Twi'lek
  Unioc
  Uplifted [Animal]
  Ursumari
  Vorta
  Vulcan
  Wookie
  Xindi
  
Align
  {lawful|chaotic}-{good|evil}^4
  neutral-{good|evil}^2
  {lawful|chaotic}-neutral^2
  true-neutral


 
CharAdj
  [Align]
  {5-120}-year-old
  [Country] native
  [Creature]-{hunting|slaying}
  adorable
  aging
  alcoholic
  all-American
  ambitious
  ancient
  angry
  annoying
  aristocratic
  arrogant
  attractive
  authoritarian
  awkward
  badly-dressed
  beautiful
  beguiling
  blind
  bloodthirsty
  bookish
  brilliant
  broody
  cannibalistic
  charismatic
  clumsy
  corrupt
  creepy
  crime-fighting
  dark
  dead
  deaf
  depressed
  desperate
  devious
  disgraced
  disgruntled
  down-on-their-luck
  dumb
  edgy
  eligible
  elite
  fair
  fashion-blind
  fashion-conscious
  fed up
  feral
  fiery
  friendly
  genius
  gentle
  geriatric
  ghostly
  gossipy
  gregarious
  grizzled
  grumpy
  handicapped
  handsome
  happy
  has-been
  hateable
  high-powered
  hip
  homeless
  homicidal
  imaginary
  immoral
  immortal
  incorrigible
  innocent
  insane
  intelligent
  jealous
  killer
  kind
  lonely
  lovable
  mad
  magical
  manic
  manic-depressive
  mean
  meddling
  mentally unhinged
  metaphysical
  middle aged
  misanthropic
  miserly
  misunderstood
  murderous
  muscular
  musical
  mutant
  mute
  mysterious
  noble
  normal
  obsessive-compulsive
  old
  overweight
  overworked
  paranoid
  perfectly normal
  plucky
  popular
  pot-smoking
  powerful
  professional
  quirky
  rapping
  rebellious
  reasonable
  rich
  robotic
  rogueish
  ruthless
  sad
  scrappy
  scrawny
  smart
  snobby
  socially awkward
  socially progressive
  stoic
  suave
  supernatural
  totally innocent
  undead
  untrained
  unlikely
  unprofessional
  vengeful
  washed-up
  wealthy
  well-dressed
  wise-cracking
  young

  
Profession
  {elementary school|high school|college|graduate school} [Subject] teacher
  {airplane|blimp|zeppelin|fighter|Air Force|Navy} pilot
  {auto|boat|airplane} mechanic
  {trash compacting|maintenance|security|protocol|cleaning} robot
  [Instrument] player
  {country|rock|jazz|pop|blues} {singer|musician}
  [Subject] tutor
  [Animal] {trainer|breeder|admirer|hunter|herder}
  [Creature] {trainer|breeder|admirer|hunter|slayer}
  [Business] manager
  actor
  adept
  actress
  adventurer
  A-list Hollywood star
  altar boy
  animal trainer
  architect
  ardent
  aristocrat
  art critic
  artificer
  art thief
  artist
  assassin
  athlete
  attorney
  author
  autocrat
  avenger
  babysitter
  bachellor
  ballerina
  barbarian
  bard
  battlemind
  billionaire
  bridesmaid
  bully
  burglar
  burlesque dancer
  business executive
  butler
  cannibal
  carpenter
  cat burglar
  cavalier
  cheerleader
  chef
  child genius
  choir boy
  circus clown
  con artist
  cleric
  clown
  commoner
  cop
  cowboy
  creepy clown
  cult leader
  detective
  dictator
  dishwasher
  druid
  drummer
  DJ
  drifter
  e.r. doctor
  electrician
  emperor
  expert
  factory worker
  farmer
  fighter
  film director
  fisher{man|woman}
  flamenco dancer
  fry cook
  gang leader
  gangster
  garbage {man|woman|collector}
  gardener
  genie
  genius
  girl scout
  glatiator
  god
  grave digger
  groomsman
  gynecologist
  hacker
  hairdresser
  heiress
  high school librarian
  hillbilly
  hitman
  hobo
  homemaker
  illusionist
  immortal
  investigator
  invoker
  janitor
  jock
  journalist
  killer
  king
  knight
  landlord
  landscaper
  lawyer
  letter carrier
  librarian
  magazine editor
  magician
  magic user
  mailman
  Marine
  martial arts master
  matchmaker
  mayor
  medical student
  millionaire
  mime
  miner
  mining captain
  monk
  murderhobo
  musician
  mystic
  nanny
  naval officer
  necromancer
  nerd
  newspaper editor
  ninja
  novelist
  nuclear physicist
  nun
  nurse
  oil {baron|tycoon}
  Olympic [Olympic] athlete
  opinion columnist
  painter
  paladin
  paranormal investigator
  pastor
  pizza delivery driver
  philanthropist
  photographer
  pianist
  pioneer
  playboy
  plongeur
  plumber
  police officer
  politician
  pop-star
  president
  priest
  prime minister
  prison camp guard in [Country]
  private detective
  professor
  psion
  psionic
  psychic
  puppeteer
  rabbi
  rancher
  ranger
  rapper
  rebel
  reporter
  researcher
  rogue
  Roman general
  runecaster
  runepriest
  sailor
  samurai
  scientist
  scoundrel
  sculptor
  sea captain
  secret agent
  seeker
  shaman
  senator
  serial killer
  shepherd
  single parent
  soldier
  sorcerer
  sous-chef
  space cowboy
  space ranger
  sports writer
  spy
  starship captain
  starship commander
  starship {{science|tactical|weapons|chief medical} officer|engineer}
  state governor
  step-parent
  stoner
  substitute teacher
  superhero
  superspy
  supervillain
  surgeon
  swordmage
  tailor
  telephone sanitizer
  terrorist
  thief
  thief-acrobat
  tinker
  toy {maker|designer|seller}
  tribal leader
  TSA agent
  TV producer
  vampire
  veterinarian
  veteran
  vigilante
  Viking
  virgin
  waiter
  waitress
  warden
  warlock
  warrior
  web designer
  wedding DJ
  wedding planner
  white-collar criminal
  witch
  wizard
  wrestler
  writer
  youth pastor
  zookeeper

Activity
  at a fancy wedding venue
  charged with murder
  charged with protecting the world
  forced out of retirement
  going through a divorce
  hired by a sinister wealthy couple
  in need of an apprentice
  learning to be a wizard
  left for dead and out for revenge
  living alone
  longing for the good ole days
  looking for {love|inner peace|a promotion|a new job}
  on a quest to avenge their family
  on a quest to prove themselves
  on a suicide mission
  on the edge of {bankruptcy|insanity|a cliff|disaster}
  on the verge of {bankruptcy|retirement|getting rich}
  on their way to fame
  plotting a revolution
  recently arrived in the afterlife
  recently brought back to life
  running from a dark past
  searching for a connection in a string of {murders|burglaries}
  searching for a friend
  searching for new purpose
  struggling to find work
  struggling to pay rent
  suffering a crisis of faith
  sworn to protect their kingdom
  that can't seem to fit in
  that discovers {alien {technology|life}|magic}
  that will do anything for profit
  that will do anything to get to the top
  transformed into {a} [Animal]
  trapped in a magic lamp
  who can't take anything seriously
  who took a wrong turn at [City]
  who just successfully cloned {a} [Dinosaur]
  who just wants to be left alone
  who never follows their own advice
  with a dark secret
  with a fake degree
  with a passion for fashion
  with a scandalous secret
  with a troubled past
  with amnesia
  with dreams of saving the world
  with {impossible|impossibly low} {dreams|goals|standards}
  with magical powers
  with no social skills
  with no time for love

PubFig
  Abraham Lincoln
  Adolf Hitler
  Al Pacino
  Andrew Jackson
  Andrew Johnson
  Angelina Jolie
  Audrey Hepburn
  Augustus Caesar
  Barack Obama
  Barbra Streisand
  Benjamin Franklin
  Bill Clinton
  Bill Cosby
  Bill Gates
  Billy Joel
  Brad Pitt
  Bruce Willis
  Buster Keaton
  Calvin Coolidge
  Carole Lombard
  Cary Grant
  Cate Blanchett
  Charlie Chaplin
  Clark Gable
  Cleopatra
  Clint Eastwood
  Daniel Day-Lewis
  Denzel Washington
  Donald Trump
  Doris Day
  Dustin Hoffman
  Dwight Eisenhower
  Eddie Murphy
  Elizabeth Taylor
  Elvis Presley
  Franklin Delano Roosevelt
  Franklin Pierce
  Fred Astaire
  Gary Cooper
  Gene Hackman
  Gene Kelly
  George Herbert Walker Bush
  George W. Bush
  George Washington
  Gerald Ford
  Ginger Rogers
  Grace Kelly
  Gregory Peck
  Grover Cleveland
  Harrison Ford
  Harry Truman
  Harrison Ford
  Herbert Hoover
  Hillary Clinton
  Humphrey Bogart
  Jack Nicholson
  James Dean
  Jane Fonda
  James Garfield
  James Buchanan
  James Polk
  James Madison
  James Monroe
  Jimmy Carter
  Jimmy Stewart
  Joan Crawford
  Jodie Foster
  John Adams
  John F. Kennedy
  John Quincy Adams
  John Tyler
  John Wayne
  Jonathan Frakes
  Joseph Stalin
  Judy Garland
  Julia Roberts
  Julie Andrews
  Julius Caesar
  Kate Winslet
  Katharine Hepburn
  Kim Jong-Un
  Kirk Douglas
  Laurence Olivier
  Leonardo DiCaprio
  Levar Burton
  Lyndon B. Johnson
  Martin Van Buren
  Marilyn Monroe
  Marina Sirtus
  Marlon Brando
  Martha Stewart
  Mel Gibson
  Meryle Streep
  Michael Caine
  Michael Dorn
  Mike Pence
  Millard Fillmore
  Mister Rogers
  Morgan Freeman
  Nancy Pelosi
  Napoleon
  Nicholas Cage
  Patrick Stewart
  Richard Nixon
  Robert DeNiro
  Robert Redford
  Robin Williams
  Ronald Reagan
  Rutherford B. Hayes
  Saddam Hussein
  Sally Field
  Sandra Bullock
  Sean Connery
  Shia LaBeouf
  Shirley Temple
  Spencer Tracy
  Stephen King
  Steve Jobs
  Theodore Roosevelt
  The Virgin Mary
  Thomas Jefferson
  Tiberius Caesar
  Tom Cruise
  Tom Hanks
  Ulysses S. Grant
  Victor Hugo
  Warren G. Harding
  Whoopi Goldberg
  Wil Wheaton
  William Henry Harrison
  William H. Taft
  William McKinley
  William Shakespeare
  Will Smith
  Winston Churchill
  Woodrow Wilson
  Zachary Taylor


Creature
  [Creature.selectUnique(2).joinItems("/")] hybrid
  [Animal.selectUnique(2).joinItems("/")] hybrid
  [Creature]/[Animal] hybrid
  {stone|iron|steel|copper|gold|wood|bone|flesh|concrete|mud|paper|plastic|jello|wax} golem
  {fire|water|earth|air|ice|lightning|rock|lava|shadow|light|chaos|order|crystal|life|necrotic|war} elemental
  {haunted|possessed} {manican|book|doll|fax machine|computer|scroll|sword|mask|board game|[Sport] trophy|toy|tv}
  {feral|zombie|vampire} {children|teenagers|[Animal]s|[Creature]s}
  {Badger|Carp|Cat|Crab|Crane|Dog|Dolphin|Drake|Falcon|Fox|Frog|Hare|Lizard|Lynx|Monkey|Octopus|Owl|Panda|Tanuki|Turtle|Rat|Sparrow|Weasel} Hengeyokai
  [Animal] folk
  half-[Creature]
  [Alien]
  Aarakocra
  Aasimar
  alien
  Anzu-bird
  banshee
  beast
  beastman
  behemoth
  beholder
  bladeling
  bugbear
  bullywug
  centaur
  changeling
  chupacabra
  cyborg
  death knight
  dementor
  demon
  Deva
  devil
  dinosaur
  djinn
  doppelganger
  dragon
  Dragonborn
  drider
  dryad
  Duergar
  Dwarf
  Eladrin
  Elf
  ent
  ettercap
  faun
  faery
  {Earth|Air|Fire|Water|} Genasi
  genie
  ghast
  ghost
  ghoul
  giant
  gibbering mouther
  Githyanki
  Githzerai
  gnoll
  gnome
  goblin
  golem
  gremlin
  griffon
  {Half|Third|Fourth|Fifth|Sixth}ling
  harpy
  Hobbit
  hobgoblin
  imp
  kaiju
  Kalashtar
  Kender
  Kenku
  kobold
  kraken
  leprechaun
  leviathan
  lich
  Lizardfolk
  Loxodon
  Medusa
  merfolk
  mind flayer
  minotaur
  monster
  mummy
  mutant
  mutant [Animal]
  nymph
  ogre
  orc
  pegasus
  pixie
  rakshasa
  revenant
  robot
  roc
  sasquatch
  satyr
  Shardmind
  shifter
  skeleton
  spectre
  sprite
  Svirfneblin
  talking animal
  talking [Animal]
  Thri-kreen
  tentacle monster
  three-headed ogre
  Tiefling
  Tortle
  tribble
  troglodyte
  troll
  umber hulk
  unicorn
  yeti
  vampire
  Warforged
  Wilden
  were[Animal]
  werewolf
  wight
  witch
  wraith
  Yuan-ti
  zombie
  
Business
  {American|Italian|Mexican|Chinese|Japanese|Korean|German|sea food|fast food|steakhouse} restaurant
  {high|elementary} school
  7-11
  accounting firm
  airport
  Albertsons
  arcade
  bar
  bookstore
  bus station
  cafeteria
  college
  convenience store
  Costco
  dance club
  daycare
  Dominos
  drive-in theater
  Fred Meyer
  game store
  gas station
  grocery store
  hotel
  insurance agency
  karaoke bar
  KFC
  library
  motel
  movie theater
  newspaper office
  paper supply company
  Pizza Hut
  print shop
  pub
  shopping mall
  strip club
  Taco Bell
  tattoo parlor
  university
  Walmart
  WinCo
  
Sport
  baseball
  basketball
  cheerleading
  cricket
  football
  handball
  hockey
  lacrosse
  ping pong
  rowing
  rugby
  soccer
  softball
  swimming
  tennis
  track and field
  ultimate frisbee
  volleyball
  water polo

  
Instrument
  violin
  viola
  cello
  double
  bass
  harp
  flute
  piccolo
  oboe
  English horn
  clarinet
  bass clarinet
  bassoon
  contrabassoon
  saxophone
  trumpet
  trombone
  bass trombone
  French horn
  tuba
  timpani
  snare drum
  bass drum
  triangle
  gong
  cymbals
  vibraphone
  piano
  
Subject
  [Instrument]
  algebra
  anatomy & physiology
  art
  astronomy
  band
  biology
  business
  chemistry
  choir
  computer science
  earth science
  economics
  English
  French
  geology
  German
  Greek
  history
  home economics
  Japanese
  Latin
  logic
  mathematics
  music
  philosophy
  physical education
  physics
  political science
  robotics
  science
  social studies
  zoology
  
Animal
  aardvark
  anaconda
  ant
  ape
  bat
  bear
  bee
  beetle
  bird
  bluebird
  bluejay
  boa constrictor
  bug
  butterfly
  cat
  caterpillar
  centipede
  chicken
  clownfish
  cow
  crocodile
  crow
  dinosaur
  [Dinosaur]
  dog
  donkey
  dragon
  duck
  eagle
  elephant
  emu
  finch
  fish
  fox
  frog
  gecko
  gerbil
  giraffe
  goat
  goose
  gorilla
  grasshopper
  guinea pig
  hamster
  hippopotamus
  hog
  iguana
  iguanadon
  insect
  jackal
  jackalope
  june bug
  katydid
  koala
  komodo dragon
  leech
  lemur
  leopard
  liger
  lion
  lizard
  llama
  millipede
  monkey
  moth
  mouse
  mule
  nightcrawler
  ocelot
  octopus
  orangutan
  owl
  owlbear
  panda
  pangolin
  parrot
  penguin
  pig
  praying mantis
  quail
  rabbit
  rat
  rattlesnake
  raven
  rhinoceros
  robin
  salamander
  salmon
  scorpion
  seal
  seahorse
  sea turtle
  sea urchin
  shark
  sheep
  slug
  snail
  snake
  spider
  squid
  sturgeon
  swan
  tarantula
  tartigrade
  termite
  t-rex
  tiger
  tortoise
  turkey
  turkey vulture
  turtle
  vampire bat
  vampire squid from hell
  vulture
  wasp
  water skipper
  whale
  whaleshark
  wolf
  wombat
  worm
  yak
  yellow-bellied sapsucker
  zebra
  zebra finch

Dinosaur
  adamantisaurus
  aegyptosaurus
  allosaurus
  amazonsaurus
  ankylosaurus
  apatosaurus
  appalachiosaurus
  archaeopteryx
  argentinosaurus
  astrodon
  atrociraptor
  auroraceratops
  austroraptor
  bambiraptor
  brachiosaurus
  brachyceratops
  camptosaurus
  centrosaurus
  conchoraptor
  coronosaurus
  daemonosaurus
  dakotaraptor
  deinodon
  diablosaurus
  dimetrodon
  diplodocus
  dromiceiomimus
  erlhazosaurus
  fabrosaurus
  giganotosaurus
  gojirasaurus
  hadrosaurus
  heterodontosaurus
  huxleysaurus
  hypsilophodon
  iguanadon
  kaijiangosaurus
  koreaceratops
  mantellodon
  martharaptor
  megaraptor
  megalosaurus
  medusaceratops
  microraptor
  mojoceratops
  nanosaurus
  nebulasaurus
  orkoraptor
  oviraptor
  ozraptor
  pachyrhinosaurus
  paparaptor
  paluxysaurus
  paranthodon
  pyroraptor
  quilmesaurus
  regaliceratops
  seismosaurus
  spinosaurus
  stegosaurus
  tarascosaurus
  triceratops
  tyrannosaurus rex
  utahraptor
  variraptor
  valdosaurus
  wendiceratops
  xenoceratops
  yizhousaurus
  zuniceratops
  supaysaurus

Country
  Afghanistan
  Albania
  Algeria
  Andorra
  Angola
  Antigua and Barbuda
  Argentina
  Armenia
  Australia
  Austria
  Azerbaijan
  Bahamas
  Bahrain
  Bangladesh
  Barbados
  Belarus
  Belgium
  Belize
  Benin
  Bhutan
  Bolivia
  Bosnia and Herzegovina
  Botswana
  Brazil
  Brunei
  Bulgaria
  Burkina Faso
  Burundi
  Cabo Verde
  Cambodia
  Cameroon
  Canada
  Central African Republic (CAR)
  Chad
  Chile
  China
  Colombia
  Comoros
  Congo, Democratic Republic of the
  Congo, Republic of the
  Costa Rica
  Cote d'Ivoire
  Croatia
  Cuba
  Cyprus
  Czechia
  Denmark
  Djibouti
  Dominica
  Dominican Republic
  Ecuador
  Egypt
  El Salvador
  Equatorial Guinea
  Eritrea
  Estonia
  Eswatini (formerly Swaziland)
  Ethiopia
  Fiji
  Finland
  France
  Gabon
  Gambia
  Georgia
  Germany
  Ghana
  Greece
  Grenada
  Guatemala
  Guinea
  Guinea-Bissau
  Guyana
  Haiti
  Honduras
  Hungary
  Iceland
  India
  Indonesia
  Iran
  Iraq
  Ireland
  Israel
  Italy
  Jamaica
  Japan
  Jordan
  Kazakhstan
  Kenya
  Kiribati
  Kosovo
  Kuwait
  Kyrgyzstan
  Laos
  Latvia
  Lebanon
  Lesotho
  Liberia
  Libya
  Liechtenstein
  Lithuania
  Luxembourg
  Madagascar
  Malawi
  Malaysia
  Maldives
  Mali
  Malta
  Marshall Islands
  Mauritania
  Mauritius
  Mexico
  Micronesia
  Moldova
  Monaco
  Mongolia
  Montenegro
  Morocco
  Mozambique
  Myanmar (formerly Burma)
  Namibia
  Nauru
  Nepal
  Netherlands
  New Zealand
  Nicaragua
  Niger
  Nigeria
  North Korea
  North Macedonia (formerly Macedonia)
  Norway
  Oman
  Pakistan
  Palau
  Palestine
  Panama
  Papua New Guinea
  Paraguay
  Peru
  Philippines
  Poland
  Portugal
  Qatar
  Romania
  Russia
  Rwanda
  Saint Kitts and Nevis
  Saint Lucia
  Saint Vincent and the Grenadines
  Samoa
  San Marino
  Sao Tome and Principe
  Saudi Arabia
  Senegal
  Serbia
  Seychelles
  Sierra Leone
  Singapore
  Slovakia
  Slovenia
  Solomon Islands
  Somalia
  South Africa
  South Korea
  South Sudan
  Spain
  Sri Lanka
  Sudan
  Suriname
  Sweden
  Switzerland
  Syria
  Taiwan
  Tajikistan
  Tanzania
  Thailand
  Timor-Leste
  Togo
  Tonga
  Trinidad and Tobago
  Tunisia
  Turkey
  Turkmenistan
  Tuvalu
  Uganda
  Ukraine
  United Arab Emirates (UAE)
  United Kingdom (UK)
  United States of America (USA)
  Uruguay
  Uzbekistan
  Vanuatu
  Vatican City (Holy See)
  Venezuela
  Vietnam
  Yemen
  Zambia
  Zimbabwe
State
  Alabama
  Alaska
  Arizona
  Arkansas
  California
  Colorado
  Connecticut
  Delaware
  Florida
  Georgia
  Hawaii
  Idaho
  IllinoisIndiana
  Iowa
  Kansas
  Kentucky
  Louisiana
  Maine
  Maryland
  Massachusetts
  Michigan
  Minnesota
  Mississippi
  Missouri
  MontanaNebraska
  Nevada
  New Hampshire
  New Jersey
  New Mexico
  New York
  North Carolina
  North Dakota
  Ohio
  Oklahoma
  Oregon
  PennsylvaniaRhode Island
  South Carolina
  South Dakota
  Tennessee
  Texas
  Utah
  Vermont
  Virginia
  Washington
  West Virginia
  Wisconsin
  Wyoming



God
  [NorseG]
  [GreekG]
  [SumerianG]
  [DnDG]

NorseG
  Odin
  Frig
  Balder
  Loki
  Thor
  Freya
  Freyr
  Heimdall
  Hel
  Vidar
  Vale

GreekG
  Zeus
  Hera
  Poseidon
  Demeter
  Ares
  Athena
  Apollo
  Artemis
  Hephaestus
  Aphrodite
  Hermes
  Dionysus
  Hades
  Hypnos
  Nike
  Janus
  Nemesis
  Iris
  Hecate
  Tyche

SumerianG
  Nammu
  An
  Ki
  Gula
  Ereshkigal
  Utu
  Nanna
  Enki
  Enlil
  Inanna

DnDG
  Avandra
  Bahamut
  Moradin
  Pelor
  Corellon
  Erathis
  Ioun
  Kord
  Melora
  Raven Queen
  Sehanine
  Asmodeus
  Bane
  Gruumsh
  Lolth
  Tharizdun
  Tiamat
  Torog
  Vecna
  Zehir
  Haramathur
  Io
  Ao
  Nerull
  Garl Glittergold
  Eilistraee
  Kiaransalee
  Vhaeraun
  Oberon
  Titania
  Saint Cuthbert

Fruit
  apple
  asparagus
  avocado
  carrot
  celery
  corn
  crunch berry
  cucumber
  pineapple
  banana
  broccoli
  tomato
  grape
  kumkwat
  lemon
  lime
  orange
  pineapple
  plantain
  pomegranate
  potato
  pumpkin
  kiwi
  radish
  raisin
  raspberry
  rhubarb
  blueberry
  strawberry
  tangelo
  tangerine
  tomato
  turnip
  zucchini

Time
  Prehistorical Era
  {{Lower|Middle|Upper} Paleolithic|Mesolithic|Neolithic|Chalcolithic|Protohistory} Stone Age
  Ancient Era
  Classical Antiquity Era
  Post-Classical Era
  {Early|High|Late} Middle Ages
  Dark Ages
  {Early|Late|Contemporary} Modern Period
  Nineteen {Twenties|Thirties|Forties|Fifties|Sixties|Seventies|Eighties|Nineties}
  Two Thousands
  Twenty Tens
  Twenty Thirties
  Bronze Age
  Iron Age
  Renaissance
  Age of Oil
  Jet Age
  Machine Age
  Atomic Age
  Nuclear Age
  Digital Revolution
  Space Age
  Information Age
  Multimedia Age
  Social Age
  Big Data Age
  Interwar Period
  Roaring Twenties
  Great Depression
  Post-war Era
  Cold War
  Korean War
  Vietnam War
  War on Terrorism
  War in Afghanistan
  War in Iraq
  Syrian Civil War
  Libyan Civil War
  War in Donbass
  Baroque Period
  Spanish Hegemony
  Reconstruction Era
  Gilded Age
  Progressive Era
  Jazz Age
  Postmodern Age
  {{Spanish|American} Colonial Period|Third Republic|Marcos Era|Fifth Republic} (Phillippines)
  {Xia|Shang|{Western|Eastern} Zhou|Qin|{Western|Eastern} Han|Xin|Jin|Sui|Tang|{Northern|Southern} Song|Western Xia|Yuan|Ming|Qing} Dynasty
  Republic of China
  Xinhai Revolution
  Warlord Era (China)
  Chinese Civil War
  Second Sino-Japanese War
  People's Republic of China
  Mongol Empire
  {{Old|Middle|New|Ptolemaic} Kingdom|Coptic Period|Fatimid Caliphate|Ayyubid Dynasty|Mamluk Sultanate|Ottoman Eyalet} (Egypt)
  {Classical Period|Macedonian Era|Hellenistic Period|Late Roman Republic Period|Principate of the Roman Empire Period|Late Antiquity Period} (Greece)
  Age of Discovery
  Polish Golden Age
  {Golden|Silver|Bronze} Age of [Country]
  Golden Age of Piracy
  Elizabethan Era
  Protestant Reformation
  Classical Period
  Jacobean Era
  Age of {Enlightenment|Reason}
  Scientific Revolution
  Georgian Era
  Romantic Era
  Napoleonic Era
  Victorian Era
  Edwardian Era
  {Indus Valley Civilization|Vedic Period|{Maurya|Kushan|Gupta|Vakatak|Pala|Sena|Hoysala|Kakatiya|Vijayanagara|Gajapati|Maratha} Empire} (India)
  {Yayoi|Kofun|Asuka|Nara|Heian|Kamakura|Muromachi|Azuchi-Momoyama|Meiji|Heisei|Reiwa} Period (Japan)
  Ancient Near East
  {Jemdet Nasr|Early Dynastic} Period (Ancient Near East)
  Akkadian Empire
  Gutian Dynasty
  Sumerian Renaissance
  First Babylonian Dynasty
  Neo-Assyrian Empire
  Neo-Babylonian Empire
  {Persian|Achaemenid|Macedonian|Seleucid|Parthian|Sasanian|Ottoman|Safavid} Empire
  {Rashidun|Umayyad|Abbasid|Fatimid} Caliphate
  {Buyid|Seljuq|Ayyubid} Dynasty
  Age of {Taurus|Aries|Aquarius}
  {Golden|Silver|Bronze|Heroic|Iron} Age of Greek Mythology
  year {1-9999} {AD|BC}
  Wild West
  {Beginning|End} of the {World|Galaxy|Universe}
  


