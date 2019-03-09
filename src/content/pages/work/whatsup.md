---
title: what's up in your hood?
slug: /work/whats-up-in-your-neighborhood
menu: false
type: work
template: project
image: ../../images/whatsup.png
github: https://github.com/axelekwall/kth/tree/master/DH2321-Infovis/proj-2
url: https://kth.axelekwall.se/DH2321-Infovis/proj-2/
---
I wanted to find out more aboout how people in different contries feel about their neigbours. What do they care about and is there any correlations to be found in the data?

My first step was to go to the "World Values Survey" website to see if I could find the data I needed for my question. I realized that there was a lot of intreresting data but the tools on the World Values Surveys website wasn't powerful enough to give a good picture.

![](../../images/whatsup.png)

To get a better picture of how peole all over the world feel about their neighbors, I created a visualization in D3.js and Vue.js. The big problem with the data visualizatin on the World Valeus Survey website is how hard it is to draw conclusions over time and to compare the values of many countries at the same time.

My solution was to create both a scatter plot and a parallel coordinates chart, and let the user explore the data. To discover development over time, there is the optoin to choose different time periods and se hw the data changes.

![](../../images/whatsup2.png)