import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
  text-wrap: balance;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after { 
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}



body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-size: 1.128rem;
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        line-height: 1.7;
        font-weight: 400;
    }
    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        cursor: pointer;
        &:hover,
        &:focus {
        outline: 0;
        } 
    }

    .btn,
    .btn:link,
    .btn:visited {
      font-size: 2rem;
      padding: 1.6rem 3.2rem;
      border-radius: 25px;
      text-decoration: none;
      display: inline-block;
      font-weight: 600;
      cursor: pointer;
      border: none;

      /* Put Transition on parent state */
      transition: all 0.3s;
    }
    

    .container {
       /* 1140px */
        max-width: 120rem;
        padding:  1rem 2rem;
        margin: 0 auto;
    }
    .grid {
        display: grid;
        column-gap: 6.4rem;
        row-gap: 9.6rem;
    }

   .grid-2 {
    /* grid-template-columns: repeat(1, 2.1fr 2fr); */
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }

    .grid:not(:last-child) {
        margin-bottom: 9.6rem;
    }

    .grid--2-cols {
        grid-template-columns: repeat(2, 1fr);
    }

    .grid--3-cols {
        grid-template-columns: repeat(3, 1fr);
    }

    .grid--4-cols {
        grid-template-columns: repeat(4, 1fr);
    }

.grid--center-v {
  align-items: center;
}


/**************************/
/* SECTION GALLERY */
/**************************/

.smol-transitions > * {
  --transition-property: transform;
  --transition-duration: 180ms;

  transition: var(--transition-property) var(--transition-duration) ease-in-out;
}

.zoom:hover > * {
  transform: scale(1.1);
}

.section-gallery {
  padding: 12.6rem 0;
  background-color: var(--clr-bg);
}

.gallery {
  & .gallery__slider {
    display: flex;
    list-style: none;
    height: 450px;
    overflow-x: scroll;
    padding: 30px 0;
    flex: 0 0 600px;
    margin: 0 auto;
  }

  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    // background: #fff3;
    -webkit-border-radius: 1ex;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-secondary);
    -webkit-border-radius: 1ex;
  }

  li {
    flex: 0 0 230px;
    margin: 0 50px 10px 0;
    transition: transform 0.3s, -webkit-transform 0.3s;
    ${"" /* transform: rotateZ(-3deg); */}
  }

  li:last-of-type {
    margin: 0;
  }

  .smol-transitions li img {
    box-shadow: 0 1.5rem 4rem rgba(rgb(51, 51, 51), 0.3);
    position: relative;
    border-radius: 6px;
    border: 2px solid rgba(255, 255, 255, 0.15);
  }

  li img:hover {
    transform: scale(1.1);
    box-shadow: 0 1rem 2rem rgba(rgba(255, 181, 111, 0.903), 0.4);
    border: 2.8px solid var(--color-tertiary);
    // transition: border-color 0.6s ease, box-shadow 0.6s ease;
  }
}

@media (prefers-reduced-motion: reduce) {
  .smol-transitions > * {
    --transition-duration: 0.01ms;
  }
}

/**************************/
/* BELOW 1344px (Smaller desktops) */
/**************************/    

    @media (max-width: 84em) {
        .container {
            column-gap: 5rem;
            row-gap: 7rem;
        }
    }
/**************************/
/* BELOW 1200px (Landscape Tablets) */
/**************************/

    @media (max-width: 75em) {
        .container {
            column-gap: 2rem;
            row-gap: 6.9rem;
        }
        
        .grid {
          column-gap: 4.8rem;
          row-gap: 6.4rem;
  }
    }

/**************************/
/* BELOW 944px (Tablets) */
/**************************/

    @media (max-width: 59em) {
        .container {
            row-gap: 6rem;
            column-gap: 1rem;
        }
        .grid--2-cols,
        .grid--3-cols,
        .grid--4-cols {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 34em) {
        .grid {
    row-gap: 4.8rem;
  }
        .container {
        padding: 0 1.5rem;
        row-gap: 5rem;
        }
        .grid--2-cols,
        .grid--3-cols,
        .grid--4-cols {
            grid-template-columns: 1fr;
        }

        .section-gallery {
  padding: 9.6rem 0;
  ${"" /* background-color: var(--clr-bg); */}
}



    }
    
`

export default GlobalStyle
