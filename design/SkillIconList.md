# Documentation for Building the SkillIconList Component

This documentation describes the process of building the `SkillIconList` component, which displays a grid of skill icons that animate into view using Framer Motion. The component was designed to be a visually appealing way to showcase skills, with smooth animations as each set of icons enters the viewport.

## Overview

The `SkillIconList` component:

- Uses **CSS Grid** to create a 4x4 boxed layout of skill icons.
- Utilizes **Framer Motion** for animating the component when it comes into view.
- Dynamically assigns skill names to corresponding icons using a mapping function.
- Uses **Styled Components** for managing styles in a clean and modular way.

### Step-by-Step Breakdown

1. **Setup and Import Statements**
   The component begins by importing the required dependencies:
   - React for building the component.
   - Styled Components for styling.
   - `useInView` and `motion` from Framer Motion for animations.

   ```jsx
   
   import React, { useRef, useEffect } from 'react';
   import styled from 'styled-components';
   import { useInView } from 'framer-motion';
   import { motion } from 'framer-motion';
   ```

2. **Define the `SkillIconList` Component**
   The main component is created as a functional component, defining the array of skills to be displayed.
   - `useRef` is used to create a reference to the container.
   - `useInView` is used to detect when the component is in view.

   ```jsx
   const SkillIconList = () => {
     const ref = useRef(null);
     const isInView = useInView(ref, { once: true });
   
     useEffect(() => {
       console.log('Element is in view: ', isInView);
     }, [isInView]);

     const skills = [
       { skill: 'HTML', color: 'rgb(236, 201, 137)' },
       { skill: 'CSS', color: 'rgb(236, 201, 137)' },
       // ... (other skills)
     ];
   ```

3. **Grid Structure with CSS Grid**
   The `IconGrid` styled component creates a fixed 4x4 grid layout using CSS Grid properties.
   - `grid-template-columns` and `grid-template-rows` both use `repeat(4, 1fr)` to ensure a perfect 4x4 grid layout.
   - `gap` is used to add spacing between the items.

   ```jsx
   const IconGrid = styled.div`
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     grid-template-rows: repeat(4, 1fr);
     gap: 1rem;
     width: fit-content;
     margin: 0 auto;
   `;
   ```

4. **Skill Icons with Framer Motion Animation**
   The icons are wrapped in a `motion.div` element that uses Framer Motion's `initial`, `animate`, and `transition` props to handle animation.
   - `initial` sets the starting opacity to 0.
   - `animate` changes the opacity to 1 when `isInView` is true.
   - `transition` controls the animation duration.

   ```jsx
   return (
     <motion.div
       ref={ref}
       initial={{ opacity: 0 }}
       animate={{ opacity: isInView ? 1 : 0 }}
       transition={{ duration: 0.8 }}
     >
       <IconGrid>
         {skills.slice(0, 16).map((skill, index) => (
           <SkillIcon key={index} color={skill.color}>
             <img
               src={`https://skillicons.dev/icons?i=${getSkillIconName(skill.skill)}&theme=light`}
               alt={skill.skill}
             />
           </SkillIcon>
         ))}
       </IconGrid>
     </motion.div>
   );
   ```

5. **Icon Styles with Styled Components**
   The individual skill icons are styled using a `SkillIcon` styled component.
   - Flexbox is used to center the icons within their container.
   - Background color and padding are applied to give a distinctive look to each icon.

   ```jsx
   const SkillIcon = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     background-color: ${(props) => props.color};
     padding: 1rem;
     border-radius: 0.5rem;

     img {
       width: 3rem;
       height: 3rem;
     }
   `;
   ```

6. **Mapping Skill Names to Icons**
   A helper function, `getSkillIconName`, is used to map each skill to the appropriate icon identifier for the `skillicons.dev` service.
   - The `skillMappings` object provides a mapping between each skill name and its corresponding icon identifier.

   ```jsx
   const getSkillIconName = (skillName) => {
     const skillMappings = {
       HTML: 'html',
       CSS: 'css',
       SCSS: 'sass',
       // ... (other mappings)
     };

     return skillMappings[skillName] || skillName.toLowerCase().replace(/\s+/g, '');
   };
   ```

## Summary

The `SkillIconList` component combines several modern front-end technologies to provide a smooth user experience:

- **CSS Grid** is used to create a boxed layout of skill icons, ensuring that the grid remains uniform and aesthetically pleasing.
- **Framer Motion**'s `useInView` and `motion` components are utilized to add an animated reveal effect when the icons come into view.
- **Styled Components** help manage styles in a modular, reusable way, keeping the styling clean and scoped to the component.

By following these steps, you can create a responsive, animated skill icon grid that provides an engaging visual experience for users. The use of Framer Motion ensures a dynamic appearance, while CSS Grid and Styled Components help maintain a clean layout and style.

---

# Part Two

# Skill Icon Animation Documentation

This document provides details about the implementation of an animated list of skill icons using React, Styled Components, and Framer Motion.

## Overview

The `SkillIconList` component is designed to display a list of skills with an elegant animation effect. Each skill icon loads in sequentially, creating a visually pleasing staggered animation. This is accomplished using Framer Motion's `staggerChildren` feature and styled with `styled-components`.

## Technologies Used

- **React**: To create the component.
- **Styled Components**: For styling the skill icons and grid layout.
- **Framer Motion**: For animation, including fade-in effects and staggered loading of the skill icons.

## Implementation Details

### Component Structure

The `SkillIconList` component is the main container that handles rendering the skill icons and applying the animation.

1. **Import Statements**: The required dependencies are imported, including `React`, `styled-components`, and `framer-motion`.

   ```javascript
   import React, { useRef, useEffect } from 'react';
   import styled from 'styled-components';
   import { useInView } from 'framer-motion';
   import { motion } from 'framer-motion';
   ```

2. **InView Hook**: The component uses the `useInView` hook from `framer-motion` to trigger animations when the icons come into view.

   ```javascript
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   ```

3. **Skills List**: The skills to be displayed are defined as an array of objects, each containing a `skill` name and a `color` value.

   ```javascript
   const skills = [
     { skill: 'HTML', color: 'rgb(236, 201, 137)' },
     ...
   ];
   ```

### Animation Logic

- **Parent Animation**: The parent `motion.div` uses a staggered transition to animate each child icon sequentially.

  ```javascript
  <IconGrid
    as={motion.div}
    initial="hidden"
    animate={isInView ? 'visible' : 'hidden'}
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    }}
  >
  ```

- **Child Animation**: Each `SkillIcon` is animated using `motion.div` to provide fade-in and upward movement effects when they appear.

  ```javascript
  <SkillIcon
    as={motion.div}
    key={index}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
  ```

### Styled Components

The icons are styled using `styled-components` to create a responsive and visually appealing grid layout.

- **IconGrid**: Defines the grid layout for the icons.

  ```javascript
  const IconGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 0.2rem;
    width: fit-content;
    margin: 0 auto;
  `;
  ```

- **SkillIcon**: Styles each skill icon container.

  ```javascript
  const SkillIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.color};
    padding: 0.3rem;
    border-radius: 0.5rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  `;
  ```

## Usage

To use the `SkillIconList` component in your project:

1. **Import the Component**:

   ```javascript
   import SkillIconList from './SkillIconList';
   ```

2. **Render the Component**:

   ```javascript
   <SkillIconList />
   ```

The component will automatically trigger the staggered animation effect when it comes into view.

## Customization

- **Skill List**: You can easily modify the `skills` array to include more skills or change the colors.
- **Animation Timing**: Adjust the `staggerChildren` value and `transition` properties to change the speed and effect of the animation.

## Conclusion

The `SkillIconList` component provides a visually appealing way to showcase skills with a smooth loading animation. By leveraging Framer Motion and Styled Components, it ensures both high performance and ease of customization.
