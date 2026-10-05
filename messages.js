const students = [
  { name: "Jm" },
  { name: "Junnica" },
  { name: "Feian" },
  { name: "Fiona" },
  { name: "Jerolyn" },
  { name: "Rj" },
  { name: "Leny" },
  { name: "Aleisha" },
  { name: "Lykamae" },
  { name: "Nicole"}
];

const params = new URLSearchParams(window.location.search);
const teacherName = params.get("teacher");
const teacherAliasMap = {
  "Sir Romeo": "Sir Romeo",
  "Sir Romeo L. Desiar Jr.": "Sir Romeo",
  "Sir Ysai Gandia": "Sir Ysai Gandia",
  "Ma'am Lovely": "Ma'am Lovely",
  "Ma'am Hannah": "Ma'am Hannah",
  "Ma'am Rea": "Ma'am Rea",
  "Ma'am Bethel Joi": "Ma'am Bethel Joi",
  "Sir John Paul": "Sir John Paul",
  "Ma'am Brianna": "Ma'am Brianna"
};
const teacherKey = teacherName ? teacherAliasMap[teacherName] ?? teacherName : null;
const knownTeachers = new Set(Object.values(teacherAliasMap));
const teacherMessages = Object.fromEntries(
  [...knownTeachers].map((teacher) => [
    teacher,
    Object.fromEntries(students.map((student) => [student.name, ""]))
  ])
);
teacherMessages["Sir Romeo"]["Fiona"] =
 "happy teacher's day sir roms,      thank you po sa pag guide and pagtuturo samin kahit na makukulit kami habaan nyo pa po pasensya nyo samin sirr!! thank you rin sir kasi dahil sayo nagegets kona yong math na d ko maintindihan nong junior huhu (pero yong piecewise sir 💔). thank you po sa pagiging the best adviser saamin. we love you sir and happy teacher's day again sir!!!"
teacherMessages["Ma'am Rea"]["Fiona"] =
 "happy teacher's day ma'am rea,        thank you po sa pagiging soft po samin. thank you rin ma'am kasi d nyo kami pinapahirapan sa mga quiz namin and sa pagtuturo nyo po samin. ang bait nyo rin po ma'am we love you so much! happy teacher's day pooo!!!"
teacherMessages["Ma'am Hannah"]["Fiona"] =
 "happy teacher's day ma'am hannah,        thank you po sa pagtuturo samin and ang sipag nyo po mag discuss ma'am huhu. ang ganda and ang galing nyo rin po mag turo. alam po namin na subrang busy po ng schedule nyo dahil po sa mga rant mo samin dati pero ngayon kinakaya mona ma'am. maganda na masipag pa, we love you ma'am!! happy teacher's dayy!! wag po masyadong magsungit 🫰"
teacherMessages["Ma'am Lovely"]["Fiona"] =
 "happy teacher's day ma'am lovely,            thank you po sa pagiging mabait saamin ma'am dahil po sainyo nagegets kona ang math hehe ang galing at ang haba po ng pasensya nyo bagay na bagay po talaga kayo sa math ma'am. subrang happy po ako na ikaw po yong naging teacher namin hindi po nakakatakot na lapitan pag d po nagets ang lesson. thank you so much po ulit ma'am and happy teacher's dayyy po!!"
teacherMessages["Ma'am Bethel Joi"]["Fiona"] =
 "happy teacher's day ma'am bethel,            thank you po sa pagtuturo samin ngayong term 1 ma'am and congrats po sa baby nyo po. ang bait nyo rin po samin and ang galing nyo po magturo. maraming salamat po ulit and happy teacher's dayy ma'am!"
teacherMessages["Sir John Paul"]["Fiona"] =
 "happy teacher's day sir sia,            thank you po sa pagiging calm po na pagtuturo and sa pagiging mabait po samin. ang galing nyo po mag turo sir kahit na ilang beses palang tayo nag meet sa klase sir alam kona pong marami kaming matutunan sainyo. thank you po and happy teacher's day ulit sirr!!"
teacherMessages["Ma'am Brianna"]["Fiona"] =
 "happy teacher's day ma'am brianna,       happy world teacher's day ma'am!! thank you po sa pagtuturo samin sana po marami ka pa pong pagames po samin kasi po nag eenjoy po kami don sana po no more public speaking na po huhu. thank you po!!"
teacherMessages["Sir Romeo"]["Leny"]=
  "TO SIR ROMEO, HAPPY WORLD TEACHER'S DAY SIR! Thank you sa pagiging first ever adviser namin sa senior high, isa ka sa nagga-guide at nagtre-train samin para hindi kami mahirapan sa grade-12 at sa college, naaapreciate namen yung special treatment mo sa section namin. THANK YOUU TALAGA SIR ROMEO AT HAPPY TEACHERS DAY ULIII!"
teacherMessages["Ma'am Rea"]["Leny"]=
  "HAPPY WORLD TEACHER'S DAY MADAM! First year pa lang sa senior high nahihirapan na kami, pero sa subject niyo lang po yung mas madaling intindihin kahit nakakatulog yung iba samin, pero thank you po kasi sa pagtuturo niyo saamin naaapreciate ko po yung experience niyo bilang isang teacher. AT HAPPY TEACHERS DAY ULIII!"
teacherMessages["Ma'am Hannah"]["Leny"]=
  "HAPPY WORLD TEACHER'S DAY MAAM! Thank you po sa pagtuturo samin sa General Science, alam po namin na mahirap yung subject at madalas samin ay nahihirapan sa mga topics, pero willing padin kayong magturo kaya thank you po ulit. HAPPY TEACHERS DAY MAAM!"
teacherMessages["Ma'am Brianna"]["Leny"]=
  "HAPPY WORLD TEACHER'S DAY MAAM! Ang nagustuhan ko sa subject niyo is yung pa games ninyo, kasi alam naman naming lahat nakakaenjoy, at habang nagtuturo ka po thank you po sa sabayang pag-entertain samin. HAPPY TEACHERS DAY MAAM!"
teacherMessages["Ma'am Lovely"]["Leny"]=
  "To Maam Lovely, HAPPY TEACHERS DAY MAAM!! Bagay niyo po yung pangalan niyo kasi mabait kayo samin, pansin ko rin po kahit sa ibang estudyante, kahit math yung subject ang bait niyo parin po. Ang galing niyo rin magturo maam kahit bagsak sa ibang activities. Masaya po ako na naging teacher ko kayo sa electives. HAPPY TEACHERS DAY ULIT MAAAM!!!!"
teacherMessages["Sir Ysai Gandia"]["Leny"]=
  "To Sir Ysai, HAPPY WORLD TEACHER'S DAY SIR! Thank you po sa pagiging teacher namin, pero para sa section namin hindi ka lang namin naging teacher parang naging kaibigan na rin dahil isa ka po sa unang nagpapatawa noong first day. Thank you po kasi hindi niyo ginagawang boring yung bawat klase namin. HAPPY TEACHERS DAY SIR!!"
teacherMessages["Sir Ysai Gandia"]["Fiona"]=
  "thank you sir kasi dahil sayo buhay na buhay yong klase natin every meeting. nakakatuwa po kayo na maging teacher and thankful po kami na ikaw po yong naging teacher namin. thank you sa pagtuturo and pag iincourage samin sir and thank you rin po sa concern sa section namin sa laging pangangamusta po we love you sir!! happy teacher's dayyy!!"
teacherMessages["Sir John Paul"]["Leny"]=
  "HAPPY WORLD TEACHER'S DAY SIR. Kahit ilang days palang po tayo nagkakakilala, di mo pa kami kilala, thank you parin po sa pagtuturo niyo at minsan sa pagpapatawa saamin. HAPPY TEACHER'S DAY SIR!"
teacherMessages["Ma'am Bethel Joi"]["Leny"]=
   "HAPPY WORLD TEACHER'S DAY MAAM! AND CONGRATULATIONS PO SA NAGING BABY NIYO! Thank you po sa pagtuturo samin, yung fair treatment sa loob ng section namin kahit strict tuwing quizzes, pero naaapreciate ko po yung pagtuturo niyo dati kahit na nahihirapan kayo dati dahil sa pagbubuntis niyo. PERO THANK YOU PO AND HAPPY TEACHERS DAY!"
