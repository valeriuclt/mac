const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "An exercise in digital restraint where less isn't just more—it's everything. ",
    image: "/images/blog1.png",
    link: "https://spring-lovat.vercel.app/",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: " AI shouldn't be a black box for the privileged few. Here, we're turning artificial intelligence into authentic empowerment. ",
    image: "/images/blog2.png",
    link: "https://ai-trainer-nine.vercel.app",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: " 3D should be an authentic empowerment. ",
    image: "/images/colt logo.png",
    link: "https://branding-ebon-gamma.vercel.app/",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "What started as an experiment in minimalist design became something unexpected.",
    image: "/images/blog3.png",
    link: "https://milk-zeta.vercel.app",
  },
  {
    id: 4,
    date: "Jun 15, 2025",
    title: "The playground where physics meets pixels. Every scroll tells a story, every hover holds a surprise.",
    image: "/images/blog3.png",
    link: "https://gsap-six-umber.vercel.app/",
  },
];

const techStack = [
  {
    category: "Doctor of Philology",
    items: ["Cultural Studies"],
  },
  {
    category: "Master Degree ",
    items: ["Canadian Studies", "University of Bucharest"],
  },
  {
    category: "Master Degree",
    items: ["SNSPA", "Educational Management and Institutional Communication"],
  },
  {
    category: "Postgraduate specialization",
    items: ["Faculty of Journalism and Communication", "PR, Advertising, and Communication"],
  },
  {
    category: "Faculty of Letters",
    items: ["University of Bucharest", "Romanian/English specialization"],
  },
  // {
  //   category: "Dev Tools",
  //   items: ["Git", "GitHub", "Docker"],
  // },
];

