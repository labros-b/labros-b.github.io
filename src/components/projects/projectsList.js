export default [
  {
    title: 'net&get Marketplace',
    content: [
      `A Mobile Marketplace App i developed for net&get.`,
      `Through the app the sellers (individuals or stores) can add their products
      and the buyers can search, preview, track location save, like and buy through
      a thirty party service.`,
      `Additional functionalities include e-mail notifications, push notifications,
      chat service between buyer and seller, call the seller from the app, post in
      social media and search by distance (geolocation)`,
      `The app is fully functional for Android OS and is implemented with Ionic (Angular 2+).`,
      `Year of implementation : 2017`,
    ],
    image: { src: 'netandget-marketplace.png', smallW: true },
    links: { playStore: 'https://play.google.com/store/apps/details?id=com.ionicframework.netandget517486' },
  },
  {
    image: { src: 'netandget-coupons.jpg', smallW: true },
    title: 'net&get Coupons',
    content: [
      `A Mobile App i developed for net&get.`,
      `The app provides Coupons with offers for products or services where the sellers
      (stores) can buy a package of coupons from, add different coupons with offers
      choosing from a variety of offer type and the customers can search, preview, track location
      of offer save coupons in their wallet or enter the website of the offer if exists.`,
      `Additional functionalities include e-mail notifications, push notifications,
      chat service between buyer and seller, call the seller from the app, post in
      social media and search by distance (geolocation)`,
      `The app is fully functional for Android OS and is implemented with Ionic (Angular 2+).`,
      `Year of implementation : 2017`,
    ],
    links: { playStore: 'https://play.google.com/store/apps/details?id=com.netandget.cupones' },
  },
  {
    image: { src: 'monkeyMedPhone.png' },
    title: 'MonkeyMED',
    content: [
      `Monkey-MED is my master's thesis (An M-Health App over IoT to facilitate
      post-stroke rehabilitation) and one of the projects I'm the most proud for!`,
      `It's an m-Health Information System for Android devices designed to help patients
      in the post-stoke rehabilitation phase using gamification techniques.`,
      `The system consists of EMG (electromyography) bio-sensors, a raspbery-pi
      microcomputer and an Android Game App, communicating via both bluetooth and MQTT
      protocol. Using the system the user (patient) plays a game making
      progress to it the more he activates his muscles`,
      `Year of implementation : 2016`,
    ],
    links: { github: 'https://github.com/labrosb/Monkey-MED' },
  },
  {
    image: { src: 'githubFinder.jpg' },
    title: 'GitHub Finder' ,
    content: [
      `An online App that consumes GitHub API to search GitHub profiles and present
      user's info and repositories.`,
      `Implemented using Angular 4.`,
      `Year of implementation : 2018`,
    ],
    links: {
      online: 'https://labrosb.github.io/xGitHub-Finder-Angular4/',
      github: 'https://github.com/labrosb/xGitHub-Finder-Angular4',
    },
  },
  {
    image: { src: 'prs.jpg' },
    title: 'Rock- Paper - Scissors' ,
    content: [
      `An implementation of the famous game Rock Paper Scissors.`,
      `The game has a single and two players mode. The single player mode is the
      user against the computer while in the two players mode the game starts when
      two players are connected to the platform.`,
      `Development wise the game consists of a Front-End and a Back-End side.
      The front-end is implemented in Angular 2+ and the Back-End is implemented
      in NodeJS / Express using Socket.IO`,
      `Year of implementation : 2018`,
    ],
    links: {
      online: 'https://labrosb.github.io/rock-paper-scissors',
      github: 'https://github.com/labrosb/rock-paper-scissors',
    },
  },
  {
    image: { src: 'brick_breaker_image.png' },
    title: 'Brick Breaker',
    content: [
      `An online version of the famous retro game, brick breaker.`,
      `The system is given in 4 different languages (English, Greek, Spanish and
      Swedish) and includes tha main game, an animated tutorial describing how to
      play the game and multimedia control giving the user the ability to chose
      (or mute) the playing track during the game as well as the environment image.`,
      `The game is implemented using JavaScript HTML5 and CSS.`,
      `Year of implementation : 2015`,
    ],
    links: {
      github: 'https://github.com/labrosb/brick-breaker',
      online: 'https://labrosb.github.io/brick-breaker',
      youtube: 'https://www.youtube.com/watch?v=aeLGR_vFmVg&list=PLNZ9chelbS2e-pVszen4oJP6xbCl_omOr&index=4',
    },
  },
  {
    image: { src: 'hospital_image.png' },
    title: 'Hospital Management',
    content: [
      `The current project is my bachelor thesis and the largest project that I developed
			individually. A fully working Hospital Management IS implemented with HTML, CSS3, AJAX
      (PHP, JavaScript-JQuery), MySQL. The system consists of 4 different sections. Guest,
      administrative staff, doctor and patients section.`,
      `  `,
      `Guest section`,
      `Guest section includes general information about the hospital, a communication's form
      and a registration form for patients.`,
      `Patient's section`,
      `Users that are registered with patient's rights can book an online appointment
      for examinations choosing the doctor of their choice. The available doctors
      in the selected time range that are responsibe for the selected examination type are shown.
      The patient can access doctor's information and resume before selecting. Alternatively the
      doctor can be chosen automatically by the system, choosing the doctor with the lightest
      workload in the particular day that the examination will take place. The user recieves
      details about the examination such as building, ward (automatically chosen) etc in
      his personal e-mail.`,
      `In addition patients are notified about new examination results, can access the
      diagnosis online and can also access and search through past examination results.`,
      `Finally the user can access and update his personal information and use a comunication
      form similar to the one in the guest section.`,
      `Doctor's section`,
      `Doctors are notified for examinations that they performed and need to enter a diagnosis.
      Clicking on the pending examinations, the doctor can enter his diagnosis. In addition
      the doctor has access to his work schedule, chosing between general schedule, daily schedule and
      work-shifts / call duties schedule.Finally similar to patients, doctors have access to the
      communications form and can update their personal information.`,
      `Manager's section`,
      `A manager can add search, access personal info and remove medical staff from the system.
      Also managers can access doctors and units schedule adding, updating and removing events
      such as examinations, work-shifts, call duties and days-off. Especially when a call duty
      is added, the system enters also a day-off, if an available date in the next 7 working
      days is found.`,
      `All possible restrictions have been considered. For instance events can't be added in
      invalid date/time (like a work-shift during the weekend
      or a call duty in normal working hours). Also some events cannot overwrite others while in
      other cases manager's confirmation is needed to complete the action. In each schedule change,
      doctors are notified by e-mail (in the case of adding or deleting examination also patient
      is informed).`,
      `Security Considerations`,
      `Nesesairy security layers are added into the system securing it againsed sql injections
      and session hijacking.`,
      `Year of implementation : 2012 (Revised in 2016)`,
    ],
    links: {
      github: 'https://github.com/labrosb/Hospital-Management-System',
      youtube: 'https://www.youtube.com/watch?v=IOWKLMbhSWk&list=PLNZ9chelbS2e-pVszen4oJP6xbCl_omOr',
      youtube2: 'https://www.youtube.com/watch?v=oj30GJbhkJY&list=PLNZ9chelbS2e-pVszen4oJP6xbCl_omOr&index=2',
    },
  },
  {
    image: { src: 'flying_dutchman_image.png' },
    title: 'Online Pub',
    content: [
      `The Online Pub, or else The Flying Dutchman is the user interface of an e-pub information system
      for online orders through a terminal placed in the pub. The interface interacts with the rest of
      the system through a given API to update the products database and notify for new orders.`,
      `The system is offered in 2 different languages (English & Swedish), 2 different themes for the
      user to chose and emphasis is given animations and interactions.`,
      `Year of implementation : 2015`,
    ],
    links: {
      github: 'https://github.com/labrosb/Flying-Dutchman',
      youtube: 'https://www.youtube.com/watch?v=Gmn_FM96hXU&list=PLNZ9chelbS2e-pVszen4oJP6xbCl_omOr&index=4',
    },
  },
]