teacherMessages["Sir Romeo"]["Junnica"]=
   "Dear sir Romeo, Hellowww sirr! HAPPY TEACHERS DAY PO!!!  I would like to take this moment para mag thank you sayo sir. Thank you sir for being such a good person and adviser to us:)), hindi lang po kami nakahanap ng isang guro na magtuturo sa amin kundi nakahanap din po kami ng isang ama at kaibigan sa parehong pagakakataon. Salamat po sa lahat ng mga bagay na ginawa niyo sa launsina sir, mula sa pagtulong sa mga exams hanggang sa pagbibigay advice at pagpapatawa samin sir, thank you sir, sobra kitang na-aapreciate po. Sir, salamat rin po sa pagbibigay ng 200 pesos every may birthday samin☺️, sana meron pa next year HAHAHAHAHAH. Salamat sir, for trusting me na kaya kong i-lead ung buong klase🥹, hindi niyo po ako pinapabayaan and that's something sir na thankful ako. Sana sir ay tumatak po kaming unang batch ng launsina sa puso at isipan mo hehehehe. YUN LANG SIRRR, MOREE BLESSINGSS PA PO SAYO, AND SANA AY HEALTHY RELATIONSHIP PO SAINYO NG BEBE MO SIR HIHIHI. HAPPY TEACHERS DAY PO ULIT:>>     -----From. Your maaasahan na president:>"
teacherMessages["Ma'am Rea"]["Junnica"]=
  "Dear ma'am Rea, Hello ma'am,  HAPPY TEACHERS DAY PO!!!! Gusto ko lang pong sabihin na, salamat po dahil naging teacher ka namin ma'am. Salamat ma'am dahil kahit makulit at maingay kami sa klase niyo, hindi kayo masyadong nagagalit hehehe. Salamat ma'am sa subject mo kasi sobrang dami ko pong natututunan. Salamat po sa pagiging mabait, maunawain at mapagbigay na guro samin ma'am hehehe. Happy teachers day po ulit! More blessings po sainyo at more patience HAHAHAHAHAHA.        ------FROM: your active student junika:>"
teacherMessages["Sir Ysai Gandia"]["Junnica"]=
  "Dear sir ysai ganda, Holaa sirrr!!! HAPPY TEACHERS DAY SA PINAKAMASIKIP NA TEACHER NAMIN!!! WALANG IBA KUNDI IKAW SIR YSAI!!!!! Thankk you sir for making our class brighter and funnier everyday HAHAHAHAHA. At first sir, ayaw ko ng history, pero dahil sa way ng pagtuturo niyo po unti unti ko pong nagustuhan ang kasaysayan, it's not just about the subject sir na binigyang buhay mo kundi pati kaming mga student mo sir, buhay na buhay tuwing ikaw ang nagtuturo hehehe. Salamat sir kase napaka easy going teacher mo, mabait, palabiro at higit sa lahat magaling magturo hihihi. Sobrang grateful ko sayo sir ice kase like your name po cool lang kayo and hindi nagagalit samin HAHAHAHA. Anywaysss, thanksss sir sa pagmamahal mo sa aming launsina, sana magpatuloy pa iyon hehehe. More blessings and more energy for us sir HAHAHAHAHA   --------FROM: junnica AKA inday sara😝"
teacherMessages["Ma'am Hannah"]["Junnica"]=
  "Dear ma'am Hannah, Hiiii ma'am!!!! HAPPY TEACHERS DAY SA PINAKABATA AT MAGANDA NAMING TEACHER NA IKAW!!!  Gusto ko lang pong mag thank you sainyo ma'am sa pagmamahal at pasensiya mo sa aming launsina. Salamat sa napakahaba mong pasensiya at napakasipag mong pagtuturo samin ma'am, na kahit pagod ka or stress nagtuturo ka pa rin po para may matutunan kami, kahit minsan wala ng nakikinig dahil gusto ng umuwi ✌️ HAHAHAHAHA. Salamat ma'am kasi kahit ang kulit kulit at pa-ulit ulit ako sa mga tanong ko, sinasagot mo pa rin po, you never run out of answers ma'am hahahaha. Salamat ma'am kasi kahit maingay kami at magulo pinipigilan niyo pa rin po ung sarili niyong magalit, salamat po sa ibinibigay niyong consideration samin hehehe. Happy teachers day ulit ma'am!! More patience para sayo at more blessings ma'am!!  ---------From: your witty and funny student junicaa:>"
