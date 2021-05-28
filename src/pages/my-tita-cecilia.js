import React from 'react';

import { Text } from '@chakra-ui/react';

import { useInView } from 'react-intersection-observer';

import useCurrentWidth from '../utils/useCurrentWidth';

import Scene from '../components/my-tita-cecilia/Scene';
import Cecilia from '../components/my-tita-cecilia/Cecilia';
import Dialog from '../components/my-tita-cecilia/Dialog';

const MyTitaCecilia = () => {
  const ref = React.useRef();
  const width = useCurrentWidth();

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

  const [bgWidth, setBgWidth] = React.useState(0);
  const [bgLoaded, setBgLoaded] = React.useState(false);

  const [selected, setSelected] = React.useState(false);

  const [currentSection, setCurrentSection] = React.useState(0);

  const margin = React.useMemo(() => {
    return (width - bgWidth) / 2;
  }, [width, bgWidth]);

  React.useEffect(() => {
    if (bgLoaded && 'clientWidth' in ref.current){
      console.log(ref.current.clientWidth);
      setBgWidth(ref.current.clientWidth);
    }
  }, [ref, width, bgLoaded]);

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
      setCurrentSection(6);
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
    eighthSectionInView
  ])

  return (
    <>
      <Scene
        night={currentSection === 3}
      >
        <Cecilia
          version={currentSection}
          ref={ref}
          onLoad={() => setBgLoaded(true)}
          selected={selected}
        />
      </Scene>
      <div ref={firstSectionRef}>
        <Dialog
          margin={margin}
          onMouseEnter={() => setSelected(true)}
          onMouseLeave={() => setSelected(false)}
        >
          <Text>
            It was always like this. We let each day in the week dissolve in complete vitriol, including
            weekends. There was no escape from the endless blithering, each of us always had caustic things
            to say to each other, and it almost always ends in a long silence. And those moments of quiet, it’s
            not like we’ve stopped fighting. They’re nothing but brief pauses to rest and prepare rebuttals for
            each other once the temporary truce ends. After that, the flags are raised again, and another war
            is waged.
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
            “Mao na ni ron, mas nasayod pa ka sa akoa, mas tigulang ko nimo ba.” My Tita Cecilia  disputes, as she always does almost every before dinner, when I provide feedback from the news  we’re watching. 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
            “Kinsa ba gud naa sa tamang pangutok ang magbudget og white sand para sa lugar na di  man pud white sand. Pandemic pa jud, kung kanusa gutom og gakasakit ang mga tawo karon pa  sila magpagwapo ani. Asa makahimulos ta ana.” I retorted. I can already feel colored rage rising in  my body. 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
            “Pasalamat nalang gani ta na gi aksyunan na sa presidente, sugot ka hugaw nalang ang  Manila Bay pirmente?” 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
            “Dili man gud, mali lang jud ang timing ba, dili ka malain nga milyon milyon nga pondo  ang gilaan dira, para sa balas, sa tunga sa pandemya, kung asa gakamatay na ang mga tawo? Dili ba  siya out-of touch?”
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
            “Chris, wala man gud ka kasabot! Kay mas maalam pa man ka, ikaw nalang mag presidente,  kita kang tigulang na na siya, unya ga try gihapon siya. Ikaw? Sa imong edad, unsa imong nabuhat?”  At this point, I resigned into the exhausted silence, which she usually mistakes for a win. 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
            It’s already borne in my mind though; there is no victory or defeat in our fights, just  complete mental prostration. 
          </Text>
        </Dialog>
      </div>

      <div ref={secondSectionRef} style={{ marginTop: '30rem' }}>
        <Dialog
          margin={margin}
          onMouseEnter={() => setSelected(true)}
          onMouseLeave={() => setSelected(false)}
        >
          <Text>
            My Tita Cecilia was an obnoxious woman. Having been under her care ever since my  parents died from a motorcycle accident when I was still a child, she’s never ceased to provide for  both of us. Now, we live in a house in some subdivision at Gensan, one with all the other middle class citizens who are getting by but not actually living. I’d say life was going well for the both of  us until our perceptions of reality began to differ. She will tell you I began to lose myself to liberal  propaganda. I’d say my eyes were opened.
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
            On a side note, it is thanks to her incredibly headstrong and consistent nature that we’re  surviving right now. The pandemic took the jobs of a lot of people that we know. Tita Cecilia  actually didn’t have a job for months, but her side career, being a passionate plantita, helped us  hold out for a little bit longer.
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
            She sold her beloved plants to wealthy families who could spend thousands of pesos for  dirt and a little green in pots in this time of suffering. Even her most exalted ones, she gave up just  so she could keep us afloat. There was joy in earning that money from that racket, of course, until  you realize how devastating that was for her mentally. 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
            I know my Tita and I aren’t always okay, but it’s still awful to see her get sad for having  sold those plants she never meant to sell. Fortunately, that racket went on until she got her job  back – being a snappy manager at a fast-food chain.
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          Her soul was fortified with the tenacity that of farm animals. If I need to be more specific,  she might have the build of a hefty carabao, but deep inside, she has the brain of a mule. Her  stubbornness was beyond anything I’ve ever dealt with. But insults aside, I do appreciate her hustle;  I appreciate it more than what she thinks. I may not like her, but I think I love my Tita Cecilia.
          </Text>
        </Dialog>
      </div>

      <div ref={thirdSectionRef} style={{ marginTop: '30rem' }}>
        <Dialog
          margin={margin}
          onMouseEnter={() => setSelected(true)}
          onMouseLeave={() => setSelected(false)}
        >
          <Text>
            One morning, she decided that COVID-19 wasn’t a real serious thing, which cast a colossal  cloud of frustration upon the house. This time, her dumb tirades condensed into something more  disgusting. The more she tried to assert its nonexistence, the more I began to retreat. I was already  giving up; if she didn’t want to believe it, then that’s alright. I supposed I should just start with  silence.
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          “Dili na jud ko mutuo aning pa-covid nila ba.”
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          A hush descended over the table. The smell of slightly scorched rice wafted in between us.  Her sunflowers, stretching at the window, seemed to listen to her rant. A pang of further  frustration and tiredness struck me, and I could only gaze at her while growing a frown. 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          “Kung tinood pa ni, hagbay ra tang tanan nainfect og namatay. Gibuhat-buhat lang man  daw ni ingon atong video nakita nako niaging adlaw, tanawa pa gud. ”
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          … 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          “Wala man lagi kay matubag?” Again, she mistook my silence for a victory. 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          We then proceeded to eat breakfast. It was unusually peaceful. I fell into contemplation of  whether I should say anything at all. What I kept thinking was that it could no longer be helped.  That all my words and arguments have proven futile in doing anything or that maybe even so, I  should still do my part and speak. My thoughts were interrupted by a sentence she said warmly.  The lack of a violently urgent tone was startling. 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          “Sa ila tito nimo ta mag pasko ha?” 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          “Sa Marbel?” 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          “Oo, mga two weeks ta didto. Sunod adlaw ta lakaw. Naka file na kog leave.” 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          “Kailangan muuban?”
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          “Aw ikaw ra magmahay kung di ka muuban. Dugay dugay na sad ka wala kita sa imong  mga tito og tita og mga ig-agaw. Dugay na sad ka way gawas gawas og balay” 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          “Unya mao ra gihapon, mga DDS kaayo mo. Gilaay na kog paminaw sa inyong pagka  bugo.” 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          “Kami pa nuon ang bugo ani ron. Mas dugay pa mi nabuhi diri sa Pilipinas kaysa nimo.  Wala ra jud ka kasabot sa pamalakad sa atong gobyerno. Wala unta koy trabaho gani siguro karon  kung wala galihok atong pangulo. Di man nimo na masabtan kay wala pa ka sa among edad!” 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          “Tungod man gud na sa pagka tanga sa gobyerno ba nga nisulod nang covid sa atong bansa,  mas giuna pa man nuon ang ‘friendship’ with China, tanawa.” 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          “Unsay covid? Dili lagi na tinuod. Buhat buhat lang lagi na.” 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          “Buluka sad nimo oy para di ka mutuo ana, grabe na jud.” 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          My mouth had betrayed me. 
          </Text>
        </Dialog>
      </div>

      <div ref={fourthSectionRef} style={{ marginTop: '30rem' }}>
        <Dialog
          margin={margin}
          left
          onMouseEnter={() => setSelected(true)}
          onMouseLeave={() => setSelected(false)}
        >
          <Text>
          The world was still for a moment; she looked at me with eyes that blazed like suns. I’ve  never seen her this red and this pissed. 
          </Text>
        </Dialog>
        <Dialog margin={margin} left>
          <Text>
          I figured I probably should not have spoken. But I really just wanted her to understand  and take what I said. I retreated into the silence again, this time just promising myself not to say  anything and leave her be. I’m really not sure if there’s a cure for stupidity, but my Tita Cecilia, I  feel like I might finally say she’s hopeless. 
          </Text>
        </Dialog>
        <Dialog margin={margin} left>
          <Text>
          The morning resumed without any glancing. An eerie stillness heavily pierced the room.  There was no knowing when the next word would be said as we were both shrouded with a blanket  of agitation, except that I’ve begun to spin thoughts of shame and rage as well. What if I stopped  caring this time? What if I just let her say things as she would and allow her to continue her foolery?  The thoughts began to scratch into my skull as I went into the kitchen once more to tidy up. Some  sentences really are stains you can’t clean. 
          </Text>
        </Dialog>
        <Dialog margin={margin} left>
          <Text>
          “Hugasi na tanan, panglimpyo sad dira. Wa na kay ayo nga bata ha,” The vexed inflection  in her voice resonated through and through. 
          </Text>
        </Dialog>
        <Dialog margin={margin} left>
          <Text>
          I was already washing the dishes; I wished I could wash away the bad feeling too. 
          </Text>
        </Dialog>
      </div>

      <div ref={fifthSectionRef} style={{ marginTop: '30rem' }}>
        <Dialog
          margin={margin}
          onMouseEnter={() => setSelected(true)}
          onMouseLeave={() => setSelected(false)}
        >
          <Text>
          The day for us to go finally came. The day before that was pretty much ordinary, just  riddled with unresponsiveness by me. And still today, I could not bring myself to speak. Having 
already packed her stuff last night in gaudy duffel bags, my Tita walked into my room to find me  sitting idly on my bed with nothing stowed.
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          “Nganong wala pa nanghipos?” 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          “Di man jud ko muuban.” There was hesitation there. It took the energy of the entire  morning to say that. 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          “Edi dili.” 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          Surprisingly, she was quick to close the conversation. I wondered if she wanted to say  more; for sure, she must have been waiting for an apology. There were things I wanted to say I  lacked the energy to push away the pride. 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          I watched my Tita finally go on with her final checks, taking note of the stuff she might  have forgotten to bring. Two weeks worth of stuff, a part of me is now beginning to wish I’d have  the strength to say sorry and come with her. But no, I can’t. I planted in my mind the idea of all  the potential perils if I go, given how risky it is to commute during this time. Also, they’re planning  an actual gathering. One infected person there, and we’ll be panting to our deaths in a couple of  weeks. 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          She approached the door with all her baggage in her hands, then turned in my direction.  She cast a raging shadow onto the floor, the silhouette of her glaring with sinister light around its  edges. 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          “Naa koy gibilin sa kwarto. Lakaw na ko.” 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          And the gates creaked as they closed. A cold draft streamed into the sala the moment she  left, and finally, after some hours, I could breathe again—the idea of being alone at home sparked a lot of joy, to be honest. One could clean the house themselves without feeling being held hostage.  One could have power over the entire house and decide when to do chores. And one could also  reflect and ponder many thoughts that refuse to leave with the person they’re about. 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          The first thing I did was check her room, and on her table was money to last me for two  weeks. I supposed it was enough, given that I’m not the biggest spender in the house. I only buy  stuff that I need, or when they’re on an unbearable sale. Food deliveries and online shopping might  be included only when desperate. However, for now, I’ll have to run on a tight budget. 
          </Text>
        </Dialog>
        <Dialog margin={margin}>
          <Text>
          She also left a note on the table, stating all the chores I needed to do, lest the house spiral  into total cataclysm. Of all the tasks there, her garden was the stranger. Something about it made  me nervous, maybe the probability I’ll leave her children to shrivel and die. The note also  emphasized putting the indoor plants outside for at least an entire day and the time they need to  be watered. Watering plants with the garden hose was the only fun part. 
          </Text>
        </Dialog>
      </div>
    </>
  );
}
export default MyTitaCecilia;