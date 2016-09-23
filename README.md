# goodparts [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/good-parts/issues)

An ESLint Style that _only_ allows JavaScript the ***Good Parts*** (*and "Better Parts"*) in your code you can sleep at night.

## *Why?*

Because this is the _best_ way we know how to write consistent,
predictable and error free JavaScript code.

Our ***guiding principal*** is:

> "***perfection*** *is* ***attained*** *not when there is nothing more to add,  
> but when there is* ***nothing more to remove***" ~
[Antoine de Saint-Exupéry](http://en.wikiquote.org/wiki/Antoine_de_Saint_Exup%C3%A9ry#Quotes)

we subscribe to the "_code is for **humans** to read_" idea:

> "_**Programs must be written for people to read**, and only incidentally for machines to execute._" ~ Harold Abelson

> "_Any fool can write code that a computer can understand.
**Good programmers write code** that **humans** can
**understand**._" ~ Martin Fowler

Also, we agree with:

> "_**constraints** can actually **boost creativity**_". [Martin Villeneuve](https://www.ted.com/talks/martin_villeneuve_how_i_made_an_impossible_film)

The 3 biggest advantages of using `goodparts` in your code:

1. [***Readability***](https://en.wikipedia.org/wiki/Readability) - using _fewer_ ECMAScript (JS) language features means
people reading your code can get to the heart of what it *does*
rather than waste time trying to understand
how its been written.
2. [***Shoshin***](https://en.wikipedia.org/wiki/Shoshin) - using _fewer_ JS features
also means a _complete_ beginner has _less_ to learn before
they _understand_ your code. This is _essential_ in Open Source
if you want to make something that _anyone_ can use/modify/extend.
3. [***Portability***](https://en.wikipedia.org/wiki/Software_portability) -
"Old" Browsers/Devices are a _fact_, even if it's "*only a small percentage*"
of people, we _chose_ to
[*empathize*](http://www.merriam-webster.com/dictionary/empathize)
with them by writing code that ***Works Everywhere***<sup>TM</sup>.


## *What?*

A one-line install that will ensure your project's code works everywhere.
(_or your money back!_)


### *What is ESLint?*

ESLint is a Linting tool started by Nicholas C. Zakas,
it has become the _defacto_ linter in the JS community. see:
http://eslint.org/docs/about/


## *How?*
Simply install our configuration
```
$ npm i --save-dev goodparts
```
Then you can add the following script to your `package.json`:
```
{
  "lint": "node_modules/.bin/goodparts path/to/files/for/linting"
}
```

<br />


## (*Frequently Asked*) Questions?

**Q**: If the intention is to use *only* the Good Parts,
why not use **JSLint** and not bother with this tool?  
**A**: the simple answer is **JSLint** (*DC's tool*),
does not allow you to include a project-wide configuration
file, so you need to specify your environment e.g:
`/*jslint node: true */` in *every file*, which gets old fast.


# [tl;dr](https://en.wikipedia.org/wiki/Wikipedia:Too_long;_didn%27t_read)

## Why (_extended version_)

### Why Should Anyone _Listen_ to Douglas Crockford?

There are *many* places you can go to learn JavaScript,
*unsurprisingly* they *all* claim to teach you the "right way",
and as a *beginner* it's *virtually impossible* to detect
which *is* the "*right*" path because there is a lot of
marketing hype which can easily be mistaken for "fact".

The only way a *beginner* can determine if the source of
learning is any good is by listening to their their peers
or failing that, "*gut feeling*", neither of which are
a *reliable* measure of _quality_.

Crockford is the Master Yoda of JavaScript, he has truly mastered the craft.  
He is a member of "[**TC39**](http://tc39wiki.calculist.org/about/people/)"
(the ECMAScript Technical Committee) responsible for
setting the language _standard_ to be implemented by web browser makers;
to say that DC "*knows*" JavaScript inside-out is an *understatement*.
He ***invented*** JavaScript Object Notation
("[***JSON***](https://tools.ietf.org/html/rfc7159)")
data format (*the Standard for REST APIs*) and wrote the first JSON parser.
He _painstakingly_ scoured the entire ECMAScript specification
in order to compile his list of Good (*and Bad*) Parts,
a *subset* of the language that can be *trusted* and
*used reliably anywhere*.
He has been **lead engineer** at Yahoo and **Paypal** and run his own
web consulting company specialising in JS applications.

Most people will not look at http://javascript.crockford.com
and think: "*yes, this looks like the place to learn
JavaScript...*" and that's a *shame* because its "*plainness*"
(*lack of pictures or medium-style presentation*) does not do _justice_ to
the _insight_ he shares.


## Better Parts


### Selected Quotes Quotes

_Highlights_ from Douglas Crockford's "***Better Parts***" Talk:  https://youtu.be/bo36MrBfTk4  
(*first presented at JSConfUY 15th March 2014*)

+ "_Programs **must be perfect** or they are **not right**_." -
 [02:21](https://youtu.be/bo36MrBfTk4?t=2m21s)  

+ "_**The Good Parts** are what's left when you
**remove all the bad parts**_" -
[02:30](https://youtu.be/bo36MrBfTk4?t=2m30s)  

+ "_Criteria for deciding if something is a good part or not is this:
if a feature is **sometimes useful and sometimes dangerous**,
and **if there is a better option, always use the better option**_." -
[02:41](https://youtu.be/bo36MrBfTk4?t=3m41s)

+ "_this is maybe the **most important** idea tonight:_  
_**We are not paid to use every feature of the language**
we are paid to **write programs that work well** and are
**free of error**_ -
[03:10](https://youtu.be/bo36MrBfTk4?t=3m10s)

+ "_People don't like **programs with errors** in them
and they wish we would **stop doing that**_."
[03:21](https://youtu.be/bo36MrBfTk4?t=3m21s)

+ "_Sometimes we work against our own interest,
in **trying to demonstrate mastery over the language**,
but we are **actually making things worse not better**_" -
[03:29](https://youtu.be/bo36MrBfTk4?t=3m29s)

<!--- commenting out as not strictly relevant to JS
+ "_Everybody should learn as many languages as they can,
because every language will teach you things you can apply
in other languages_"
[03:46](https://youtu.be/bo36MrBfTk4?t=3m46s)
-->

+ "_**This will save you some day**, if you comply with it..._" -
[07:47](https://youtu.be/bo36MrBfTk4?t=7m47s)

+ "_It's **not just a matter of opinion**, there is a **good reason for everything** that JSLint asks you to do_"

+ "_I'm only **telling you not to use** the tools that are
**unnecessary and dangerous**_" -
[07:50](https://youtu.be/bo36MrBfTk4?t=7m50s)

+ "_Eventually, **we want to be writing with one voice**,
we want all of the software we develop in a project to
look as though it was **developed by the same person**,
and that person is **really smart**_" - k
[08:39](https://youtu.be/bo36MrBfTk4?t=8m39s)

+ "_**Keystroking time** is **irrelevant**, so if you're doing
something stupid to shave keystrokes, that's counter-productive._" -
[09:17](https://youtu.be/bo36MrBfTk4?t=9m17s)

+ "_There's a **good reason those features were added to the language**.
I can tell you reliably, **that is absolutely not true**._" -
[09:55](https://youtu.be/bo36MrBfTk4?t=9m55s)

+ "_Just because a '**foot gun**' is **in the language**,
**doesn't mean you want to shoot your foot off**_" -
[10:26](https://youtu.be/bo36MrBfTk4?t=10m26s)


## Videos

+ JavaScript: ***The Good Parts*** (Google Tech Talks):
https://youtu.be/hQVTIJBZook
+ ***The Better Parts*** - JSConfUY 2014:
https://youtu.be/bo36MrBfTk4
+ Douglas Crockford ***Complete Playlist***:
https://www.youtube.com/playlist?list=PLEzQf147-uEpvTa1bHDNlxUL2klHUMHJu

## Background Reading

+ Comparison of JS Linting Tools:
https://www.sitepoint.com/comparison-javascript-linting-tools/
+ The Sorry Legacy of Internet Explorer:
http://www.wired.com/2016/01/the-sorry-legacy-of-microsoft-internet-explorer/
+ Readability:
https://www.nngroup.com/articles/legibility-readability-comprehension/

<br />


### _Should_ We Use ECMAScript 2015 (*AKA "ES6"*)?

When you see someone _trying_ to use ***all*** the
***latest features*** of **ECMAScript 2015**,
its clear they are just trying to *look* smart to their piers
and have not stopped to think/ask:
+ "_will this code **work everywhere**_?"
+ "_did the **users** ask me to use this (new) language feature_?
(_or is there an existing way of doing this reliably...?_)"
+ "_if I'm just going to transpile this through babel or add a pollyfill
(for cross-browser compatibility) which means users have to load more bytes of code
in their browser, what is true the advantage_...?"


### Why does this matter / should I care?

If you are lucky enough to be building an *internal* web app
(*e.g: an intranet or "internal tools") and you "*know*" that
everyone in the company is using Chrome that's *awesome*,
thank your lucky stars and enjoy using all the latest & greatest features!

If, like us, you live in the "*real world*" and build applications/websites
that need to be *accessible* by and work *consistently* on any device/browser,
then using only the *goodparts* is a good idea.

> We are ***not suggesting*** that you (*your team/company*) *should*
> (*explicitly*) ***support IE8*** running on Windows XP! (*heavens no!*)
> Simply that there is an *easy* way to ensure that your code will work
*everywhere* so you don't have to *think* about it.


### But caniuse.com says ...

Caniuse.com is a *fantastic* website. The UI is brilliant and for "*informal*"
(*i.e. non-scientific*) discussions about which HTML5 features are available
in a browser, we use it often! But caniuse.com bases it's pretty
graphs on the data from
[statcounter.com](http://gs.statcounter.com/about) which is *good*
but has *several* ***flaws in data collection methodology***:

1. ***Small sample size*** - StatCounter collects data for a  
"_network of more than **3 million websites**"
if you know *anything* about the internet you will realize that this
is a drop in the ocean.
3M sites is less than 0.3% of websites on the internet<sup>1</sup>.

2. ***Over counting*** - StatCounter counts *all* page views made by
a given user (agent) which means that *heavy* users have higher
representation in the sample.
(_If the website does not **work** on a given browser/device
  the person will **obviously** not get past the first page!_)
By contrast NetMarketShare only counts the *first* pageview
which means it gives an _**equal weighting to each visitor**_.

<sup>1</sup>According to [netcraft.com](http://news.netcraft.com/)
there are over a ***billion*** (*active*) websites online in May 2016.
It is *unclear* which websites StatCounter is sourcing its data from,
please don't take their usage tables as "*gospel*" because they are flawed.


## Browser Stats *Facts*

Most of us live in a *technology bubble*, we take it for granted
that we always have Wifi or 4G and assume that because many of our
friends/colleagues are using MacBook Pros or iPhone 6s that
*everyone* is in the same situation.


At the time of writing **Internet Explorer _8_** *still* has a **5.95%**
(*global*) Market Share (_according to
[netmarketshare.com](https://www.netmarketshare.com/browser-market-share.aspx?qprid=2&qpcustomd=0)
**April 2016**_)

![browser-facts-pie-chart](https://cloud.githubusercontent.com/assets/194400/15629665/d985526c-2516-11e6-8169-3918a38865ab.png)

Even if we *think* that "*everyone*" has switched to Chrome,
the facts (*stats*) are clearly not supporting this hypothesis!

![Operating System Market Share](https://cloud.githubusercontent.com/assets/194400/15629790/3a60db12-251a-11e6-8c57-a622a56fa403.png)

> **58%** of people are still using an Operating System that is
***no longer supported by Microsoft*** (**Windows 7 & XP** market share = 58.45%) ...
> Microsoft ended "*mainstream*" support for Windows 7 on
[Jan 13 2015](https://support.microsoft.com/en-us/lifecycle/search/default.aspx?alpha=windows%207)
so even if they *want* to force everyone to upgrade to "Edge",
they cannot; which means we are *relying* on non-technical people to
*manually* upgrade their browser... If you have ever been in Tech support
and had a person ask "*what is a browser*?" you will know that
*might* take a while...  


### Wikipedia as a *Representative* Sample of all Web Traffic

If you want a *representative* sample of all internet users,
you cannot do better than Wikipedia which has content for almost *everyone*
and does its data-collection server-side (*so users without JavaScript
  or those who have JS disabled are still counted*)

| Browser / Version   | Vistors |
|:--------------------|--------:|
| Internet Explorer 7 | 1.65%   |
| Internet Explorer 8 | 1.31%   |
| Internet Explorer 9 | 1.28%   |
| Total Legacy IE     | 4.24%   |


> See:
> https://stats.wikimedia.org/wikimedia/squids/SquidReportClients.htm  
> https://analytics.wikimedia.org/dashboards/browsers/#all-sites-by-browser


If you want to dive a bit deeper into the methodology used by StatCounter see:
http://www.zdnet.com/article/net-market-share-vs-statcounter-whose-online-measurements-can-you-trust/
