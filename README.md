<base target="_blank">

# Luminaire Project

This is created as a project for Helvar. The guidelines are to create this as a react project and try to have same functionalities and styles they have provided. It seems interesting and have some exciting points. You can read more while the project is on the go and completed.

**Link to project:** <a href="https://luminaire-kvshw.netlify.app/" target="_blank"> Luminaire </a>

## Problems Facing & Progress Roadmap

(15.07.2023)

- Am I going to create the functionality by myself, or will I use some UI libraries like Material UI or Chakra UI? Which library is best for this project
- Then I selected Material UI first to try, and currently having the problem of making the 0-1 mark wider because the 0-1 change is not noticeable as the project requirements.

(19.07.2023)

- In the past few days I tried to use few UI libraries and choose Material UI because it's under MIT.
- Then I had problem with how to get the same visible width as 5-10 to be equal to 0-1 then Finally I did Value mapping. 0 - 0/ 1-1/ then 2-5.
- It is working fine and I completed the slider changing according to the requirenments.

(26.07.2023)

- After having a few days vacation, I Completed the functionalities of the project and it's working the desired way.
- Values emiting was easier to implement into the project.
- I'm having a doubt about the UI design because the PDF design and Video design is totally different. I sent a email regrading the doubt I'm having to the Helvar team. Hope I'll get a reply. Otherwise I'm planning on doing both designs.
- I haven't done testing in cypress so I'm currently learning that to implement it.
- Also I'm building different components and adding them into the project so the App.js would be more cleaner.
- But had a few problems so I decided to do the component creation later.

(27.07.2023)

- Deployed the project to netlify.
- After the deployment I could see a few designs of elements are not showing properly specially the slider designs even though the functionalities are working fine. 😟

(01.08.2023)

- Netlify Error solved successfully after reading through the documentation of Material UI.
- Reason was I first used to design it inside App.css using classnames. But material UI uses a prop called "sx" to apply the designs. Its the best option for adding style overrides to a single instance of a component. Because the classnames that are needed for styling the slider can't be used as CSS selectors because they are unstable.
- Production build on Netlify is also working fine now 😃

(03.08.2023)

- Installed Cypress but having a few problems while doing the testing. Have to figure it out.
- Compoent creation is in progress.

(04.08.2023)

- Component creation is completed. Cypress also integrated. 1st testing done with App.js which ran successfully.

(09.08.2023)

- Referencing error was present and it was solved and edited a few name references.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React, Material UI

As the requirement I used React for creating this project. It was quite fun to create but I had to take a few breaks because of it's end of summer. First I made a plan about what needed to be done. It consisted of a few questions for myself first. Such as,

- Am I going to build this from scratch or am I going to use some UI library to make the work bit easier so I could have time to work on the functionalities.
- What UI libraries are under license of MIT, BSD, or similar(Which are many popular UI libraries)
- Then How the value changing of the project going to work because It need to change from 0,1,5,10 until 100. Then I found out value mapping would be the best option for that.
- Which new Components to create.
- How to do Testing, which is a problem for me 😥

## Optimizations

First I did the project inside of App.js for my referencing easiness. But after I got the whole idea about the project I broke the project down to small react components, so I could reuse them accordingly.

## Testing

Testing part is still ongoing...

## Lessons Learned:

I learned to use the react project with material UI and also learning cypress testing library. Even though the coding part was easier for me testing was harder. Because my knowledge about it is minimal. I hope to learn it throughout other projects I do in the future and integrate it to all the projects.
Finally <b>thank you Helvar!</b> for this opportunity to work on a real life project that would use in a Lighting system.
