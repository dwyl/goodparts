# goodparts

An ESLint Style that only allows JavaScript the Good Parts (*and "Better Parts"*) in your codebase.

The ***guiding principal*** is:

> "***perfection*** *is* ***attained*** *not when there is nothing more to add,  
> but when there is* ***nothing more to remove***" ~
[Antoine de Saint-Exupéry](http://en.wikiquote.org/wiki/Antoine_de_Saint_Exup%C3%A9ry#Quotes)

The 3 biggest advantages of using `goodparts` in your code:

1. [***Readability***](https://en.wikipedia.org/wiki/Readability) - fewer (JS) language features means
people reading your code can get to the heart of what it *does*
rather than waste time trying to understand
how its been written.
2. ***Inclusiveness*** -
3. [***Portability***](https://en.wikipedia.org/wiki/Software_portability) -
"Old" Browsers/Devices are a fact, even if it's "*only a small percentage*"
of people, we chose to
[*empathize*](http://www.merriam-webster.com/dictionary/empathize)
with them using *all* the latest (*ES6*) features is not (*yet*) an option.


Highlights from Douglas Crockford's "***Better Parts***" Talk:

> "_**The Good Parts** are what's left when you
**remove all the bad parts**_"

> [07:43](https://youtu.be/bo36MrBfTk4?t=7m43s) -
"_**This will save you some day**, if you comply with it..._"  
> [07:47](https://youtu.be/bo36MrBfTk4?t=7m47s) -
"_It's **not just a matter of opinion**, there is a **good reason for everything** that JSLint asks you to do_"  
> [07:50](https://youtu.be/bo36MrBfTk4?t=7m50s) -
"_I'm only **telling you not to use** the tools that are
**unnecessary and dangerous**_"
> [08:39](https://youtu.be/bo36MrBfTk4?t=8m39s) -
"_Eventually, **we want to be writing with one voice**,
we want all of the software we develop in a project to
look as thought it was **developed by the same person**,
and that person is **really smart**_"  
> [09:17](https://youtu.be/bo36MrBfTk4?t=9m17s) -
"_**Keystroking time** is **irrelevant**, so if you're doing
something stupid to shave keystrokes, that's counter-productive._"  
> [09:55](https://youtu.be/bo36MrBfTk4?t=9m55s) -
"_There's a **good reason those features were added
to the language**.
I can tell you reliably, **that is absolutely not true**._"  
> [10:26](https://youtu.be/bo36MrBfTk4?t=10m26s) -
"_Just because a '**foot gun**' is **in the language**,
**doesn't mean you want to shoot your foot off**_"

# [tl;dr](https://en.wikipedia.org/wiki/Wikipedia:Too_long;_didn%27t_read)

## *Why?*

There are *many* places you can go to learn JavaScript,
*unsurprisingly* they *all* claim to teach you the "right way",
and as a *beginner* it's *virtually impossible* to detect
which *is* the "*right*" path because there is a lot of
marketing hype which can easily be mistaken for "fact".

The only way a *beginner* can determine if the source of
learning is good on recommendation of their peers
or failing that "*gut feeling*", neither of which are
a *reliable* measure of quality.

However when you attempt to understand the "*Philosophy*" of

Most people will not look at http://javascript.crockford.com
and think: "*yes, this looks like the place to learn
JavaScript...*" and that's a *shame* because its "*plainness*"
(*lack of pictures or medium-style presentation*)

> "_**Programs must be written for people to read**, and only incidentally for machines to execute._" ~ Harold Abelson

> "_Any fool can write code that a computer can understand.
**Good programmers write code** that **humans** can
**understand**._" ~ Martin Fowler

## *What?*




### *What is ESLint?*

ESLint is a Linting tool started by

### ECMA Script 2015 (*AKA "ES6"*)?

When you see someone _trying_ to use ***all*** the
***latest features*** of **ECMAScript 2015**,
its clear they are just trying to *look* cool and have
not really stopped to think:
"_will this code **work everywhere**_?"

## *How?*

## (*Frequently Asked*) Questions?

**Q**: If the intention is to use *only* the Good Parts,
why not use **JSLint** and not bother with this tool?  
**A**: the simple answer is **JSLint** (*DC's tool*),
does not allow you to include a project-wide configuration
file, so you need to specify your environment e.g:
`/*jslint node: true */` in *every file*, which gets old fast.

## Videos

+ JavaScript: ***The Good Parts*** (Google Tech Talks):
https://youtu.be/hQVTIJBZook
+ ***The Better Parts*** - JSConfUY 2014:
https://youtu.be/bo36MrBfTk4


## Background Reading

+ Comparison of JS Linting Tools:
https://www.sitepoint.com/comparison-javascript-linting-tools/
+ The Sorry Legacy of Internet Explorer:
http://www.wired.com/2016/01/the-sorry-legacy-of-microsoft-internet-explorer/

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

Caniuse.com is a *fantastic* website. The UI is brilliant and for "*pub*"
(*i.e. non-scientific*) discussions about which HTML5 are available in
different browsers, we use it often! But caniuse.com uses the data from
[statcounter.com](http://gs.statcounter.com/about) which *good*
but has *several* flaws in data collection methodology:

1. Small Sample - StatCounter collects data for a  
"_network of more than **3 million websites**_"
if you know *anything* about the internet you will realize that this
is less than % of websites on the internet.
According to [netcraft.com](http://news.netcraft.com/) there are over
a 100 Million (*active*) websites online in May 2016
counts *all* page views which means
that *heavy* users

> "*StatCounter

If you want to dive a bit deeper into the methodology used by StatCounter see:
http://www.zdnet.com/article/net-market-share-vs-statcounter-whose-online-measurements-can-you-trust/
