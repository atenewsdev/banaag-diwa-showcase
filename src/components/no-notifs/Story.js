import React from 'react';

import { Text } from '@chakra-ui/react';

import { useInView } from 'react-intersection-observer';

import Scene from './Scene';
import Dialog from './Dialog';

const MyTitaCecilia = () => {
  const [firstSectionRef, firstSectionInView] = useInView({
    threshold: 0,
  });

  const [secondSectionRef, secondSectionInView] = useInView({
    threshold: 0,
  });

  const [thirdSectionRef, thirdSectionInView] = useInView({
    threshold: 0,
  });

  const [fourthSectionRef, fourthSectionInView] = useInView({
    threshold: 0,
  });

  const [fifthSectionRef, fifthSectionInView] = useInView({
    threshold: 0,
  });

  const [sixthSectionRef, sixthSectionInView] = useInView({
    threshold: 0,
  });

  const [seventhSectionRef, seventhSectionInView] = useInView({
    threshold: 0,
  });

  const [eighthSectionRef, eighthSectionInView] = useInView({
    threshold: 0,
  });

  const [nightRef, nightInView] = useInView({
    threshold: 0,
  });

  const [currentSection, setCurrentSection] = React.useState(0);

  React.useEffect(() => {
    if (firstSectionInView) {
      setCurrentSection(0);
    } else if (secondSectionInView) {
      setCurrentSection(1);
    } else if (thirdSectionInView) {
      setCurrentSection(2);
    } else if (fourthSectionInView) {
      setCurrentSection(3);
    } else if (fifthSectionInView) {
      setCurrentSection(4);
    } else if (sixthSectionInView) {
      setCurrentSection(5);
    } else if (seventhSectionInView) {
      if (nightInView) {
        setCurrentSection(8);
      } else {
        setCurrentSection(6);
      }
    } else if (eighthSectionInView) {
      setCurrentSection(7);
    }
  }, [
    firstSectionInView,
    secondSectionInView,
    thirdSectionInView,
    fourthSectionInView,
    fifthSectionInView,
    sixthSectionInView,
    seventhSectionInView,
    eighthSectionInView,
    nightInView
  ])

  return (
    <>
      <Scene
        section={currentSection}
      />
      <div ref={firstSectionRef}>
        <Dialog>
          <Text>
            It was always like this. We let each day in the week dissolve in complete vitriol, including
            weekends. There was no escape from the endless blithering, each of us always had caustic things
            to say to each other, and it almost always ends in a long silence. And those moments of quiet, it’s
            not like we’ve stopped fighting. They’re nothing but brief pauses to rest and prepare rebuttals for
            each other once the temporary truce ends. After that, the flags are raised again, and another war
            is waged.
          </Text>
        </Dialog>
        <Dialog>
          <Text>
            “Mao na ni ron, mas nasayod pa ka sa akoa, mas tigulang ko nimo ba.” My Tita Cecilia  disputes, as she always does almost every before dinner, when I provide feedback from the news  we’re watching. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
            “Kinsa ba gud naa sa tamang pangutok ang magbudget og white sand para sa lugar na di  man pud white sand. Pandemic pa jud, kung kanusa gutom og gakasakit ang mga tawo karon pa  sila magpagwapo ani. Asa makahimulos ta ana.” I retorted. I can already feel colored rage rising in  my body. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
            “Pasalamat nalang gani ta na gi aksyunan na sa presidente, sugot ka hugaw nalang ang  Manila Bay pirmente?” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
            “Dili man gud, mali lang jud ang timing ba, dili ka malain nga milyon milyon nga pondo  ang gilaan dira, para sa balas, sa tunga sa pandemya, kung asa gakamatay na ang mga tawo? Dili ba  siya out-of touch?”
          </Text>
        </Dialog>
        <Dialog>
          <Text>
            “Chris, wala man gud ka kasabot! Kay mas maalam pa man ka, ikaw nalang mag presidente,  kita kang tigulang na na siya, unya ga try gihapon siya. Ikaw? Sa imong edad, unsa imong nabuhat?”  At this point, I resigned into the exhausted silence, which she usually mistakes for a win. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
            It’s already borne in my mind though; there is no victory or defeat in our fights, just  complete mental prostration. 
          </Text>
        </Dialog>
      </div>

      <div ref={secondSectionRef} style={{ marginTop: '100vh' }}>
        <Dialog>
          <Text>
            My Tita Cecilia was an obnoxious woman. Having been under her care ever since my  parents died from a motorcycle accident when I was still a child, she’s never ceased to provide for  both of us. Now, we live in a house in some subdivision at Gensan, one with all the other middle class citizens who are getting by but not actually living. I’d say life was going well for the both of  us until our perceptions of reality began to differ. She will tell you I began to lose myself to liberal  propaganda. I’d say my eyes were opened.
          </Text>
        </Dialog>
        <Dialog>
          <Text>
            On a side note, it is thanks to her incredibly headstrong and consistent nature that we’re  surviving right now. The pandemic took the jobs of a lot of people that we know. Tita Cecilia  actually didn’t have a job for months, but her side career, being a passionate plantita, helped us  hold out for a little bit longer.
          </Text>
        </Dialog>
        <Dialog>
          <Text>
            She sold her beloved plants to wealthy families who could spend thousands of pesos for  dirt and a little green in pots in this time of suffering. Even her most exalted ones, she gave up just  so she could keep us afloat. There was joy in earning that money from that racket, of course, until  you realize how devastating that was for her mentally. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
            I know my Tita and I aren’t always okay, but it’s still awful to see her get sad for having  sold those plants she never meant to sell. Fortunately, that racket went on until she got her job  back – being a snappy manager at a fast-food chain.
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          Her soul was fortified with the tenacity that of farm animals. If I need to be more specific,  she might have the build of a hefty carabao, but deep inside, she has the brain of a mule. Her  stubbornness was beyond anything I’ve ever dealt with. But insults aside, I do appreciate her hustle;  I appreciate it more than what she thinks. I may not like her, but I think I love my Tita Cecilia.
          </Text>
        </Dialog>
      </div>

      <div ref={thirdSectionRef} style={{ marginTop: '100vh' }}>
        <Dialog>
          <Text>
            One morning, she decided that COVID-19 wasn’t a real serious thing, which cast a colossal  cloud of frustration upon the house. This time, her dumb tirades condensed into something more  disgusting. The more she tried to assert its nonexistence, the more I began to retreat. I was already  giving up; if she didn’t want to believe it, then that’s alright. I supposed I should just start with  silence.
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Dili na jud ko mutuo aning pa-covid nila ba.”
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          A hush descended over the table. The smell of slightly scorched rice wafted in between us.  Her sunflowers, stretching at the window, seemed to listen to her rant. A pang of further  frustration and tiredness struck me, and I could only gaze at her while growing a frown. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Kung tinood pa ni, hagbay ra tang tanan nainfect og namatay. Gibuhat-buhat lang man  daw ni ingon atong video nakita nako niaging adlaw, tanawa pa gud. ”
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          … 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Wala man lagi kay matubag?” Again, she mistook my silence for a victory. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          We then proceeded to eat breakfast. It was unusually peaceful. I fell into contemplation of  whether I should say anything at all. What I kept thinking was that it could no longer be helped.  That all my words and arguments have proven futile in doing anything or that maybe even so, I  should still do my part and speak. My thoughts were interrupted by a sentence she said warmly.  The lack of a violently urgent tone was startling. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Sa ila tito nimo ta mag pasko ha?” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Sa Marbel?” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Oo, mga two weeks ta didto. Sunod adlaw ta lakaw. Naka file na kog leave.” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Kailangan muuban?”
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Aw ikaw ra magmahay kung di ka muuban. Dugay dugay na sad ka wala kita sa imong  mga tito og tita og mga ig-agaw. Dugay na sad ka way gawas gawas og balay” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Unya mao ra gihapon, mga DDS kaayo mo. Gilaay na kog paminaw sa inyong pagka  bugo.” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Kami pa nuon ang bugo ani ron. Mas dugay pa mi nabuhi diri sa Pilipinas kaysa nimo.  Wala ra jud ka kasabot sa pamalakad sa atong gobyerno. Wala unta koy trabaho gani siguro karon  kung wala galihok atong pangulo. Di man nimo na masabtan kay wala pa ka sa among edad!” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Tungod man gud na sa pagka tanga sa gobyerno ba nga nisulod nang covid sa atong bansa,  mas giuna pa man nuon ang ‘friendship’ with China, tanawa.” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Unsay covid? Dili lagi na tinuod. Buhat buhat lang lagi na.” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Buluka sad nimo oy para di ka mutuo ana, grabe na jud.” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          My mouth had betrayed me. 
          </Text>
        </Dialog>
      </div>

      <div ref={fourthSectionRef} style={{ marginTop: '100vh' }}>
        <Dialog
         
          left
        >
          <Text>
          The world was still for a moment; she looked at me with eyes that blazed like suns. I’ve  never seen her this red and this pissed. 
          </Text>
        </Dialog>
        <Dialog left>
          <Text>
          I figured I probably should not have spoken. But I really just wanted her to understand  and take what I said. I retreated into the silence again, this time just promising myself not to say  anything and leave her be. I’m really not sure if there’s a cure for stupidity, but my Tita Cecilia, I  feel like I might finally say she’s hopeless. 
          </Text>
        </Dialog>
        <Dialog left>
          <Text>
          The morning resumed without any glancing. An eerie stillness heavily pierced the room.  There was no knowing when the next word would be said as we were both shrouded with a blanket  of agitation, except that I’ve begun to spin thoughts of shame and rage as well. What if I stopped  caring this time? What if I just let her say things as she would and allow her to continue her foolery?  The thoughts began to scratch into my skull as I went into the kitchen once more to tidy up. Some  sentences really are stains you can’t clean. 
          </Text>
        </Dialog>
        <Dialog left>
          <Text>
          “Hugasi na tanan, panglimpyo sad dira. Wa na kay ayo nga bata ha,” The vexed inflection  in her voice resonated through and through. 
          </Text>
        </Dialog>
        <Dialog left>
          <Text>
          I was already washing the dishes; I wished I could wash away the bad feeling too. 
          </Text>
        </Dialog>
      </div>

      <div ref={fifthSectionRef} style={{ marginTop: '100vh' }}>
        <Dialog>
          <Text>
          The day for us to go finally came. The day before that was pretty much ordinary, just  riddled with unresponsiveness by me. And still today, I could not bring myself to speak. Having 
already packed her stuff last night in gaudy duffel bags, my Tita walked into my room to find me  sitting idly on my bed with nothing stowed.
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Nganong wala pa nanghipos?” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Di man jud ko muuban.” There was hesitation there. It took the energy of the entire  morning to say that. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Edi dili.” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          Surprisingly, she was quick to close the conversation. I wondered if she wanted to say  more; for sure, she must have been waiting for an apology. There were things I wanted to say I  lacked the energy to push away the pride. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          I watched my Tita finally go on with her final checks, taking note of the stuff she might  have forgotten to bring. Two weeks worth of stuff, a part of me is now beginning to wish I’d have  the strength to say sorry and come with her. But no, I can’t. I planted in my mind the idea of all  the potential perils if I go, given how risky it is to commute during this time. Also, they’re planning  an actual gathering. One infected person there, and we’ll be panting to our deaths in a couple of  weeks. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          She approached the door with all her baggage in her hands, then turned in my direction.  She cast a raging shadow onto the floor, the silhouette of her glaring with sinister light around its  edges. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Naa koy gibilin sa kwarto. Lakaw na ko.” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          And the gates creaked as they closed. A cold draft streamed into the sala the moment she  left, and finally, after some hours, I could breathe again—the idea of being alone at home sparked a lot of joy, to be honest. One could clean the house themselves without feeling being held hostage.  One could have power over the entire house and decide when to do chores. And one could also  reflect and ponder many thoughts that refuse to leave with the person they’re about. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          The first thing I did was check her room, and on her table was money to last me for two  weeks. I supposed it was enough, given that I’m not the biggest spender in the house. I only buy  stuff that I need, or when they’re on an unbearable sale. Food deliveries and online shopping might  be included only when desperate. However, for now, I’ll have to run on a tight budget. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          She also left a note on the table, stating all the chores I needed to do, lest the house spiral  into total cataclysm. Of all the tasks there, her garden was the stranger. Something about it made  me nervous, maybe the probability I’ll leave her children to shrivel and die. The note also  emphasized putting the indoor plants outside for at least an entire day and the time they need to  be watered. Watering plants with the garden hose was the only fun part. 
          </Text>
        </Dialog>
      </div>

      <div ref={sixthSectionRef} style={{ marginTop: '100vh' }}>
        <Dialog>
          <Text>
          It was grocery time after that day, the moment I’ve always been afraid of. My Tita would  usually do these things with her time. I never left the house because of the risk, but this is one I 
needed to brave. It’s strange, though; she’s never gotten sick. That’s probably also why she thinks  the disease is nothing but a hoax. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          Eight months of self-imposed quarantine. Not seeing my friends in person for more than  half a year. Of course, going outside would be momentous, but it was not that exciting nor  overwhelming. The nearest local supermarket is just one sikad ride away. Still, it was more than  frightening. I could walk, but that wouldn’t be healthy under Gensan’s heat. The sun raved through  the midday sky, and the usually cool December breeze could not help but be hot. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          I went inside the supermarket with a mixed sensation of freedom and anxiety. I didn’t have  a local QR code with me, so the guard insisted I write my name on the logbook instead and told  me to register and download, or else I can’t get anywhere. He then sprayed a lot of alcohol on my  hands; I even added more, so much so to the point that I felt like my skin might dissolve.
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          It was time to enter the fray; the try-not-to get infected competition, which many people  no longer saw themselves as participants. Some had their face shields lifted, and others had their  mask completely down. Also, several people did have their masks on, but had their noses out—as  politicians do on TV. The environment gave an impression of what it was like before the pandemic,  except the masks part of course. People crowded side by side, everyone sticking close just to get  their hands on spaghetti packs and other discounted holiday goods. I was trying my best to be  careful. Death and disease felt more present than the Christmas spirit.
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Hala sorry sir!” To my deathly surprise, an employee bumped onto me in the crowded  canned goods aisle, his shoulder crashing with mine. Does he have the virus? Am I getting infected  now? This was not good. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          The moment stunned me for a few seconds; growing paranoia crept in my body like vines.  I was wilting in the atmosphere of the supermarket. I needed to get out. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          She approached the door with all her baggage in her hands, then turned in my direction.  She cast a raging shadow onto the floor, the silhouette of her glaring with sinister light around its  edges. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          A slightly long line plagued the two cashiers, and an array of people glittering with  incandescent sweat waited along. Industrial fans were brought out, yet it failed to blow off the  agitation shown by all of the customers who found the place too parching. The cashier and the  baggers couldn’t stop apologizing for the broken airconditioning unit, saying they’ll have it fixed  as soon as possible. I doubted. It probably won’t be replaced for days. Without convenient  ventilation, it was easy to expect someone to faint anytime. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          I left the place as soon as I was finished. There was enough light outside to make you  squint for eternity. I couldn’t wait to get seated on a ride and go home. On my way home, the sikad driver hoped to spark conversation. It turned into an interrogation by me.
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Wala man kaayoy kaso diri sa atong barangay ya no?” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Aw wala baya ko kabalo ga, pero naa man silay gina quarantine dira sa may high school  dapita.” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Pero kanang mga kaso jud ya ba,”
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Naa ata to sa may Purok 4, ambot kung tiguwang ba to, gikuha og mga naka PPE. Daghan  guro to siyag naka halubilo, naa man silay tindahan.” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          I didn’t know if I should be alarmed, but as far as I know, some people have already  perished from Covid in this barangay. They were mostly seniors, although no one that I know. I  needed to know that, I haven’t heard news from the outside in a while, except on social media. 
          </Text>
        </Dialog>
      </div>

      <div ref={seventhSectionRef} style={{ marginTop: '100vh' }}>
        <Dialog>
          <Text>
          The afternoon turned out orderly yet somewhat sad. I watered the garden and soaked the  burning ground after a fiery day, which then prompted an unpleasant draft of air and dust rise  from the earth and cast a suffocating atmosphere around me. Dinner was alright, or maybe not; I  only made myself some pancit canton with an egg on top since I was too lazy to make complicated  dishes. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          For the second day, I spent it watching anime and napping to pass the time. The third, I  only stared at the windows and sought more comfort watching shows recommended to me by  friends. By the fourth, I could no longer even bother to fix my bed or sweep the floor of all the  rooms. I may have just turned into a useless welcome plant at this point. And in all those days I  received no texts from my Tita, she must be thinking I’m alright, which I think I am, I guess. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          On the fifth day was something. She called, first during breakfast, and second when I was  tending her succulents. None of those calls I answered. I felt too anxious, too sorry to even  respond. It really wasn’t necessary yet, or maybe even if it’s desperate, I’d be too ashamed to say  anything.
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          The sixth day without her was deafening, although somewhat refreshing because I don’t  get to listen to anything stupid. It was also fun talking to classmates and friends through calls,  asking them how the holiday break is for them while being secretly jealous of all the fun they’re  having. I wanted to go out and pay visits, but then this unwanted strike would be for nothing. I  knew I needed to fight the feeling. 
          </Text>
        </Dialog>
        <div ref={nightRef}>
          <Dialog>
            <Text>
            My Tita called again. This time, I answered it but had no plans of uttering anything. I didn’t  even listen. 
            </Text>
          </Dialog>
          <Dialog>
            <Text>
            “Chris? Kamusta man dira? Basi patay na akong mga tanom dira ha? Chris? Hello?” 
            </Text>
          </Dialog>
          <Dialog>
            <Text>
            She ended the call, after a minute or so of saying hello. The anxiety swept through me like  floodwater. I sort of wanted to hate her even more, and yet a fraction of me wanted to say sorry and I could not entertain both. Besides, apologies are awkward, we don’t do that here. 
            </Text>
          </Dialog>
          <Dialog>
            <Text>
            I took a nap after that and woke up lightheaded, which was usual. Your body often insists on pulling you back to sleep after you’ve just woken up from a siesta. It was nothing. Until hours  passed and it was nightfall, that tired febrile sensation lingered and refused to leave. I took my  analgesics in hopes of getting rid of the bad feeling, assuming I was just tired and stressed after all  these days. I stared at myself in the mirror. Something was indeed wrong. I attempted to calm  myself down while fighting that growing itch in my throat.
            </Text>
          </Dialog>
          <Dialog>
            <Text>
            Of course, I couldn’t assume it yet for myself, I only had a fever, and my body felt frail; it  could be just, yes, a fever. The only other problem was that my throat wasn’t doing so well; it felt  dry and painfully crisp. I began gulping water as if my life depended on it. 
            </Text>
          </Dialog>
          <Dialog>
            <Text>
            What if this really was covid? If so, shouldn’t it be the best time to talk to Tita? But doesn’t  she think that this thing isn’t real? Would she still come home, though? The contemplations  screamed through me like ghosts.  
            </Text>
          </Dialog>
          <Dialog>
            <Text>
            Thoughts passed, and I found myself sleeping before I could even make and eat dinner.
            </Text>
          </Dialog>
        </div>
      </div>

      <div ref={eighthSectionRef} style={{ marginTop: '100vh', marginBottom: '10rem' }}>
        <Dialog>
          <Text>
          I woke up the next day thinking about how I forgot to tend to the garden and how I forgot  to eat. My muscles, my entire body wasn’t cooperating, and each breath I took felt a little shorter  and desperate than the last. I could still breathe, it just didn’t feel right.
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          I should say sorry before it’s too late. I had a feeling I wasn’t going to last the next few  hours of this ordeal; it’s weirdly fast. I took the phone, searched her name through messenger to  find her. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          She wasn’t online. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          I needed to wait for a few more hours yet I still tried to call her even if she wasn’t  responding. I walked to the kitchen and there was just this feeling of being warped, the effect of  your body slowly losing its oxygen supply. I peered through the window to find the plants still  alive, I needed to be okay and water them, they deserve that. But my entirety just didn’t cooperate.  All I wanted to do was to lay down, sleep some more, forget that I’m actually feeling under the  weather.
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          I was going to settle down, rest for a few more, and finally stop panicking about my  situation, until the phone rang. And I, in that prideful second, pressed the answer button while  feeling like there’s shards sliding down my throat. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Chris?” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Tita?” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Unsa man?” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Mag sorry lang diay ko tita. Kabalo man ko sige tag away kay kusog kaayo ko mutubag,  naa may paraan masturyahan ni na mga topic og tarong pero ambot… kanang, murag grabe lang  jud akong feelings ba na halos dili na nako mapunggan.” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          I started to cry. You could say I was scared, sorry, and stupid at the same time. 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Unya, muhilak diay?” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Mao lang, medyo nagmahay sad ko, unta niuban nalang jud ko. Lain akong paminaw.” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Unsay lain imong paminaw?!”
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Gasakit akong tutonlan, gilagnat sad ko, unya murag di sad ko kalasa ba.” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Huy basi covid na na. Muuli nalang ko dira dayon, try tawagi ang Barangay Health Unit,  pangitag number.” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Dili unta, di pa nako gusto mamatay.” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Sus di lagi ka mapatay sa covid.” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Hmmm.” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Unsa man?” 
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          “Mutuo na lagi kag covid tita?”  
          </Text>
        </Dialog>
        <Dialog>
          <Text>
          And we were back to the usual silence. 
          </Text>
        </Dialog>
      </div>
    </>
  );
}
export default MyTitaCecilia;