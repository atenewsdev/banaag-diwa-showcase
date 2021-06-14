import React from 'react';

import { Text, Fade } from '@chakra-ui/react';

import { useInView } from 'react-intersection-observer';

import Scene from './Scene';
import Item from './Item';
import Dialog from './Dialog';

const MyFamilysBarber = () => {
  const ref = React.useRef();

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

  const [bgLoaded, setBgLoaded] = React.useState(false);

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
    }
  }, [
    firstSectionInView,
    secondSectionInView,
    thirdSectionInView,
    fourthSectionInView,
    fifthSectionInView,
  ])

  return (
    <>
      <Scene>
        <Item
          version={currentSection}
          ref={ref}
          onLoad={() => setBgLoaded(true)}
        />
      </Scene>
      <Fade in={bgLoaded}>
        <div ref={firstSectionRef}>
          <Dialog>
            <Text>
              I woke up earlier than planned. What jolted me into wakefulness was the cool sting of the Ber winds against my skin: a complete surprise to the scorching intensity of summer mornings that normally stayed throughout the rest of the year. The mistake was mine. I had accidentally left all the windows open as I drifted off to sleep the previous night. I was sinking mindlessly in Edith Wharton’s Age of Innocence when rain began to beat against the tin roof of the house, tik-tak-tik-tak-tik-tak, playing the dampened tunes of a lullaby that nursed my tired soul to rest.
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              We had arranged an appointment with my father’s barber this morning. He was scheduled
              to arrive at 10 AM. The wall clock read 6:30. I looked beyond the murky glass windows with the
              book still lying on my chest. The sun hovered demurely above the clouds. Perhaps this is a good
              time to go out and allow my lungs some fresh air. Yes, I think that’s what I need, a few breaths
              worth of fresh air under a hindered sun.
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              Instead, I was assailed by a sensation of dread (more like acid) in my stomach. I surveyed
              the sleepy streets of our private subdivision and noticed, as if for the first time, the electric posts,
              the transformers, and the wires that littered the whole place. I needed only to tilt my head a certain
              degree and the thick black cables would look almost like prison rails that barred my access to the
              high heavens. Below, the bungalow houses looked undisturbed, tranquil, beautifully repulsive. Is
              the sun demure today or is it the hidden lassitude of a city mellowed by its own mistakes?
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              It was hard to tell from the funky Beatles song my neighbors were playing, from the
              laughter of their children on mountain bikes soiled by their unknowing bliss, that somewhere miles
              away, further than where my eyes could take me, a funeral for a mother’s rebel child or a child’s
              rebel mother was taking place, that some secret malady was tiptoeing across the street like a house
              thief, or that a spirit long drugged by the city’s decadence was finally breaking free from its slumber
              to avenge the wasted years. Because the world is round, it turns me on...Love is old, Love is new.
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              I did not have the time to follow this trail of thought. Before I knew it, Mama had already
              beckoned me to the breakfast table. You should eat before the barber arrives, she reminded me
              firmly. “I don’t want any hair falling off on all the food.”
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              Surely enough breakfast was already set. And I was left to wonder how early Mama woke
              up this morning, why she had prepared what seemed to be a feast. For who? There was a full platter
              of fried kikyam, creamy scrambled eggs, thick slices of tuna embutido, tortang talong with onions
              glazed in honey and oyster sauce as well as scanty bowlfuls of arroz a la valenciana from
              yesternight’s excesses. Extravagance always excited in me a deep sense of guilt. But Mama’s gaze
              was toward the windows where diluted beams of light tried to enter the dining kitchen. I think I
              have known her long enough to understand what all of this meant. Her culinary stunts were more
              often than not the blind result of her worries.
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              “Saan si kuya?” I broke the silence. “‘Lam mo na. Tulog pa siguro ‘yun.”
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              I envied the brother who slept peacefully and with ease. Ever since It began, I had been
              receiving dreams about losing certain body parts. At one time, I saw all my teeth fall off one by
              one and when, by instinct, my hands reached up to check what little was left, I realized I had lost
              also my mouth. Some of these dreams haunted me for weeks. Like the one where my limbs turned
              into leafless branches and where an unnamed man with shears for hands trimmed them off from
              my timber body. It was all strange and their meanings eluded me. Yet in all those dreams I felt no
              pain, not even the grief of loss, though I had felt so much, too much, of it in the physical world.
              Some visions were kinder. A few days ago, I dreamt that my hair was getting cut at the unlikely
              safety of an unknown garden dotted with patches of short-bladed grass and fallen Gumamelas
              poised like stray drops of blood. Somewhere I heard the soft snipping of scissors but there was
              not a single blade nor barber in sight. So I took it as a sign. Maybe I should have my hair cut before
              the year ends.
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              Circumstance has taught me to see hair (at least mine) as less of what it simply is (surprise,
              keratin filaments!) than as a growing river of events, carrying its own testament to the Long and
              Colorful history it was subjected to. Long, because I speak in the literal sense of the word. Colorful,
              because after having been painted with hues of the coolest greens to the warmest van Gogh blues,
              it is a softer word than poisoned. Subjected, because hardly any of this was done out of my own will.
              In this corner of the world, for as long as you are under someone else’s roof, your body is not
              yours, no, not fully.
            </Text>
          </Dialog>
        </div>

        <div ref={secondSectionRef} style={{ marginTop: '100vh' }}>
        <Dialog>
            <Text>
              So when I finally mustered the courage to inform my parents about my decision, I prepared
              myself for defeat. But to my astonishment, Papa nodded a quiet Alright. I blinked twice. I found it
              hard to believe that they could acquiesce to my abrupt request after years of vain attempts and a
              pair of pierced ears. I guess I owed it all to the assurance that No One Will See Me Anyway. Yet I
              knew by then how this would trouble Mama. And indeed, on this slow breakfast morning, it
              troubled her again.
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              I assured myself there was nothing to be guilty about. It was in flurried moments like this
              when a wave of heat would rise up my throat and I would recall the ignorance of my childdays, of
              Mama stroking my hair while chronicling the horrific tales of little girls going bald because they
              failed to comb theirs for at least a hundred times a day. Samson paid no mind and see, all his strength
              was lost. She would always stare me down with a look that asked me to Be Beautiful, to Straighten
              the Crooked Back, to Make Fine the Creases. And to which, during one fateful dinner, I responded
              with the subversive tendencies of a juvanescent: what if I don’t want to? The metal spoon immediately
              fell from her hand and crashed into the blue ceramic plate, suffered a crack here and there. Seeing
              how this ached her porcelain heart, I resolved not to break any more fine china.
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              What this looked like, however, was allowing well-meaning strangers year after year to
              caress my scalp and then, like the betrayal of a friend, scorch my hair to the crisp satisfaction of a
              mother who promised she wanted only the best for her daughter. Every time I would leave the
              salon, my hair would smell like melted tapers on a wet epitaph. Here lies my peace.
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              These sensations would linger on for years and I hated that it came first of all from
              nameless men and women who knew nothing about my life, my wants, my secrets, and my distaste
              for cheap intimacy. Before It all happened, I would usually nurse my ailing thoughts by rushing to
              the highest balcony I could find in our school campus and wait for a gentle breeze to brush against
              my face, to sweep away the regret, dry the acid tears, wishfully thinking that a gust of consolation
              was now tucked away inside locks of hair. I felt that same wind on the day I first learned to confess
              love. And again, on the day I mourned its loss.
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              But ever since It began, I longed to free myself of the years that knitted itself deep into my
              head. It was a curse to be seized at every waking moment by ghosts of things I have lost. I despised
              the taped photographs, the empty shirts, the shoes that housed no souls. I despised the smallness
              of my room, the sheen of my computer screen, sharpener holes that gathered cobwebs and dust,
              taunting me, mocking me: you are no longer free, you have never been.
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              So I ached and ached to free myself from the burden of memory which hung above me.
            </Text>
          </Dialog>
        </div>

        <div ref={thirdSectionRef} style={{ marginTop: '100vh' }}>
        <Dialog>
            <Text>
              What I believed I needed, truly needed, was for this inner resolve to be reflected in the
              natural realm. And the best image I could arrive at was barbered hair. I did not only want to look
              in front of the mirror and be reminded of the pact I made for myself; I also wanted others to
              respect what was before them: my refusal to return to the former normalcy of things. I will not
              suffer the same way again, no.
            </Text>
          </Dialog>
          <Dialog >
            <Text>
              A new wind is blowing.
            </Text>
          </Dialog>
          <Dialog >
            <Text>
              Mama’s gaze was still toward the window. I took hold of her hand. “Ma, trust me, it’s just hair.”
            </Text>
          </Dialog>
          <Dialog >
            <Text>
              I thought I saw a smile but the moment was broken when we heard a loud knock on the door.
            </Text>
          </Dialog>
          <Dialog >
            <Text>
              It was Kuya Dave.
            </Text>
          </Dialog>
          <Dialog >
            <Text>
              Kuya Dave was a short, copper-skinned man. He had been my father’s barber for 15 years,
              my Kuya’s for 10, and, I guess, he was to become my barber starting this year. In many ways, he
              was like us. For more than half of his life, he had lived as a nomad roaming around places like
              Cavite, Pasig, Kidapawan, and eventually, Davao in the hunt for a job, an escape, or a good life
              which the city always boasted of. He began in one of the small salons stationed in the cramped
              storefronts of Claveria. It was not until he landed a job inside a supermall that his hairstyling career
              flourished. His clients always enjoyed his barbertalk and gave him generous tips. Now I heard he
              was accommodating private commissions for wealthy businessmen.
            </Text>
          </Dialog>
          <Dialog >
            <Text>
              My father liked to believe that he was faring better than us who were drowned in electricity
              bills, loans, and monthly amortizations. After his wife died and left him with no children to fill her
              absence, he would occasionally retreat the city and stay for months in the simplicity of his own
              house on the hills. The small lot was a family inheritance and someday, he told us, he would
              cultivate the land and turn it into a little farm.
            </Text>
          </Dialog>
        </div>

        <div ref={fourthSectionRef} style={{ marginTop: '100vh' }}>
        <Dialog>
            <Text>
              How my my father and Kuya Dave got close, that story remains untold but as far as I can
              remember, he had always been a part of our lives, even a distant kindred of sorts, presiding over
              our ritual cutting of hair.
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              I grabbed my mask and went to the front yard to greet my father’s barber. I led him to the
              space where a weather-beaten plastic table and chair was already set. We amused ourselves with
              some small talk. He waited as I sat down before he wrapped a plastic blanket around me and
              clapped his hands. “Ay’g kabalaka,” he assured me, “Si Kapitan...kadtong anak gud niya na babae
              gud, si Angel ba. Kaila ka ato niya? Nagpaputol man pud to...Daghan man diay gusto
              magpaboycut karon, noh? Wala man kaya ka gibreakan?”
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              I laughed. “Init na man gud kaayo, ‘ya,”
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              “Lage, bisag paChristmas na, init man! Maayo na lang dag-om karon. Lahi na gyud ang panahon.”
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              “Lahi na gyud. Nag-unsa man ka karon, ‘ya Dave?”
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              “Ah, busy sa commission ih. Heh-heh-heh. Pero laay kaayo, oy. Next month pa akoang
              shift sa Tony’s. Mubalik siguro ko sa bukid pagkaSunday. Kung wala lang gyud ning lockdown
              ba.”
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              I did not ask him any more questions, but I knew an unsolicited tale was about to unfurl
              from his lips at any moment. Kuya Dave was a storyteller. He could not resist it. It must have been
              this natural quality of his that had earned him the friendship of his wealthier clients who were
              entertained by what seemed to them the Travails of the Common Man.
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              “Kabalo ba ka,” Kuya Dave recounted, “akong ig-agaw giatake, giseizure last week...So,
              gihatod siya sa ospital. Pero paminaw, imbis makadawat og treatment toinnng! gidiagnose man
              dayon og C*VID! Dugay na gyud ko naghinala ba. Dili man ‘guro tinuod ning C*VID? At least,
              dili tinuod ang cases. Tactic ra na sa private. Kwarta ra’y apas. Asa man padulong ang funds, beh?
              Siyempre, kung asa daghan ang cases! Sugod atong naglockdown noh, nisamot og kalisod ang
              kinabuhi.”
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              “As in, Kuya?”
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              I could not completely dismiss his account or his cousin’s affliction despite my skepticism.
              It was becoming more difficult to sort the truth from mere hearsay. They looked almost the same,
              especially when the rumors sounded convincing, unsurprising, knowing the talent and tendency of
              a special breed of homo erectuses to profit from the strangest things, even from something as
              horrid as a plague. I have watched some of these creatures grace television screens, brandishing
              their awards, pulling off a verbal stunt or two. But they had also been right about a few things.
              Like the poster that said Apocalypse Now: Coming Soon.
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              It is said: Information is Power. But truth is elusive in a world that labors to suppress it.
              Anyone can be sincere in giving and seeking information, striving with the best of intentions, yet
              be sincerely wrong. The headline of a scientific web article read:
            </Text>
          </Dialog>
        </div>

        <div ref={fifthSectionRef} style={{ marginTop: '100vh', marginBottom: '50vh' }}>
        <Dialog>
            <Text>
              C*VID: THE GREATEST HOAX OF HISTORY
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              and many doctors who claimed credibility voiced out their position against the race for a vaccine,
              citing things such as mindbending, bestiality, and embedded software. It was too much for me,
              being told what to fear, what not to fear. At once, I would feel defeated, heavy-eyed, yawning. My
              head always led me nowhere. I am here, but I am also somewhere else.
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              Worn out from thinking, I let out a deep sigh. “Ang importante, ‘ya, buhi.”
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              “Hahaha! Lage. Basta naa kay Ginoo, ma-okay ra man ka.”
            </Text>
          </Dialog>
          <Dialog>
            <Text>
              I bided my time to ponder on what he said. Ma-okay ra ka. My neighbors were a thousand
              miles away, still playing the Beatles. One of the children fell from his bike and a frantic mother
              came rushing to treat the wound. Meanwhile, my family’s barber began to cut through layers of
              hair as I sat mid-drowse, watching the dark trimmings of the past drift peacefully with the wind.
            </Text>
          </Dialog>
        </div>
      </Fade>
    </>
  );
}
export default MyFamilysBarber;