teacherMessages["Ma'am Lovely"]["Junnica"]=
  "Dear ma'am lovely, HAPPY TEACHERSS DAY MA'AM LOVSSS!!!!  Salamat po sa pagtuturo niyo sa amin ng may pasensiya at pag-unawa ma'am.  Salamat ma'am kasi, hindi ka ung klase ng teacher na i-prepressure ung student para makasagot ng math problems, kundi ay ginagabayan mo po at tinutulungan kaming mas lalong intindihin ang math hehehehe. Salamat sa pagmamahal mo saming finite ma'am na kahit unti lang kami nandoon pa rin ung passion mo sa pagtuturo samin😊. Sobrang bait at considerate mo sa amin ma'am, dahil po sayo unti-unti kong nagugustuhan ang math hehehe lalo na kung ikaw ang nagtuturo at teacher namin ng math or research sa grade 12 ma'am hehehe. Happy teachers day po ulit ma'am lov!! Stay kind and patient po samin, more blessings po sa business niyo!!!!  -----From: your cute student junica🫰"
teacherMessages["Ma'am Bethel Joi"]["Junnica"]=
  "Dear ma'am bethel, HAPPY TEACHERS DAY MA'AM!!! I just want to say thank you ma'am kasi ikaw po naging isa sa teacher namin"
teacherMessages["Ma'am Brianna"]["Junnica"]=
  "Dear ma'am brianna, HAPPY TEACHERS DAY MA'AM!!!!!!!!!!!!!!!!"
teacherMessages["Sir John Paul"]["Junnica"]=
  "Dear sir john paul, Happy teacher day po!!!!!!!!"
teacherMessages["Sir Romeo"]["Jm"]=
  "HAPPY WORLD TEACHERS DAY sir romeo/daddy. Ano sir thank you dahil naging mabait kang guro saamin sir at ang pogi mo sir. Kahit nahihirapan kami medyo sa mga lessons mo sir ay hindi mo kami pinapabayaan hanggat hindi namin natutunan mga mahihirap na lesson natin sir,yon lang masasabi ko sir,THANK YOU ULIT SIR  ------nag mamahal galamgam "
teacherMessages["Ma'am Rea"]["Jm"]=
  "HAPPY WORLD TEACHERS DAY ma'am rea, thank you po ma'am sa walang sawang pag tuturo saamin kahit minsan maiingay at makukulit kami HEHE. Yon lang po ang message ko para sayo ma'am. Thank you po ulit ma'am -------nag mamahal pogi "
teacherMessages["Sir Ysai Gandia"]["Jm"]=
  "HAPPY BIRTHDAY.... AY MALIII, HAPPY WORLD TEACHERS DAY SIR YSAI, thank you po dahil sa walang sawang pag tuturo saamin sir kahit mga baliw kami sir, hinding hindi kami nawawalan ng energy sayo sir lalo na kong nag tuturo ka saamin sir,tyaka thank you rin sir dahil nanonood ka po sa laban namin nung municipal sir,kahit hindi man namin nakuha ang panalo sir,pero andyan ka sir para supportahan ako at ang mga ka team ko sir, yon lamang po ang message ko sayo sir 🌊,THANK YOU ULIT SIR  eyyy🤙 sheshhhh ------- galamgam sheshhh angass "
teacherMessages["Ma'am Hannah"]["Jm"]=
  "HAPPY WORLD TEACHERS DAY PO MA'AM HANNA,thank you po  dahil sa walang sawang pag tuturo mo saamin ma'am kahit makukulit kami at palaging inaantok sa tuwing mag kaklase na tayo ma'am,yon lang po ang message ko sayo ma'am,THANK YOU PO ULIT MA'AM -------galamgam 🤙"
teacherMessages["Ma'am Lovely"]["Jm"]=
  "HAPPY WORLD TEACHERS DAY PO MA'AM LOVELY, ma'am thank you dahil walang sawang pag turo saamin po ma'am, medyo nahihirapan lang po ako sa subject po natin ma'am pero kaya po yan ma'am, and nag papasalamat rin po ako ma'am dahil sa subject natin ma'am,hindi na ako mahihirapan pag tungtung ko ng college ma'am ,yon lang po ang message ko sayo ma'am,THANK YOU PO ULIT MA'AM "
