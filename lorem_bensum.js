// Lorem Bensum generator
// Produces sentences which are (statistically) similar to what Ben says, or whatever.
var loremBensum = function(settings) {
  var data = [
    "We can change the colour of objects in a room, which is super-powerful when you think about it.",
    "How's that going, do you want to pop outside?",
    "Yeah, course.",
    "How was it?",
    "Yeah wait, you got, how is it you've got anything left to do.",
    "Shall we do that just now?",
    "Cool, cool, cool, cool, cool.",
    "Yo, how's it going?",
    "I keep on saying like stupid things in calls like take it easy or whatever.",
    "I know it's like a unique example or whatever.",
    "You can train it per venue I think.",
    "It might be cool to have a talk when you've looked at the code or whatever.",
    "Train it over a sequence of things, I dunno.",
    "I don't, I don't know if it would, that might...",
    "I keep on having these things, it's like a few days ago Anthony had a shower curtain.",
    "Aww, that is cute.",
    "This is at six fifteen in the morning which is really early.",
    "Party time.",
    "Newfound bullying.",
    "I won't be massively, massively hungry.",
    "I did have two and a half burritos for lunch.",
    "It's pretty, pretty sizable.",
    "Alright, okay, good.",
    "I think it might be like less structure, I don't know...",
    "It'll just say like zap it five times in the last hour or whatever.",
    "Right, yeah, take it easy.",
    "Exciting stuff.",
    "No worries at all.",
    "It needs to go, does that make sense, what were you?...",
    "How about something like...",
    "Yeah right on.",
    "Okay cool so.",
    "Okay I, yeah...",
    "Right erm so yeah.",
    "If you wanted to make a back button that would be cool or whatever, does that make sense?",
    "The other thing is yeah, did you know at the random hacks thing someone used the API?",
    "Er right yeah then, is that cool?",
    "Okay yeah so checkboxes.",
    "I guess if we were to make, or give some mini example apps...",
    "Just, totally, I guess.",
    "No, not even slightly.",
    "It would just be like...",
    "The sheer amount of information in there is just like massive.",
    "Yeah, okay, catch you later.",
    "Totally!",
    "I got it because my friend has a mega hammmer.",
    "Nice one!",
    "Don't really know what I'm doing really, partying maybe.",
    "Mince pies, daily scrum...",
    "That would be awesome actually, yeah!",
    "I don't know, I hadn't really thought that through actually.",
    "So if everyone's away during christmas will the company make like massive profits?",
    "Yeah, yeah, totally, yeah, cool.",
    "Thirty three unread messages in the chat thing.",
    "That's not that's boxers...",
    "Look at Ben, look at Ben.",
    "Also you can stay stuff like pug...",
    "There is a useful application, which is the thing we're talking about which is er, Jenkins.",
    "Brilliant!",
    "What's been changed?",
    "Perhaps just delete a few sections?",
    "I had a really good idea for a project, it's like really interesting, I thought you'd want to know.",
    "I don't think that...",
    "It's a solid idea actually.",
    "So what you do is you give it a webpage like White October or whatever.",
    "Then down here if there's like three stylesheets...",
    "You know like all these kind of things.",
    "You connect to this, you draw lines from here, here, here, here...",
    "So like this one here has ramifications here.",
    "What I've got is I've got this thing that basically goes through...",
    "So I've got basically it goes through every element and it works out the dimensions of it and saves that.",
    "So like phantom js is like really nice like that.",
    "Pretty nice.",
    "I made a point of putting music on when Anthony leaves so it's like we start having a good time.",
    "Ah, awesome",
    "Where were you...?",
    "Poor Dave... brilliant!",
    "Er so yeah like I... er, yeah.",
    "Seems like quite a lot of people share your, your irritation.",
    "Which shop, and when?",
    "Just uh, I'm trying to get better at responding to emails and stuff like that",
    "Why are you watching that, what?",
    "What have you just been...?",
    "Alright it was good sitting back there and seeing all people and stuff... whatever.",
    "This is my first conference of this style or something.",
    "So I just wanted to see what it was like, and so far it's been great with all the talks and stuff.",
    "Erm yeah, but not today...",
    "I just need to finish this thing today...",
    "Perfect! I would be so into that, it would be amazing.",
    "What as in what, that would be?",
    "Nope, I really want to see that. I want to see that sherlock holmes thing, that would be amazing.",
    "No, no it would be fine.",
    "Yeah that would be perfect.",
    "What as in just now or what?",
    "Yeah, no that would be so nice I would really love that.",
    "Yeah sure I've probably got a couple of hour more work.",
    "Okay super, alright okay.",
    "I've got that sleepy taste in my mouth, you know that?",
    "After the hack day thing I've been up all right or whatever.",
    "I got really hot in my sleep and I'd just been sweating and I'd also been dribbling.",
    "Dinner... like evening meal.",
    "So yeah, that's brilliant!",
    "Yeah it's using websockets so it's like super fast.",
    "Ruby is great, or whatever",
    "Basically I just built this thing which is just like really nice, you know?",
    "Neato, that is brilliant!",
    "I'm not explaining myself very well...",
    "That is totally brilliant or whatever.",
    "This is Dave the boss",
    "Everyone's working at stuff",
    "Right, we're going to go out and get lunch and stuff",
    "Um, yeah, nice one!",
    "They were just so cool, they would like twist round then come out",
    "No, they had some like metal ones aswell",
    "Do any of you guys have some like water?"
  ];

  var jquery = [
    "Cool.",
    "Thanks, Dave.",
    "Right, yeah, as Dave said so I've got a bit of a preamble before my talk.",
    "I'm gonna have some demos.",
    "So, what I want you to do is I want you to get your phones out and visit this URL which is now.jqueryuk.com, right?",
    "And so classically conference WiFi is terrible and all of my demos rely on it.",
    "So if you could be take extra care not to be like downloading any large files or updating anything, it would be really, really good.",
    "I'm, I'm fairly confident it's gonna work.",
    "Yeah there's also so this is the first time that I'm.",
    "I'm trying a couple of these things.",
    "So, yeah, just bear with me, that's the apology over.",
    "So, another thing what would be really good is if you turned off the lock screen of your mobile cos there will be a couple of times later on where we need your screen on for quite a long time so that it doesn't interrupt timings with your phone so if you get an opportunity to do that, that would be cool.",
    "Okay, and lastly the most important thing, so what you should see on your phone or tablet is a big green circle and a, a four-digit hex code at the top.",
    "The most important thing about this entire talk is for you to remember that code.",
    "Okay, and everyone's got kind of individual codes.",
    "And, this is like, I'm gonna be testing you later on in the, in the talk.",
    "And also is gonna disappear half-way through so if you've got to memorize it, write it down, tell your neighbor just, it's, that's very important.",
    "You can ignore the rest of the stuff.",
    "Hello I'm Ben.",
    "So I can get started now.",
    "So I live here in in Oxford.",
    "I work at a company called White October who do conferences and stuff.",
    "I also help out running JS Oxford which is an ace little meetup that we've got.",
    "I'm also part of Adventure Club which is a kind of secret underground JavaScript club which is a lot of fun when we meet.",
    "I was looking at this talk title the other day and, I realized that it actually kind of reads like something that would be very kind of a very useful, practical guide to using jQuery in like real world situations.",
    "But, like this is, that's totally not this talk, so I'm sorry I guess but, I guess we've had a long day of learning stuff, so hopefully it's not too bad that you're not gonna learn anything anymore.",
    "I totally forgot to say something there.",
    "Cool.",
    "So, what I want to talk about is jQuery in the real world.",
    "So, what we tend to do is, we think about jQuery like, or we use jQuery in, for just modifying the kind of document structure of a page, for applying CSS classes and, and styling elements.",
    "And what I'm gonna talk about today is how we can maybe think outside the browser window and think about what kind of impact our devices have on their environment.",
    "And the kind of path we're gonna take through this is we're gonna think about, first we're gonna think about browsers, like browsers are really well-defined objects, like they're, they're kind of as an, as an application we know that if we pump HTML, CSS at it we'll kind of get something out of it.",
    "It's very, it's very kind of like well-defined APIs you kinda know where you're at with a browser.",
    "We know by coming to conferences like this, we learn more about them as well.",
    "Now like the opposite of this maybe is a thing.",
    "Okay, and I'm gonna read this definition.",
    "It's like a thing, an object that one need not, cannot, or does not wish to give a specific name to.",
    "Look at that metal rail thing over there.",
    "This is in the dictionary like metal rail thing.",
    "I, I totally love this.",
    "And the, the, the point I like is that it's very kinda like vague abstract way of thinking about an object.",
    "It's not well-defined, you're not saying this browser has this capability.",
    "You're just like, it's a metal rail, it's an object in your hands.",
    "So the reason I'm, I'm kind of drawing that parallel from browsers to things is partly cos I get really excited about the Internet of Things, like, yes buzz words, but you see some great stuff coming out of it.",
    "And I think part of the reason that we see this kind of innovation in, in the Internet of Things applications is because people are viewing the way we interact with technology in a much more abstract generic sense.",
    "So like when we're building websites for phones, we might think about whether or not it's responsive, whether or not it kind of responds to touch input intuitively.",
    "But we don't think about the other ways that this, this phone, we physically interact with it.",
    "We don't think about the kinda different ways that this phone can interact with this environment, with our environment.",
    "And so we're gonna try and cover some of that today.",
    "And we're gonna try and think of a browser as being more of a thing.",
    "Brilliant.",
    "Right, okay, so what we're gonna do is we're gonna think about a lot of things like these are every one of these thoughts is one person in this audience their, their browser.",
    "So each dot represents a dot on your screen and you're kinda like linked together with that dot.",
    "And what we're gonna do is we're gonna look through various ways that we can kinda grab information from, from our phones and what information we have available about our environment.",
    "So, there's a kind of, if you look at your phone just now, the, the circle should have gone gray to kinda represent this.",
    "I hope it has.",
    "Things would be going well.",
    "Right, so first of all, we're gonna look at metadata, so data about the device itself.",
    "So first of all, battery status, okay?",
    "So, you can see in green those devices that support the battery status APIs.",
    "The ones that are pink are ones that are charging.",
    "And you can see that it's updating with the actual battery levels of every device in this room.",
    "So, like, we can do some really interesting thing by, things by pulling together this data, right?",
    "One thing is like we could kinda coordinate charging throughout the room, like, so we could all kind of do that efficiently but as I said in the start this isn't a useful talk like we're not gonna cover useful things.",
    "Location there's some artifacts there.",
    "Location all pretty much all of our devices we can gather a kinda latitude and longitude of where your phone is on the earth Right?",
    "In this scenario it's not that interesting because I know everyone's here cos I can see you all.",
    "So I can kinda make a pretty good guess about that.",
    "Orientation, like the, the actual kind of position your phone is angled we can read information about this.",
    "And this is interesting cos it's like, okay this is interesting cos it's thinking about your phone as, as more of an object than a thing, right?",
    "So you should be able to, to see your own circle moving around, but I think it's not really working here.",
    "That's all right.",
    "So yeah, we're really stepping away from thinking for browser and thinking for thing, like a browser doesn't have a right and left in this property, okay, sorry, yeah.",
    "Sorry about this.",
    "There we go we'll skip that slide.",
    "Right, okay so that's the information about the device itself, but we can also read information from our external environment in.",
    "So one thing we can do is that we can access get user media so we can get video and audio streams from our devices using this API which iOS doesn't have, so that's probably on the great.",
    "We can access ambient light levels.",
    "We can access light level within this room in lumens.",
    "We can see, kind of, if the sun's risen kind of.",
    "We can access touch, so we can see if fingers are touching a device, okay?",
    "And this is what's really nice about touch, is it's allows us this really kinda close interaction with humans and technology, like you can kind of pass information.",
    "We'll be doing that a bit later.",
    "So that's ways that we can kind of get input into our devices.",
    "But there's also some APIs that allow us to kind of make changes to our environment as well.",
    "So the vibrate API, allows our phones to, we can change, we can set off the vibrations on our phone.",
    "So we can actually move our phone physically using the web APIs, not your laptop.",
    "Visual.",
    "We can, we can change pixels on all our phones.",
    "We can change the color of an object within a room which is like pretty awesome when you think about it.",
    "And also audio, using web audio using web audio we can, we can make sound waves around the room so we're kind of, firing off like random pitches.",
    "And we can, kind of, ultra stuff, we can pass them through filters.",
    "We can do yeah, say on the frequency of this node, for instance.",
    "And because our phones are kind of connected to the web we can connect them to other things with other sensors.",
    "So for instance, here we've got the date of light rain: 5.7 degrees centigrade.",
    "This is the weather in Tokyo, which I can access as easily as I access the kind of orientation of your device.",
    "And that's a really kinda powerful thing that we can kinda connect to our devices to other devices and pull their environmental information and affect their environment as well.",
    "Cool, so we've talked about going from browsers to thinking about things, thinking about them as objects, but now what we're gonna think about is several things occupying the same space and sharing an environment.",
    "I don't know if this is gonna work.",
    "So what I want you to do is on your phones oh, what, so say is this ridiculous.",
    "I don't know why I'm doing this.",
    "And when you scroll down you should see three buttons that you can press.",
    "And there's like a reset button as well if you pressed any of them by accident.",
    "Okay, and what we're gonna do is we're gonna, we're gonna press these at specific times.",
    "And using that, we've gonna find our position within the room okay?",
    "This is gonna work great.",
    "Cool.",
    "So I need to stand here, right, okay, so what I'm gonna do, okay, so this is for button A.",
    "I'm gonna slowly sweep my hand across the room.",
    "And when it passes you, I want you to press button A on your phone.",
    "Is that cool?",
    "Excellent.",
    "Right, this, it's gonna take about ten seconds.",
    "There's yeah, there's like a 15-second cycle, so yeah, there's a bit of waiting around.",
    "But this, yeah, this is weird.",
    "Right, we all ready, it's coming, here we go.",
    "Okay, cool, right, now we're gonna press button B, we're gonna stand over here, gonna have to wait again.",
    "Right, okay, it's coming around.",
    "I'm pointing at the wall.",
    "Cool, right, okay, so this third one, so button C, we're gonna press at exactly the same time.",
    "And what I'm gonna do is, I'm gonna count us all in.",
    "And I'm gonna go, like, five, four, three, two, one, go.",
    "And when I say go, not on the one, on the go.",
    "Like, that is when we're gonna press the C button, so is everyone ready?",
    "Five, four, three, two, one, go.",
    "Okay, right, so your phone should have gone blank and I want you to turn it to face me.",
    "Cool, good right, so first of all from this angle here, we're gonna show HSL, across this angle here.",
    "So this is a huge changing across the room, so you can see it goes blue through to green over here.",
    "Cool, so that's using those first and third time stamps.",
    "Using all three time stamps you can work out the wide direction.",
    "So, now we're in strips across the way.",
    "So we're kinda going like this, which doesn't seem to work so well, but whatever.",
    "And now, from this point here we're gonna sweep across the room and turn on and play as tune.",
    "So, right now for the hard bit.",
    "Right.",
    "So using those three time stamps, you're able to work out your x and y position within the room.",
    "But we can sense those in the same way we sense any other objects features about your phone.",
    "So this is the positions of every device within the room, apparently.",
    "Okay, so what this is.",
    "Yeah, we've got a few issues.",
    "It's like, it's kinda like a monster.",
    "Yeah, so whatever, it still works.",
    "The, there's apparently some people behind me yeah, I need to work out this.",
    "By the way we can still do stuff like this.",
    "So this is like the position of every device in the room, kind of, right, what we're gonna do is we're gonna transitio a tone across the room, and a color, and that the tone's gonna go from like, low to high and the hue of each phone is gonna be the kind of tone, match the tone and the color.",
    "And we're gonna start up at the back, right, apparently.",
    "And then bring it down to behind me.",
    "And then across to over here and then across to, wait how, oh, that's easier, across to over there.",
    "And back down to here and then finally to there.",
    "Right, so in 15 seconds, so I want you to hold up your phones.",
    "Maybe point them towards the center of the room, actually and, like everyone can see.",
    "That would be kinda cool.",
    "So it should start creeping across from this side.",
    "I don't know if that even works.",
    "Like.",
    "Cool.",
    "And I think they should all go white in a minute.",
    "That's still there.",
    "I don't know it's going across to here, I think.",
    "Cool.",
    "Yeah.",
    "So, that's using several devices.",
    "Like, think about lots of things together in an environment even if it was a bit sketchy.",
    "And what I've kind of covered there is or, basically there's I was sure that was gonna happen.",
    "I was like so sure of that.",
    "So basically there's like a line between like our real and virtual worlds.",
    "And we're able to kind of like, it's a kind of very dynamic line.",
    "And I'm, I'm really fascinated about how technology can affect our physical world.",
    "And one of my favorite examples of this is from kind of old school computing.",
    "Does anyone know what this is, by the way?",
    "You know what it is Oliver doesn't count.",
    "This is a storage unit from UNIVAC one computers so this is like a computer from the 60s.",
    "And this is the kind of component that they would use to store data.",
    "It's like, maybe about this size, and the way this works is something called a mercury delay line, which is one, like the coolest technologies ever.",
    "And the way this works is.",
    "Basically you've got a wire that comes in to a speaker, and then a line of mercury.",
    "And then a microphone.",
    "And then another line.",
    "And what you can do is you can send pulses down this, this, you can send pulses down the wire.",
    "And they will get converted into sound waves and travel along that line of mercury and get picked up by that microphone a slight, after a bit of a delay.",
    "And so as well as pulses, we can send actual data down that by encoding it as pulses.",
    "So we can send bits of data in one line and it travels down as sound waves.",
    "And, after a little while, it comes out the other side.",
    "And when this gets interesting is when you add a line that, that connects the output with the input because as those pulses get received on that microphone, they get fed back in to the speaker on the other side.",
    "And what that allows is persistent storage, but what's really interesting about it, is the fact that, that, that data is stored in sound waves through metal, you know?",
    "That's like awesome and the thing I like about this is that it's kind of like a reminder that technology is fundamentally physical, you know?",
    "Our, our phones.",
    "Our laptops.",
    "They aren't a kind of magical virtual world.",
    "They're machines.",
    "And part of our physical world.",
    "Yeah.",
    "I came up with this slide last night.",
    "So.",
    "I'm gonna suggest a different type of storage.",
    "And we're gonna call it Foxall Storage.",
    "And, yeah, this is a bit of a hack, and I don't know if this work, it's gonna work.",
    "I think I've tried it with, like, seven people before.",
    "So, we'll see how it scales.",
    "So the, the fundamentals of Foxall Storage.",
    "Firstly we want to attach a kind of meaning to the data that we're we're storing.",
    "So like a kind of a format.",
    "So what we're going to do is we're going to take four digit hex code, for example, and we're gonna map this to a two dimensional point.",
    "And the way that we do this is we take a space and we subdivide it into 16.",
    "We take the first digit of this and we pick one of those 16 subdivisions and subdivide that.",
    "And so on for the next digit and the digit after that and the digit after that.",
    "And what we have is now a point.",
    "So, what I'd like you to do is go into your phone and scroll right down to the bottom and you're gonna see an input field.",
    "And, I want you to input the four digit hex code that I asked you to remember at the very beginning of this talk.",
    "If you're an iPhone user I think you need to press done cos it doesn't auto submit or something like that.",
    "Return sorry.",
    "Cool so yeah we're seeing this data coming back from storage.",
    "So yeah it's not the most robust storage it turns out.",
    "We've got a few, kind of mistaken points down here.",
    "But yeah, the, the really interesting thing about this is when you think where about this data is stored.",
    "Right?",
    "Like, I'm just receiving inputs from your phones and we're able to draw the jQuery logo.",
    "Woo!",
    "There's no more demos.",
    "So, yeah.",
    "I just kind of wanted to wrap this up really quickly.",
    "Like all of the stuff I've talked about today has been like, very kind of, very obvious in terms of how we interact with our environment, right?",
    "Very literal.",
    "You can make noises.",
    "You can turn things on.",
    "Whereas actually there's other ways that you can you can effect someone using a website or using web content.",
    "Like by writing web content and by creating websites we're able to kind of change lives for users.",
    "And it might be to disseminate an idea or it might be to sort of inspire them to go and ride a bike or, or kind of go out and help someone.",
    "The things that we do as people who work with the web have an effect on end users, on their environment.",
    "And I think as people who work with web I think this should be our number one goal.",
    "The impact, the stuff that we create, has on people.",
    "I'm bringing this back to JQuery today.",
    "What JQuery represents says to me is we've got kind of raw, dumb, browser capabilities and JQuery lets us, takes us a little bit above that.",
    "And allows us to get that little bit closer to thinking about the things that we create and how they change someone's environment and world.",
    "And, I think this is how we should be viewing j, viewing jQuery, as a way of letting us change the world for people.",
    "Cool.",
    "Thanks, for that."
  ];

  data = data.concat(jquery);

  settings = settings || {};
  var depth = Math.min(Math.max(settings.depth || 4, 0), 10);
  var smoothing = settings.smoothing || 0.01;
  var wordLimit = Math.min(settings.wordLimit || 15, 500);

  // Splits each sentence into tokens, including grammar
  var tokenise = function(sentence) {
    return sentence.toLowerCase().replace(/[\?!\.]+/g, "").replace(/,/g, function(c) { return " "+c; }).split(/\s+/);
  };

  // Adds beginning and end of sentence tokens
  var wrap = function(tokens) {
    return ["^"].concat(tokens).concat("$");
  };

  // Creates a hash of all usable words
  var allWords = tokenise(data.join(" "));
  var words = {};
  for (var i = 0; i < allWords.length; i++) {
    words[allWords[i]] = 0;
  }

  // Creates a tree of word chains up to `depth`
  // terminating with a count of possible words to end the chain
  var getCounts = function(data) {
    var counts = {};
    for (var i = 0; i < data.length; i++) {
      var line = wrap(tokenise(data[i]));
      for (var j = 0; j < line.length; j++) {
        var set = line.slice(Math.max(j - depth, 0), Math.min(j + 1, line.length));
        var current = counts;
        for (var k = 0; k < set.length; k++) {
          current = current[set[k]] = current[set[k]] || {};

        }
        current._ = (current._ || 0) + 1;
      }
    }
    return counts;
  };

  // Given a set of words, finds the next word
  var nextWord = function(previousWords, allWords, counts, depth) {
    var priors = previousWords.slice(-depth);

    // Gets possible words and their counts
    var getWordCounts = function(set, counts) {
      for (var j = 0; j < set.length; j++) {
        if (counts[set[j]] === undefined) return {};
        counts = counts[set[j]];
      }
      delete counts._;
      return counts;
    };

    // Shallow clones an object
    var clone = function(obj) {
      var cloned = {};
      for (key in obj) cloned[key] = obj[key];
      return cloned;
    };

    // Gets the sample counts for each word and totals
    var wordCounts = getWordCounts(priors, counts);
    var possibleWords = clone(allWords);
    var totalSamples = 0;
    var totalWords = 0;
    for (key in possibleWords) {
      possibleWords[key] = wordCounts[key] ? (wordCounts[key]._ || 0) : 0;
      totalSamples = totalSamples + possibleWords[key];
      totalWords++;
    }

    // Laplacian smoothing function creates more robust and flexible model
    var smoother = function(value, samples, words, smoothing) { return parseFloat(value + smoothing) / (samples + smoothing * words); };

    // Applies smoothing/normalisation to all possible words
    for (key in possibleWords) {
      possibleWords[key] = smoother(possibleWords[key], totalSamples, totalWords, smoothing);
    }

    // Selects a random word based on smoothed likelihood value
    var number = Math.random();
    var accumulate = 0;
    for (key in possibleWords) {
      accumulate = accumulate + possibleWords[key];
      if (number < accumulate) return key;
      var last = key;
    }
    return last;
  };

  // Changes the first letter of a string to upper case
  var upperCaseFirst = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Changes a sentence to sentence case
  var sentenceCase = function(str) {
    var sentences = str.split(". ");
    for (var i = 0; i < sentences.length; i++) {
      sentences[i] = upperCaseFirst(sentences[i]);
    }
    return sentences.join(". ")
      .replace("ben", "Ben")
      .replace("i'm", "I'm")
      .replace("i've", "I've")
      .replace("i'd", "I'd")
      .replace(/[ \.,]i[ \.,]/, function(i) {
        return i.toUpperCase();
      });
  };

  // Generates a sentence
  var counts = getCounts(data);
  var sentence = ["^"];
  var i = 0;
  var punctuated = true;
  do {
    var next = nextWord(sentence, words, counts, depth);
    if (!punctuated || !(punctuated = next.match(/^[\.,!?]+$/g))) {
      sentence.push(next);
      i++;
    }
  } while (next != "$" && i < wordLimit);
  sentence.push(nextWord(sentence, {".": 0, "!": 0, "?": 0, "...": 0}, counts, depth));

  return sentenceCase(sentence.slice(1, sentence.length).join(" "))
    .replace(/ [\.,!?]/g, function(e) { return e.charAt(1); });
};
