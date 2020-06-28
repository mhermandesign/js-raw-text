# raw-excel-cleaner

https://mhermandesign.github.io/js-raw-text/

---

## Description

This app takes raw spreadsheet text, cleans it, and dumps it to the DOM. As of 12/12/2019, it only takes a set amount of colums, with each column being a specific value in the object.
Each "Person" may have lived in multiple cities so the program checks to see if a "line" of data is likely to be a city and, if so, adds it to the most recent "Person".

## Goal

The goal was to become familiar with the concept of data sanitization and build on my experience with arrays and objects. I needed a similar app at work so I decided it would be best to get an idea of how to proceed with the basics before committing to a more important, yet similar, project.

## Challenges

Hands down, the most difficult thing for me to wrap my head around was how to add each additional "City" to the previous person. Some of the approaches I'd tried were setting an ID of sorts to each person, and changing that ID everytime the array of People moved to the next item.

Finally, after what felt like a week of searching through forums and guides, I was able to get an answer on [StackOverflow](https://stackoverflow.com/questions/59202957/how-do-i-access-a-variable-created-outside-of-an-if-else-scope-update-it-in-th) where someone was kind enough to point out that I only needed to find the length of the {People} object that I was pushing each person to.

As far as sanitization of text goes, that process seemed to click fairly easily. I was able to work through array prototype methods like `find()`, `filter()`, and `map()`, which have been unbelievably useful in nearly every project I've worked on.

## Next Steps

Due to how much time I'd spent simply getting the basic funcionality to happen, I ran out of time to add things like styling and the ability to input multiple types of information. I aim to include both of those things, as well as expand into different types of output based on the kind of data being given.