teacherMessages["Ma'am Brianna"]["Jm"]=
  "HAPPY TEACHERS DAY MA'AM BRIANNA, thank you ma'am for teaching us and make our class full of laughter,THANK YOU MA'AM"
teacherMessages["Ma'am Bethel Joi"]["Jm"]=
  "HAPPY TEACHERS DAY MA'AM BETHEL, thank you po ma'am dahil sa walang sawang pag turo saamin ma'am, at sana po maging malusog po ang baby boy/girl niyo po,yong lamang mo ang message ko po sayo po ma'am,THANK YOU PO ULIT MA'AM "
teacherMessages["Sir John Paul"]["Jm"]=
  "HAPPY WORLD TEACHERS DAY SIR SIA, thank you sir sa pag tuturo saamin sir kahit ilang araw o weeks ka palang na angtuturo saamin sir habang wala pa po si ma'am bethel po, yong lamang po ang message ko sayo sir,THANK YOU PO ULIT SIR"
teacherMessages["Sir Ysai Gandia"]["Aleisha"]=
  "HAPPY TEACHER DAY SIR!!!"
teacherMessages["Ma'am Hannah"]["Aleisha"]=
  "HAPPY TEACHER DAY MA'AM!!!"
teacherMessages["Ma'am Lovely"]["Aleisha"]=
  "HAPPY TEACHER DAY MA'AM!!!"
teacherMessages["Ma'am Bethel Joi"]["Aleisha"]=
  "HAPPY TEACHER DAY MA'AM!!!"
teacherMessages["Ma'am Brianna"]["Aleisha"]=
  "HAPPY TEACHER DAY MA'AM!!!"
teacherMessages["Sir John Paul"]["Aleisha"]=
  "HAPPY TEACHER DAY SIR!!!"  
teacherMessages["Sir Romeo"]["Aleisha"]=
  "Dear sir Romeo, Hi Sir!!! Happy happy teacher's day po. Sir, I want you to know how amazing teacher you are to me/us. Being a senior highschool student is indeed difficult but because of a teacher like you, the weight of learning becomes lighter. Studying did not only give learning but also enjoyment. I'll always pray for a teacher like you po, hindi dahil sa masaya lang kundi dahil natututo ako. Sir, salamat sa pag unawa sa'min, I know hindi po madali, madaming nagaganap na hindi pag kakaintindihan pero salamat sir kasi hindi ka napapagod na turuan at intindihin kami. Nakikita ko po ung sipag niyo sa pag tuturo, mula sa pag gawa mg ppt hanggang sa pag d-discuss, specifically pag may nahihirapan po sa'min ay tinutulingan niyo agad. I'll pray for your health sir, may you achieve more good things in life, and may God bless you and give you the strength you need everyday. Angain happy teacher's day poooo, we love you so much Sir Romeo!!!!💞💞💞"
teacherMessages["Sir Ysai Gandia"]["Lykamae"]=
  "HAPPY TEACHER DAY SIR!!!"
teacherMessages["Ma'am Hannah"]["Lykamae"]=
  "HAPPY TEACHER DAY MA'AM!!!"
teacherMessages["Ma'am Lovely"]["Lykamae"]=
  "HAPPY TEACHER DAY MA'AM!!!" 
teacherMessages["Ma'am Bethel Joi"]["Lykamae"]=
  "HAPPY TEACHER DAY MA'AM!!!"
teacherMessages["Ma'am Brianna"]["Lykamae"]=
  "HAPPY TEACHER DAY MA'AM!!!"
teacherMessages["Sir John Paul"]["Lykamae"]=
  "HAPPY TEACHER DAY SIR!!!"  
teacherMessages["Sir Romeo"]["Lykamae"]=
  "Happy teachers day sir!! Truly happy and glad to be a part of the launsina family. Thank you for everything you did for us, be it small or big. Your passion for teaching is what I've truly admired, the thoughtfulness you have on making sure everyone understands the lesson will always be appreciated. Happy teachers day sir, and god bless ☺"
teacherMessages["Sir Ysai Gandia"]["Rj"]=
  "Happy teachers day sir ice! I would like to thank you for all the tawanans, kindness and encouragement, even though sometimes we were stubborn. Thank you for all the times you have given us chances, thantk you for being one of the teachers I look up to, not because of what you show, but because of what you do for us. Thank you sir ice! Happy teachers day!"
teacherMessages["Ma'am Rea"]["Rj"]=
  "Happy teachers day ma'am rea! Thank you for your effort in teaching us ma'am, even though sometimes we tend to show reckless actions, thank you po for being patient with us! Happy teacher's day Po!"
teacherMessages["Ma'am Hannah"]["Rj"]=
  "Happy teachers day ma'am Hannah! Thank you po for being the teacher who shows her sassines in the most humorous way. Thank you po for teaching us even if we're very stubborn and reckless. Happy teacher's day ma'am!"
teacherMessages["Ma'am Brianna"]["Rj"]=
  "Happy teachers day ma'am brianna! Thank you for teaching us, with a joyful class, thank you for the laughter and jokes you have made. Thank you for encouraging us to speak even if we thought we didn't have a voice. Happy teachers day ma'am!"
teacherMessages["Ma'am Bethel Joi"]["Rj"]=
  "Happy teachers day ma'am bethel! Maraming salamat po sa iyong pagtuturo ma'am, maraming salamat po sa iyong sakripisyo na kahit buntis ka po, nag tuturo ka pa rin. Salamat po ma'am, happy teacher's day!"
teacherMessages["Ma'am Lovely"]["Rj"]=
  "Happy teachers day ma'am loves! Maraming salamat po sa pag tuturo samin, mas lalo na ako ma'am kasi kahit hirap na hirap ako pinapakita mo pa rin na kakayanin ko ma'am, thank you for being one of the teachers I look up to. Thank you ma'am! Happy teacher's day "
teacherMessages["Sir John Paul"]["Rj"]=
  "Happy teachers day sir sia! Thank you po for being a kind and playful teacher to us kahit ilang araw pa lang, patawarin niyo Po kami kasi di po malinis room namin. Maraming salamat po sir! Happy teacher's day!"
teacherMessages["Sir Romeo"]["Rj"]=
  "Happy teachers day sir Romeo! Sir thank you so much for your kindness, patience and your discipline. Thank you for being our tatay sa school, you treat us like your own and thank you for that. Thank you for being our encouragement even when we struggled to understand your lessons. Thank you sir. Happy teacher's day!"
teacherMessages["Sir Romeo"]["Jerolyn"]=
  "HAPPY WORLD TEACHERS DAY, SIR ROMEO!! Ano sir, mag thank you lang din ako ulit sayo hehe, nasabi ko na kasi yung iba noong birthday mo sir eh. Thank you thank you sir sa pag-explain pa sa akin nong unang lesson natin na hindi ko maintindihan. Gumawa or naghanap ka ng time/paraan para turuan ako, kahit short yung time sir. Thank you sir kasi isa ka sa mga nag-inspire sa akin — hindi lang naman sa akin kundi kaming lahat na mga anak mo. We really really appreciate you a lot sir, sa mga actions and intentions mo sa amin. Ulit, HAPPY TEACHERS DAY SIR ROMEO!!!"
teacherMessages["Ma'am Rea"]["Jerolyn"]=
  "HAPPY WORLD TEACHERS DAY MA'AM REA, thank you po sa walang sawang pagtuturo sa amin kahit makukulit, magugulo at maiingay kami. Thank you rin po sa subject na tinuturo niyo kasi tinutulungan akong malinawan sa buhay, lalo na sa pagpili ng course or kung ano talaga ang magiging profession ko balang araw. THANK YOU SO MUCH MA'AM AND HAPPY TEACHERS DAY!!"
teacherMessages["Sir Ysai Gandia"]["Jerolyn"]=
  "HAPPY WORLD TEACHERS DAY SIR YSAI, thankful po ako kasi teacher ka pa rin namin hanggang ngayon. Thank you po sa laging pagpili sa aming launsina. Thank you sayo sir, sa way ng pagtuturo mo sa amin, ang saya na may halong kaba kapag subject mo na sir. ARIGATHANKS SIR, HAPPY TEACHERS DAY!!!"
