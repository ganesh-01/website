// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false
};

const greeting = {
  username: "Aswath Shakthi",
  title: "Aswath Shakthi",
  subTitle:
    "Data Scientist & NLP Researcher • Exploring areas in Neuro Informatics, Neuromorphic & Cognitive Computing  • Working towards Chartered Data Scientist Affiliation",
  resumeLink:
    "https://www.icloud.com/iclouddrive/0LURFfVr03fTYjYHsbtw9juLA#Aswath's_CV",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ash-sha",
  linkedin: "https://www.linkedin.com/in/aswathshakthi/",
  gmail: "reachme@aswathshakthi.co.uk",
  //instagram: "https://www.instagram.com/aswathshakthi/",
  //facebook: "https://www.facebook.com/aswathshakthi/",
  stackoverflow: "https://stackoverflow.com/users/8435172/ash",
  //twitter:"https://twitter.com/aswathshakthi",
  keybase: "https://keybase.io/AshSha/chat",
  researchgate: "https://www.researchgate.net/profile/Aswath_Shakthi",
  medium: "https://medium.com/@aswathshakthi",
  kaggle: "https://www.kaggle.com/aswathshakthi",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: " ",
  skills: [
      emoji(
      " ○ Experienced in Data modeling, Machine learning tools, Research methodologies,  " +
      "Statistical techniques for producing solution to Problems.",
    ),
      emoji(
      " ○ Worked on Text Analysis Problems in NLP and Deep Learning",
    ),
      emoji(
      " ○ Acquainted with Medical, Financial and Retail Datasets",
    ),
      emoji(
      " ○ Familiar with K-NN, Decision Tree, Regression, Classification, Clustering, SVM, Naive bayes, Random Forest, PCA, Conformal Prediction, CNN, RNN, LSTM",
    ),
  ],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      url_img: require("./assets/images/python.png")
    },
    {
      skillName: "R",
      url_img: require("./assets/images/r.png")
    },
      {
      skillName: "SQL",
      url_img: require("./assets/images/sql.png")
    },
      {
      skillName: "PySpark",
      url_img: require("./assets/images/pyspark.svg")
    },
      {
      skillName: "NumPy",
      url_img: require("./assets/images/numpy.svg")
    },
      {
      skillName: "Pandas",
      url_img: require("./assets/images/pandas.png")
    },
      {
      skillName: "SciKit-Learn",
      url_img: require("./assets/images/scik.png")
    },
      {
      skillName: "Jupyter Notebook",
      url_img: require("./assets/images/jupyter.png")
    },
      {
      skillName: "MatplotLib",
      url_img: require("./assets/images/matplotlib.png")
    },
      {
      skillName: "TensorFlow",
      url_img: require("./assets/images/tensor.png")
    },
      {
      skillName: "Keras",
      url_img: require("./assets/images/keras.png")
    },
      {
      skillName: "Tableau",
      url_img: require("./assets/images/tableau.svg")
    },
      {
      skillName: "BigQuery",
      url_img: require("./assets/images/bigq.svg")
    },
      {
      skillName: "Hadoop",
      url_img: require("./assets/images/hadoop.svg")
    },
      {
      skillName: "Anaconda",
      url_img: require("./assets/images/conda.png")
    },
      {
      skillName: "Pycharm",
      url_img: require("./assets/images/pycharm.png")
    },
      {
      skillName: "MS Office",
      url_img: require("./assets/images/office.png")
    },


  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Royal Holloway, University of London",
      logo: require("./assets/images/rhul1.png"),
      subHeader: "MSc, Data Science and Analytics",
      duration: "September 2019 - December 2020",
      desc: "Pass with Merit",
      descBullets: [
        "Modules : Data Analysis, Machine Learning, Deep Learning, Natural Language Processing, Databases, large Scale Data Processing & Storage, Object Oriented Programming, Ethics in AI.",
        "Personal Advisor: Prof. Volodya Vovk",
        "Master's Thesis in Natural Language Processing: Measuring Sentence Similarity in Bio Medical Domain using Deep Learning Models",
        "Project Advisor: Prof. Yang Gao"]
    },
    {
      schoolName: "King's College, London",
      logo: require("./assets/images/kcl-logo.svg"),
      subHeader: "International Relations",
      duration: "June 2016 - June 2016",
      desc:
        "",
      descBullets: [" Have assessed the utility or validity of different theories of International Relations for thinking about specific issues in world politics",
        "Have developed team, organisational, communication, and other academic, practical and interpersonal skills, such as can undertaking complex and non-routine performance tasks requiring self-reflection",
        "Faculty : Dr. Diana Bozhilova"]
    },
    {
      schoolName: "SASTRA Deemed to be University, Tanjore",
      logo: require("./assets/images/sastra.png"),
      subHeader: "B.Tech in Information and Communication Technology",
      duration: "July 2013 - May 2017",
      desc:
        "",
      descBullets: ["Modules : Software Engineering, Cloud Computing, Data Mining, Cyber law, Information Hiding, Operating System and more",
        "Languages: C, C++, Java, R, Python",
        "Bachelor's Thesis in Machine Learning: Classification of Ratings and reviews of online opinion using Machine learning Algorithms.",
        "Advisor: Prof. Brindha.G.R.",]
    },
    {
      schoolName: "SRV Matriculation Hr Sec School, Trichy",
      logo: require("./assets/images/srv.png"),
      subHeader: "Higher Secondary Certificate",
      duration: "July 2011- May 2013",
      desc:
      "",

      descBullets: ["Maths, Physics, Chemistry, Computer Science "]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python&R", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "ML Tools",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analytics Intern",
      company: "Quantium Analytics",
      companylogo: require("./assets/images/quantium.png"),
      date: "Feb 2021 - Mar 2021",
      desc:
        " London, United Kingdom",
      descBullets: [
        "Conduct analysis on client's transaction dataset and identify customer purchasing behaviours to generate insights and provide commercial recommendations",
            "Extend analysis to help identify benchmark stores that allows to test the impact of the trial store layouts on customer sales.",
            "Use analytics and insights to prepare a report for the client, the Category Manager."
      ]
    },
    {
      role: "Data Analytics Intern",
      company: "ANZ Banking Group",
      companylogo: require("./assets/images/anz.jpeg"),
      date: "Dec 2020 - Feb 2021",
      desc:
        "London, United Kingdom",
      descBullets: [
        "Segment the dataset and draw unique insights, including visualisation of the transaction volume and assessing the effect of any outliers.",
            "Explore correlations between customer attributes, build a regression and a decision-tree prediction model based on the findings."
      ]
    },
    {
      role: "Data Analytics Consulting Intern",
      company: "KPMG UK",
      companylogo: require("./assets/images/kpmg.png"),
      date: "Aug 2020 - Oct 2020",
      desc:
        "London, United Kingdom",
      descBullets:[
        "Assessment of data quality and completeness in preparation for analysis.",
          "Targeting high value customers based on customer demographics and attributes.",
          "Using visualizations to present insights."]
    },
    {
      role: "Machine Learning Intern",
      company: "SASTRA University",
      companylogo: require("./assets/images/sastra.png"),
      date: "Aug 2017 - Oct 2017",
      desc:
        "Tanjore, India",
      descBullets:[
        "Researched on Machine Learning Algorithms like SVM, Naive Bayes and Max Entropy.",
            "Achieved Good Classification Accuracy of Microarray Data For Cancer cells than traditional methods.",
            "Developed multiple Feature Selection Techniques for improving Accuracy, resulting in Publications."
          ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "ash-sha", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some of the personal projects i have worked on",
  projects: [
    {
      image: require("./assets/images/p1.png"),
      projectName: "Natural Language Processing, Measuring Semantic Similarity in BioMedical data ",
      projectDesc: " Worked on Improving Semantic similarity between sentences in Medical Notes, using Baseline and Neural Models and accessed the performance of each model using Python & NLTK.\n" +
          "Fine tuned the models to achieve better performance than previously published methods. ",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/ash-sha/Semantic-Textual-Similarity-NLP"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/p2.jpg"),
      projectName: "Large Scale Data Processing on Enron Corporation Datasets ",
      projectDesc: "The Project involves, Basic Network Extraction, Creating a Weighted Network, Computing Basic Degree Statistics, Computing Degree Distributions on large email datasets of Hadoop Sequence Files",
      footerLink: [
        // {
        //  // name: "Visit Website",
        //   //url: "http://nextu.se/"
        // }
      ]
    },

  {
      image: require("./assets/images/p4.png"),
      projectName: "Enhanced Classification Through Improved Feature Selection Technique  ",
      projectDesc: "concentrated on improving the classification accuracy of cancer cells using gene microarray as features for colon cancer, lymphoma and leukemia datasets, using Naïve Bayes, along with mutual information as feature selection technique (Using R)\n ",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/ash-sha/Enhanced-NB-Classification"
        }
        //  you can add extra buttons here.
      ]
    },
{
      image: require("./assets/images/p3.png"),
      projectName: "Enhanced Text Classification through various Frequency Weighting",
      projectDesc: " Proposed the estimation of improving accuracy through implying various weighting strategies in SVM and Maximum Entropy algorithms using Yelp review dataset (Using R).",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/ash-sha/Frequency-Weighting"
        }
        //  you can add extra buttons here.
      ]
    },
{
      image: require("./assets/images/p5.jpg"),
      projectName: "Classification of Reviews using Text Mining ",
      projectDesc: " User preference based classification of reviews using NB, ME, SVM and decision tree algorithm after segregation of documents using filters and WordNet. Provide polarity of the review for the preferred product for the user.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/ash-sha/Text-Mining"
        }
        //  you can add extra buttons here.
      ]
    },
{
      image: require("./assets/images/p6.webp"),
      projectName: "Classification of Ratings and Reviews of Online opinions.",
      projectDesc: " proposed the approach of integrating both the text and star ratings of user feedbacks using Naive Bayes (NB) and Maximum Entropy (ME) classification algorithms and estimating the accuracy of polarity (Python).",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/ash-sha/Opinion-Analysis"
        }
        //  you can add extra buttons here.
      ]
    },
{
      image: require("./assets/images/images.png"),
      projectName: "Comparison of Performance of Classification Algorithms in Data Mining  ",
      projectDesc: " A comparative study to evaluate the performance of different classification and clustering algorithms on a Dataset of Census-income (Weka).",
      footerLink: [
        // {
        //   name: "GitHub",
        //   url: "https://github.com/ash-sha/Semantic-Textual-Similarity-NLP"
        // }
        //  you can add extra buttons here.
      ]
    },
],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Publications",
  subtitle:
    "",

  blogs: [
    {
      url:
        "http://www.iaeme.com/MasterAdmin/Journal_uploads/ijmet/VOLUME_8_ISSUE_10/IJMET_08_10_038.pdf",
      title: "Enhanced Classification Through Improved Feature Selection Technique",
      description:
        "Aswath Shakthi, Brindha.G.R., Bharathi.N. International Journal of Mechanical Engineering and Technology 8(10), 2017, pp. 342–351."
    },
    {
      url: "https://ieeexplore.ieee.org/document/8474746",
      title: "New Feature Selection Process to Enhance Naïve Bayes Classification",
      description:
        "Oruganti Tejaswini, K.P Aswath Shakthi, Khadavilli Ramya Geethika, G.R. Brindha. Second International Conference on Electronics, Communication and Aerospace Technology (ICECA),March 29-31, 2018, Coimbatore, pp.98-101."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Courses & Certifications "),
  subtitle:
    "Courses, Certifications that I have done !",

  achievementsCards: [
      {
      title: "IBM Data Science Professional Certificate",
      subtitle: "Completed 9 Courses on Data science and Machine Learning using SQL&Python. Learnt to Visualize Various data using seaborn and Matplotlib.",
      image: require("./assets/images/c11.png"),
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/d9a48c2ad453ed11eb7a94223c26d207"},
        {
          name: "Badge",
          url: "https://www.youracclaim.com/badges/efcaf58b-496d-4134-ac05-caf3b8a03a09/"
        }
      ]
    },

      {
      title: "IBM Advanced Data Science  ",
      subtitle: "Skills Learnt: Data Science, \n" +
          "Internet Of Things (IOT), \n" +
          "Deep Learning, \n" +
          "Apache Spark, \n" +
          "Statistics, \n" +
          "Machine Learning, \n" +
          "Long Short-Term Memory (ISTM).",
      image: require("./assets/images/c12.png"),
      footerLink: [
        // {name: "Certification", url: "https://coursera.org/share/4f26731f4d0c96a6aa5e2259bf887cb7"},
        // {
        //   name: "Badge",
        //   url: "https://www.youracclaim.com/badges/47332f7f-6509-464e-918d-104db80abe8b"
        // }
      ]
    },
      {
      title: "Natural Language Processing ",
      subtitle: "Skills Learnt: Chatterbot, \n" +
          "Tensorflow, \n" +
          "Deep Learning, \n" +
          "Natural Language Processing, NLTK.",
      image: require("./assets/images/c14.jpg"),
      footerLink: [
        // {name: "Certification", url: "https://coursera.org/share/4f26731f4d0c96a6aa5e2259bf887cb7"},
        // {
        //   name: "Badge",
        //   url: "https://www.youracclaim.com/badges/47332f7f-6509-464e-918d-104db80abe8b"
        // }
      ]
    },
      {
      title: "Deep Learning Specialization ",
      subtitle: "Skills Learnt: Tensorflow, \n" +
          "Convolutional Neural Network, \n" +
          "Artificial Neural Network, \n" +
          "Backpropagation, \n" +
          "Python Programming\n" +
          "Hyperparameter Optimization, \n" +
          "Inductive Transfer, \n" +
          "Multi-Task Learning, \n" +
          "Facial Recognition System.",
      image: require("./assets/images/deeplearning_ai_logo.png"),
      footerLink: [
        // {name: "Certification", url: "https://coursera.org/share/4f26731f4d0c96a6aa5e2259bf887cb7"},
        // {
        //   name: "Badge",
        //   url: "https://www.youracclaim.com/badges/47332f7f-6509-464e-918d-104db80abe8b"
        // }
      ]
    },
      {
      title: "DeepLearning.Ai TensorFlow Developer Professional Certificate",
      subtitle: "Skills Learnt: Computer Vision\n" +
          "CNN, \n" +
          "ML, \n" +
          "NLP, \n" +
          "Tensorflow, \n" +
          "Inductive Transfer, \n" +
          "Augmentation, \n" +
          "Dropouts, \n" +
          "Tokenization, \n" +
          "RNNs, \n" +
          "Time Series.",
      image: require("./assets/images/c16.png"),
      footerLink: [
        // {name: "Certification", url: "https://coursera.org/share/4f26731f4d0c96a6aa5e2259bf887cb7"},
        // {
        //   name: "Badge",
        //   url: "https://www.youracclaim.com/badges/47332f7f-6509-464e-918d-104db80abe8b"
        // }
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};


// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Some of my Favourite Podcasts",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://podcasts.apple.com/us/podcast/the-minimalists-podcast/id1069757084"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact"),
  subtitle:
    "",
  number1: "+44-07774914812",
  number2: "+91-75987-42404",

  email_address: "reachme@aswathshakthi.co.uk"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  blogSection,
  achievementSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
