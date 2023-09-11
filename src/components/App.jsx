import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";



// steps to follow
// 1. Create a new component as Entry
// 2.Create props to replace hardcoded data 
// 3a. import emojipedia constant (for that you have to export it first)
// 3b.Map through the emojipedia array and render Entry components (using map() function). 


function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}  // Add key component for more efficient render
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {/* <Entry 
            emoji ="💪"
            name="Tense Biceps"
            description="“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
        />

              or 

        <Entry 

         emoji = {emojipedia[0].emoji}
         name = {emojipedia[0].name}
         description = {emojipedia[0].meaning}
          
         />

        <Entry /> */}

                  {/* or best way is to map as below */}

                  {/* Instead of above code we can use below */}

        {emojipedia.map(createEntry)}

      </dl>
    </div>
  );
}

export default App;