teacherMessages["Ma'am Hannah"]["Jerolyn"]=
  "HAPPY WORLD TEACHERS DAY MA'AM, thank you po sa pagtuturo niyo sa amin araw araw, kahit na pagod kana ma'am nagtuturo ka pa rin sa amin — na-aappreciate ka po namin araw araw. Thank you rin po sa mahabang pasensya niyo sa amin, sa laging 'ma'am time na po' 'ma'am wait lang po, hindi pa tapos' 'ano? ni zaijan'. SALAMAT MA'AM, HAPPY TEACHERS DAY!!"
teacherMessages["Ma'am Bethel Joi"]["Jerolyn"]=
  "HAPPY WORLD TEACHERS DAY MA'AM BETHEL AND CONGRATS PO SA BABY!!! Thank you po sa pagtuturo sa amin and sana po lumaking malusog at kagaya niyo po yung anak niyo. Happy Teachers Day ulit Ma'am!!"
teacherMessages["Ma'am Lovely"]["Jerolyn"]=
  "HAPPY WORLD TEACHERS DAY MA'AM LOVELY, thank you po sa pagtuturo sa amin. Sobrang pasasalamat ko pong naging teacher ka po namin kasi ma'am kung hindi po ikaw ang naging teacher namin sa elective po namin, hindi po kami magiging mediyo chill at maingay. Pero minsan po nakakawala ng lakas yung iba niyo pong pinapagawa HAHAHHAHA (enjoyable but stressable). Sana teacher ka pa rin po namin sa g12 po, kasi ma'am kung hindi, bakit po? SALAMAT NG MARAMI MA'AM, LOVE. HAPPY TEACHERS DAY!!"
teacherMessages["Ma'am Brianna"]["Jerolyn"]=
  "HAPPY TEACHERS DAY MA'AM BRIANNA, thank you for teaching us po and making the class fun and loud with laughter. Happy Teachers Day Ma'am!! "
teacherMessages["Sir John Paul"]["Jerolyn"]=
  "HAPPY WORLD TEACHERS DAY SIR SIA, thank you po sa pagtuturo sa amin sa ilang araw sir habang wala pa po si ma'am bethel. siguro po sa susunod maayos ayos na po yung classroom namin, hindi na po dugyutin 🙁 HAHA. Happy Teachers Day uli Sir Sia!!!"
teacherMessages["Sir Romeo"]["Feian"]=
  "HAPPY TEACHERS DAY SIR!! thank you po dahil ikaw naging adviser namin, I like the way how you teach sir, and the way you explain the lesson. Thank you po for being patient with us, and for being a good adviser. I hope you have a good day sir, and I hope you have a good health. Thank you po sir, and happy teachers day!!"
teacherMessages["Ma'am Rea"]["Feian"]=
  "Happy teachers day ma'am rea!! Thank you po for being patient and making our lessons easier to understand"
teacherMessages["Sir Ysai Gandia"]["Feian"]= 
  "Happy teachers day sir!!! salamat po kasi laging masaya at buhay ang klase kapag kayo ang nagtuturo. Thank you rin po sa pag-guide at pagkamusta sa amin palagi, sobrang na-appreciate po namin iyon. Happy teachers day po!"
teacherMessages["Ma'am Hannah"]["Feian"]=
  "happy teachers day ma'am!! salamat po sa lahat ng oras at effort na binibigay ninyo para matuto kami. Thank you rin po sa pagiging understanding at sa mahabang pasensya ninyo sa amin"
teacherMessages["Ma'am Lovely"]["Feian"]=
  "happy teachers day po ma'am!!! Sobrang thankful po ako na naging teacher namin kayo. Hindi lang po kami natututo sa lessons, natututo rin kaming maging confident na magtanong at magkamali kasi alam naming hindi niyo kami huhusgahan"
teacherMessages["Ma'am Bethel Joi"]["Feian"]=
  "happy teachers day, ma’am bethel!!! thank you po sa pagtuturo sa amin at sa pagiging mabait sa klase, congrats din po sa baby ninyo, ma’am, maraming salamat po at happy teachers day po ulit!!!"
teacherMessages["Ma'am Brianna"]["Feian"]=
  "happy teachers day po!!! thank you po sa pagtuturo at sa pagpapasaya ng klase namin, favorite po namin ang mga pa-games ninyo kasi mas lalo kaming nag-eenjoy habang natututo. Thank you po at happy teacher day pooo!!"
teacherMessages["Sir John Paul"]["Feian"]=
  "happy teachers day sirrr!!! I want to say thank you sa pagtuturo at sa pagpapasaya ng klase kahit bago pa lang po kayo sa amin"
teacherMessages["Sir Romeo"]["Nicole"]=
  "Hii poo sir romeo happy teachers day po sau thankyouu po dahil binigyan mo pa rin ako ng grade ko sir kahit pasaway ako sa klase promise kopo sau sir magbabago napo ako and thankyou po dahil sa mga pagtuturo mo sir nauunawaan kuna po sya kunti sir😝😝"
teacherMessages["Ma'am Rea"]["Nicole"]=
  "Hii po ma'am rea happy teachers day po thankyouuu po pagtuturo nyu samin ma'am yun lng po"
teacherMessages["Sir Ysai Gandia"]["Nicole"]=
  "Happy teacher day sir!!!"
teacherMessages["Ma'am Hannah"]["Nicole"]=
  "Happy teacher day ma'am!!!"
teacherMessages["Ma'am Brianna"]["Nicole"]=
  "Happy teacher day ma'am!!!"
teacherMessages["Ma'am Bethel Joi"]["Nicole"]=
  "Happy teacher day ma'am!!!"
teacherMessages["Ma'am Lovely"]["Nicole"]=
  "Happy teacher day ma'am!!!"
teacherMessages["Sir John Paul"]["Nicole"]=
  "Happy teacher day sir!!!"
















const title = document.querySelector("#teacher-title");
const displayTeacherName = teacherKey && knownTeachers.has(teacherKey) ? teacherKey : null;
if (displayTeacherName) {
  title.replaceChildren(Object.assign(document.createElement("em"), { textContent: displayTeacherName }), Object.assign(document.createElement("span"), { className: "hero-period", textContent: "" }));
}
document.querySelector(".messages-tagline").textContent =
  teacherKey === "Sir Romeo" ? "Adviser" : "Subject Teacher";

const grid = document.querySelector("#student-grid");
const dialog = document.querySelector("#message-dialog");
const dialogMessage = document.querySelector("#dialog-message");
const dialogSignature = document.querySelector("#dialog-signature");
const studentPhotos = {
  "Ezekiel": "",
  "Rex": "",
  "Jm": "",
  "Zaijan": "",
  "Charles": "",
  "Cj": "",
  "Clyde": "",
  "Jian": "",
  "Junnica": "",
  "Feian": "",
  "Fiona": "",
  "Jerolyn": "",
  "Rj": "",
  "Laica": "",
  "Eziegeal": "",
  "Jheslyn": "",
  "Leanne": "",
  "Aleisha": "",
  "Leny": "",
  "Sharfie": "",
  "Samantha": "",
  "Lykamae": "",
  "Riza": "",
  "Ivy": "",
  "Nicole": "",
  "Dani Rose": "",
  "Angel": "",
  "Thamcyn": "",
  "Aryna": ""
};

students.forEach((student, index) => {
  const card = document.createElement("button");
  card.className = "student-card";
  card.type = "button";
  card.setAttribute("aria-label", `Open a message from ${student.name}`);

  const photo = studentPhotos[student.name];
  const avatar = document.createElement(photo ? "img" : "span");
  avatar.className = "student-avatar";
  if (photo) {
    avatar.src = photo;
    avatar.alt = `${student.name}'s profile picture`;
  } else {
    avatar.setAttribute("aria-hidden", "true");
  }

  const name = document.createElement("span");
  name.className = "student-name";
  name.textContent = student.name;
  card.append(avatar, name);

  card.addEventListener("click", () => {
    dialogMessage.textContent = teacherMessages[teacherKey]?.[student.name] ?? "";
    dialogSignature.textContent = student.name;
    dialog.showModal();
    dialog.querySelector(".dialog-close").focus();
  });
  grid.append(card);
});

dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
