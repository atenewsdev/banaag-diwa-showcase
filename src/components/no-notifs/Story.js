import React from 'react';

import { Text } from '@chakra-ui/react';
import { useHistory } from 'react-router';
import { useInView } from 'react-intersection-observer';

import Scene from './Scene';
import Dialog from './Dialog';

const NoNotifs = ({ sfx }) => {
  const history = useHistory();

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

  const [ninthSectionRef, ninthSectionInView] = useInView({
    threshold: 0,
  });

  const [tenthSectionRef, tenthSectionInView] = useInView({
    threshold: 0,
  });

  const [eleventhSectionRef, eleventhSectionInView] = useInView({
    threshold: 0,
  });

  const [twelvthSectionRef, twelvthSectionInView] = useInView({
    threshold: 0,
  });


  const [thirteenthSectionRef, thirteenthSectionInView] = useInView({
    threshold: 0,
  });

  const [fourteenthSectionRef, fourteenthSectionInView] = useInView({
    threshold: 0,
  });

  const [currentSection, setCurrentSection] = React.useState(0);

  React.useEffect(() => {
    const playSfx = (index, loop) => {
      sfx.forEach((sound, i) => {
        sound.loop = false;
        if (i === index) {
          if (loop) {
            sound.loop = true;
          }
          sound.play();
        } else {
          sound.pause();
        }
      });
    }

    // reset sfx
    sfx.forEach((sound) => {
      sound.pause();
    });

    if (firstSectionInView) {
      setCurrentSection(0);
    } else if (secondSectionInView) {
      setCurrentSection(1);
      playSfx(0, true);
    } else if (thirdSectionInView) {
      setCurrentSection(2);
    } else if (fourthSectionInView) {
      setCurrentSection(3);
      playSfx(1, true);
    } else if (fifthSectionInView) {
      setCurrentSection(4);
      playSfx(1, true);
    } else if (sixthSectionInView) {
      setCurrentSection(5);
      playSfx(2);
    } else if (seventhSectionInView) {
      setCurrentSection(6);
    } else if (eighthSectionInView) {
      setCurrentSection(7);
      playSfx(3, true);
    } else if (ninthSectionInView) {
      setCurrentSection(8);
    } else if (tenthSectionInView) {
      setCurrentSection(9);
      playSfx(4, true);
    } else if (eleventhSectionInView) {
      setCurrentSection(10);
      playSfx(4, true);
    } else if (twelvthSectionInView) {
      setCurrentSection(11);
      playSfx(4, true);
      sfx[5].play();
    } else if (thirteenthSectionInView) {
      setCurrentSection(12);
      playSfx(4, true);
    } else if (fourteenthSectionInView) {
      setCurrentSection(13);
    }

    return () => {
      sfx.forEach((sound) => {
        sound.pause();
      });
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
    ninthSectionInView,
    tenthSectionInView,
    eleventhSectionInView,
    twelvthSectionInView,
    thirteenthSectionInView,
    fourteenthSectionInView,
    sfx
  ])

  return (
    <>
      <Scene
        section={currentSection}
      />
      <Dialog ref={firstSectionRef}>
        <Text>
          I heard nothing.
        </Text>
      </Dialog>
      <Dialog ref={secondSectionRef}>
        <Text marginBottom="1rem">
          I heard nothing except the ticking of a dying wall clock. Its frail sound filled the dead air while I  continued to monitor my racing thoughts. It has been three hours now, three hours of rolling  over, staring blankly at the ceiling, and looking back at the clock. With the moonlight peeping from the jalousie, I managed to glance at it once more. 3:50 AM, it showed, but I can say it  incorrectly told me the time. 
        </Text>
        <Text marginBottom="1rem">
          I wonder why no one bothered to replace its batteries, just like no one bothered to look at it every once in a while. To me, time is too sacred, too important to be unaware of it. My life is  anchored to it—my goals, hopes, and dreams of just finishing strong.  
        </Text>
        <Text marginBottom="1rem">
          3:54 AM, it said again, yet it felt like an hour already, another hour of agony of not being able to  sleep. I curled back once more to beg myself to rest. It was a long day after all. However, just  when I thought I had weakened my consciousness, a soft yet authoritative knock awoken me. 
        </Text>
        <Text marginBottom="1rem">
          “Nak, mata na,” he said while slightly opening the wooden door made of driftwood. It released a  creak to finally break the prolonged silence.  
        </Text>
      </Dialog>
      <Dialog ref={thirdSectionRef}>
        <Text marginBottom="1rem">
          I checked my phone that I hung on the window: no notifications, no signal, two battery bars,  5:19 AM. No wonder why my father woke me up because the time was convenient enough to  deceive me into highlighting the daunts of dawn while slowly welcoming the warmth of sunrise.  
        </Text>
        <Text marginBottom="1rem">
          Today is my third day without rest. Consider me sleepless then, for the day has started already  without me being able to taste its luxury. Sleepless, but I have to rise to face the day wearing  another reluctant smile once again.  
        </Text>
      </Dialog>
      <Dialog ref={fourthSectionRef}>
        <Text marginBottom="1rem">
          I immediately wore my white camisa de chino while I gazed at the window as the sunrise hit me. Seeing my father already riding our carabao as it plowed the field, I went outside to nourish the  remaining livestock that we have. As I checked the animal feeds, I noticed that it would only last  until tomorrow. That calls for another cost aside from the batteries at the end of the day. 
        </Text>
        <Text marginBottom="1rem">
          “Nak, palihug ko ug dala  to the little storage room  partitioned with old knick-knacks and bamboos and gave him what he favored. As he opened  the sack, a mixed feeling struck within me as soon as I saw what was inside. Regardless, I figured out we will plant palay today, so I left my phone hanging onto a nearby tree and rolled up my  sleeves. This morning will be a long one for me, indeed. 
        </Text>
      </Dialog>
      <Dialog ref={fifthSectionRef}>
        <Text marginBottom="1rem">
          Now imagine me, a graduating college student, sweating, working in the field on a sunny day,  sleepless, without breakfast, without complaints. How can I complain when all I can see in front  of me is a man smiling, determined to produce something to pay for our necessities, to provide  his son enough money to load and visit a nearby computer shop seven miles away? I could not  ask for more, even if we have only less.
        </Text>
        <Text marginBottom="1rem">
          One box of the field made me consume most of my energy already. Finally, I took a break from the momentum to prepare for our breakfast. 
        </Text>
      </Dialog>
      <Dialog ref={sixthSectionRef}>
        <Text marginBottom="1rem">
          Checking the inside of our small fridge that we got from a junk shop twenty years ago was only one native egg and a couple of pitchers. I ditched  the egg to reserve it for my father because he needed it more. I instead grabbed a pitcher full of  cold water to shove it to my mouth until its last drop. If you ask me why, it is because cold  water, once swallowed, will slow down intestinal activity, giving you that bloated feeling… or  that is what I would like to believe sometimes, especially when I have nothing to eat. 
        </Text>
      </Dialog>
      <Dialog ref={seventhSectionRef}>
        <Text marginBottom="1rem">
        “Nak, naay sigeg panawag sa imong cellphone,” my father said as he handed over my phone. I checked,  and he was right. Three missed calls, thirteen text messages, one signal bar, one battery bar,  11:47 AM. I scanned through text messaging and call logs and saw how Bernard spammed me  with updates about the online classes, to which I am either late or too late to be informed. I do  not blame him, though; it has always been the dynamic cell signal that is problematic in our area.
        </Text>
        <Text marginBottom="1rem">
        His updates were helpful as they were news from three subjects requiring students to go online  for attendance, which commenced just this morning while I was busy in the field. That means  another absent record under my name and another bad day after the other. 
        </Text>
        <Text marginBottom="1rem">
        The last updates were new modules and activities posted on our Google Classroom, to be passed  later at 4:00 PM. Another one informed me about an individual requirement that needs video  recording, with me in the video. I slightly let out a faint laugh—a product of realizing how heavy  this is going to be. A dissatisfied smile managed to sneak out as I held and glimpsed at my  phone—an outdated keypad phone that cannot record a video or capture a photo.  
        </Text>
        <Text marginBottom="1rem">
        If I were to ask myself whether I should feel bad or not with the circumstances I am in, I would  say it is a waste of time to even consider the question. Time is running. I do not have the time to  emphasize weakness, for I will finish this strong.
        </Text>
      </Dialog>
      <Dialog ref={eighthSectionRef}>
        <Text marginBottom="1rem">
          Without further delay, I asked permission from my father to go to the computer shop for me to  be able to do my academic responsibilities, to which he agreed. I quickly picked up a handful of  notebooks and pencils and directly walked for almost half a kilometer to reach the Sayre  Highway. There, I patiently waited as I stretched my right arm with a thumbs-up sign. Generous  drivers would let me ride for free, I hope. 
        </Text>
        <Text marginBottom="1rem">
          An old yet decent L300 stopped over and granted my request. As I was riding, I noticed how the  blue skies turned to gray. It might rain again, just like yesterday. The only difference now is that I  am out of the house, with a great chance of soaking myself. 
        </Text>
      </Dialog>
      <Dialog ref={ninthSectionRef}>
        <Text marginBottom="1rem">
        I arrived at the shop an hour after, roughly around 1:30 PM. I could not check the exact time yet  because my phone was dead. Luckily, I went out today so I can charge it for free, but it is not  like I got this “privilege” easily. Maybe Aling Nena pitied me after the nonstop begging, which  also clearly irritated her for quite a while. Thanks to her mercy, another life hack for me would  be connecting my phone to the USB port of the computer for it to charge.
        </Text>
        <Text marginBottom="1rem">
        Ten pesos per hour. In my case, that is around less than forty pesos, if and only if I can finish  everything by four o’clock. I did not waste any more time other than going to the webpages  where I can find the posted activities. There were some posted that can be answered  immediately, to which I have complied. Sad to say, I cannot do my best simply because of the  lack of time and appropriate conditions to do it. This scenario has always been my usual. Well,  better luck next time.
        </Text>
        <Text marginBottom="1rem">
        While wrapping up, I realized that there is this material provided that will be used as a reference  for an upcoming quiz this week. In this situation, I read the material and jotted down notes to  study because printing the material would be an additional cost for me. Besides, I only have fifty  pesos left from my allowance this month. 
        </Text>
        <Text marginBottom="1rem">
        Thankfully, I finished my academic tasks on time. I went to the little kiosk in the shop where  customers are supposed to pay. I saw Aling Nena segregating the coins and the bills, which is her  daily routine, but at that time, she was wearing a face mask. It was when I also noticed that the  customers were also wearing theirs. I realized I was the only one not wearing a mask. If only we  could afford to protect ourselves. If only, but I could not care less about it for now. 
        </Text>
      </Dialog>
      <Dialog ref={tenthSectionRef}>
        <Text marginBottom="1rem">
        It has been an hour already since I waited for the rain to stop, but I was wrong. The rain was  pouring heavily, and winds were blowing strong in the background. Wanting to go home before dark, I had no choice but to fight the weather, so I asked Aling Nena if she has a spare plastic bag  to protect my notes. She handed me one, and I used it to wrap all the notebooks I have utilized  and put it in my bag. It was the best thing I could do for my effort to go unwasted on that day. I  then spearheaded a journey towards going home.
        </Text>
        <Text marginBottom="1rem">
        When I speak of the journey, it was a little bit of shade under the mango tree in front of the  shop and more of me under the rain, drenched, walking with myself until I reach home. Yes, I  walked seven miles just for me to get home. It was only until I almost arrived when someone on a motorcycle offered me a ride. I kindly declined because I was feeling good, feeling good for  being resilient, even though I was tired of it… 
        </Text>
      </Dialog>
      <Dialog ref={eleventhSectionRef}>
        <Text marginBottom="1rem">
        …and then it hit me as soon as I saw our little nipa hut, my home for twenty-five years now,  emitting a dim light from the lampara inside. 
        </Text>
        <Text marginBottom="1rem">
        That was when I could not take it anymore. I pitied myself. I pitied the situation that we are in— helpless, voiceless, immobilized. As much as I wanted to do something, reality would tell me that  I am incapable of doing so. What can I do? I am only a graduating college student, struggling to  make ends meet, with a future of nothing but uncertainties. The only thing that life allows us is  survival. We never experienced what it is like to live.
        </Text>
        <Text marginBottom="1rem">
        I entered the door and saw my father, almost in his 40s, already asleep on the bench—his usual  resting place. He seemed happy and fulfilled after a long day. He always has been. Sometimes, I  just do not get it… 
        </Text>
        <Text marginBottom="1rem">
        …why does he smile more in a world that gives us less? 
        </Text>
      </Dialog>
      <Dialog ref={twelvthSectionRef}>
        <Text marginBottom="1rem">
        I checked the fridge. The egg is still there. I guess none of us ate today. 
        </Text>
        <Text marginBottom="1rem">
        I looked above from the skylight. The rain is still there, with water dropping continuously from  the little holes on the roof. 
        </Text>
      </Dialog>
      <Dialog ref={thirteenthSectionRef}>
        <Text marginBottom="1rem">
        I glanced at a small family picture hung on a wall—the only family picture that remained. My  mother was still there, smiling. We were all happy. We were complete back then until she was  taken away last month.  
        </Text>
        <Text marginBottom="1rem">
        “Positive,” they said. I always wonder why she never managed to return. I should have stopped  her from going to a nearby city just to try her luck on selling her wedding ring to fund my  graduating year. I can only hope she will come back… tomorrow, I hope. Who knows now? The sound of the raindrops from the roof slowly faded as the rain started to weaken. I checked  my phone: no notifications, no signal, full battery, 10:05 PM. 
        </Text>
        <Text marginBottom="1rem">
        I went to my little nook and started unpacking. It turned out that my notes, despite the added  protection, were drenched enough to erase what I have written. I have no choice but to scratch  my temple and let out a faint, dissatisfied laugh. What else can I still do anyway? 
        </Text>
      </Dialog>
      <Dialog ref={fourteenthSectionRef}>
        <Text marginBottom="1rem">
        I can only hear nothing, for the wall clock is dead now. No sound currently fills the dead air. It  has always been like this, always rolling over, staring blankly at the ceiling, and looking back at  the clock. 
        </Text>
        <Text marginBottom="1rem">
        I always wonder why no one bothered to replace its batteries, just like no one bothered to look  at it every once in a while. Now, I have the answer: we simply cannot afford to buy batteries and  the time… time to set out my goals, hopes, even dreams of just finishing strong. 
        </Text>
        <Text marginBottom="1rem">
        Tomorrow is my fourth day without rest. Consider me lifeless then, for the day will start without  me being able to survive. Lifeless, but I have to rise to face the day wearing another reluctant  smile once again.  
        </Text>
        <Text marginBottom="1rem">
        What a comical life I wish will end. 
        </Text>
      </Dialog>
      <Dialog onClick={() => history.push('/#no-notifs')} last>
        <Text>
          &lt;&lt;&nbsp;Back to Home
        </Text>
      </Dialog>
    </>
  );
}
export default NoNotifs;