import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const card = [
    {
      id: 1,
      title: "Dust Busters",
      path: "cleaning",
      type: "Cleaning service",
      label: "React.js",
      color: "var(--dark)",
      backgroundColor: "var(--yellowish)",
      shadow: "var(--shadow-yellowish)",
      descriptions: {
        primary:
          "Embark on a journey with Dust Busters, an exceptional online platform meticulously hosted on Firebase. This website combines innovative front-end design with a robust back-end infrastructure, complemented by CRUD logic.",
        secondary:
          "Envision a React-based front-end that simplifies your experience, whether you're navigating bookings, securely logging in, or leaving insightful reviews. It's akin to having a highly efficient superhero dedicated to cleaning services, right at your fingertips.",
        tertiary:
          "Benefiting from Firebase's enchanting hosting capabilities, our site operates with unparalleled efficiency. Swift, secure, and poised for action, Dust Busters stands as your premier destination for a dynamic and reliable online experience. Streamlined cleanup, tailored to perfection!",
      },
      images: {
        browserImage: [
          {
            id: "1",
            src: "pageimages/dustbusters/1.png",
            info: "Welcome to the home of Dust Busters! Here you can find...",
            alt: "browser search",
          },
          {
            id: "2",
            src: "pageimages/dustbusters/2.png",
            info: "...our booking page..",
            alt: "browser pager",
          },
          {
            id: "3",
            src: "pageimages/dustbusters/dbBook.png",
            info: "...our booking form..",
            alt: "browser series",
          },
          {
            id: "4",
            src: "pageimages/dustbusters/dbLogin.png",
            info: "...and our login page!",
            alt: "browser series",
          },
          {
            id: "5",
            src: "pageimages/dustbusters/dbReviews.png",
            info: "Checkout our reviews!",
            alt: "browser series",
          },
        ],
      },
      repos: [
        {
          browser: "https://github.com/jonaelghid3y/DustBusters",
          icon: <FontAwesomeIcon icon={faGithub} />,
        },
        {
          website: "https://dustbusters-207c6.web.app/",
          icon: <FontAwesomeIcon icon={faArrowUpRightFromSquare} />,
        },
      ],
    },
    {
      id: 2,
      title: "Sole Soul",
      path: "webbshop",
      type: "Web store",
      label: "React.js",
      color: "var(--bisque)",
      backgroundColor: "var(--greenish)",
      shadow: "var(--shadow-bisuqe)",
      descriptions: {
        primary:
          "Greetings, shoe enthusiasts! Step into Sole Soul, where our dynamic webshop, built on the powerful CRUD (Create, Read, Update, Delete) API, transforms the admin and customer experience. This React-based app, fueled by Railway's magic, smoothly empowers our webshop, ensuring effortless product management. Welcome to a new era of streamlined and efficient online shopping!",
        secondary:
          "Adding new styles, updating our collection, retrieving your favorite picks, and removing items—all done seamlessly. It's like having a reliable assistant for our admins, boosting the project's scalability and making maintenance a walk in the park. At Sole Soul, we're all about making your shoe-shopping journey simple and stylish!",
      },
      images: {
        browserImage: [
          {
            id: "1",
            src: "pageimages/webbshop/products.png",
            info: "Have a look at our products!",
            alt: "browser search",
          },
          {
            id: "2",
            src: "pageimages/webbshop/description.png",
            info: "And feel free to read more about them!",
            alt: "browser pager",
          },
          {
            id: "3",
            src: "pageimages/webbshop/cart.png",
            info: "Did you find something you like? Great! Add it to your cart!",
            alt: "browser series",
          },
          {
            id: "4",
            src: "pageimages/webbshop/create.png",
            info: "Are you an admin? Cool! You can create new products here!",
            alt: "browser series",
          },
          {
            id: "5",
            src: "pageimages/webbshop/admin.png",
            info: "And you can also manage your products here!",
            alt: "browser pager",
          },
        ],
      },
      repos: [
        {
          browser: "https://github.com/tobionesies/gruppuppgift-webshop-let",
          icon: <FontAwesomeIcon icon={faGithub} />,
        },
      ],
    },
    {
      id: 3,
      title: "Class Chat",
      path: "chatapp",
      type: "Chat app",
      label: "React Native",
      color: "var(--neon-green)",
      backgroundColor: "var(--light-purple)",
      shadow: "var(--shadow-neon-green)",
      descriptions: {
        primary:
          "Class Chat serves as a dedicated platform for group communication, meticulously designed to facilitate smooth interaction within your class or group. Leveraging CRUD logic (Create, Read, Update, Delete), it efficiently manages users and messages, ensuring easy collaboration. Security is paramount, with the implementation of a secure access token mechanism, allowing only authorized individuals to join the conversation.",
        secondary:
          "Whether you're in a classroom setting or simply spending time with your friends, Class Chat provides a comprehensive solution for your communication needs. The platform empowers you to create a dynamic and engaging space for your group, giving you control over participants and content. Here's to hassle-free communication!",
      },
      images: {
        nativeImage: [
          {
            id: "1",
            src: "pageimages/chatapp/login.jpg",
            info: "Welcome to Class Chat! Login to get started!",
            alt: "browser search",
          },
          {
            id: "2",
            src: "pageimages/chatapp/registeruser.jpg",
            info: "Register a new user!",
            alt: "browser pager",
          },
          {
            id: "3",
            src: "pageimages/chatapp/chat.jpg",
            info: "Start chatting with your friends!",
            alt: "browser series",
          },
          {
            id: "4",
            src: "pageimages/chatapp/drawer.jpg",
            info: "And you can also manage your profile here!",
            alt: "browser series",
          },
          {
            id: "5",
            src: "pageimages/chatapp/profile.jpg",
            info: "Check out your profile!",
            alt: "browser series",
          },
          {
            id: "6",
            src: "pageimages/chatapp/photo.jpg",
            info: "Upload a profile picture!",
            alt: "browser series",
          },
          {
            id: "7",
            src: "pageimages/chatapp/profilephoto.jpg",
            info: "And you can also upload a profile picture!",
            alt: "browser series",
          },
          {
            id: "8",
            src: "pageimages/chatapp/chatphoto.jpg",
            info: "Cool!",
            alt: "browser series",
          },
        ],
      },
      repos: [
        {
          browser: "https://github.com/starleafer/ClassChat",
          icon: <FontAwesomeIcon icon={faGithub} />,
        },
      ],
    },
    {
      id: 4,
      title: "Movie Night",
      path: "movieapp",
      type: "Movie browser",
      label: "React.js / React Native",
      color: "var(--redish)",
      backgroundColor: "var(--darker)",
      shadow: "var(--shadow-redish)",
      descriptions: {
        primary:
          "Welcome to Movie Night, where we've got your movie cravings covered effortlessly with the OMDb API. Dive into a treasure trove of movie details, spanning from classic gems to the latest blockbusters. Get the info on titles, release dates, genres, casts, runtimes, ratings, and more.",
        secondary:
          "The magic doesn't stop there! With the power-packed combo of React and React Native, Movie Night ensures a seamless experience across different platforms. Whether you're chilling on the web version (courtesy of React) or enjoying the mobile app (crafted with React Native) on your smartphones and tablets, movie exploration has never been this effortless. Time to let the movie marathon begin!",
      },
      images: {
        browserImage: [
          {
            id: "1",
            src: "pageimages/movieapp/browserSearch.png",
            info: "Time for a movie night! Search for your favorite movie!",
            alt: "browser search",
          },
          {
            id: "2",
            src: "pageimages/movieapp/browserPager.png",
            info: "We have a wide range of movies to choose from!",
            alt: "browser pager",
          },
          {
            id: "3",
            src: "pageimages/movieapp/browserSerier.png",
            info: "Or is it a series you're looking for? We've got you covered!",
            alt: "browser series",
          },
        ],
        nativeImage: [
          {
            id: "1",
            src: "pageimages/movieapp/login.jpg",
            info: "Welcome to Movie Night! Login to get started!",
            alt: "browser search",
          },
          {
            id: "2",
            src: "pageimages/movieapp/movielist.jpg",
            info: "We have a wide range of movies to choose from!",
            alt: "browser pager",
          },
          {
            id: "3",
            src: "pageimages/movieapp/movieinfo.jpg",
            info: "Check out the details of your favorite movie!",
            alt: "browser series",
          },
          {
            id: "4",
            src: "pageimages/movieapp/search.jpg",
            info: "Search for your favorite movie!",
            alt: "browser series",
          },
          {
            id: "5",
            src: "pageimages/movieapp/drawer.jpg",
            info: "And you can also manage your profile here!",
            alt: "browser series",
          },
          {
            id: "6",
            src: "pageimages/movieapp/mypage.jpg",
            info: "Check out your profile!",
            alt: "browser series",
          },
        ],
      },
      repos: [
        {
          browser: "https://github.com/starleafer/The-movie-app",
          icon: <FontAwesomeIcon icon={faGithub} />,
        },
        {
          native: "https://github.com/starleafer/The-Movie-App-Native",
          icon: <FontAwesomeIcon icon={faGithub} />,
        },
      ],
    },
    {
      id: 5,
      title: "Daily Helper",
      path: "dashboard",
      type: "Dashboard",
      label: "Typescript, Next.js",
      color: "var(--silver-light)",
      backgroundColor: "var(--shadow-blueish)",
      shadow: "var(--shadow-blueish)",
      descriptions: {
        primary:
          "Daily Helper is a web application that helps you manage your daily tasks and schedule.",
        secondary: "It is built with React and Typescript.",
      },
      images: {
        browserImage: [
          {
            id: "1",          
            alt: "browser search",
          },
        ],
      },

      repos: [
        {
          browser: "https://github.com/starleafer/Daily-Helper",
          icon: <FontAwesomeIcon icon={faGithub} />,
        },
      ],
    },
  ];

  const main = {
    id: 1,
    title: "About me",
    path: "about",
    color: "white",
    backgroundColor: "var(--dark)",
    shadow: "var(--shadow-dark)",
    descriptions: {
      primary:
        "Hi there! I'm Emil Stjernlöf, a dedicated Frontend Developer based in Stockholm, Sweden. Currently pursuing my education at Jensen Yrkeshögskola in Kista, I am deeply passionate about creating seamless user experiences.",
      secondary:
        "Proficient in JavaScript and specialized in React, I thrive on the challenge of crafting dynamic and interactive web applications. With a keen eye for design and functionality, I believe in the power of technology to enhance the way we interact with the digital world.",
      tertiary:
        "My journey as a developer has exposed me to a diverse range of projects, allowing me to adapt swiftly to new technologies and frameworks. I am a strong advocate for collaboration and effective communication, valuing the insights and contributions of fellow developers and stakeholders alike.",
      quaternary:
        "Outside of coding, I find inspiration in exploring emerging technologies and trends in the ever-evolving field of frontend development. I am excited to continue pushing boundaries and creating compelling digital experiences that leave a lasting impression.",
    },
    images: {
      profilePic: "pageimages/aboutme/profilepic1.jpg",
    },
    repos: [
      {
        browser: "https://github.com/starleafer",
        icon: <FontAwesomeIcon icon={faGithub} />,
      },
      {
        linkedin: "https://www.linkedin.com/in/emil-stjernlof/",
        icon: <FontAwesomeIcon icon={faLinkedin} />,
      },
      {
        email: "mailto:emil.stjernlof@gmail.com",
        icon: <FontAwesomeIcon icon={faEnvelope} />,
      },
    ],
  };

  return (
    <CardContext.Provider value={{ card, main }}>
      {children}
    </CardContext.Provider>
  );
};

CardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCardContext = () => {
  return useContext(CardContext);
};