const socials = [
  {
    id: 1,
    text: "Facebook",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://www.facebook.com/share/15veueRPZG/",
  },
  {
    id: 2,
    text: "Youtube",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://www.youtube.com/@monicacolt5888/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/colt_monica",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://ro.linkedin.com/in/coltmonica",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/images.jfif",
  },
  {
    id: 2,
    img: "/images/books.png",
  },
  {
    id: 3,
    img: "/images/cultural-values.png",
  },
  {
    id: 4,
    img: "/images/cultural exchange.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Conferences",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: " International conference Of Oblivion: Plays of Anamnesis.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "“Remembering and Forgetting: the Search for Meaning in Life in Neil Bissoondath The Worlds Within Her” at the international conference Of Oblivion: Plays of Anamnesis. ",
            "Doctoral School of Literary and Cultural Studies, Faculty of Foreign Languages and Literatures, Bucharest, May 15-16, 2009.",
            " In the Project “EDUCAŢI Excellence in Humanist Doctoral Research: Interdisciplinary Theories and Applications”",
            
          ],
        },
        {
          id: 11,
          name: "Noi Perspective în Studiile Literare şi Culturale.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-90",
          description: [
            "“Tribal Tendencies in a Multicultural Society in M. G. Vassanji s Novel No New Land” at the international conference Canada in the Americas: Democratic Vistas and Discursive Perspectives from Tribal to Global",
            " University of Greifswald North American Studies in collaboration with University of Trier, Germany, University of Manitoba, Canada, and University of Szczecin, Poland, Greifswald, Germania, May 6 – 8, 2010",
            
          ],
        },
        {
          id: 12,
          name: "Multiculturalismul Canadian.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-50",
          description: [
            "Multiculturalismul Canadian ca Relaţie Problematică între Individ şi Comunitate în Romanul A Casual Brutality de Neil Bissoondath” at the national conference Noi Perspective în Studiile Literare şi Culturale"," Doctoral School “Literary and Cultural Studies,” Faculty of Foreign Languages and Literatures, Bucharest, April 4, 2009",
            
          ],
        },
        {
          id: 2,
          name: "conferences.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://culturalvalues.wordpress.com/about/",
          position: "top-60 lef-26",
        },
        {
          id: 4,
          name: "books.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-50",
          imageUrl: "/images/books.png",
        },
        {
          id: 5,
          name: "cultural values",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "img", 
          position: "top-60 right-20",
           imageUrl: "/images/cultural-values.png",
        },
      ],
    },
    // {
    //   id: 5,
    //   name: "Nike Ecommerce Website Application",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-10 left-5", // icon position inside Finder
    //   windowPosition: "top-[5vh] left-5", // optional: Finder window position
    //   children: [
    //     {
    //       id: 1,
    //       name: "Nike Project.txt",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-5 left-10",
    //       description: [
    //         "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
    //         "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
    //         "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
    //         "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "nike.com",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
    //       position: "top-10 right-20",
    //     },
    //     {
    //       id: 4,
    //       name: "nike.png",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-52 right-80",
    //       imageUrl: "/images/project-1.png",
    //     },
    //     {
    //       id: 5,
    //       name: "Design.fig",
    //       icon: "/images/plain.png",
    //       kind: "file",
    //       fileType: "fig",
    //       href: "https://google.com",
    //       position: "top-60 right-20",
    //     },
    //   ],
    // },

    // ▶ Project 2
    {
      id: 6,
      name: "Publications",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "List.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
         "\"Remembering and Forgetting: The Search for Meaning in Life in Neil Bissoondath's The Worlds Within Her.\" Studia Doctoralia. Coordinators Visan, Florentina and Zlotea Mugur. Paralela 45: Bucharest, Vol. 3/2010. 77-93 ISSN 1843-3537",

  "\"Identity Construction in Terms of Affinity in M. G. Vassanji's Novel No New Land.\" Studia Doctoralia. Coordinators Visan, Florentina and Zlotea Mugur. Paralela 45: Bucharest, Vol. 4/2010. 9-26 ISSN 1843-3537",

  "\"Tribal Tendencies in a Multicultural Society in M. G. Vassanji's Novel No New Land.\" North America in the 21st Century: Tribal, Local, and Global. Kerstin Knopf (Ed.). Trier: WVT Wissenschaftlicher Verlag Trier, 2011. pp. 239-255 ISBN 978-3-86821-292-1",

  "\"The Dynamics of Cultural Values in Postcolonialism and Postcommunism\" Postcolonialism/Postcommunism Intersections and Overlaps. Ed. Monica Bottez et al. Editura Universitatii din Bucuresti, 2011. 219-233 ISBN 978-606-16-0052-6",

  "\"The Canadian Model as a Perspective on Adjustment in M.G. Vassanji's 'Last Rites' and 'Her Two Husbands.'\" Shakespeare, Translation and the European Dimension. Pro Universitaria: Bucharest, 2012. 259-273 ISBN 978-606-647-387-3",

  "\"The Immigrant's Process of Adjustment to Canadian Society in Neil Bissoondath's The Worlds Within Her.\" Canadian Literature in English. Dragos Zetu (Ed.). Iasi: Ed. Universitatii 'Alexandru Ioan Cuza', 2012. 211-223 ISBN 978-973-703-775-6",

  "\"Elements of Culture Shock in their Dynamics in Neil Bissoondath's The Innocence of Age and the short stories.\" The Annals of the University of Bucharest. Year LXL – 2012. ISSN, 153-171."

          ],
        }, 
      {
  id: 11,
  name: "The role of cognitive dissonance.txt",
  icon: "/images/txt.png",
  kind: "file",
  fileType: "txt",
  position: "top-5 left-10",
  description: [
    "The role of cognitive dissonance in the immigrant's adjustment to Canadian multicultural society in M.G. Vassanji's fiction",

    "In this paper the analysis validates the assumption that the way in which the immigrants go beyond the cultural differences through the internalization of new meanings, following the process of cognitive dissonance, contributes to their adjustment to Canadian multicultural society.",

    "To capture the relevant aspects of this process highlighting the characters' intense feelings that change their attitude and behavior, I explore the works of an author who is representative of Canadian literature.",

    "Thus, I have selected from M.G. Vassanji's fiction those literary works in which the characters' identity trajectories take East Africa as a point of departure and Canada as a point of destination and identity redefinition.",

    "The characters' identity development from the predominantly collectivist to the individualist society and culture (Inglehart and Welzel) involves going beyond the challenges that arise from the incongruence of \"the cultural lens\" (Hong). According to Habermas, one of the solutions for overcoming the cultural borders is the broadening of the cultural horizon (67).",

    "These facets of adjustment are also connected to the characters' perception of (mis)recognition and its influence on the immigrants' \"self image, feelings of inadequacy and discrimination\" (Taylor: 34).",

    "The analysis focuses on how the characters' attaining of the emotional balance after taking the decisions necessary for their connection to the new socio-cultural context is preceded by the conflicting states which often generate a behaviour perceived as inconsistent or different from the norm. Transcending the discrepancies through the understanding and acceptance of the new cultural meanings is directly correlated with the frequency of the overcome challenges and it leads to the adoption of a behaviour validated by the character (part of the individual identity structure). The adjustment to Canadian society is accompanied by the acquisition of more internalized meanings and, in time, the repetitive process of validating the decisions crystallizes a more connected to reality attitude for the same value."
  ],
},
      {
  id: 12,
  name: "Constructing Identity in an Age of Globalisation.txt",
  icon: "/images/txt.png",
  kind: "file",
  fileType: "txt",
  position: "top-50 left-10",
  description: [
    "Constructing Identity in an Age of Globalisation",

    "In this paper I analyze the way in which family influences the process of the Indian character’s adjustment to Canadian society in the context of globalization. At the individual level, the exploration of the adjustment to a multicultural society emphasizes the affinity between identity and values which is significant for the process of identity-formation, a connection which is explored from the cultural perspectives. The analysis of the micro level is completed by the macro level for a deeper understanding of the points of departure and destination and their significance to the character’s development. Moreover, the identity dynamic is stimulated by the interdependence of the inner and external forces shaping the self and the means through which the individual tries to balance the inner tensions arising from his interpretations of the meanings discovered throughout his experience of immigration and his cultural heritage.",

    "In order to capture the complexity of the emotional dynamic, I propose an original analysis of the identity transformations in the context of immigration resorting to the literary text which can go beyond the statistical figures and express the emotional tone and in-depth changes. I have chosen for this approach a representative South-Asian Canadian author, MG Vassanji one of Canada’s most prestigious writers whose literary work is a rich resource of complex meanings. In his novel The Assassin’s Song, Vassanji examines the theme of belonging of East Indian characters who move away from their roots, but who question the significance of home. Thus, in this paper I refer to the way in which Karsan’s story illustrates in a unique way an identity trajectory in which the adjustment process provides the opportunities for the self-reevaluation and the enrichment of one’s sense of meanings",

  ],
},
        {
          id: 2,
          name: "An insider view",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://culturalvalues.wordpress.com/2016/05/31/an-insider-view-of-how-the-different-values-coalesce-to-create-an-identity-in-m-g-vassanjis-and-home-was-kariakoo-a-memoir-of-east-africa/",
          position: "top-10 left-50",
        },
        {
          id: 4,
          name: "cover.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          // imageUrl: "/images/project-2.png",
          imageUrl: "/images/book.png",
        },
        {
          id: 5,
          name: "Identity Trajectory ",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://culturalvalues.wordpress.com/2016/05/05/the-identity-trajectory-in-the-process-of-adjustment-and-the-dynamics-of-values-in-m-g-vassanjis-the-in-between-world-of-vikram-lall/",
          position: "top-50 left-45",
        },
      ],
    },
    // {
    //   id: 6,
    //   name: "AI Resume Analyzer",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-52 right-80",
    //   windowPosition: "top-[20vh] left-7",
    //   children: [
    //     {
    //       id: 1,
    //       name: "AI Resume Analyzer Project.txt",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-5 right-10",
    //       description: [
    //         "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
    //         "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
    //         "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
    //         "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "ai-resume-analyzer.com",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
    //       position: "top-20 left-20",
    //     },
    //     {
    //       id: 4,
    //       name: "ai-resume-analyzer.png",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-52 left-80",
    //       imageUrl: "/images/project-2.png",
    //     },
    //     {
    //       id: 5,
    //       name: "Design.fig",
    //       icon: "/images/plain.png",
    //       kind: "file",
    //       fileType: "fig",
    //       href: "https://google.com",
    //       position: "top-60 left-5",
    //     },
    //   ],
    // },

    // ▶ Project 3
    {
      id: 7,
      name: "Digital lessons",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Ocean facts",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          position: "top-5 left-10",
          href: "https://www.youtube.com/watch?v=BCgn3ZjMHYw&t=1s",
        },
        {
          id: 2,
          name: "Tolerance Day FACTS",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.youtube.com/watch?v=7yl2FO4lOCg",
          position: "top-10 right-20",
        },
        {
          id: 21,
          name: "Tolerance Day",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://view.livresq.com/view/69288a68507a550009c790bf/#nume_lec%C8%9Bie",
          position: "top-10 left-40",
        },
        {
          id: 22,
          name: "Ocean",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://view.livresq.com/view/68ebe87dae035300097dc8b5/#",
          position: "top-50 right-60",
        },
        {
          id: 24,
          name: "Tolerance Day k",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://kahoot.it/challenge/9002f219-3686-4af7-9e22-d13b4eea0307_1764246303851",
          position: "top-50 left-20",
        },
        {
          id: 25,
          name: "Ocean Heritage",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://padlet.com/detestabil/ocean-heritage-explorer-a-global-map-of-maritime-cultures-xfst342y5g18b32o",
          position: "top-50 right-10",
        },
        {
          id: 5,
          name: "Ocean Greatest Economic Engine",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://gamma.app/docs/The-Ocean-Humanitys-Greatest-Economic-Engine-p9w7ad5q2iucter",
          position: "top-60 right-40",
        },
      
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/images.jfif",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/casual.png",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/cultural-values.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the PhD researcher Beyond the Algorithm",
      image: "/images/images.jfif",
      description: [
         "Hi there! I'm Monica 👋, a PhD researcher exploring how language shapes culture and culture shapes us right back.",
        "My research lives at the intersection of cultural values and linguistic patterns—I study how communities encode their worldviews in literary works and what happens when cultures collide.",
        "My mission? Making cultural research relevant for the TikTok generation while keeping academic rigor intact. Yes, it's possible. No, it's not easy.",
        "Away from my desk, I'm usually exploring new books, getting overly excited about a conference video, or meticulously organizing my research notes with a color-coding system that probably only makes sense to me.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };